import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, ClipboardList, Gift, LogOut, Menu, X } from 'lucide-react'

const NavItem = ({ to, icon: Icon, label, isActive }) => (
  <Link
    to={to}
    className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
      isActive
        ? 'bg-primary text-primary-foreground'
        : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
    }`}
  >
    <Icon className="w-5 h-5 mr-3" />
    {label}
  </Link>
)

export default function Navbar3() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { to: '/Landing', label: 'Home', icon: Home },
    { to: '/scanProduct', label: 'Scan Products', icon: ClipboardList },
    { to: '/pastScans', label: 'Previous Scanned Products', icon: ClipboardList },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="hidden md:flex ml-10 space-x-4">
              {navItems.map((item) => (
                <NavItem
                  key={item.to}
                  {...item}
                  isActive={location.pathname === item.to}
                />
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <NavItem
              to="/logout"
              label="Logout"
              icon={LogOut}
              isActive={false}
            />
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavItem
                key={item.to}
                {...item}
                isActive={location.pathname === item.to}
              />
            ))}
            <NavItem to="/logout" label="Logout" icon={LogOut} isActive={false} />
          </div>
        </div>
      )}
    </nav>
  )
}
