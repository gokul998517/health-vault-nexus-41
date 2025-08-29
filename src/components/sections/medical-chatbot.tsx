import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Bot, 
  Send, 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX,
  Globe,
  Pill,
  Stethoscope,
  AlertCircle,
  CheckCircle,
  User,
  Sparkles
} from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type?: 'medicine' | 'hospital' | 'general' | 'warning';
}

export const MedicalChatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI Medical Assistant. I can help you with information about medicines, hospitals, treatment options, and general health queries. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date(),
      type: 'general'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [language, setLanguage] = useState('english');
  const [isTyping, setIsTyping] = useState(false);

  const languages = [
    { code: 'english', name: 'English', flag: '🇺🇸' },
    { code: 'hindi', name: 'Hindi', flag: '🇮🇳' },
    { code: 'spanish', name: 'Spanish', flag: '🇪🇸' },
    { code: 'french', name: 'French', flag: '🇫🇷' },
    { code: 'german', name: 'German', flag: '🇩🇪' },
    { code: 'chinese', name: 'Chinese', flag: '🇨🇳' }
  ];

  const quickQuestions = [
    { text: "What are the side effects of paracetamol?", type: 'medicine' as const },
    { text: "Find hospitals near me", type: 'hospital' as const },
    { text: "What are generic alternatives for ibuprofen?", type: 'medicine' as const },
    { text: "Symptoms of high blood pressure", type: 'general' as const },
    { text: "Emergency contact numbers", type: 'hospital' as const }
  ];

  const handleSendMessage = (messageText?: string) => {
    const text = messageText || inputMessage.trim();
    if (!text) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse = generateBotResponse(text);
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (userText: string): Message => {
    const lowerText = userText.toLowerCase();
    
    if (lowerText.includes('paracetamol') || lowerText.includes('acetaminophen')) {
      return {
        id: (Date.now() + 1).toString(),
        text: "**Paracetamol (Acetaminophen) Information:**\n\n**Common Side Effects:**\n• Nausea and vomiting\n• Skin rash\n• Liver damage (with overdose)\n\n**Dosage:** Adults: 500-1000mg every 4-6 hours (max 4000mg/day)\n\n**Generic Alternatives:**\n• Acetaminophen\n• Tylenol\n• Calpol\n\n⚠️ **Warning:** Never exceed recommended dosage. Consult your doctor if symptoms persist.",
        sender: 'bot',
        timestamp: new Date(),
        type: 'medicine'
      };
    }
    
    if (lowerText.includes('hospital') || lowerText.includes('emergency')) {
      return {
        id: (Date.now() + 1).toString(),
        text: "**Emergency & Hospital Information:**\n\n🚨 **Emergency Numbers:**\n• Emergency: 911 (US) / 108 (India)\n• Poison Control: 1-800-222-1222\n\n🏥 **Nearby Hospitals:**\n• City General Hospital - 2.1 km\n• Metro Medical Center - 3.5 km\n• Downtown Emergency Clinic - 1.8 km\n\n📱 Would you like me to help you find specific specialists or book an appointment?",
        sender: 'bot',
        timestamp: new Date(),
        type: 'hospital'
      };
    }
    
    if (lowerText.includes('ibuprofen')) {
      return {
        id: (Date.now() + 1).toString(),
        text: "**Ibuprofen Information:**\n\n**Generic Alternatives:**\n• Advil\n• Motrin\n• Nurofen\n• Generic Ibuprofen tablets\n\n**Chemical Composition:** C₁₃H₁₈O₂\n\n**Uses:**\n• Pain relief\n• Inflammation reduction\n• Fever reduction\n\n**Dosage:** 200-400mg every 4-6 hours (max 1200mg/day for OTC)\n\n⚠️ **Contraindications:** Avoid with stomach ulcers, kidney problems, or blood thinners.",
        sender: 'bot',
        timestamp: new Date(),
        type: 'medicine'
      };
    }

    if (lowerText.includes('blood pressure') || lowerText.includes('hypertension')) {
      return {
        id: (Date.now() + 1).toString(),
        text: "**High Blood Pressure (Hypertension) Symptoms:**\n\n**Common Signs:**\n• Headaches\n• Shortness of breath\n• Nosebleeds\n• Dizziness\n• Chest pain\n• Visual changes\n\n**Normal Range:** Less than 120/80 mmHg\n**High:** 140/90 mmHg or higher\n\n🩺 **Recommendation:** Regular monitoring is essential. Consult a cardiologist if you experience these symptoms frequently.\n\n**Prevention:**\n• Reduce sodium intake\n• Regular exercise\n• Maintain healthy weight\n• Limit alcohol consumption",
        sender: 'bot',
        timestamp: new Date(),
        type: 'general'
      };
    }

    // Default response
    return {
      id: (Date.now() + 1).toString(),
      text: "I understand you're asking about medical information. While I can provide general information about medicines, hospitals, and health topics, please remember:\n\n✅ I can help with:\n• Medicine information and alternatives\n• Hospital locations and contacts\n• General health information\n• Symptom guidance\n\n⚠️ **Important:** This information is for educational purposes only. Always consult healthcare professionals for medical advice, diagnosis, or treatment.\n\nCould you please be more specific about what you'd like to know?",
      sender: 'bot',
      timestamp: new Date(),
      type: 'general'
    };
  };

  const getMessageIcon = (type?: string) => {
    switch (type) {
      case 'medicine': return <Pill className="w-4 h-4" />;
      case 'hospital': return <Stethoscope className="w-4 h-4" />;
      case 'warning': return <AlertCircle className="w-4 h-4" />;
      default: return <Bot className="w-4 h-4" />;
    }
  };

  const formatBotMessage = (text: string) => {
    return text.split('\n').map((line, index) => {
      if (line.startsWith('**') && line.endsWith('**')) {
        return <div key={index} className="font-semibold text-primary mb-2">{line.slice(2, -2)}</div>;
      }
      if (line.startsWith('•')) {
        return <div key={index} className="ml-4 mb-1">{line}</div>;
      }
      if (line.startsWith('⚠️') || line.startsWith('🚨') || line.startsWith('🏥') || line.startsWith('🩺') || line.startsWith('📱')) {
        return <div key={index} className="mt-3 mb-2 font-medium">{line}</div>;
      }
      if (line.startsWith('✅')) {
        return <div key={index} className="text-success mt-2">{line}</div>;
      }
      return line ? <div key={index} className="mb-1">{line}</div> : <br key={index} />;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4">
            <Bot className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold mb-2">AI Medical Assistant</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get instant information about medicines, hospitals, treatments, and health queries 
            in multiple languages. Available 24/7 to assist with your healthcare needs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Language Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Globe className="w-4 h-4" />
                  Language
                </CardTitle>
              </CardHeader>
              <CardContent>
                <select 
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.flag} {lang.name}
                    </option>
                  ))}
                </select>
              </CardContent>
            </Card>

            {/* Quick Questions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Sparkles className="w-4 h-4" />
                  Quick Questions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {quickQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSendMessage(question.text)}
                    className="w-full text-left justify-start h-auto p-3 text-wrap"
                  >
                    <div className="flex items-start gap-2">
                      {getMessageIcon(question.type)}
                      <span className="text-xs">{question.text}</span>
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Medicine Information</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Generic Alternatives</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Hospital Finder</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Multilingual Support</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>24/7 Availability</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="h-[600px] flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bot className="w-5 h-5" />
                    Medical Assistant
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-success/10 text-success">
                      <div className="w-2 h-2 bg-success rounded-full mr-1" />
                      Online
                    </Badge>
                  </div>
                </CardTitle>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto space-y-4 p-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[80%] ${
                      message.sender === 'user' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted'
                    } rounded-lg p-4`}>
                      {message.sender === 'bot' && (
                        <div className="flex items-center gap-2 mb-2">
                          {getMessageIcon(message.type)}
                          <span className="text-xs font-medium text-muted-foreground">
                            AI Medical Assistant
                          </span>
                        </div>
                      )}
                      {message.sender === 'user' ? (
                        <p className="text-sm">{message.text}</p>
                      ) : (
                        <div className="text-sm space-y-1">
                          {formatBotMessage(message.text)}
                        </div>
                      )}
                      <div className="text-xs opacity-70 mt-2">
                        {message.timestamp.toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-lg p-4">
                      <div className="flex items-center gap-2">
                        <Bot className="w-4 h-4" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.1s'}} />
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.2s'}} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>

              {/* Input */}
              <div className="p-4 border-t">
                <div className="flex items-center gap-2">
                  <div className="flex-1 relative">
                    <Input
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Ask about medicines, hospitals, or health information..."
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="pr-20"
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsListening(!isListening)}
                        className="p-1 h-auto"
                      >
                        {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>
                  <Button onClick={() => handleSendMessage()} disabled={!inputMessage.trim()}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="mt-2 text-xs text-muted-foreground text-center">
                  ⚠️ This AI provides general information only. Always consult healthcare professionals for medical advice.
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};