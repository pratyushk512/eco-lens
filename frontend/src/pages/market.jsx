import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProductList() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Eco-Friendly Water Bottle",
      image: "https://img.freepik.com/premium-photo/eco-friendly-sustainable-water-bottle-made-from-bamboo-generative-ai_601748-47389.jpg",
      description: "A sustainable water bottle made from bamboo, designed to reduce plastic waste.",
      price: "₹625",
    },
    {
      id: 2,
      name: "Biodegradable Phone Case",
      image: "https://5.imimg.com/data5/ECOM/Default/2023/11/359521562/WU/XZ/JS/159110959/the-lucky-turtle-biodegradable-eco-friendly-mobile-cover-phone-177-13995-turtl-13-001-tech-accessories-brown-living-943862.jpg",
      description: "An eco-friendly phone case made from biodegradable materials to protect your phone and the planet.",
      price: "₹150",
    },
  ];

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-teal-800 mb-6">Featured Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden cursor-pointer" onClick={() => handleCardClick(product)}>
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

      {/* Modal for displaying product details */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/3 shadow-lg">
            <h2 className="text-xl font-bold text-teal-800 mb-4">{selectedProduct.name}</h2>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="rounded-md mb-4 w-full h-48 object-cover"
            />
            <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
            <p className="text-lg font-semibold text-teal-800 mb-4">Price: {selectedProduct.price}</p>
            <Button className="bg-teal-600 text-white w-full mb-4">Buy Now</Button>
            <Button className="bg-gray-200 text-gray-700 w-full" onClick={closeModal}>Close</Button>
          </div>
        </div>
      )}
    </div>
  );
}
