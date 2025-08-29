import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  MessageSquare, 
  Star, 
  Send,
  CheckCircle,
  AlertTriangle,
  Building2,
  UserCheck,
  Clock,
  Filter
} from 'lucide-react';

export const FeedbackSystem: React.FC = () => {
  const [activeTab, setActiveTab] = useState('submit');
  const [rating, setRating] = useState(0);
  const [feedbackType, setFeedbackType] = useState('general');

  const mockFeedbacks = [
    {
      id: 'FB-2024-001',
      hospital: 'City General Hospital',
      doctor: 'Dr. Sarah Johnson',
      rating: 5,
      date: '2024-01-15',
      status: 'Resolved',
      type: 'Appreciation',
      summary: 'Excellent care and very professional staff...'
    },
    {
      id: 'FB-2024-002',
      hospital: 'Metro Medical Center',
      doctor: 'Dr. Michael Chen',
      rating: 2,
      date: '2024-01-12',
      status: 'Under Review',
      type: 'Complaint',
      summary: 'Long waiting times and poor communication...'
    },
    {
      id: 'FB-2024-003',
      hospital: 'Downtown Clinic',
      doctor: 'Dr. Emily Davis',
      rating: 4,
      date: '2024-01-10',
      status: 'Acknowledged',
      type: 'Suggestion',
      summary: 'Good service but could improve appointment scheduling...'
    }
  ];

  const renderStars = (count: number, interactive: boolean = false) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= count 
                ? 'text-yellow-400 fill-yellow-400' 
                : 'text-muted-foreground'
            } ${interactive ? 'cursor-pointer hover:text-yellow-400' : ''}`}
            onClick={interactive ? () => setRating(star) : undefined}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Feedback & Grievance System</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your voice matters. Share your healthcare experience directly with the Health Ministry 
            and help improve medical services for everyone.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center space-x-4 mb-8 border-b">
          {[
            { id: 'submit', label: 'Submit Feedback', icon: MessageSquare },
            { id: 'track', label: 'Track Feedback', icon: Clock },
            { id: 'impact', label: 'Your Impact', icon: CheckCircle }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? 'default' : 'ghost'}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center space-x-2"
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </Button>
            );
          })}
        </div>

        {activeTab === 'submit' && (
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Submit New Feedback
                </CardTitle>
                <CardDescription>
                  Share your experience with healthcare services. Your feedback goes directly 
                  to the Health Ministry for review and action.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Feedback Type */}
                <div>
                  <Label htmlFor="feedbackType">Feedback Type</Label>
                  <select 
                    id="feedbackType"
                    value={feedbackType}
                    onChange={(e) => setFeedbackType(e.target.value)}
                    className="w-full p-3 border rounded-lg mt-1"
                  >
                    <option value="general">General Feedback</option>
                    <option value="complaint">Complaint</option>
                    <option value="appreciation">Appreciation</option>
                    <option value="suggestion">Suggestion</option>
                    <option value="urgent">Urgent Issue</option>
                  </select>
                </div>

                {/* Hospital Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="hospital">Hospital/Clinic Name</Label>
                    <Input 
                      id="hospital"
                      placeholder="Enter hospital name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="doctor">Doctor Name (Optional)</Label>
                    <Input 
                      id="doctor"
                      placeholder="Enter doctor name"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="visitDate">Visit Date</Label>
                    <Input 
                      id="visitDate"
                      type="date"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="department">Department</Label>
                    <select className="w-full p-3 border rounded-lg mt-1">
                      <option>Select department</option>
                      <option>Emergency</option>
                      <option>General Medicine</option>
                      <option>Surgery</option>
                      <option>Pediatrics</option>
                      <option>Cardiology</option>
                      <option>Orthopedics</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                {/* Rating */}
                <div>
                  <Label>Overall Rating</Label>
                  <div className="flex items-center space-x-4 mt-2">
                    {renderStars(rating, true)}
                    <span className="text-sm text-muted-foreground">
                      {rating > 0 ? `${rating} out of 5 stars` : 'Click to rate'}
                    </span>
                  </div>
                </div>

                {/* Feedback Details */}
                <div>
                  <Label htmlFor="feedback">Detailed Feedback</Label>
                  <Textarea 
                    id="feedback"
                    placeholder="Please provide detailed feedback about your experience. Include specific incidents, staff behavior, facilities, or any suggestions for improvement..."
                    rows={6}
                    className="mt-1"
                  />
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email (Optional)</Label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input 
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="mt-1"
                    />
                  </div>
                </div>

                {/* Privacy Notice */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-primary">Privacy Guaranteed</p>
                      <p className="text-muted-foreground">
                        Your feedback is confidential and will be shared directly with the Health Ministry. 
                        Personal information is optional and will only be used if follow-up is needed.
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  <Send className="w-4 h-4" />
                  Submit Feedback
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'track' && (
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Your Feedback History
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4" />
                    Filter
                  </Button>
                </CardTitle>
                <CardDescription>
                  Track the status of your submitted feedback and see responses from authorities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockFeedbacks.map((feedback) => (
                    <div key={feedback.id} className="border rounded-lg p-6 hover:bg-muted/30 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className={`p-2 rounded-lg ${
                            feedback.type === 'Complaint' ? 'bg-destructive/10' : 
                            feedback.type === 'Appreciation' ? 'bg-success/10' : 'bg-primary/10'
                          }`}>
                            {feedback.type === 'Complaint' ? (
                              <AlertTriangle className="w-5 h-5 text-destructive" />
                            ) : feedback.type === 'Appreciation' ? (
                              <CheckCircle className="w-5 h-5 text-success" />
                            ) : (
                              <MessageSquare className="w-5 h-5 text-primary" />
                            )}
                          </div>
                          <div>
                            <div className="flex items-center gap-3 mb-1">
                              <h3 className="font-medium">Feedback #{feedback.id.split('-')[2]}</h3>
                              <Badge variant={
                                feedback.status === 'Resolved' ? 'default' : 
                                feedback.status === 'Under Review' ? 'secondary' : 'outline'
                              }>
                                {feedback.status}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                              <span className="flex items-center gap-1">
                                <Building2 className="w-3 h-3" />
                                {feedback.hospital}
                              </span>
                              <span className="flex items-center gap-1">
                                <UserCheck className="w-3 h-3" />
                                {feedback.doctor}
                              </span>
                              <span>{feedback.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              {renderStars(feedback.rating)}
                              <Badge variant="outline" className="text-xs">
                                {feedback.type}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{feedback.summary}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          Status updated on {feedback.date}
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'impact' && (
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">12</h3>
                <p className="text-muted-foreground">Feedback Submitted</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-success" />
                </div>
                <h3 className="text-2xl font-bold mb-2">8</h3>
                <p className="text-muted-foreground">Issues Resolved</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-warning" />
                </div>
                <h3 className="text-2xl font-bold mb-2">4.2</h3>
                <p className="text-muted-foreground">Average Rating Given</p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};