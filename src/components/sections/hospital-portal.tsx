import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Upload, 
  Search, 
  Shield, 
  Users, 
  Calendar,
  MoreHorizontal,
  Eye,
  Download,
  Trash2
} from 'lucide-react';

export const HospitalPortal: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  const mockReports = [
    {
      id: 'RPT-2024-001',
      patientId: 'PAT-12345',
      patientName: 'John Doe',
      reportType: 'Blood Test',
      date: '2024-01-15',
      status: 'Completed'
    },
    {
      id: 'RPT-2024-002',
      patientId: 'PAT-12346',
      patientName: 'Jane Smith',
      reportType: 'X-Ray',
      date: '2024-01-14',
      status: 'In Review'
    },
    {
      id: 'RPT-2024-003',
      patientId: 'PAT-12347',
      patientName: 'Mike Johnson',
      reportType: 'CT Scan',
      date: '2024-01-13',
      status: 'Completed'
    }
  ];

  const stats = [
    { label: 'Total Reports', value: '1,234', icon: FileText, color: 'text-primary' },
    { label: 'Active Patients', value: '856', icon: Users, color: 'text-secondary' },
    { label: 'This Month', value: '89', icon: Calendar, color: 'text-success' },
    { label: 'Secure Storage', value: '99.9%', icon: Shield, color: 'text-warning' }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Hospital Portal</h1>
          <p className="text-muted-foreground">Manage patient reports and hospital documents securely</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-4 mb-8 border-b">
          {['dashboard', 'reports', 'upload', 'patients'].map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? 'default' : 'ghost'}
              onClick={() => setActiveTab(tab)}
              className="capitalize"
            >
              {tab}
            </Button>
          ))}
        </div>

        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="hover:shadow-elevated transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">{stat.label}</p>
                          <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                        </div>
                        <Icon className={`w-8 h-8 ${stat.color}`} />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Recent Reports */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Reports</CardTitle>
                <CardDescription>Latest patient reports and documents</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockReports.slice(0, 3).map((report) => (
                    <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <FileText className="w-8 h-8 text-primary" />
                        <div>
                          <p className="font-medium">{report.reportType}</p>
                          <p className="text-sm text-muted-foreground">{report.patientName} • {report.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant={report.status === 'Completed' ? 'default' : 'secondary'}>
                          {report.status}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'reports' && (
          <div className="space-y-6">
            {/* Search and Filters */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <Label htmlFor="search">Search Reports</Label>
                    <div className="relative">
                      <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                      <Input 
                        id="search"
                        placeholder="Search by patient ID, name, or report type..." 
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="md:w-48">
                    <Label htmlFor="filter">Filter by Status</Label>
                    <select className="w-full p-2 border rounded-md">
                      <option>All Reports</option>
                      <option>Completed</option>
                      <option>In Review</option>
                      <option>Pending</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reports Table */}
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b bg-muted/50">
                      <tr>
                        <th className="text-left p-4">Report ID</th>
                        <th className="text-left p-4">Patient</th>
                        <th className="text-left p-4">Type</th>
                        <th className="text-left p-4">Date</th>
                        <th className="text-left p-4">Status</th>
                        <th className="text-left p-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockReports.map((report) => (
                        <tr key={report.id} className="border-b hover:bg-muted/30">
                          <td className="p-4 font-mono text-sm">{report.id}</td>
                          <td className="p-4">
                            <div>
                              <p className="font-medium">{report.patientName}</p>
                              <p className="text-sm text-muted-foreground">{report.patientId}</p>
                            </div>
                          </td>
                          <td className="p-4">{report.reportType}</td>
                          <td className="p-4">{report.date}</td>
                          <td className="p-4">
                            <Badge variant={report.status === 'Completed' ? 'default' : 'secondary'}>
                              {report.status}
                            </Badge>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center space-x-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Download className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'upload' && (
          <Card>
            <CardHeader>
              <CardTitle>Upload New Report</CardTitle>
              <CardDescription>Securely upload patient reports and documents</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="patientId">Patient ID</Label>
                  <Input id="patientId" placeholder="PAT-12345" />
                </div>
                <div>
                  <Label htmlFor="reportType">Report Type</Label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Select report type</option>
                    <option>Blood Test</option>
                    <option>X-Ray</option>
                    <option>CT Scan</option>
                    <option>MRI</option>
                    <option>Lab Report</option>
                  </select>
                </div>
              </div>

              {/* File Upload Area */}
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">Upload Report Files</h3>
                <p className="text-muted-foreground mb-4">
                  Drag and drop files here, or click to browse
                </p>
                <Button>
                  Select Files
                </Button>
                <p className="text-xs text-muted-foreground mt-2">
                  Supported: PDF, DOC, DOCX, JPG, PNG (Max 10MB each)
                </p>
              </div>

              <Button className="w-full" size="lg">
                Upload Report
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};