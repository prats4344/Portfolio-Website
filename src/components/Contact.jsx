import { useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Github, Linkedin } from "lucide-react"; // Phone removed
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kanungopratiyusha@gmail.com",
      href: "mailto:kanungopratiyusha@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bhubaneswar, Odisha, India",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/prats4344",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/pratiyushakanungo-sp4344",
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_n1w14zb", 
        "template_mqef6t3", 
        form.current,
        "Zl_2YLh4rHUXqZiYS" 
      )
      .then(
        () => {
          setStatus("Message sent successfully ✅");
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("Something went wrong ❌");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 slide-up">
          <Badge variant="outline" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm actively looking for new opportunities and would love to hear
            from you. Whether you have a job opportunity or just want to connect,
            feel free to reach out!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Info + Social */}
          <div className="space-y-8 slide-up">
            <Card className="card-glow">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/20">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">
                        {item.label}
                      </p>
                      {item.href !== "#" ? (
                        <a
                          href={item.href}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="card-glow">
              <CardHeader>
                <CardTitle className="text-xl">Follow Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-card border border-border hover:bg-muted transition-colors duration-300 group"
                    >
                      <social.icon className="h-6 w-6 group-hover:scale-110 transition-transform" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="card-glow slide-up">
            <CardHeader>
              <CardTitle className="text-xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label className="block text-sm mb-2">Name</label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    className="w-full p-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Email</label>
                  <input
                    type="email"
                    name="reply_to"
                    required
                    className="w-full p-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    className="w-full p-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary outline-none"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
                {status && (
                  <p className="text-center text-sm text-muted-foreground">
                    {status}
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
