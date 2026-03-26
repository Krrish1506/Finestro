import { useState, useEffect, useRef } from "react";
import { Users, FileText, TrendingUp, Bell, Download, Calendar, Search, Plus, Facebook, Instagram, Linkedin, Twitter, FileImage, Upload, Trash2, Eye, CheckCircle, Clock, ArrowUpDown, X, Zap, Sparkles, BarChart3 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "./ui/dialog";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from "recharts";
import {
  type UploadedDocument,
  type Reminder,
  type Client,
  getDocuments,
  addDocument,
  deleteDocument,
  getDocumentById,
  downloadBase64File,
  getReminders,
  addReminder,
  deleteReminder,
  markReminderComplete,
  getClients,
  addClient,
  formatFileSize,
  fileToBase64,
  getUpcomingReminders
} from "../lib/storage";

interface Policy {
  provider: string;
  plan: string;
  premium: string;
  coverage: string;
  cashless: string;
  rating: number;
}

export function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<{ key: keyof Policy | null; direction: 'asc' | 'desc' }>({ key: null, direction: 'asc' });
  const [isAddClientOpen, setIsAddClientOpen] = useState(false);
  const [isClaimDialogOpen, setIsClaimDialogOpen] = useState(false);
  const [isReminderDialogOpen, setIsReminderDialogOpen] = useState(false);
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedDocument[]>([]);
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [showNotification, setShowNotification] = useState(false);
  const [uploadingFile, setUploadingFile] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form states
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [documentType, setDocumentType] = useState("");
  const [documentClient, setDocumentClient] = useState("");
  const [reminderFormData, setReminderFormData] = useState({
    clientId: "",
    type: "",
    date: "",
    priority: "",
    notes: ""
  });

  // Load data from storage on mount
  useEffect(() => {
    loadData();
    checkUpcomingReminders();
  }, []);

  const loadData = () => {
    setUploadedFiles(getDocuments());
    setReminders(getReminders());
    setClients(getClients());
  };

  const checkUpcomingReminders = () => {
    const upcoming = getUpcomingReminders();
    if (upcoming.length > 0) {
      setTimeout(() => {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 8000);
      }, 2000);
    }
  };

  const stats = [
    { title: "Total Clients", value: clients.length.toString(), change: "+12%", icon: Users, color: "text-blue-600", bgColor: "bg-blue-50" },
    { title: "Active Policies", value: "582", change: "+8%", icon: FileText, color: "text-green-600", bgColor: "bg-green-50" },
    { title: "Monthly Revenue", value: "₹4.2L", change: "+23%", icon: TrendingUp, color: "text-purple-600", bgColor: "bg-purple-50" },
    { title: "Pending Reminders", value: reminders.filter(r => !r.completed).length.toString(), change: "Active", icon: Bell, color: "text-orange-600", bgColor: "bg-orange-50" }
  ];

  const [claims] = useState([
    { id: "CLM001", client: "Rajesh Kumar", type: "Health", amount: "₹1,50,000", status: 60, stage: "Under Review", date: "2025-10-08" },
    { id: "CLM002", client: "Priya Sharma", type: "Life", amount: "₹5,00,000", status: 90, stage: "Approved", date: "2025-10-01" },
    { id: "CLM003", client: "Amit Patel", type: "Motor", amount: "₹45,000", status: 30, stage: "Documents Required", date: "2025-10-11" },
  ]);

  const recentActivities = [
    { action: "New policy created for Rajesh Kumar", time: "2 hours ago" },
    { action: "Claim approved for Priya Sharma", time: "5 hours ago" },
    { action: "Document uploaded by Amit Patel", time: "1 day ago" },
    { action: "Renewal reminder sent to 15 clients", time: "2 days ago" },
    { action: "Monthly report generated", time: "3 days ago" }
  ];

  const salesData = [
    { month: "Jun", target: 400000, achieved: 340000 },
    { month: "Jul", target: 400000, achieved: 368000 },
    { month: "Aug", target: 400000, achieved: 312000 },
    { month: "Sep", target: 400000, achieved: 384000 },
    { month: "Oct", target: 420000, achieved: 370000 }
  ];

  const policyComparison: Policy[] = [
    { provider: "Star Health", plan: "Comprehensive", premium: "₹12,000", coverage: "₹10L", cashless: "Yes", rating: 4.5 },
    { provider: "HDFC Ergo", plan: "Premium Plus", premium: "₹15,000", coverage: "₹15L", cashless: "Yes", rating: 4.7 },
    { provider: "ICICI Lombard", plan: "Health Shield", premium: "₹11,500", coverage: "₹8L", cashless: "Yes", rating: 4.3 },
    { provider: "Care Health", plan: "Supreme", premium: "₹13,500", coverage: "₹12L", cashless: "Yes", rating: 4.6 },
  ];

  const handleSort = (key: keyof Policy) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedPolicies = [...policyComparison].sort((a, b) => {
    const { key, direction } = sortConfig;
    if (!key) return 0;
    const aVal = a[key];
    const bVal = b[key];
    const modifier = direction === "asc" ? 1 : -1;
    if (typeof aVal === 'string' && typeof bVal === 'string') {
      return aVal.localeCompare(bVal) * modifier;
    }
    return (aVal > bVal ? 1 : aVal < bVal ? -1 : 0) * modifier;
  });

  const handleAddClient = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newClient: Client = {
      id: Date.now(),
      name: formData.get('clientName') as string,
      email: formData.get('clientEmail') as string,
      phone: formData.get('clientPhone') as string,
      policies: 0,
      status: "New",
      lastContact: "Just now",
      premium: "0"
    };
    
    addClient(newClient);
    setClients(getClients());
    toast.success("Client added successfully!", {
      description: `${newClient.name} has been added to your portfolio.`
    });
    setIsAddClientOpen(false);
  };

  const handleSubmitClaim = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Claim submitted successfully!", {
      description: "Claim has been submitted and is under review. You'll receive updates via email."
    });
    setIsClaimDialogOpen(false);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        toast.error("File too large", {
          description: "Please select a file smaller than 10MB"
        });
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleFileUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedFile || !documentType) {
      toast.error("Please fill all required fields");
      return;
    }

    setUploadingFile(true);
    try {
      const base64 = await fileToBase64(selectedFile);
      const clientName = clients.find(c => c.id.toString() === documentClient)?.name || "Unknown";
      
      const newDocument: UploadedDocument = {
        id: Date.now().toString(),
        name: selectedFile.name,
        type: documentType,
        size: formatFileSize(selectedFile.size),
        date: new Date().toISOString().split('T')[0],
        clientName: clientName,
        file: base64,
        mimeType: selectedFile.type
      };

      addDocument(newDocument);
      setUploadedFiles(getDocuments());
      toast.success("Document uploaded successfully!");
      setIsUploadDialogOpen(false);
      setSelectedFile(null);
      setDocumentType("");
      setDocumentClient("");
    } catch (error) {
      toast.error("Upload failed");
    } finally {
      setUploadingFile(false);
    }
  };

  const handleFileDelete = (id: string) => {
    deleteDocument(id);
    setUploadedFiles(getDocuments());
    toast.success("Document deleted");
  };

  const handleFileDownload = (id: string) => {
    const doc = getDocumentById(id);
    if (doc?.file) {
      downloadBase64File(doc.file, doc.name, doc.mimeType);
      toast.success(`Downloading ${doc.name}...`);
    } else {
      toast.error("File data missing");
    }
  };

  const handleCreateReminder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const client = clients.find(c => c.id.toString() === reminderFormData.clientId);
    if (!client) {
      toast.error("Please select a client");
      return;
    }

    const newReminder: Reminder = {
      id: Date.now().toString(),
      clientId: reminderFormData.clientId,
      clientName: client.name,
      type: reminderFormData.type,
      date: reminderFormData.date,
      priority: reminderFormData.priority,
      completed: false,
      createdAt: new Date().toISOString(),
      notes: reminderFormData.notes
    };

    addReminder(newReminder);
    setReminders(getReminders());
    toast.success("Reminder created!");
    setIsReminderDialogOpen(false);
    setReminderFormData({ clientId: "", type: "", date: "", priority: "", notes: "" });
  };

  const handleMarkReminderComplete = (id: string) => {
    markReminderComplete(id);
    setReminders(getReminders());
    toast.success("Task completed!");
  };

  const handleDeleteReminder = (id: string) => {
    deleteReminder(id);
    setReminders(getReminders());
    toast.success("Reminder removed");
  };

  const handleGenerateMarketing = (platform: string) => {
    toast.success(`${platform} content ready!`);
  };

  const handleDownloadReport = (name: string) => {
    toast.success(`Generating ${name}...`);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <Badge variant="outline" className="mb-4 bg-blue-50 text-blue-600 border-blue-200 font-bold px-4">WORKSPACE</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Agent <span className="text-blue-600">Dashboard</span></h1>
            <p className="text-lg text-slate-600 font-medium mt-2">Managing your portfolio with precision.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="rounded-xl border-blue-200 shadow-sm font-bold h-12 px-6 bg-white hover:bg-blue-50">
              <Download className="mr-2 h-4 w-4" /> Export Data
            </Button>
            <Button className="rounded-xl bg-blue-600 hover:bg-blue-700 shadow-lg font-bold h-12 px-6">
              <Plus className="mr-2 h-4 w-4" /> Quick Action
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="group">
              <Card className="glass rounded-[2rem] border-slate-200/50 shadow-ambient overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.title}</span>
                  <div className={`w-10 h-10 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold tracking-tight text-slate-900 mb-1">{stat.value}</div>
                  <div className="flex items-center gap-2">
                    <Badge variant="success" className="h-5 px-1.5 text-[10px]">{stat.change}</Badge>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Growth</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <main className="mt-8">
          <Tabs defaultValue="clients" className="space-y-10">
            <div className="flex justify-start overflow-x-auto pb-4 scrollbar-hide">
              <TabsList className="bg-slate-100/80 rounded-[2rem] p-1.5 h-auto border border-slate-200/50 shadow-inner flex">
                {[
                  { value: "clients", label: "Clients", icon: Users },
                  { value: "claims", label: "Claims", icon: FileText },
                  { value: "comparison", label: "Comparison", icon: ArrowUpDown },
                  { value: "documents", label: "Repository", icon: Upload },
                  { value: "reminders", label: "Alerts", icon: Bell },
                  { value: "reports", label: "Intelligence", icon: BarChart3 },
                  { value: "marketing", label: "Growth", icon: Sparkles }
                ].map((tab) => (
                  <TabsTrigger 
                    key={tab.value}
                    value={tab.value} 
                    className="flex items-center gap-2 px-6 py-3 rounded-[1.5rem] data-[state=active]:bg-white data-[state=active]:shadow-ambient data-[state=active]:text-blue-600 transition-all font-bold text-slate-500"
                  >
                    <tab.icon className="h-4 w-4" />
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Clients Tab */}
            <TabsContent value="clients" className="space-y-8 outline-none">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid gap-8">
                <Card className="glass rounded-[2.5rem] border-slate-200/50 shadow-ambient overflow-hidden">
                  <CardHeader className="p-8 lg:p-10 border-b border-slate-100">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                      <div>
                        <CardTitle className="text-2xl font-bold text-slate-900">Client Portfolio</CardTitle>
                        <CardDescription className="text-slate-500 font-medium tracking-tight">Managing {clients.length} institutional accounts</CardDescription>
                      </div>
                      <Dialog open={isAddClientOpen} onOpenChange={setIsAddClientOpen}>
                        <DialogTrigger asChild>
                          <Button className="bg-blue-600 hover:bg-indigo-700 shadow-lg rounded-2xl h-12 px-6 font-bold">
                            <Plus className="h-5 w-5 mr-2" /> Onboard Client
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="glass rounded-[2.5rem] border-slate-200/50 p-8">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold">New Client Registration</DialogTitle>
                            <DialogDescription>Initialize a new secure client profile.</DialogDescription>
                          </DialogHeader>
                          <form onSubmit={handleAddClient} className="space-y-6 pt-4">
                            <div className="space-y-2">
                              <Label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Legal Name</Label>
                              <Input name="clientName" placeholder="Rahul Sharma" required className="rounded-xl h-12" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Email</Label>
                                <Input name="clientEmail" type="email" placeholder="rahul@domain.com" required className="rounded-xl h-12" />
                              </div>
                              <div className="space-y-2">
                                <Label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Phone</Label>
                                <Input name="clientPhone" type="tel" placeholder="+91 XXXX" required className="rounded-xl h-12" />
                              </div>
                            </div>
                            <Button type="submit" className="w-full bg-blue-600 h-12 rounded-xl font-bold shadow-lg mt-4">Generate Profile</Button>
                          </form>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="p-6 bg-slate-50/50 border-b border-slate-100">
                      <div className="relative max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input
                          placeholder="Search identity or records..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-11 rounded-2xl h-11 border-slate-200 bg-white"
                        />
                      </div>
                    </div>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-slate-50/50 hover:bg-transparent">
                            <TableHead className="py-5 pl-8 text-[10px] font-black uppercase tracking-widest text-slate-500">Client Identity</TableHead>
                            <TableHead className="text-[10px] font-black uppercase tracking-widest text-slate-500 text-center">Status</TableHead>
                            <TableHead className="text-[10px] font-black uppercase tracking-widest text-slate-500">Policies</TableHead>
                            <TableHead className="text-[10px] font-black uppercase tracking-widest text-slate-500 text-right pr-8">Premium Vol.</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {clients.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase())).map((client) => (
                            <TableRow key={client.id} className="group border-b border-slate-50 hover:bg-blue-50/20 transition-colors">
                              <TableCell className="py-6 pl-8">
                                <div className="flex items-center gap-4">
                                  <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-500 shadow-sm">{client.name.charAt(0)}</div>
                                  <div>
                                    <div className="font-bold text-slate-900 group-hover:text-blue-600">{client.name}</div>
                                    <div className="text-xs text-slate-400 font-medium">{client.email}</div>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell className="text-center">
                                <Badge className={`rounded-full px-3 py-1 font-black text-[10px] tracking-tight ${
                                  client.status === "Active" ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-blue-50 text-blue-600 border-indigo-100"
                                }`}>{client.status.toUpperCase()}</Badge>
                              </TableCell>
                              <TableCell className="font-bold text-slate-600">{client.policies} Active</TableCell>
                              <TableCell className="text-right pr-8 font-black text-slate-900">₹{Number(client.premium).toLocaleString()}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Claims Tab */}
            <TabsContent value="claims" className="space-y-8 outline-none">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {claims.map((claim) => (
                  <Card key={claim.id} className="glass rounded-[2rem] border-slate-200/50 shadow-ambient overflow-hidden group hover:bg-white transition-all">
                    <CardHeader className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <Badge variant="outline" className="text-[10px] font-black">{claim.id}</Badge>
                        <Badge variant="info" className="text-[10px] font-black">{claim.stage}</Badge>
                      </div>
                      <CardTitle className="text-xl font-bold tracking-tight mb-1 group-hover:text-blue-600 transition-colors uppercase">{claim.client}</CardTitle>
                      <CardDescription className="font-bold text-[10px] uppercase tracking-widest text-slate-400">{claim.type} • {claim.date}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 pt-0 space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between text-[10px] font-black tracking-widest uppercase text-slate-400">
                          <span>Progress</span>
                          <span>{claim.status}%</span>
                        </div>
                        <Progress value={claim.status} className="h-2" />
                      </div>
                      <div className="flex items-center gap-4 py-4 border-t border-slate-50">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600"><TrendingUp className="h-5 w-5" /></div>
                        <div>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Estimated Value</p>
                          <p className="text-lg font-black text-slate-900 tracking-tight">{claim.amount}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </TabsContent>

            {/* Comparison Tab */}
            <TabsContent value="comparison" className="space-y-8 outline-none">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <Card className="glass rounded-[2.5rem] border-slate-200/50 shadow-ambient overflow-hidden">
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader className="bg-slate-50/50">
                        <TableRow className="border-b border-slate-100 hover:bg-transparent">
                          <TableHead className="py-6 pl-8 text-[10px] font-black uppercase tracking-widest">Provider</TableHead>
                          <TableHead className="text-[10px] font-black uppercase tracking-widest">Plan</TableHead>
                          <TableHead className="text-[10px] font-black uppercase tracking-widest">Premium</TableHead>
                          <TableHead className="text-[10px] font-black uppercase tracking-widest">Coverage</TableHead>
                          <TableHead className="text-[10px] font-black uppercase tracking-widest">Rating</TableHead>
                          <TableHead className="text-right pr-8 text-[10px] font-black uppercase tracking-widest">Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {sortedPolicies.map((p, i) => (
                          <TableRow key={i} className="border-b border-slate-50 hover:bg-blue-50/20">
                            <TableCell className="py-6 pl-8 font-black text-slate-900 group-hover:text-blue-600">{p.provider}</TableCell>
                            <TableCell className="font-bold text-slate-500">{p.plan}</TableCell>
                            <TableCell className="font-black text-slate-900">{p.premium}</TableCell>
                            <TableCell className="font-bold text-slate-400">{p.coverage}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-1 bg-amber-50 rounded-lg px-2 py-1 w-fit border border-amber-100">
                                <span className="text-xs font-black text-amber-700">{p.rating} ★</span>
                              </div>
                            </TableCell>
                            <TableCell className="text-right pr-8">
                              <Button variant="ghost" className="rounded-xl h-9 px-4 font-bold text-blue-600 hover:bg-white hover:shadow-sm">Select</Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Documents Tab */}
            <TabsContent value="documents" className="space-y-8 outline-none">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid gap-8">
                <Card className="glass rounded-[2.5rem] border-slate-200/50 shadow-ambient overflow-hidden">
                  <CardHeader className="p-8 lg:p-10 border-b border-slate-100">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                      <div>
                        <CardTitle className="text-2xl font-bold">Document Repository</CardTitle>
                        <CardDescription className="text-slate-500 font-medium">Secure institutional storage for policies and records</CardDescription>
                      </div>
                      <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
                        <DialogTrigger asChild>
                          <Button className="bg-blue-600 hover:bg-indigo-700 shadow-lg h-11 rounded-xl px-6 font-bold"><Upload className="h-4 w-4 mr-2" /> Upload</Button>
                        </DialogTrigger>
                        <DialogContent className="glass rounded-[2rem] border-slate-200/50 p-8">
                          <DialogHeader><DialogTitle>Secure Asset Upload</DialogTitle></DialogHeader>
                          <form onSubmit={handleFileUpload} className="space-y-6 pt-4">
                            <div className="space-y-2">
                              <Label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Asset File</Label>
                              <Input type="file" ref={fileInputRef} onChange={handleFileSelect} className="rounded-xl h-12 pt-2" required />
                            </div>
                            <div className="space-y-2">
                              <Label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Classification</Label>
                              <Select onValueChange={setDocumentType} required>
                                <SelectTrigger className="rounded-xl h-12"><SelectValue placeholder="Select type" /></SelectTrigger>
                                <SelectContent className="rounded-xl">
                                  <SelectItem value="Policy">Policy document</SelectItem>
                                  <SelectItem value="ID">Identity verification</SelectItem>
                                  <SelectItem value="Claims">Claims record</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <Button type="submit" disabled={uploadingFile} className="w-full bg-blue-600 h-12 rounded-xl font-bold shadow-lg">{uploadingFile ? "Encrypting..." : "Finalize Upload"}</Button>
                          </form>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {uploadedFiles.map((file) => (
                        <Card key={file.id} className="glass rounded-2xl border-slate-100 shadow-sm hover:shadow-ambient transition-all group overflow-hidden border hover:border-indigo-100">
                          <CardContent className="p-6">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"><FileText className="h-6 w-6" /></div>
                            <div className="space-y-1">
                              <h4 className="font-bold text-slate-900 truncate tracking-tight">{file.name}</h4>
                              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{file.size} • {file.type}</p>
                              <p className="text-[10px] font-bold text-slate-400 italic mt-1">{file.date}</p>
                            </div>
                            <div className="flex gap-2 mt-6 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg hover:bg-blue-50 text-blue-600" onClick={() => handleFileDownload(file.id)}><Download className="h-4 w-4" /></Button>
                              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg hover:bg-red-50 text-red-500" onClick={() => handleFileDelete(file.id)}><Trash2 className="h-4 w-4" /></Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Reminders Tab */}
            <TabsContent value="reminders" className="space-y-8 outline-none">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid gap-8">
                <Card className="glass rounded-[2.5rem] border-slate-200/50 shadow-ambient overflow-hidden">
                  <CardHeader className="p-8 lg:p-10 border-b border-slate-100">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                      <div>
                        <CardTitle className="text-2xl font-bold text-slate-900">Alert Center</CardTitle>
                        <CardDescription className="text-slate-500 font-medium">Lifecycle management for institutional tasks</CardDescription>
                      </div>
                      <Dialog open={isReminderDialogOpen} onOpenChange={setIsReminderDialogOpen}>
                        <DialogTrigger asChild>
                          <Button className="bg-blue-600 hover:bg-indigo-700 shadow-lg rounded-2xl h-11 px-6 font-bold"><Plus className="h-4 w-4 mr-2" /> Set Alert</Button>
                        </DialogTrigger>
                        <DialogContent className="glass rounded-[2rem] border-slate-200/50 p-8">
                          <DialogHeader><DialogTitle>New Lifecycle Reminder</DialogTitle></DialogHeader>
                          <form onSubmit={handleCreateReminder} className="space-y-6 pt-4">
                            <div className="space-y-2">
                              <Label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Client Reference</Label>
                              <Select value={reminderFormData.clientId} onValueChange={(v: string) => setReminderFormData(f => ({...f, clientId: v}))} required>
                                <SelectTrigger className="rounded-xl h-12"><SelectValue placeholder="Select client" /></SelectTrigger>
                                <SelectContent className="rounded-xl">
                                  {clients.map(c => <SelectItem key={c.id} value={c.id.toString()}>{c.name}</SelectItem>)}
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Event Date</Label>
                                <Input type="date" value={reminderFormData.date} onChange={(e) => setReminderFormData(f => ({...f, date: e.target.value}))} className="rounded-xl h-12" required />
                              </div>
                              <div className="space-y-2">
                                <Label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Priority</Label>
                                <Select value={reminderFormData.priority} onValueChange={(v: string) => setReminderFormData(f => ({...f, priority: v}))} required>
                                  <SelectTrigger className="rounded-xl h-12"><SelectValue placeholder="Priority" /></SelectTrigger>
                                  <SelectContent className="rounded-xl">
                                    <SelectItem value="High">Priority (High)</SelectItem>
                                    <SelectItem value="Medium">Standard (Med)</SelectItem>
                                    <SelectItem value="Low">Future (Low)</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Event Description</Label>
                              <Input placeholder="Renewal of Health Policy" value={reminderFormData.type} onChange={(e) => setReminderFormData(f => ({...f, type: e.target.value}))} className="rounded-xl h-12" required />
                            </div>
                            <Button type="submit" className="w-full bg-blue-600 h-12 rounded-xl font-bold shadow-lg">Activate Reminder</Button>
                          </form>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      {reminders.length === 0 ? (
                        <div className="text-center py-12 text-slate-400 font-medium">No active lifecycle alerts found.</div>
                      ) : (
                        reminders.map((reminder) => (
                          <div key={reminder.id} className={`flex items-center justify-between p-6 glass border border-slate-100 rounded-2xl ${reminder.completed ? 'opacity-50 grayscale bg-slate-50/50' : 'bg-white shadow-sm hover:shadow-ambient transition-all'}`}>
                            <div className="flex items-center gap-6 flex-1">
                              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${reminder.completed ? 'bg-slate-100 text-slate-400' : 'bg-blue-50 text-blue-600'}`}>
                                <Calendar className="h-6 w-6" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-3">
                                  <p className={`font-bold text-slate-900 tracking-tight ${reminder.completed ? 'line-through' : ''}`}>{reminder.type}</p>
                                  {reminder.completed && <Badge variant="outline" className="text-[10px] font-black uppercase tracking-widest">COMPLETED</Badge>}
                                </div>
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-tight">{reminder.clientName}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-6">
                              <Badge className={`rounded-lg px-3 py-1 font-black text-[10px] tracking-tight ${
                                reminder.priority === "High" ? "bg-red-50 text-red-600 border-red-100" :
                                reminder.priority === "Medium" ? "bg-amber-50 text-amber-600 border-amber-100" : "bg-slate-50 text-slate-500 border-slate-100"
                              }`}>{reminder.priority?.toUpperCase()}</Badge>
                              <span className="text-xs font-black text-slate-500 tracking-tight">{new Date(reminder.date).toLocaleDateString()}</span>
                              <div className="flex gap-2">
                                {!reminder.completed && (
                                  <Button variant="ghost" size="icon" className="group" onClick={() => handleMarkReminderComplete(reminder.id)}><CheckCircle className="h-5 w-5 text-slate-300 group-hover:text-emerald-500" /></Button>
                                )}
                                <Button variant="ghost" size="icon" className="group" onClick={() => handleDeleteReminder(reminder.id)}><Trash2 className="h-5 w-5 text-slate-300 group-hover:text-red-500" /></Button>
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Reports Tab */}
            <TabsContent value="reports" className="space-y-8 outline-none">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid gap-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="glass rounded-[2rem] border-slate-200/50 shadow-ambient p-8">
                    <CardHeader className="p-0 mb-8"><CardTitle className="text-xl font-bold">Revenue Matrix</CardTitle></CardHeader>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={salesData}><CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" /><XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8'}} /><YAxis hide /><RechartsTooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '1rem', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} /><Bar dataKey="achieved" fill="#4f46e5" radius={[4, 4, 0, 0]} barSize={30} /></BarChart>
                      </ResponsiveContainer>
                    </div>
                  </Card>
                  <Card className="glass rounded-[2rem] border-slate-200/50 shadow-ambient p-8">
                    <CardHeader className="p-0 mb-8"><CardTitle className="text-xl font-bold">Growth Velocity</CardTitle></CardHeader>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={salesData}><CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" /><XAxis dataKey="month" hide /><YAxis hide /><RechartsTooltip contentStyle={{borderRadius: '1rem'}} /><Line type="monotone" dataKey="achieved" stroke="#4f46e5" strokeWidth={4} dot={{r: 4, fill: '#4f46e5'}} /></LineChart>
                      </ResponsiveContainer>
                    </div>
                  </Card>
                </div>
              </motion.div>
            </TabsContent>

            {/* Marketing Tab */}
            <TabsContent value="marketing" className="space-y-8 outline-none">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <Card className="glass rounded-[2.5rem] border-slate-200/50 shadow-ambient overflow-hidden">
                  <CardHeader className="p-8 lg:p-10 border-b border-slate-100 bg-blue-600 text-white">
                    <CardTitle className="text-2xl font-bold">Brand Acceleration Engine</CardTitle>
                    <CardDescription className="text-indigo-100 font-medium tracking-tight">Generate premium marketing collateral for your brand</CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 grid md:grid-cols-2 gap-10">
                    <div className="space-y-8">
                      <div>
                        <Label className="text-[10px] font-black uppercase tracking-widest text-slate-500 block mb-4">Distribution Platforms</Label>
                        <div className="grid grid-cols-2 gap-4">
                          {[
                            { name: "Facebook", icon: Facebook },
                            { name: "Instagram", icon: Instagram },
                            { name: "LinkedIn", icon: Linkedin },
                            { name: "X (Twitter)", icon: Twitter },
                          ].map((p, i) => (
                            <Button key={i} variant="outline" className="h-20 rounded-2xl flex flex-col gap-2 font-bold hover:border-blue-600 hover:text-blue-600 transition-all bg-white" onClick={() => handleGenerateMarketing(p.name)}>
                              <p.icon className="h-5 w-5" />
                              <span className="text-xs">{p.name}</span>
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-50 rounded-[2rem] p-8 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center">
                      <Sparkles className="h-10 w-10 text-indigo-200 mb-4" />
                      <h4 className="text-lg font-bold text-slate-900 mb-2">Creative Direction</h4>
                      <p className="text-sm text-slate-500 max-w-xs mb-6">Select a campaign theme to generate AI-driven marketing copies and designs.</p>
                      <Button className="rounded-xl font-bold bg-blue-600 shadow-lg">Activate AURA™ AI</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
