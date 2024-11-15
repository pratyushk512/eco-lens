import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Droplet, Package, Truck, Clock, Recycle } from 'lucide-react';
import Image from "next/image";

const productsData = [
  {
    id: "673645bd913e2f067981cd88",
    imageUrl: "http://res.cloudinary.com/dn42ud3gx/image/upload/v1731635045/ra9s908udsuukpfo3cbi.jpg",
    sustainabilityScore: 85,
    recommendations: [
      { icon: <Leaf />, text: "Use more renewable materials", color: "text-green-500" },
      { icon: <Droplet />, text: "Reduce water usage", color: "text-blue-500" },
    ],
  },
  {
    id: "7b3a4bcddf3e4c12a6fd30a7",
    imageUrl: "http://res.cloudinary.com/dn42ud3gx/image/upload/v1731635046/xu9s702xdszukpao2cty.jpg",
    sustainabilityScore: 92,
    recommendations: [
      { icon: <Package />, text: "Reduce packaging", color: "text-orange-500" },
      { icon: <Truck />, text: "Optimize transportation", color: "text-purple-500" },
    ],
  },
];

export default function Component() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Select a random product from the data array each time the component mounts
    const randomProduct = productsData[Math.floor(Math.random() * productsData.length)];
    setProduct(randomProduct);
  }, []);

  if (!product) return null; 

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Product Sustainability Report</CardTitle>
        <p className="text-sm text-muted-foreground">User ID: {product.id}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="aspect-video relative rounded-lg overflow-hidden">
          <Image
            src={product.imageUrl}
            alt="Product image"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Sustainability Score</h3>
          <Badge variant="secondary" className="text-lg px-3 py-1">
            {product.sustainabilityScore}
          </Badge>
        </div>

        <p className="text-muted-foreground">
          This product demonstrates a good level of sustainability with a score of {product.sustainabilityScore}. However, there is always room for improvement.
        </p>

        <div>
          <h3 className="text-lg font-semibold mb-2">Current Recommendations:</h3>
          <ul className="space-y-2">
            {product.recommendations.map((recommendation, index) => (
              <li key={index} className="flex items-start">
                <recommendation.icon className={`w-5 h-5 mr-2 ${recommendation.color} flex-shrink-0 mt-1`} />
                <span>{recommendation.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-sm text-muted-foreground italic">
          By implementing the recommendations and actively pursuing sustainable practices, this product can contribute to a more environmentally responsible future.
        </p>
      </CardContent>
    </Card>
  );
}
