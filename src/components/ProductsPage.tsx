import { Heart, LifeBuoy, Shield, TrendingUp, Search, FileCheck, Upload, FolderLock, Bell, BarChart3, ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export function ProductsPage() {
  const features = [
    {
      icon: Search,
      title: "Quote Comparison",
      description: "Compare policies from 20+ providers instantly to find the best fit for your clients."
    },
    {
      icon: FileCheck,
      title: "Claim Tracking",
      description: "Initiate and track claims in real-time with automated status updates."
    },
    {
      icon: BarChart3,
      title: "Plan Validators",
      description: "Validate and compare plans with detailed analysis and recommendations."
    },
    {
      icon: Upload,
      title: "Document Upload",
      description: "Seamlessly upload Aadhaar, PAN, health cards, and application forms."
    },
    {
      icon: FolderLock,
      title: "Secure Storage",
      description: "Password-protected document center for all policy documents and receipts."
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Automated renewal and claim deadline notifications via SMS, email, and WhatsApp."
    }
  ];

  const productCategories = [
    {
      id: "health",
      name: "Health Insurance",
      icon: Heart,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50/50",
      description: "Comprehensive health insurance solutions with cashless treatment and family coverage options.",
      plans: [
        { name: "Individual Health Plans", coverage: "₹5L - ₹1Cr", features: ["Cashless hospitalization", "Pre & post hospitalization", "Daycare procedures"] },
        { name: "Family Floater Plans", coverage: "₹10L - ₹2Cr", features: ["Family coverage", "Maternity benefits", "New-born coverage"] },
        { name: "Senior Citizen Plans", coverage: "₹3L - ₹50L", features: ["No medical check-up", "Pre-existing diseases", "Lifelong renewability"] },
        { name: "Critical Illness Cover", coverage: "₹10L - ₹1Cr", features: ["Lump sum payout", "40+ critical illnesses", "Cancer care"] }
      ]
    },
    {
      id: "life",
      name: "Life Insurance",
      icon: LifeBuoy,
      color: "text-blue-600",
      bgColor: "bg-indigo-50/50",
      description: "Life coverage solutions including term plans, endowment, and ULIPs for financial security.",
      plans: [
        { name: "Term Insurance", coverage: "₹25L - ₹10Cr", features: ["Pure protection", "Affordable premiums", "Rider options"] },
        { name: "Endowment Plans", coverage: "₹5L - ₹50L", features: ["Savings + Insurance", "Maturity benefits", "Tax benefits"] },
        { name: "ULIP Plans", coverage: "₹10L - ₹1Cr", features: ["Market-linked returns", "Flexible premiums", "Wealth creation"] },
        { name: "Child Plans", coverage: "₹10L - ₹50L", features: ["Education planning", "Premium waiver", "Guaranteed returns"] }
      ]
    },
    {
      id: "general",
      name: "General Insurance",
      icon: Shield,
      color: "text-blue-600",
      bgColor: "bg-blue-50/50",
      description: "Protect assets with motor, home, travel, and business insurance solutions.",
      plans: [
        { name: "Motor Insurance", coverage: "IDV Based", features: ["Comprehensive coverage", "Third-party liability", "Cashless repairs"] },
        { name: "Home Insurance", coverage: "₹5L - ₹1Cr", features: ["Property protection", "Content coverage", "Natural calamities"] },
        { name: "Travel Insurance", coverage: "As per plan", features: ["Medical emergencies", "Trip cancellation", "Lost baggage"] },
        { name: "Business Insurance", coverage: "Customized", features: ["Property damage", "Liability coverage", "Business interruption"] }
      ]
    },
    {
      id: "mutual-funds",
      name: "Mutual Funds",
      icon: TrendingUp,
      color: "text-violet-600",
      bgColor: "bg-violet-50/50",
      description: "Diversified investment options across equity, debt, and hybrid mutual funds.",
      plans: [
        { name: "Equity Funds", coverage: "Market-linked", features: ["High growth potential", "Long-term wealth", "Tax benefits"] },
        { name: "Debt Funds", coverage: "Stable returns", features: ["Low risk", "Regular income", "Capital preservation"] },
        { name: "Hybrid Funds", coverage: "Balanced", features: ["Equity + Debt", "Moderate risk", "Diversification"] },
        { name: "Tax Saving Funds (ELSS)", coverage: "80C benefits", features: ["Tax deduction", "3-year lock-in", "Equity returns"] }
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
              <ShieldCheck className="h-10 w-10 text-white" />
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/40 text-white text-xs font-bold uppercase tracking-widest mb-8">
              <Sparkles className="size-3" />
              <span>Premium Products Suite</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-white">
              Digital <span className="text-cyan-100">Infrastructure</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed">
              Comprehensive tools for managing Health, Life, General Insurance, and Mutual Funds—all in one premium unified workspace.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Features Overview */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Unified Core Features</h2>
            <p className="text-xl text-slate-600 font-medium">
              Every vertical in our platform is powered by these institutional tools.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.1 }}
              >
                <Card className="glass relative rounded-[2.5rem] border-slate-200/50 shadow-ambient p-2 group hover:bg-white transition-all h-full cursor-default">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="h-7 w-7 text-blue-600" />
                      </div>
                      <ArrowRight className="h-5 w-5 text-blue-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 font-medium leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories with Tabs */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <Tabs defaultValue="health" className="w-full">
            <div className="flex justify-center mb-16">
              <TabsList className="bg-slate-100 rounded-[2.5rem] p-1.5 h-auto lg:h-20 border border-slate-200 shadow-inner w-full max-w-4xl grid grid-cols-2 lg:grid-cols-4 gap-2">
                {productCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex flex-row lg:flex-col items-center gap-3 px-6 py-4 rounded-[2rem] data-[state=active]:bg-white data-[state=active]:shadow-ambient data-[state=active]:border-indigo-200/50 transition-all duration-300 group"
                  >
                    <div className={`p-2 rounded-xl bg-slate-50 shadow-inner group-data-[state=active]:bg-white transition-colors`}>
                      <category.icon className={`h-5 w-5 ${category.color}`} />
                    </div>
                    <span className="font-bold text-slate-700 group-data-[state=active]:text-slate-900">{category.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {productCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-16"
                >
                  {/* Category Header */}
                  <div className={`glass relative rounded-[3rem] p-10 lg:p-16 overflow-hidden border-slate-200/50 shadow-ambient-lg`}>
                    <div className={`absolute top-0 left-0 w-2 h-full ${category.color.replace('text-', 'bg-')}`}></div>
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 relative z-10">
                      <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-ambient-lg border border-slate-100 shrink-0">
                        <category.icon className={`h-12 w-12 ${category.color}`} />
                      </div>
                      <div>
                        <Badge className="bg-blue-50 text-blue-600 border-blue-100 font-black text-[10px] tracking-widest uppercase mb-4 px-4">PRODUCT LINE</Badge>
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">{category.name}</h2>
                        <p className="text-xl text-slate-600 mt-4 max-w-3xl font-medium leading-relaxed">{category.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Plans Grid */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {category.plans.map((plan, index) => (
                      <Card key={index} className="glass rounded-[2rem] border-slate-100 shadow-ambient overflow-hidden group hover:bg-white transition-all">
                        <CardHeader className="p-8 pb-0">
                          <div className="flex justify-between items-start mb-6">
                            <CardTitle className="text-2xl font-bold text-slate-900">{plan.name}</CardTitle>
                            <Badge className="bg-blue-600 text-white shadow-lg shadow-blue-200 rounded-full px-4 py-1.5 font-black text-xs">
                              {plan.coverage}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="p-8 pt-6">
                          <ul className="space-y-4">
                            {plan.features.map((feature, fIndex) => (
                              <li key={fIndex} className="flex items-center gap-4 group/item">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full group-hover/item:scale-125 transition-transform shrink-0 shadow-lg shadow-indigo-300" />
                                <span className="text-slate-700 font-bold leading-relaxed">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Category-specific Tools */}
                  <Card className="glass rounded-[3rem] border-indigo-100/50 shadow-ambient-lg overflow-hidden bg-indigo-50/10">
                    <CardHeader className="p-10 lg:p-12 pb-6 text-center lg:text-left">
                      <CardTitle className="text-2xl font-bold flex flex-col lg:flex-row items-center gap-3">
                        <Zap className="h-8 w-8 text-blue-600" />
                        Integrated Verticals for {category.name}
                      </CardTitle>
                      <CardDescription className="text-lg font-medium text-slate-600">
                        Streamline your {category.name.toLowerCase()} operations with our embedded infrastructure.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-10 lg:p-12 pt-0">
                      <div className="grid md:grid-cols-3 gap-6">
                        {[
                          { icon: Search, title: "Comparison Engine", desc: "Native side-by-side analysis for 20+ carriers." },
                          { icon: Upload, title: "KYC Onboarding", desc: "Automated Aadhaar/PAN validation triggers." },
                          { icon: Bell, title: "Lifecycle Alerts", desc: "Rule-based renewals and claim triggers." }
                        ].map((tool, tIndex) => (
                          <div key={tIndex} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-ambient group hover:shadow-ambient-lg transition-all">
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                              <tool.icon className="h-6 w-6 text-blue-600 group-hover:text-white" />
                            </div>
                            <h5 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{tool.title}</h5>
                            <p className="text-sm font-medium text-slate-600 leading-relaxed">{tool.desc}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Document Upload Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-50/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.05),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-blue-50 text-blue-600 border-blue-100 font-black text-[10px] tracking-widest uppercase mb-6 px-4">DATA SOVEREIGNTY</Badge>
              <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">Secure Vault <span className="gradient-text">Management</span></h2>
              <p className="text-xl text-slate-600 mb-10 font-medium leading-relaxed">
                A unified, encrypted document workspace for institutional document custody and client record management.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { label: "Aadhaar / PAN Vault", desc: "Validated at source." },
                  { label: "Medical History", desc: "Long-term cold storage." },
                  { label: "Policy Ledger", desc: "Immutable trail." },
                  { label: "KYC Cryptography", desc: "Bank-level standards." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-white rounded-2xl shadow-ambient border border-slate-100 group hover:shadow-ambient-lg transition-all">
                    <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
                      <ShieldCheck className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 text-sm">{item.label}</h5>
                      <p className="text-xs text-slate-500 font-bold">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-indigo-500/10 blur-[100px] rounded-full scale-110"></div>
              <Card className="glass relative rounded-[3rem] border-indigo-100 shadow-ambient-lg overflow-hidden p-1">
                <div className="bg-white rounded-[2.8rem] border border-slate-50 p-12 text-center group cursor-pointer hover:border-indigo-100 transition-colors">
                  <div className="w-24 h-24 bg-blue-50 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-500">
                    <Upload className="h-10 w-10 text-blue-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">Enterprise Dropzone</h3>
                  <p className="text-slate-600 font-medium mb-8 leading-relaxed max-w-sm mx-auto">
                    Institutional-grade document ingestion. Drag PDFs, high-res images, or ZIP archives up to <span className="text-blue-600 font-black">100MB</span> per session.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {["Aadhaar", "PAN", "Health Card", "Policy Ledger", "Form 16"].map((tag, i) => (
                      <Badge key={i} variant="secondary" className="bg-slate-100 text-slate-600 border-slate-200 font-black text-[10px] tracking-widest px-4 py-1.5 uppercase rounded-full">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-12 pt-10 border-t border-slate-50">
                    <Button size="lg" className="rounded-2xl h-14 px-10 shadow-ambient-lg font-bold bg-blue-600 text-white hover:bg-blue-700">
                      Browse Files
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
