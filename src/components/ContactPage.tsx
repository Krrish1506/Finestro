import { Mail, Phone, MapPin, MessageCircle, CreditCard, Sparkles, Send, Clock, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { motion } from "framer-motion";

export function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      value: "1800-123-456",
      description: "Mon-Sat, 9 AM - 7 PM IST",
      link: "tel:+911800123456"
    },
    {
      icon: Mail,
      title: "Email Support",
      value: "support@finestro.in",
      description: "We'll respond within 24 hours",
      link: "mailto:support@finestro.in"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+91 98765 43210",
      description: "Quick responses on WhatsApp",
      link: "https://wa.me/919876543210"
    },
    {
      icon: MapPin,
      title: "Our Location",
      value: "ASIA Campus, Ahmedabad",
      description: "Drive In Rd, Thaltej",
      link: "https://www.google.com/maps"
    }
  ];

  const paymentMethods = [
    { name: "UPI", supported: true },
    { name: "Net Banking", supported: true },
    { name: "Credit/Debit Card", supported: true },
    { name: "RTGS/NEFT", supported: true },
    { name: "Google Pay", supported: true },
    { name: "PhonePe", supported: true }
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/40 text-white text-xs font-bold uppercase tracking-widest mb-8">
              <Sparkles className="size-3" />
              <span>Support Excellence</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-white">
              Get in <span className="text-cyan-100">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed">
              Have questions about our enterprise infrastructure? Our team of fintech experts is ready to help you scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass text-center rounded-[2rem] border-slate-200/50 shadow-ambient p-2 group hover:bg-white transition-all cursor-pointer">
                  <CardHeader>
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-ambient group-hover:shadow-ambient-lg transition-all border border-slate-100/50">
                      <method.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a href={method.link} className="text-blue-600 font-bold mb-3 block text-lg">
                      {method.value}
                    </a>
                    <p className="text-slate-500 font-medium leading-relaxed">{method.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Send Us a Message</h2>
              <p className="text-lg text-slate-600 mb-12 font-medium leading-relaxed">
                Fill out the form below and our partnership division will reach out within one business cycle.
              </p>
              <Card className="glass rounded-[2rem] border-slate-200/50 shadow-ambient-lg p-4 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full"></div>
                <CardContent className="pt-6 relative z-10">
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="firstName" className="font-bold text-slate-700">First Name</Label>
                        <Input id="firstName" placeholder="Vikram" className="rounded-xl border-slate-200 bg-white/50 h-12" required />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="lastName" className="font-bold text-slate-700">Last Name</Label>
                        <Input id="lastName" placeholder="Sharma" className="rounded-xl border-slate-200 bg-white/50 h-12" required />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="email" className="font-bold text-slate-700">Business Email</Label>
                      <Input id="email" type="email" placeholder="v.sharma@agency.in" className="rounded-xl border-slate-200 bg-white/50 h-12" required />
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="phone" className="font-bold text-slate-700">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+91 98765 43210" className="rounded-xl border-slate-200 bg-white/50 h-12" required />
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="inquiryType" className="font-bold text-slate-700">Inquiry Type</Label>
                      <Select>
                        <SelectTrigger id="inquiryType" className="rounded-xl border-slate-200 bg-white/50 h-12">
                          <SelectValue placeholder="Select intent" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-slate-200">
                          <SelectItem value="demo">Enterprise Demo</SelectItem>
                          <SelectItem value="pricing">License Pricing</SelectItem>
                          <SelectItem value="support">Technical Integration</SelectItem>
                          <SelectItem value="partnership">Strategic Partnership</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="message" className="font-bold text-slate-700">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Detail your operational requirements..."
                        className="rounded-xl border-slate-200 bg-white/50 min-h-[150px]"
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full rounded-2xl h-14 text-lg shadow-ambient group">
                      Submit Inquiry
                      <Send className="size-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Additional Info */}
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-slate-900 mb-10 tracking-tight">Why Partner with Us?</h2>
                <div className="space-y-8">
                  {[
                    { icon: Clock, title: "24/7 Redundant Systems", desc: "Our tech support never sleeps. We ensure 99.9% uptime for your agent portal." },
                    { icon: Globe, title: "Pan-India Coverage", desc: "Native support for operations in 22 regional languages." },
                    { icon: Sparkles, title: "Next-Gen Infrastructure", desc: "Built on a secure dark-mesh architecture for ultimate data isolation." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 items-start group">
                      <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        <item.icon className="size-7" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Payment Options */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="glass rounded-3xl border-slate-200/50 shadow-ambient">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-ambient border border-slate-100">
                        <CreditCard className="size-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-slate-900">Settlement Options</CardTitle>
                        <CardDescription className="font-medium">Enterprise & subscription gateways</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {paymentMethods.map((method, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-white/50 rounded-xl border border-slate-100/50"
                        >
                          <div className="w-5 h-5 bg-emerald-500 text-white rounded-full flex items-center justify-center text-[10px] font-bold">
                            ✓
                          </div>
                          <span className="text-sm font-bold text-slate-700">{method.name}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Map Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="glass rounded-[2rem] h-64 border-slate-200/50 shadow-ambient overflow-hidden relative group">
                  <div className="absolute inset-0 bg-slate-100 animate-pulse group-hover:hidden"></div>
                  <div className="absolute inset-0 flex items-center justify-center bg-indigo-50/50 group-hover:bg-indigo-50 transition-colors">
                    <div className="text-center group-hover:scale-110 transition-transform duration-500">
                      <MapPin className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                      <p className="font-bold text-slate-900">Corporate HQ: Ahmedabad, Gujarat</p>
                      <p className="text-sm font-medium text-slate-500 mt-2">Drive In Rd, Thaltej | Open for Visits</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
