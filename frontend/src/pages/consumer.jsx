import { useState, useCallback } from 'react';
import { QrReader } from 'react-qr-reader'; 
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, CheckCircle2, XCircle } from 'lucide-react';
import Navbar4 from '@/components/Navbar4';


const validQRCodes = ['valid_qr_code', '1784485', 'reward2024', 'specialcode'];

const checkDatabase = async (data) => {
  
  await new Promise(resolve => setTimeout(resolve, 1000)); 

  
  if (validQRCodes.includes(data)) {
    return { exists: true, details: 'Successfully claimed!' };
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
      setScanning(false); 
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

  return (
    <>
      <Navbar4 />
      <Card className="w-full max-w-md mx-auto mt-9">
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
                  Processing...
                </>
              ) : (
                'Apply Coupon'
              )}
            </Button>
          )}
          {checkResult && (
            <Alert variant={checkResult.exists ? "default" : "destructive"}>
              {checkResult.exists ? (
                <>
                <CheckCircle2 className="h-4 w-4 green-500" />
                <AlertTitle className="text-green-500">{checkResult.details}</AlertTitle>
              </>
              
              ) : (
                <>
                  <XCircle className="h-4 w-4" />
                  <AlertTitle>Invalid Coupon</AlertTitle>
                  
                </>
              )}
            </Alert>
          )}
        </CardFooter>
      </Card>
    </>
  );
}
