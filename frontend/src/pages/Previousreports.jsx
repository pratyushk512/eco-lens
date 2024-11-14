import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";

const PreviousScansPage = () => {
  const [previousScans, setPreviousScans] = useState([]);

  //Database sefetch karo previous scans product karne ke baad
  useEffect(() => {
    const fetchScans = async () => {
      try {
        const response = await fetch('/ENDPOINT DAALO API KA'); 
        const data = await response.json();
        setPreviousScans(data);
      } catch (error) {
        console.error("Error fetching previous scans:", error);
      }
    };

    fetchScans();
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Previous Scanned Products</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {previousScans.map((scan) => (
          <Card key={scan.id}>
            <CardHeader>
              <CardTitle>{scan.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={scan.image} alt={`${scan.name} image`} className="w-full h-40 object-cover mb-4" />
              <p>Date: {scan.date}</p>
              <p>Points: {scan.points}</p>
              <p>Recommendations: {scan.recommendations}</p>
              <p>Sustainability Score: {scan.sustainabilityScore}</p>
              <p>Material Impact: {scan.materialImpact}</p>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">View Report</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>{scan.name} Report</DialogTitle>
                    <DialogDescription>Scan date: {scan.date}</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <img src={scan.image} alt={`${scan.name} report image`} className="w-full h-40 object-cover" />
                    <p>{scan.report}</p>
                    <p className="font-semibold">Points earned: {scan.points}</p>
                    <p>Recommendations: {scan.recommendations}</p>
                    <p>Sustainability Score: {scan.sustainabilityScore}</p>
                    <p>Material Impact: {scan.materialImpact}</p>
                  </div>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PreviousScansPage;
