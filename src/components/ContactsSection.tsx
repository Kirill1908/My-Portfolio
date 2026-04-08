"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Copy, Check } from "lucide-react";
import { useTranslations } from "next-intl";

import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { SOCIAL_LINKS } from "../constants/socials";
import { CONTACT_INFO } from "../constants/contacts";

export function ContactsSection() {
  const t = useTranslations("Contacts");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

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

  const handleCopy = (e: React.MouseEvent, value: string, key: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(value);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

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
          <h2 className="text-4xl md:text-5xl text-white mb-6">{t("title")}</h2>
          <div className="w-28 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            {t("description")}
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
              <h3 className="text-2xl text-white mb-6">{t("form.title")}</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-300 text-sm mb-2 block">
                      {t("form.firstName")}
                    </label>
                    <Input
                      name="first_name"
                      required
                      placeholder={t("form.placeholder.firstName")}
                      className="bg-black/50 border-white/20 text-white focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 text-sm mb-2 block">
                      {t("form.lastName")}
                    </label>
                    <Input
                      name="last_name"
                      required
                      placeholder={t("form.placeholder.lastName")}
                      className="bg-black/50 border-white/20 text-white focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-300 text-sm mb-2 block">
                    {t("form.email")}
                  </label>
                  <Input
                    name="email"
                    type="email"
                    required
                    placeholder={t("form.placeholder.email")}
                    className="bg-black/50 border-white/20 text-white focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="text-gray-300 text-sm mb-2 block">
                    {t("form.subject")}
                  </label>
                  <Input
                    name="subject"
                    required
                    placeholder={t("form.placeholder.subject")}
                    className="bg-black/50 border-white/20 text-white focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="text-gray-300 text-sm mb-2 block">
                    {t("form.message")}
                  </label>
                  <Textarea
                    name="message"
                    required
                    placeholder={t("form.placeholder.message")}
                    rows={5}
                    className="bg-black/50 border-white/20 text-white resize-none focus:border-emerald-500"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 transition-all"
                >
                  {isSubmitting ? t("form.sending") : t("form.submit")}
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
              <h3 className="text-2xl text-white mb-6">{t("info.title")}</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                {t("info.description")}
              </p>
            </div>

            <div className="space-y-4">
              {CONTACT_INFO.map((info) => (
                <motion.a
                  key={info.key}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg border border-white/10 hover:border-emerald-500/50 transition-all duration-300 group relative"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/30 transition-all">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">
                        {t(`info.labels.${info.key}`)}
                      </p>
                      <p className="text-white">{info.value}</p>
                    </div>
                  </div>
                  <div
                    onClick={(e) => handleCopy(e, info.value, info.key)}
                    className="p-2 text-gray-500 hover:text-emerald-400 transition-colors z-10"
                  >
                    {copiedKey === info.key ? (
                      <Check className="w-5 h-5 text-emerald-500" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-white text-lg mb-4">{t("info.follow")}</h4>
              <div className="flex space-x-4">
                {SOCIAL_LINKS.map(({ icon: Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-emerald-600 transition-all shadow-emerald-500/20 hover:shadow-lg"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 mt-16 pt-8 text-center">
          <p className="text-gray-400">{t("footer")}</p>
        </div>
      </div>

      {/* Success Toast */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%", scale: 0.9 }}
            animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
            exit={{ opacity: 0, y: 20, x: "-50%", scale: 0.9 }}
            className="fixed bottom-10 left-1/2 z-50 bg-emerald-600 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center space-x-3 border border-emerald-400/30 backdrop-blur-md"
          >
            <CheckCircle2 className="w-6 h-6" />
            <div>
              <p className="font-bold text-sm">{t("form.success.title")}</p>
              <p className="text-xs opacity-90">{t("form.success.message")}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
