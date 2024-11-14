import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Leaf, BarChart2, Gift, Camera } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-teal-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-teal-600">Home</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#features" className="text-teal-600 hover:text-teal-800">Features</a></li>
              <li><a href="#about" className="text-teal-600 hover:text-teal-800">About</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-teal-800">Environmental Impact Tracking and Reporting</h2>
          <p className="text-xl mb-8 text-teal-700">Harnessing Generative AI for Environmental Impact Assessment and Green Choices</p>
          <div className="flex justify-center space-x-4">
            <Button
              className="bg-teal-600 hover:bg-teal-700 text-white"
              onClick={() => navigate('/login')}
            >
              Login
            </Button>
            <Button
              className="bg-teal-600 hover:bg-teal-700 text-white"
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </Button>
          </div>
        </section>

        <section id="features" className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <FeatureCard 
            icon={<Camera className="h-8 w-8 text-teal-600" />}
            title="AI-Driven Analysis"
            description="Analyze product images and generate detailed impact reports using Generative AI."
          />
          <FeatureCard 
            icon={<BarChart2 className="h-8 w-8 text-teal-600" />}
            title="Sustainability Scores"
            description="Get insights on CO2 emissions, resource usage, and recycling feasibility."
          />
          <FeatureCard 
            icon={<Leaf className="h-8 w-8 text-teal-600" />}
            title="Eco-Friendly Alternatives"
            description="Discover greener options for your everyday products."
          />
          <FeatureCard 
            icon={<Gift className="h-8 w-8 text-teal-600" />}
            title="Reward System"
            description="Earn points and get discounts from eco-friendly brands."
          />
        </section>

        <section id="about" className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4 text-teal-800">About</h2>
          <p className="mb-4 text-teal-700">
            EcoLens bridges the gap in the current market by providing an accessible platform for analyzing product environmental impacts. We empower consumers with transparency on product sustainability and help identify eco-friendly alternatives.
          </p>
          <p className="text-teal-700">
            Our vision is to create a user-centric platform that benefits society and enhances daily life through informed choices. We collaborate with environmentally conscious brands and offer a rewarding system to promote sustainable behavior.
          </p>
        </section>
      </main>

      <footer className="bg-teal-600 text-white mt-12">
        <div className="container mx-auto px-4 py-6 text-center">
          <p>&copy; 2024 All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
      {icon}
      <h3 className="text-xl font-semibold mt-4 mb-2 text-teal-700">{title}</h3>
      <p className="text-teal-600">{description}</p>
    </div>
  );
}
