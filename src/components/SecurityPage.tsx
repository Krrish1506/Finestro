import { Shield, Lock, Cloud, FileCheck, Eye, Server, AlertTriangle, CheckCircle, FolderLock, Sparkles, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "framer-motion";

export function SecurityPage() {
  const securityFeatures = [
    {
      icon: Lock,
      title: "256-bit Encryption",
      description: "All data transmitted and stored is encrypted using industry-standard AES-256 encryption."
    },
    {
      icon: Cloud,
      title: "Secure Cloud Storage",
      description: "Documents and data stored on ISO 27001 certified cloud infrastructure with automated backups."
    },
    {
      icon: Eye,
      title: "Password Protection",
      description: "Multi-layer password protection with role-based access control for sensitive documents."
    },
    {
      icon: Server,
      title: "Data Redundancy",
      description: "Multiple backup systems ensure your data is never lost, with 99.9% uptime guarantee."
    },
    {
      icon: FileCheck,
      title: "Audit Trails",
      description: "Complete activity logs for compliance verification and security monitoring."
    },
    {
      icon: AlertTriangle,
      title: "Real-time Alerts",
      description: "Instant notifications for suspicious activities or unauthorized access attempts."
    }
  ];

  const complianceStandards = [
    {
      name: "IRDAI Compliant",
      description: "Full compliance with Insurance Regulatory and Development Authority of India guidelines",
      status: "Certified"
    },
    {
      name: "ISO 27001",
      description: "Information Security Management System certification",
      status: "Certified"
    },
    {
      name: "Data Protection",
      description: "Adherence to Indian data protection and privacy laws",
      status: "Compliant"
    },
    {
      name: "PCI DSS",
      description: "Payment Card Industry Data Security Standard for payment processing",
      status: "Compliant"
    },
    {
      name: "SOC 2 Type II",
      description: "Service Organization Control certification for security controls",
      status: "In Progress"
    },
    {
      name: "GDPR Ready",
      description: "General Data Protection Regulation compliance framework",
      status: "Compliant"
    }
  ];

  const dataProtectionPractices = [
    "End-to-end encryption for all client communications",
    "Regular third-party security audits and penetration testing",
    "Automated malware scanning and threat detection",
    "Secure API integrations with insurance providers",
    "Two-factor authentication (2FA) for agent accounts",
    "Automatic session timeout and secure logout",
    "Regular security patches and software updates",
    "Data anonymization for analytics and reporting"
  ];

  const accessControls = [
    {
      level: "Agent Access",
      permissions: ["View own clients", "Upload documents", "Generate reports"],
      color: "border-blue-200/50 bg-blue-50/10"
    },
    {
      level: "Admin Access",
      permissions: ["Manage all agents", "System configuration", "Compliance reports"],
      color: "border-blue-200/50 bg-blue-50/10"
    },
    {
      level: "Client Access",
      permissions: ["View own policies", "Download documents", "Track claims"],
      color: "border-emerald-200/50 bg-emerald-50/10"
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
              <span>Cyber Resilience</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-white">
              Security & <span className="text-cyan-100">Compliance</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed">
              We implement industry-leading protocols to protect your business and sensitive client information. Built on zero-trust architecture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Enterprise Infrastructure</h2>
            <p className="text-xl text-slate-600 font-medium">
              Built with security at the core, not as an afterthought.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass relative rounded-[2.5rem] border-slate-200/50 shadow-ambient p-2 group hover:bg-white transition-all h-full">
                  <CardHeader>
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-ambient group-hover:shadow-ambient-lg transition-all border border-slate-100">
                      <feature.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{feature.title}</CardTitle>
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

      {/* Compliance Standards */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Compliance & Certifications</h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              Meeting and exceeding global financial regulatory requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <Card className="glass relative rounded-[2rem] border-slate-200/50 shadow-ambient p-1 h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <CardTitle className="text-lg font-bold text-slate-900">{standard.name}</CardTitle>
                      <Badge variant={
                        standard.status === "Certified" ? "default" :
                        standard.status === "Compliant" ? "secondary" :
                        "outline"
                      } className="rounded-full px-3 py-1 font-bold text-[10px] uppercase tracking-wider">
                        {standard.status}
                      </Badge>
                    </div>
                    <CardDescription className="font-medium text-slate-600 leading-relaxed">{standard.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">Comprehensive Protection</h2>
              <p className="text-xl text-slate-600 mb-10 font-medium leading-relaxed">
                We implement multiple layers of cryptographic security to ensure your data remains your property.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {dataProtectionPractices.map((practice, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-ambient border border-slate-100 group hover:border-indigo-200 transition-colors">
                    <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-bold text-slate-700">{practice}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1730085422157-6783ac9306b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudCUyMHNlY3VyaXR5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjAyNjE5NTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Security Technology"
                className="rounded-[3rem] shadow-ambient-lg border border-slate-200"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Access Control */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Access Control</h2>
            <p className="text-xl text-slate-600 font-medium">
              Role-based permissions with audit trails for every operation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {accessControls.map((control, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`glass rounded-[2rem] border-2 ${control.color} shadow-ambient-lg h-full overflow-hidden`}>
                  <CardHeader className="bg-white/40 border-b border-slate-100/50">
                    <CardTitle className="flex items-center gap-3 text-slate-900 font-bold">
                      <Lock className="h-5 w-5 text-blue-600" />
                      {control.level}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-4">
                      {control.permissions.map((permission, pIndex) => (
                        <li key={pIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full shadow-lg shadow-indigo-300 flex-shrink-0" />
                          <span className="text-sm font-bold text-slate-700">{permission}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Security */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <Card className="glass relative rounded-[3rem] border-indigo-100 shadow-ambient-lg overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full"></div>
                <CardHeader className="p-10 pb-0">
                  <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100/50 text-blue-600 text-xs font-black uppercase tracking-widest mb-6">
                    <FolderLock className="size-4" />
                    <span>Secure Vault</span>
                  </div>
                  <CardTitle className="text-3xl font-bold text-slate-900">Document Governance</CardTitle>
                </CardHeader>
                <CardContent className="p-10 space-y-6">
                  {[
                    { title: "Password-Protected Vault", desc: "Aadhaar, PAN, and Health ID storage encrypted with individual keys." },
                    { title: "Expiry-Controlled Links", desc: "Share documents with time-limited access and view-count restrictions." },
                    { title: "Immutable Audit Trails", desc: "Every view, download, and share is logged in a tamper-proof ledger." }
                  ].map((item, i) => (
                    <div key={i} className="p-6 bg-slate-50/50 rounded-2xl border border-slate-100 group hover:bg-white hover:shadow-ambient transition-all cursor-default">
                      <h4 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                      <p className="text-sm text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">Institutional Trust</h2>
              <p className="text-xl text-slate-600 mb-10 font-medium leading-relaxed">
                Every document is treated as an asset. We maintain the highest standards of custodial security.
              </p>
              <div className="space-y-8">
                {[
                  { title: "Automated Malware Scanning", desc: "Zero-day threat detection for every file upload." },
                  { title: "Dynamic Watermarking", desc: "Anti-leak protection for sensitive client policy sets." },
                  { title: "Cryptographic Deletion", desc: "Verified file scrubbing for ultimate data sovereignty." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 items-start group">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-ambient border border-slate-100 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                      <CheckCircle className="size-6 text-emerald-500 group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1 transition-colors">{item.title}</h4>
                      <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust & Transparency */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-indigo-900/40 to-transparent"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Resilience Guaranteed</h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-16 max-w-3xl mx-auto font-medium leading-relaxed">
            Security is a continuous journey. We are committed to maintaining the highest standard of infrastructure visibility.
          </p>
          <div className="grid sm:grid-cols-3 gap-12">
            {[
              { val: "24/7", label: "Global Monitoring" },
              { val: "99.9%", label: "System Uptime" },
              { val: "< 1hr", label: "SLA Response" }
            ].map((stat, i) => (
              <div key={i} className="p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 shadow-ambient-lg">
                <div className="text-5xl font-black gradient-text mb-2">{stat.val}</div>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
