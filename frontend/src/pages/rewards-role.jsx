import { Link } from 
"react-router-dom";
import React from 'react';
import { Button } from "@/components/ui/button";

function Role() {
    return (
      <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 p-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Welcome! Choose your role:</h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/rewards/brands">
            <Button className="w-48 h-16 text-lg">
              Business Partner
            </Button>
          </Link>
          <Link to="/rewards/consumer">
            <Button className="w-48 h-16 text-lg" variant="secondary">
              Consumer
            </Button>
          </Link>
        </div>
      </div>
      </>
    );
  }
  
  export default Role;