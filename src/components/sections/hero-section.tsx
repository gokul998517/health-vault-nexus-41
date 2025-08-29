import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Shield, FileText, Users, Lock, Globe, MessageSquare } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted?: () => void;
  onLearnMore?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onGetStarted = () => {},
  onLearnMore = () => {}
}) => {
  const features = [
    {
      icon: FileText,
      title: 'Secure Document Management',
      description: 'Store and manage hospital reports and patient documents with enterprise-grade security.'
    },
    {
      icon: Users,
      title: 'Patient Portal Access',
      description: 'Patients can securely access their medical reports using unique IDs and authentication.'
    },
    {
      icon: MessageSquare,
      title: 'Feedback System',
      description: 'Direct feedback and grievance redressal system connecting patients to health ministry.'
    },
    {
      icon: Globe,
      title: 'Multilingual Support',
      description: 'AI-powered chatbot providing medical information in multiple languages.'
    },
    {
      icon: Lock,
      title: 'Privacy Guaranteed',
      description: 'Zero data leaks with encrypted storage and HIPAA-compliant security measures.'
    },
    {
      icon: Shield,
      title: 'Cross-Platform',
      description: 'Available on Windows, Mac, Android, and iOS with seamless synchronization.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent leading-tight">
              Secure Healthcare
              <br />
              Document Management
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              A comprehensive platform connecting hospitals, patients, and healthcare authorities 
              with secure document storage, feedback systems, and AI-powered medical assistance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                onClick={onGetStarted}
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                Get Started Today
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={onLearnMore}
                className="border-primary/20 hover:bg-primary/5"
              >
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-primary" />
                <span>End-to-End Encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary" />
                <span>Multi-Platform</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Complete Healthcare Ecosystem</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage healthcare documents, patient data, and communication 
              in one secure platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 hover:shadow-elevated transition-all duration-300 hover:scale-[1.02] group"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};