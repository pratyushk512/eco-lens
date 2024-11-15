import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

export default function ProductList() {
  const products = [
    {
      id: 1,
      name: "Eco-Friendly Water Bottle",
      image: "https://img.freepik.com/premium-photo/eco-friendly-sustainable-water-bottle-made-from-bamboo-generative-ai_601748-47389.jpg",
    },
    {
      id: 2,
      name: "Biodegradable Phone Case",
      image: "https://5.imimg.com/data5/ECOM/Default/2023/11/359521562/WU/XZ/JS/159110959/the-lucky-turtle-biodegradable-eco-friendly-mobile-cover-phone-177-13995-turtl-13-001-tech-accessories-brown-living-943862.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-teal-800 mb-6">Featured Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="aspect-square relative mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="rounded-md w-full h-full object-cover"
                />
              </div>
              <h2 className="text-lg font-semibold text-teal-700 text-center">{product.name}</h2>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
