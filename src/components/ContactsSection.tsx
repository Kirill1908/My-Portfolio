"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Phone, CheckCircle2, Copy, Check } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export function ContactsSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_KEY as string,
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setIsSuccess(true);
        (event.target as HTMLFormElement).reset();
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Submission error", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleCopy = (e: React.MouseEvent, value: string, label: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(value);
    setCopiedLabel(label);
    setTimeout(() => setCopiedLabel(null), 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kyrylo.hasan.dev@gmail.com",
      href: "mailto:kyrylo.hasan.dev@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+38 (093) 414-6423",
      href: "tel:+380934146423",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dnipro, Ukraine",
      href: "https://www.google.com/maps/search/?api=1&query=Dnipro,Ukraine",
    },
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Kirill1908", label: "GitHub" },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/kyrylo-hasan-09634611a/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:kyrylo.hasan.dev@gmail.com", label: "Email" },
  ];

  return (
    <section id="contacts" className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">Get In Touch</h2>
          <div className="w-28 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and interesting
            projects. Let&apos;s discuss how we can work together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gray-900/50 border-white/10">
              <h3 className="text-2xl text-white mb-6">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-300 text-sm mb-2 block">
                      First Name
                    </label>
                    <Input
                      name="first_name"
                      required
                      placeholder="Your first name"
                      className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 text-sm mb-2 block">
                      Last Name
                    </label>
                    <Input
                      name="last_name"
                      required
                      placeholder="Your last name"
                      className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-300 text-sm mb-2 block">
                    Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="text-gray-300 text-sm mb-2 block">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    required
                    placeholder="Project discussion"
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="text-gray-300 text-sm mb-2 block">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    required
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-emerald-500 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 disabled:opacity-50 transition-all"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl text-white mb-6">Let&apos;s connect</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I&apos;m currently available for freelance work and full-time
                opportunities. Whether you have a project in mind or just want
                to chat about technology, I&apos;d love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg border border-white/10 hover:border-emerald-500/50 transition-all duration-300 group relative cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/30 transition-all duration-300">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white">{info.value}</p>
                    </div>
                  </div>

                  {/* Copy Button */}
                  <div
                    onClick={(e) => handleCopy(e, info.value, info.label)}
                    className="p-2 text-gray-500 hover:text-emerald-400 transition-colors z-10"
                  >
                    {copiedLabel === info.label ? (
                      <Check className="w-5 h-5 text-emerald-500" />
                    ) : (
                      <Copy className="w-5 h-5 transition-opacity" />
                    )}
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-white text-lg mb-4">Follow me</h4>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      default: { delay: 1.2 + index * 0.1 },
                      scale: { duration: 0.1 },
                    }}
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-emerald-600 transition-all duration-300 shadow-emerald-500/20 hover:shadow-lg cursor-pointer"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-16 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2026 Kyrylo Hasan. Designed & Built with ❤️ using Next.js and
            Tailwind CSS.
          </p>
        </motion.div>
      </div>

      {/* Success Toast Popup */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%", scale: 0.9 }}
            animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
            exit={{ opacity: 0, y: 20, x: "-50%", scale: 0.9 }}
            className="fixed bottom-10 left-1/2 z-50 bg-emerald-600 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center space-x-3 border border-emerald-400/30 backdrop-blur-md"
          >
            <CheckCircle2 className="w-6 h-6 text-white" />
            <div>
              <p className="font-bold text-sm">Success!</p>
              <p className="text-xs opacity-90 text-white/90">
                Your message has been sent successfully.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
