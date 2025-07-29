import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Info, Star, Contact, LogIn, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: Info },
    { name: "Features", href: "/features", icon: Star },
    { name: "Contact", href: "/contact", icon: Contact },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="ml-2 text-xl font-bold text-foreground">Luyanda</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                item.href.startsWith("/") ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-smooth"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-smooth"
                  >
                    {item.name}
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="modern" size="sm">
              <LogIn className="w-4 h-4 mr-1" />
              Login
            </Button>
            <Button variant="hero" size="sm">
              <UserPlus className="w-4 h-4 mr-1" />
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
            {navItems.map((item) => {
              const Icon = item.icon;
              return item.href.startsWith("/") ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-muted-foreground hover:text-foreground flex items-center px-3 py-2 rounded-md text-base font-medium transition-smooth"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground flex items-center px-3 py-2 rounded-md text-base font-medium transition-smooth"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.name}
                </a>
              );
            })}
            <div className="flex flex-col space-y-2 px-3 pt-4">
              <Button variant="modern" size="sm" className="justify-center">
                <LogIn className="w-4 h-4 mr-1" />
                Login
              </Button>
              <Button variant="hero" size="sm" className="justify-center">
                <UserPlus className="w-4 h-4 mr-1" />
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;