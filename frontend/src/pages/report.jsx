import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLocation } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
export default function Component() {
  const location = useLocation();
  const data = location.state?.data.data;


  return (
    
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Product Sustainability Report</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <ReactMarkdown>{data.data}</ReactMarkdown>
      </CardContent>
    </Card>
  );
}
