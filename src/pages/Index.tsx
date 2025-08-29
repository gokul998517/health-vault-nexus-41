import React, { useState } from 'react';
import { NavigationHeader } from '@/components/ui/navigation-header';
import { HeroSection } from '@/components/sections/hero-section';
import { HospitalPortal } from '@/components/sections/hospital-portal';
import { PatientPortal } from '@/components/sections/patient-portal';
import { FeedbackSystem } from '@/components/sections/feedback-system';
import { MedicalChatbot } from '@/components/sections/medical-chatbot';

type Section = 'home' | 'hospital' | 'patient' | 'feedback' | 'chatbot';

const Index = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');

  const handleSectionChange = (section: string) => {
    setActiveSection(section as Section);
  };

  const handleGetStarted = () => {
    setActiveSection('patient');
  };

  const handleLearnMore = () => {
    setActiveSection('hospital');
  };

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader 
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />
      
      {activeSection === 'home' && (
        <HeroSection 
          onGetStarted={handleGetStarted}
          onLearnMore={handleLearnMore}
        />
      )}
      
      {activeSection === 'hospital' && <HospitalPortal />}
      {activeSection === 'patient' && <PatientPortal />}
      {activeSection === 'feedback' && <FeedbackSystem />}
      {activeSection === 'chatbot' && <MedicalChatbot />}
    </div>
  );
};

export default Index;