import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Download, 
  Eye, 
  Calendar,
  User,
  Phone,
  Mail,
  Shield,
  Clock,
  AlertCircle
} from 'lucide-react';

export const PatientPortal: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginMethod, setLoginMethod] = useState<'id' | 'phone'>('id');

  const mockPatientData = {
    id: 'PAT-12345',
    name: 'John Doe',
    phone: '+1 (555) 123-4567',
    email: 'john.doe@email.com',
    dateOfBirth: '1985-06-15'
  };

  const mockReports = [
    {
      id: 'RPT-2024-001',
      type: 'Blood Test Report',
      hospital: 'City General Hospital',
      date: '2024-01-15',
      status: 'Available',
      urgent: false
    },
    {
      id: 'RPT-2024-002',
      type: 'Chest X-Ray',
      hospital: 'Metro Medical Center',
      date: '2024-01-12',
      status: 'Available',
      urgent: true
    },
    {
      id: 'RPT-2024-003',
      type: 'Lab Results',
      hospital: 'City General Hospital',
      date: '2024-01-10',
      status: 'Processing',
      urgent: false
    }
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
        <div className="w-full max-w-md mx-auto px-4">
          <Card className="shadow-elevated">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl">Patient Portal Access</CardTitle>
              <CardDescription>
                Securely access your medical reports and documents
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Login Method Toggle */}
              <div className="flex space-x-2 p-1 bg-muted rounded-lg">
                <Button
                  variant={loginMethod === 'id' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setLoginMethod('id')}
                  className="flex-1"
                >
                  Patient ID
                </Button>
                <Button
                  variant={loginMethod === 'phone' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setLoginMethod('phone')}
                  className="flex-1"
                >
                  Phone Number
                </Button>
              </div>

              <div className="space-y-4">
                {loginMethod === 'id' ? (
                  <div>
                    <Label htmlFor="patientId">Patient ID</Label>
                    <Input 
                      id="patientId"
                      placeholder="PAT-12345"
                      className="mt-1"
                    />
                  </div>
                ) : (
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone"
                      placeholder="+1 (555) 123-4567"
                      className="mt-1"
                    />
                  </div>
                )}

                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="mt-1"
                  />
                </div>
              </div>

              <Button 
                className="w-full" 
                size="lg"
                onClick={() => setIsLoggedIn(true)}
              >
                Sign In Securely
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                <p>
                  Need help accessing your account?{' '}
                  <a href="#" className="text-primary hover:underline">Contact Support</a>
                </p>
              </div>

              {/* Security Notice */}
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-primary mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-primary">Secure Access</p>
                    <p className="text-muted-foreground">
                      Your medical data is protected with end-to-end encryption and 
                      HIPAA-compliant security measures.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        {/* Patient Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome, {mockPatientData.name}</h1>
              <p className="text-muted-foreground">Patient ID: {mockPatientData.id}</p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => setIsLoggedIn(false)}
            >
              Sign Out
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Patient Information */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <Label className="text-sm text-muted-foreground">Full Name</Label>
                    <p className="font-medium">{mockPatientData.name}</p>
                  </div>
                  <div>
                    <Label className="text-sm text-muted-foreground">Patient ID</Label>
                    <p className="font-mono text-sm">{mockPatientData.id}</p>
                  </div>
                  <div>
                    <Label className="text-sm text-muted-foreground">Phone</Label>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <p className="text-sm">{mockPatientData.phone}</p>
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm text-muted-foreground">Email</Label>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <p className="text-sm">{mockPatientData.email}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="w-4 h-4" />
                  Download All Reports
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4" />
                  Schedule Appointment
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="w-4 h-4" />
                  Contact Hospital
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Medical Reports */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Your Medical Reports
                </CardTitle>
                <CardDescription>
                  Access and download your latest medical reports and test results
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockReports.map((report) => (
                    <div 
                      key={report.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`p-2 rounded-lg ${
                          report.urgent ? 'bg-warning/10' : 'bg-primary/10'
                        }`}>
                          <FileText className={`w-6 h-6 ${
                            report.urgent ? 'text-warning' : 'text-primary'
                          }`} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-medium">{report.type}</p>
                            {report.urgent && (
                              <Badge variant="secondary" className="bg-warning/10 text-warning">
                                <AlertCircle className="w-3 h-3 mr-1" />
                                Urgent
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{report.hospital}</p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {report.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {report.status}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        {report.status === 'Available' ? (
                          <>
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="default" size="sm">
                              <Download className="w-4 h-4" />
                            </Button>
                          </>
                        ) : (
                          <Badge variant="secondary">Processing</Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {mockReports.length === 0 && (
                  <div className="text-center py-12">
                    <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-medium mb-2">No Reports Available</h3>
                    <p className="text-muted-foreground">
                      Your medical reports will appear here once they are processed.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};