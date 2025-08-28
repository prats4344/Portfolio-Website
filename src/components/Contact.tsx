import { useRef } from "react";
import emailjs from "emailjs-com";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const form = useRef();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kanungopratiyusha@gmail.com",
      href: "mailto:kanungopratiyusha@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9438026599",
      href: "tel:+919438026599",
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

    emailjs
      .sendForm(
        "service_n1w14zb", // Your Service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
        form.current,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("Failed to send message, please try again.");
          console.error(error.text);
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
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm actively looking for new opportunities and would love to hear
            from you. Whether you have a job opportunity or just want to connect,
            feel free to reach out!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
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
                      <p className="text-sm text-muted-foreground">{item.label}</p>
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
          <div className="slide-up">
            <Card className="card-glow">
              <CardHeader>
                <CardTitle className="text-xl">Send Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="user_firstname"
                        className="text-sm font-medium mb-2 block"
                      >
                        First Name
                      </label>
                      <Input
                        id="user_firstname"
                        name="user_firstname"
                        placeholder="Your first name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="user_lastname"
                        className="text-sm font-medium mb-2 block"
                      >
                        Last Name
                      </label>
                      <Input
                        id="user_lastname"
                        name="user_lastname"
                        placeholder="Your last name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="user_email"
                      className="text-sm font-medium mb-2 block"
                    >
                      Email
                    </label>
                    <Input
                      id="user_email"
                      type="email"
                      name="user_email"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium mb-2 block"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-sm font-medium mb-2 block"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or opportunity..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
