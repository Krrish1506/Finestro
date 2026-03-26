import { Brain, TrendingUp, Bell, Target, FileText, Scan, LayoutDashboard, Shield, Zap, Database, Sparkles, Wand2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { motion } from "framer-motion";

export function FeaturesPage() {
  const features = [
    {
      icon: Brain,
      title: "AI-Driven Analytics",
      description: "Leverage machine learning to identify sales opportunities, predict client needs, and optimize your portfolio performance.",
      benefits: [
        "Predictive client behavior analysis",
        "Automated risk assessment",
        "Smart policy recommendations",
        "Market trend forecasting"
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Target,
      title: "Claim Tracking",
      description: "Real-time claim status monitoring with automated updates and proactive issue resolution.",
      benefits: [
        "Multi-stage progress visualization",
        "Automated status notifications",
        "Document requirement alerts",
        "Expected settlement timeline"
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Bell,
      title: "Renewal Reminders",
      description: "Never miss a renewal with intelligent, multi-channel notification system.",
      benefits: [
        "SMS, Email, WhatsApp alerts",
        "Customizable reminder schedules",
        "Client preference tracking",
        "Bulk reminder campaigns"
      ],
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: TrendingUp,
      title: "Personalized Recommendations",
      description: "AI-powered suggestions tailored to each client's life stage, risk profile, and financial goals.",
      benefits: [
        "Life event-based recommendations",
        "Coverage gap analysis",
        "Cross-sell opportunities",
        "Premium optimization suggestions"
      ],
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: FileText,
      title: "Automated Reporting",
      description: "Generate comprehensive reports instantly with customizable templates and automated distribution.",
      benefits: [
        "One-click report generation",
        "Scheduled report delivery",
        "Custom report templates",
        "Multi-format exports (PDF, Excel)"
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Scan,
      title: "OCR-Based Document Scanning",
      description: "Extract data from documents automatically with advanced optical character recognition technology.",
      benefits: [
        "Instant data extraction from IDs",
        "Automatic form population",
        "Multi-language support",
        "99.5% accuracy rate"
      ],
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: LayoutDashboard,
      title: "Customizable Dashboards",
      description: "Build your perfect workspace with drag-and-drop widgets and personalized views.",
      benefits: [
        "Drag-and-drop interface",
        "20+ widget types",
        "Multiple dashboard profiles",
        "Real-time data updates"
      ],
      color: "text-cyan-600",
      bgColor: "bg-cyan-50"
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Automate repetitive tasks and streamline your daily operations with smart workflows.",
      benefits: [
        "Custom automation rules",
        "Trigger-based actions",
        "Multi-step workflows",
        "Integration with external tools"
      ],
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    }
  ];

  const useCases = [
    {
      title: "New Client Onboarding",
      steps: [
        "OCR scans Aadhaar/PAN automatically",
        "AI validates documents and flags issues",
        "System recommends suitable policies",
        "Automated welcome email sent",
        "Renewal reminder scheduled"
      ]
    },
    {
      title: "Claim Processing",
      steps: [
        "Client submits claim via mobile",
        "OCR extracts data from receipts",
        "System tracks claim progress",
        "Automated updates sent to client",
        "AI predicts settlement date"
      ]
    },
    {
      title: "Renewal Management",
      steps: [
        "System detects upcoming renewals",
        "AI analyzes if better options exist",
        "Automated reminders sent (SMS/Email)",
        "One-click renewal processing",
        "Confirmation and receipt generated"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="text-white py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0052CC 0%, #0059E6 50%, #0066FF 100%)'
        }}
      >
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 blur-[80px] rounded-full"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-white/15 backdrop-blur-xl rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/30 shadow-lg rotate-3 hover:rotate-0 transition-transform duration-500">
              <Brain className="h-10 w-10 text-white" />
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/40 text-white text-xs font-bold uppercase tracking-widest mb-8">
              <Sparkles className="size-3" />
              <span>Next-Gen Capabilities</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-white">
              Advanced <span className="text-cyan-100">Features</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed">
              Powerful tools designed to give the modern agent a decisive edge. Powered by our proprietary Financial LLM.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Intelligent Modules</h2>
            <p className="text-xl text-slate-600 font-medium">
              Cutting-edge technology meets practical insurance operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 2) * 0.1 }}
              >
                <Card className="glass relative rounded-[2.5rem] border-slate-200/50 shadow-ambient p-2 group hover:shadow-ambient-lg transition-all h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className={`h-8 w-8 ${feature.color}`} />
                      </div>
                      <Badge variant="secondary" className="bg-blue-50 text-blue-600 border-blue-100 font-bold text-[10px] py-1 px-3 rounded-full">
                        AI OPTIMIZED
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-900 mb-2">{feature.title}</CardTitle>
                    <CardDescription className="text-lg text-slate-600 font-medium leading-relaxed">{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 pt-4 border-t border-slate-100/50">
                      <p className="text-xs font-black uppercase tracking-widest text-slate-400">Strategic Advantages</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {feature.benefits.map((benefit, bIndex) => (
                          <div key={bIndex} className="flex items-center gap-2 p-2 rounded-xl bg-white/50 border border-slate-100 group-hover:border-blue-100 transition-colors">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                            <span className="text-sm font-bold text-slate-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Vertical Flows</h2>
            <p className="text-xl text-slate-600 font-medium font-medium leading-relaxed">
              Real-world scenarios showing how our features work together.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass rounded-[3rem] border-slate-200/50 shadow-ambient p-4 h-full relative group overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                  <CardHeader className="pb-8">
                    <CardTitle className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {useCase.steps.map((step, sIndex) => (
                        <div key={sIndex} className="flex gap-4 items-start relative group/step">
                          <div className="flex-shrink-0 w-8 h-8 bg-white border border-slate-100 rounded-xl shadow-ambient flex items-center justify-center text-sm font-black text-blue-600 group-hover/step:bg-blue-600 group-hover/step:text-white transition-all">
                            {sIndex + 1}
                          </div>
                          <p className="text-sm font-bold text-slate-700 mt-1.5 leading-relaxed">{step}</p>
                          {sIndex < useCase.steps.length - 1 && (
                            <div className="absolute left-4 top-8 w-[1px] h-6 bg-slate-200 group-hover/step:bg-blue-200 transition-colors"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="ai" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-slate-100 rounded-[2rem] p-1.5 h-16 border border-slate-200 shadow-inner max-w-2xl w-full">
                <TabsTrigger value="ai" className="rounded-[1.5rem] data-[state=active]:bg-white data-[state=active]:shadow-ambient text-lg font-bold">AI Engineering</TabsTrigger>
                <TabsTrigger value="security" className="rounded-[1.5rem] data-[state=active]:bg-white data-[state=active]:shadow-ambient text-lg font-bold">Security</TabsTrigger>
                <TabsTrigger value="integration" className="rounded-[1.5rem] data-[state=active]:bg-white data-[state=active]:shadow-ambient text-lg font-bold">Integrations</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="ai">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <Card className="glass rounded-[3rem] border-slate-200/50 shadow-ambient-lg p-6 lg:p-12 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-3xl rounded-full"></div>
                  <CardHeader className="mb-8">
                    <CardTitle className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Intelligence Architecture</CardTitle>
                    <CardDescription className="text-xl text-slate-600 font-medium">Our models are trained on millions of high-fidelity financial transactions.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="space-y-8">
                        <div>
                          <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                              <Brain className="h-6 w-6 text-blue-600" />
                            </div>
                            Predictive Operations
                          </h4>
                          <div className="grid gap-4">
                            {[
                              { label: "Client Churn Guard", val: "92% Accuracy" },
                              { label: "Policy Recommendation", val: "Deep ML" },
                              { label: "Risk Assessment", val: "Automated" },
                              { label: "Premium Optimization", val: "Dynamic" }
                            ].map((item, i) => (
                              <div key={i} className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                <span className="font-bold text-slate-700">{item.label}</span>
                                <Badge className="bg-white text-blue-600 shadow-sm border-blue-50 font-black">{item.val}</Badge>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="space-y-8">
                        <div>
                          <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <div className="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center">
                              <Scan className="h-6 w-6 text-rose-600" />
                            </div>
                            OCR Performance
                          </h4>
                          <div className="grid gap-4">
                            {[
                              { label: "Extraction Precision", val: "99.5%" },
                              { label: "Regional Language Support", val: "22+" },
                              { label: "Latent Latency", val: "120ms" },
                              { label: "Handwriting Recognition", val: "Vision-AI" }
                            ].map((item, i) => (
                              <div key={i} className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                <span className="font-bold text-slate-700">{item.label}</span>
                                <Badge className="bg-white text-emerald-600 shadow-sm border-emerald-50 font-black">{item.val}</Badge>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="security">
              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}>
                <Card className="glass rounded-[3rem] border-slate-200/50 shadow-ambient-lg p-6 lg:p-12 overflow-hidden">
                  <CardHeader className="mb-8">
                    <CardTitle className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Institutional Trust</CardTitle>
                    <CardDescription className="text-xl text-slate-600 font-medium leading-relaxed">Infrastructure designed for zero-trust financial environments.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="p-8 bg-blue-900 text-white rounded-[2.5rem] relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full group-hover:bg-white/10 transition-colors"></div>
                        <Shield className="h-12 w-12 text-blue-300 mb-8" />
                        <h4 className="text-2xl font-bold mb-6">Data Fortification</h4>
                        <ul className="space-y-4">
                          {[
                            "AES-256 Multi-Layer Encryption",
                            "TLS 1.3 Transport Security",
                            "Hardware Security Modules (HSM)",
                            "Atomic Access Audits"
                          ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-blue-100 font-bold">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-8 bg-emerald-900 text-white rounded-[2.5rem] relative overflow-hidden group">
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 blur-3xl rounded-full group-hover:bg-white/10 transition-colors"></div>
                        <Database className="h-12 w-12 text-emerald-300 mb-8" />
                        <h4 className="text-2xl font-bold mb-6">Regulatory Shield</h4>
                        <ul className="space-y-4">
                          {[
                            "IRDAI Framework Compliance",
                            "ISO 27001 ISMS Certification",
                            "GDPR Sovereign Residency",
                            "Quarterly Third-Party Pen Tests"
                          ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-emerald-100 font-bold">
                              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="integration">
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <Card className="glass rounded-[3rem] border-slate-200/50 shadow-ambient-lg p-6 lg:p-12 overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <CardHeader className="px-0 mb-8">
                        <CardTitle className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Open Ecosystem</CardTitle>
                        <CardDescription className="text-xl text-slate-600 font-medium">Connect Finestro into your existing business vertical seamlessly.</CardDescription>
                      </CardHeader>
                      <div className="space-y-8">
                        <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                          <Zap className="h-8 w-8 text-blue-500 shrink-0" />
                          <div>
                            <h5 className="font-bold text-slate-900 mb-1">RESTful Command Center</h5>
                            <p className="text-sm font-medium text-slate-600">Full API documentation with 120ms p99 latency guarantees.</p>
                          </div>
                        </div>
                        <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                          <Wand2 className="h-8 w-8 text-blue-500 shrink-0" />
                          <div>
                            <h5 className="font-bold text-slate-900 mb-1">Webhook Events</h5>
                            <p className="text-sm font-medium text-slate-600">Real-time triggers for CRM sync and policy updates.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { name: "WhatsApp Business", color: "text-emerald-600" },
                        { name: "Razorpay / UPI", color: "text-blue-600" },
                        { name: "Postmark / Email", color: "text-blue-600" },
                        { name: "Salesforce CRM", color: "text-sky-600" },
                        { name: "Slack / Teams", color: "text-blue-600" },
                        { name: "HDFC / ICICI Auth", color: "text-blue-900" }
                      ].map((int, i) => (
                        <div key={i} className="p-6 bg-white border border-slate-100 rounded-2xl shadow-ambient flex items-center justify-center text-center group hover:bg-slate-50 transition-all">
                          <span className={`font-black text-xs uppercase tracking-widest ${int.color}`}>{int.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(99,102,241,0.15),transparent_60%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-tight">
            Ready to Upgrade Your <span className="gradient-text">Operations?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-slate-300 font-medium leading-relaxed">
            Deploy the Finestro core into your agency in under 10 minutes. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="rounded-2xl h-16 px-10 text-lg shadow-ambient-lg bg-white text-blue-600 hover:bg-slate-50 w-full sm:w-auto">
              Start Enterprise Trial
            </Button>
            <Button size="lg" variant="outline" className="rounded-2xl h-16 px-10 text-lg shadow-ambient border-white/20 text-white hover:bg-white/5 w-full sm:w-auto">
              Talk to Solutions Engineer
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
