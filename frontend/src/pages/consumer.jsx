<<<<<<< HEAD
import { useState, useCallback } from 'react';
import { QrReader } from 'react-qr-reader'; 
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, CheckCircle2, XCircle } from 'lucide-react';

const checkDatabase = async (data) => {
  await new Promise(resolve => setTimeout(resolve, 1000)); 
  if (data === 'valid_qr_code') {
    return { exists: true, details: 'Product: Widget X, Quantity: 100' };
=======
import { useState } from 'react'
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Navbar5 from '@/components/Navbar5'
export default function Consumer() {
  const [progress, setProgress] = useState(0)
  const [level, setLevel] = useState(0)
  const [couponCode, setCouponCode] = useState('')

  const handleCouponSubmit = () => {
    
    console.log('Coupon submitted:', couponCode)
    
    setProgress(prev => Math.min(prev + 25, 100))
    if (progress + 10 >= 100) {
      setLevel(prev => prev + 1)
      setProgress(0)
    }
>>>>>>> 1c3127cb49cac9a3a376aa819127b5175228b518
  }
  return { exists: false };
};

export default function QRCodeScanner() {
  const [scanning, setScanning] = useState(false);
  const [scannedData, setScannedData] = useState(null);
  const [checkResult, setCheckResult] = useState(null);
  const [isChecking, setIsChecking] = useState(false);

  const handleScan = useCallback((result) => {
    if (result) {
      setScannedData(result.text);
      setScanning(false); // Stop scanning when data is received
    }
  }, []);

  const handleError = useCallback((err) => {
    console.error('QR scan error:', err);
  }, []);

  const handleStartScanning = () => {
    setScannedData(null);
    setCheckResult(null);
    setScanning(true);
  };

  const checkScannedData = async () => {
    if (scannedData) {
      setIsChecking(true);
      const result = await checkDatabase(scannedData);
      setCheckResult(result);
      setIsChecking(false);
    }
  };

<<<<<<< HEAD
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Claim Your Reward!</CardTitle>
        <CardDescription>Find your rewarding QR Code inside the pack</CardDescription>
      </CardHeader>
      <CardContent>
        {scanning ? (
          <div className="aspect-square">
            <QrReader
              onResult={(result, error) => {
                if (result?.text) {
                  handleScan(result);
                }
                if (error) {
                  handleError(error);
                }
              }}
              constraints={{ facingMode: 'environment' }}
              className="w-full"
            />
          </div>
        ) : (
          <Button onClick={handleStartScanning} className="w-full">
            Start Scanning
          </Button>
        )}
        {scannedData && (
          <Alert className="mt-4">
            <AlertTitle>Scanned Data</AlertTitle>
            <AlertDescription>{scannedData}</AlertDescription>
          </Alert>
        )}
      </CardContent>
      <CardFooter className="flex flex-col items-stretch gap-4">
        {scannedData && (
          <Button onClick={checkScannedData} disabled={isChecking}>
            {isChecking ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Checking...
              </>
            ) : (
              'Check Database'
            )}
          </Button>
        )}
        {checkResult && (
          <Alert variant={checkResult.exists ? "default" : "destructive"}>
            {checkResult.exists ? (
              <>
                <CheckCircle2 className="h-4 w-4" />
                <AlertTitle>Found in Database</AlertTitle>
                <AlertDescription>{checkResult.details}</AlertDescription>
              </>
            ) : (
              <>
                <XCircle className="h-4 w-4" />
                <AlertTitle>Not Found</AlertTitle>
                <AlertDescription>The scanned QR code was not found in our database.</AlertDescription>
              </>
            )}
          </Alert>
        )}
      </CardFooter>
    </Card>
  );
}
=======
  return (<> 
  <Navbar5/>
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Level Progress</h2>
      <div className="mb-4">
        <Progress value={progress} className="w-full" />
      </div>
      <p className="text-center mb-6 text-lg font-semibold">
        Current Level: {level}
      </p>
      <div className="space-y-4">
        <Input
          type="text"
          placeholder="Enter coupon code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          className="w-full"
        />
        <Button 
          onClick={handleCouponSubmit} 
          className="w-full"
        >
          Claim Coupon
        </Button>
      </div>
    </div>
    </>
  )
}
>>>>>>> 1c3127cb49cac9a3a376aa819127b5175228b518
