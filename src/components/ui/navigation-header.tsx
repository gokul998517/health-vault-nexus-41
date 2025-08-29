import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, FileText, MessageSquare, Bot, Menu } from 'lucide-react';

interface NavigationHeaderProps {
  activeSection?: string;
  onSectionChange?: (section: string) => void;
}

export const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  activeSection = 'home',
  onSectionChange = () => {}
}) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Shield },
    { id: 'hospital', label: 'Hospital Portal', icon: FileText },
    { id: 'patient', label: 'Patient Portal', icon: FileText },
    { id: 'feedback', label: 'Feedback', icon: MessageSquare },
    { id: 'chatbot', label: 'Medical Assistant', icon: Bot },
  ];

  return (
    <header className="border-b bg-card shadow-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-primary">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">MediVault</h1>
              <p className="text-sm text-muted-foreground">Healthcare Management System</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => onSectionChange(item.id)}
                  className="flex items-center space-x-2"
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};