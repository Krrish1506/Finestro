import { CheckCircle, Users, TrendingUp, Shield, FileText, Bell, BarChart, Share2, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "framer-motion";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      icon: Users,
      title: "Centralized Client Management",
      description: "Manage all your clients, policies, and interactions in one unified platform."
    },
    {
      icon: FileText,
      title: "Document Management",
      description: "Secure storage for KYC documents, policy papers, and health cards with easy access."
    },
    {
      icon: TrendingUp,
      title: "Sales Analytics",
      description: "Track your performance with real-time insights and downloadable reports."
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Never miss a renewal or claim deadline with automated notifications."
    },
    {
      icon: BarChart,
      title: "Quote Comparison",
      description: "Compare policies across multiple providers to offer the best solutions."
    },
    {
      icon: Share2,
      title: "Marketing Toolkit",
      description: "Generate social media content and pamphlets to grow your business."
    }
  ];

  const testimonials = [
    {
      name: "Rajiv Shukla",
      role: "Senior Insurance Agent, Ahmedabad",
      quote: "Finestro transformed my workflow. I now manage 3x more clients with half the effort. The automated reminders alone saved me countless hours."
    },
    {
      name: "Priya Sharma",
      role: "Mutual Fund Advisor, Surat",
      quote: "The marketing toolkit is a game-changer. I can create professional social media posts in minutes and my client base has grown by 40%."
    },
    {
      name: "Amit Patel",
      role: "Insurance Agent, Baroda",
      quote: "Document management was always a headache. Now everything is organized, secure, and accessible from anywhere. Highly recommended!"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-b from-hero-blue-1 via-hero-blue-2 to-hero-blue-3 text-white pt-40 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[90vh] flex items-center"
        style={{
          background: 'linear-gradient(to bottom, #0052CC 0%, #0059E6 50%, #0066FF 100%)'
        }}
      >
        {/* Premium animated background elements - SUBTLE & BELOW CONTENT */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {/* Animated grid pattern - VERY SUBTLE */}
          <div className="absolute inset-0 bg-[linear-gradient(0_1px_0_rgba(59,130,246,0.05),0_0_0_rgba(59,130,246,0.05))] bg-[size:100%_2px] opacity-30"></div>
          
          {/* Animated gradient orbs - VERY FAINT */}
          <div className="absolute top-20 right-10 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/10 to-transparent blur-[150px] rounded-full animate-pulse-soft" style={{ pointerEvents: 'none' }}></div>
          <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-gradient-to-tr from-blue-400/10 via-blue-500/5 to-transparent blur-[160px] rounded-full" style={{ pointerEvents: 'none' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-400/5 to-blue-500/5 blur-[200px] rounded-full" style={{ pointerEvents: 'none' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Premium badge */}
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/40 text-white text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md"
                initial={{ opacity: 0, y: -20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.08, y: -2 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="size-4 text-white" />
                </motion.div>
                <span>Modernizing Indian Fintech</span>
              </motion.div>

              {/* Main heading with enhanced styling */}
              <motion.h1 
                className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-black mb-6 leading-[1.15] tracking-tight text-white drop-shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
              >
                <motion.span 
                  className="block text-white"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Streamline Your
                </motion.span>
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <span className="text-cyan-100 drop-shadow-lg">
                    Insurance Business
                  </span>
                </motion.span>
              </motion.h1>

              {/* Enhanced subheading */}
              <motion.p 
                className="text-lg md:text-xl mb-12 text-white/90 leading-relaxed max-w-2xl font-medium drop-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                The all-in-one infrastructure for agents across India. Manage clients, track claims, and grow your revenue with professional digital tools built for scale.
              </motion.p>

              {/* CTA Buttons with enhanced styling */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-5 pt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button 
                    onClick={() => onNavigate("dashboard")} 
                    size="lg" 
                    className="rounded-full shadow-2xl shadow-white/40 group bg-white text-blue-600 hover:shadow-white/60 hover:shadow-2xl h-16 px-10 text-base font-bold transition-all duration-300 active:scale-95 w-full sm:w-auto"
                  >
                    Start Free Trial
                    <ArrowRight className="size-5 ml-3 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button 
                    onClick={() => onNavigate("products")} 
                    size="lg" 
                    variant="outline" 
                    className="rounded-full border-2 border-white/80 bg-white/10 backdrop-blur-xl text-white hover:bg-white/20 hover:border-white h-16 px-10 text-base font-bold transition-all group w-full sm:w-auto"
                  >
                    Explore Products
                    <ArrowRight className="size-5 ml-3 opacity-80 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                  </Button>
                </motion.div>
              </motion.div>

              {/* Trust indicators */}
              <motion.div 
                className="flex flex-wrap items-center gap-8 mt-16 pt-8 border-t border-white/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <motion.div 
                  className="flex flex-col gap-1"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl font-black text-white drop-shadow">5000+</div>
                  <div className="text-sm text-white/80 font-semibold uppercase tracking-wide drop-shadow">Active Agents</div>
                </motion.div>
                <div className="h-14 w-px bg-white/20 hidden sm:block"></div>
                <motion.div 
                  className="flex flex-col gap-1"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl font-black text-cyan-100 drop-shadow">₹500Cr+</div>
                  <div className="text-sm text-white/80 font-semibold uppercase tracking-wide drop-shadow">Policies Managed</div>
                </motion.div>
                <div className="h-14 w-px bg-white/20 hidden sm:block"></div>
                <motion.div 
                  className="flex flex-col gap-1"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl font-black text-white drop-shadow">99.9%</div>
                  <div className="text-sm text-white/80 font-semibold uppercase tracking-wide drop-shadow">Uptime</div>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
              className="relative hidden lg:block"
            >
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/40 via-blue-400/20 to-transparent blur-4xl -z-10 rounded-[3rem]"></div>
              
              {/* Main image with premium styling */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: -10 }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1660099501266-f18132684a57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBpbnN1cmFuY2UlMjBhZ2VudCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2MDI2MTk1N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Finestro Digital Workspace"
                  className="rounded-[2.5rem] shadow-2xl border border-white/20 bg-white/5 backdrop-blur-sm"
                />
              </motion.div>

              {/* Floating card 1 - Enhanced */}
              <motion.div 
                className="absolute -bottom-8 -left-8 glass rounded-2xl shadow-2xl shadow-blue-500/30 border border-blue-300/20 p-5 backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5"
                initial={{ opacity: 0, x: -40, y: 40 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white font-bold shadow-lg"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    ✓
                  </motion.div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Success</div>
                    <div className="text-sm font-bold text-white">Renewal Automated</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating card 2 - New */}
              <motion.div 
                className="absolute top-20 right-0 glass rounded-2xl shadow-2xl shadow-blue-600/30 border border-blue-300/20 p-5 backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5"
                initial={{ opacity: 0, x: 40, y: -40 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    📈
                  </motion.div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Growth</div>
                    <div className="text-sm font-bold text-white">+42% Revenue</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating card 3 - New */}
              <motion.div 
                className="absolute bottom-32 -right-8 glass rounded-2xl shadow-2xl shadow-blue-500/30 border border-blue-300/20 p-5 backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5"
                initial={{ opacity: 0, x: 40, y: 40 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity }}
                  >
                    🔒
                  </motion.div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Security</div>
                    <div className="text-sm font-bold text-white">Bank-Grade Encryption</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points Solved */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Enterprise Infrastructure for Individual Agents</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium lead-relaxed">
              We solve the messy spreadsheets and manual follow-ups that slow down your growth.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Scattered Information", desc: "Bring all KYC, policies, and emails into one encrypted workspace." },
              { title: "Missed Renewals", desc: "Automated WhatsApp and SMS alerts ensure you never miss a client deadline." },
              { title: "Manual Marketing", desc: "Generate premium social media content and pamphlets in seconds." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="glass relative rounded-3xl border-slate-200/50 shadow-ambient overflow-hidden h-full group">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-slate-900">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Built for Growth</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
              Everything you need to manage and scale your insurance business in one unified vertical.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="flex gap-6 items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center shadow-inner">
                    <feature.icon className="h-7 w-7 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-blue-50/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-10 tracking-tight leading-[1.1]">Built Specifically for the Indian Market</h2>
              <div className="space-y-6">
                {[
                  "IRDAI Compliant Infrastructure",
                  "Aadhaar, PAN & KYC OCR Automation",
                  "Indian Payment Gateway Support",
                  "Vernacular Language Content Generation"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white">
                      <CheckCircle className="size-4" />
                    </div>
                    <span className="text-lg font-bold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1748609339084-ea43ec1b8fbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYwMjUxMjYxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Indian Fintech Analytics"
                className="rounded-[3rem] shadow-ambient-lg border border-slate-200"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Trusted by 5,000+ Agents</h2>
            <p className="text-xl text-slate-600 font-medium">
              Join the new generation of digital-first insurance experts.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass relative rounded-3xl border-slate-200/50 shadow-ambient-lg p-2">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-slate-900">{testimonial.name}</CardTitle>
                    <CardDescription className="text-blue-600 font-bold text-xs uppercase tracking-wider">{testimonial.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 font-medium italic leading-relaxed text-lg">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden text-white"
        style={{
          background: 'linear-gradient(to bottom, #0052CC 0%, #0059E6 50%, #0052CC 100%)'
        }}
      >
        {/* Premium gradient background - keeps z-stacking clean */}
        <div className="absolute inset-0 pointer-events-none opacity-0"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-blue-500/40 to-transparent blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-blue-400/30 to-transparent blur-[120px] rounded-full"></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Subtitle badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/40 text-white text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="size-4" />
              <span>Ready to Transform?</span>
            </motion.div>

            {/* Main heading */}
            <h2 className="text-5xl md:text-7xl font-black mb-10 leading-tight tracking-tight">
              <span>Ready to&nbsp;</span>
              <span className="gradient-text bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 bg-clip-text text-transparent">
                Digitize
              </span>
              <span>&nbsp;Your</span>
              <br />
              <span>Insurance Business?</span>
            </h2>

            {/* Subheading */}
            <p className="text-xl md:text-2xl mb-12 text-blue-100/70 font-medium max-w-3xl mx-auto leading-relaxed">
              Join thousands of modern agents who are already scaling their operations with Finestro. Start for free, upgrade as you grow.
            </p>

            {/* Feature list before CTA */}
            <div className="grid sm:grid-cols-3 gap-6 mb-12 py-8 px-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
              {[
                { label: "No Credit Card", icon: "💳" },
                { label: "14-Day Free Trial", icon: "⏱️" },
                { label: "Expert Onboarding", icon: "👥" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 justify-center"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-bold text-sm">{item.label}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Button 
                onClick={() => onNavigate("dashboard")} 
                size="lg" 
                className="rounded-xl shadow-2xl shadow-blue-500/40 group h-16 px-10 text-lg font-bold bg-gradient-to-r from-blue-500 to-blue-600 hover:shadow-blue-400/60 transition-all duration-300 hover:scale-105"
              >
                Start Your Free Trial
                <ArrowRight className="size-5 ml-3 group-hover:translate-x-1.5 transition-transform" />
              </Button>
              <Button 
                onClick={() => onNavigate("contact")} 
                size="lg" 
                variant="outline" 
                className="rounded-xl border-indigo-400/50 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 hover:border-indigo-300/70 h-16 px-10 text-lg font-bold transition-all group"
              >
                Schedule a Demo
                <ArrowRight className="size-5 ml-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all" />
              </Button>
            </motion.div>

            {/* Trust line */}
            <motion.p 
              className="mt-8 text-sm text-slate-400 font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              ✓ Used by 5000+ agents across India • ✓ Zero setup cost • ✓ IRDAI Compliant
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
