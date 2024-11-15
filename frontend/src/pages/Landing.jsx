import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card"
import { Home, ScanLine, Clock, Gift, LogOut } from 'lucide-react';

const NavCard = ({ to, label, icon: Icon }) => (
  <NavLink 
    to={to} 
    className={({ isActive }) => 
      `block h-full transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'}` 
    }
  >
    <Card className="h-full transform transition-all duration-500 ease-in-out hover:scale-105 active:scale-95 active:rotate-[1.7deg] bg-[rgba(217,217,217,0.58)] border border-white shadow-[12px_17px_51px_rgba(0,_0,_0,_0.22)] backdrop-blur-[6px] rounded-[17px] flex items-center justify-center cursor-pointer text-black font-extrabold select-none">
      <CardContent className="flex flex-col items-center justify-center p-6 h-full">
        <Icon className="w-8 h-8 mb-2" />
        <span className="text-sm font-medium">{label}</span>
      </CardContent>
    </Card>
  </NavLink>
);

function Landing() {
  const navItems = [
    { to: "/market", label: "Market Place", icon: Home },
    { to: "/scanProduct", label: "Scan Product", icon: ScanLine },
    { to: "/pastScans", label: "Previous Scans", icon: Clock },
    { to: "/rewards", label: "Rewards", icon: Gift },
  ];

  const handleLogout = () => {
    // Add your logout functionality here (e.g., clear session, redirect to login page)
    console.log("Logging out...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-200 via-blue-200 to-green-200 flex items-center justify-center relative">
      <button
        onClick={handleLogout}
        className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition-colors"
      >
        <LogOut className="w-4 h-4 mr-2 inline" />
        Logout
      </button>
      
      <div className="container px-4 py-8">
        <nav className="max-w-4xl mx-auto">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {navItems.map((item) => (
              <li key={item.to} className="w-full">
                <NavCard {...item} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Landing;
