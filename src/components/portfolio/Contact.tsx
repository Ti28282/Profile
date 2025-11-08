import { useState, useRef } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner@2.0.3";
import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from 'motion/react';
import { useInView } from 'motion/react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success("Сообщение отправлено!");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 bg-white dark:bg-gray-950 transition-colors"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="mb-4 text-gray-900 dark:text-white">Контакты</h2>
            <motion.div
              className="w-12 h-0.5 bg-gray-900 dark:bg-white mb-6"
              initial={{ width: 0 }}
              animate={isInView ? { width: 48 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-600 dark:text-gray-400"
            >
              Свяжитесь со мной для обсуждения проекта или сотрудничества
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div>
                <Label htmlFor="name" className="text-gray-900 dark:text-white">Имя</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-2 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-900 dark:text-white">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-2 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800"
                  required
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-gray-900 dark:text-white">Сообщение</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="mt-2 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Отправка..." : "Отправить"}
              </Button>
            </motion.form>

            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div>
                <h3 className="text-gray-900 dark:text-white mb-4">
                  Прямые контакты
                </h3>
                <div className="space-y-4">
                  <motion.a
                    href="mailto:example@email.com"
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Mail className="w-5 h-5" />
                    <span>example@email.com</span>
                  </motion.a>
                  <motion.a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </motion.a>
                </div>
              </div>

              <div>
                <h3 className="text-gray-900 dark:text-white mb-4">
                  Доступность
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Открыт для обсуждения новых проектов и возможностей сотрудничества. 
                  Отвечу в течение 24 часов.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
