import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Contact info + social links (original data)
  const contactInfo = [
    { icon: Mail, label: "Email", value: "kanungopratiyusha@gmail.com", href: "mailto:kanungopratiyusha@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 9438026599", href: "tel:+919438026599" },
    { icon: MapPin, label: "Location", value: "Bhubaneswar, Odisha, India", href: "#" },
  ];
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/prats4344" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/pratiyushakanungo-sp4344" },
  ];

  // Form state and handlers (from second code)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/xovljyzb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  // Social links for form part (optional: you can merge both social arrays if needed)
  const socialLinksForm = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/prats4344' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/pratiyushakanungo-sp4344' },
    { name: 'Email', icon: Mail, href: 'mailto:kanungopratiyusha@gmail.com' }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30 px-6">
      <div className="container mx-auto max-w-6xl space-y-16">

        {/* Original Contact Cards */}
        <div className="text-center mb-16 slide-up">
          <Badge variant="outline" className="mb-4">Get In Touch</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's <span className="gradient-text">Connect</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm actively looking for new opportunities and would love to hear
            from you. Whether you have a job opportunity or just want to connect,
            feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          <div className="space-y-8 slide-up">

            {/* Contact Information Card */}
            <Card className="card-glow">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/20"><item.icon className="h-5 w-5 text-primary" /></div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href !== "#" ? (
                        <a href={item.href} className="font-medium hover:text-primary transition-colors">{item.value}</a>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links Card */}
            <Card className="card-glow">
              <CardHeader>
                <CardTitle className="text-xl">Follow Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-card border border-border hover:bg-muted transition-colors duration-300 group">
                      <social.icon className="h-6 w-6 group-hover:scale-110 transition-transform" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div>
        </div>

        {/* Animated Contact Form Section */}
        <div ref={ref}>
          <motion.div initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-semibold text-center mb-8">Contact Form</h2>
            <div className="flex justify-center space-x-6 mb-8">
              {socialLinksForm.map(link => (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full text-gray-700 hover:bg-gray-100 transition-all duration-300 hover:scale-110" title={link.name}>
                  <link.icon size={20} />
                </a>
              ))}
            </div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/70 rounded-3xl p-6 border border-gray-200/50">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" required className="w-full px-4 py-3 rounded-2xl border focus:ring-2 transition text-sm" />
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" required className="w-full px-4 py-3 rounded-2xl border focus:ring-2 transition text-sm" />
                <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Message" required rows={4} className="w-full px-4 py-3 rounded-2xl border focus:ring-2 transition resize-none text-sm" />
                <button type="submit" disabled={isSubmitting} className="w-full py-3 bg-gradient-to-r from-nature-teal/20 to-nature-violet/20 rounded-2xl font-medium hover:scale-105 transition disabled:opacity-50 flex justify-center items-center space-x-2">
                  {isSubmitting ? <div className="w-4 h-4 border-2 border-nature-teal border-t-transparent rounded-full animate-spin" /> : <Send size={14} />}
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
                {submitStatus === 'success' && <p className="text-center text-green-600">Thanks for reaching out! 🌟</p>}
                {submitStatus === 'error' && <p className="text-center text-red-600">Failed to send. Please try again.</p>}
              </form>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
