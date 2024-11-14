import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Camera, Upload } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function ScanProduct() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [cameraReady, setCameraReady] = useState(false); 
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const { toast } = useToast();
  const navigate=useNavigate()
  
  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
      setCameraReady(true); 
    } catch (error) {
      console.error('Error accessing camera:', error);
      toast({
        title: "Camera Access Failed",
        description: "Please allow camera access to take a photo.",
        variant: "destructive",
      });
    }
  };

  
  const capturePhoto = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = canvas.toDataURL('image/png');
    setPreview(imageData);

    video.srcObject.getTracks().forEach(track => track.stop());
    setCameraReady(false); 
  };

  
  const handleUpload = async () => {
    if (!preview) {
      toast({
        title: "No photo or file selected",
        description: "Please take a photo or select a file before uploading.",
        variant: "destructive",
      });
      return;
    }
  
    setIsUploading(true);
    const formData = new FormData();
  
    if (file) {
      formData.append('image', file); 
    } else {
      const response = await fetch(preview);
      const blob = await response.blob();
      formData.append('image', blob, 'image.jpg'); 
    }
  
    try {
      const response = await fetch('http://localhost:8000/api/v1/reports/scanNewProduct', {
        method: 'POST',
        body: formData,
        credentials: 'include',
      });
  
      if (!response.ok) {
        throw new Error('Upload failed');
      }
  
      const data = await response.json();
      toast({
        title: "Upload Successful",
        description: "Your file has been uploaded successfully.",
      });
      console.log('File uploaded successfully:', data);
      navigate("/reports",data)
    } catch (error) {
      toast({
        title: "Upload Failed",
        description: "There was an error uploading your file. Please try again.",
        variant: "destructive",
      });
      console.error('Error uploading file:', error);
    } finally {
      setIsUploading(false);
    }
  };
  

  useEffect(() => {
    if (cameraReady) {
    }
  }, [cameraReady]);

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Scan Product</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="product-image">Product Image</Label>
          <Input
            id="product-image"
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            disabled={isUploading}
          />
          <Button onClick={startCamera} disabled={isUploading} className="mt-2">
            <Camera className="mr-2 h-4 w-4" />
            Open Camera
          </Button>

          
          {cameraReady && (
            <Button onClick={capturePhoto} disabled={isUploading} className="mt-2">
              Capture Photo
            </Button>
          )}
        </div>

        <div className="relative w-full h-48 bg-gray-200 rounded-md overflow-hidden">
          {preview ? (
            <img src={preview} alt="Product preview" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          ) : (
            <video ref={videoRef} className="w-full h-full" />
          )}
        </div>
        <canvas ref={canvasRef} style={{ display: 'none' }} />
      </CardContent>
      <CardFooter>
        <Button onClick={handleUpload} disabled={!preview || isUploading} className="w-full">
          {isUploading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Uploading...
            </>
          ) : (
            <>
              <Upload className="mr-2 h-4 w-4" />
              Upload File
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
