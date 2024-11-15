import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "../components/ui/card";
import { Button } from "../components/ui/button";
import Navbar from '@/components/Navbar';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { getPastScans } from '@/services/auth.js';
import { data } from 'autoprefixer';

const PreviousScansPage = () => {
  const [previousScans, setPreviousScans] = useState([]);

  useEffect(() => {
    const fetchScans = async () => {
      try {
        const response = await getPastScans()
        console.log(response.reports)
        const data = response.reports
        setPreviousScans(data);
      } catch (error) {
        console.error("Error fetching previous scans:", error);
      }
    };

    fetchScans();
  }, []);
  /*const handleReportClick=async (scan)=>{
    const prompt = `Generate a report based on the following data from the product scanned and parsed through Google Cloud Vision ${scan.materialImpact}. Provide alternative recommendations as well. Dont give much of extra knowledge. The report should have a format.Provide a markdown file`

      const result = await model.generateContent(prompt);
      const data=result.response.text()
      return data
  }*/
  return (<><Navbar/>
    <div className="mt-9 space-y-6">
      <h1 className="text-3xl font-bold">Previous Scanned Products</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {previousScans.map((scan) => (
          <Card key={scan._id}>
            <CardHeader>
              <CardTitle>
              <img src={scan.image} />
              </CardTitle>
            </CardHeader>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">View Report</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
    </>
  );
};

export default PreviousScansPage;
