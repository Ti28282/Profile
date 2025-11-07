import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Спасибо за сообщение! Я свяжусь с вами в ближайшее время.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="mb-4 text-gray-900 dark:text-white">Контакты</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Нужна помощь с backend разработкой или архитектурой? Давайте обсудим ваш проект
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
              <h3 className="mb-6 text-gray-900 dark:text-white">
                Написать мне
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
                    Имя
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ваше имя"
                    required
                    className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
                    Сообщение
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Расскажите о вашем проекте..."
                    rows={5}
                    required
                    className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 gap-2"
                  size="lg"
                >
                  <Send className="w-5 h-5" />
                  Отправить сообщение
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="mb-6 text-gray-900 dark:text-white">
                  Свяжитесь со мной
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Открыт для обсуждения backend проектов, архитектурных решений 
                  и возможностей сотрудничества. Всегда рад помочь с технической экспертизой.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <Card className="p-6 flex items-start gap-4 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-gray-900 dark:text-white">Email</h4>
                    <a
                      href="mailto:example@email.com"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      example@email.com
                    </a>
                  </div>
                </Card>

                <Card className="p-6 flex items-start gap-4 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-gray-900 dark:text-white">Телефон</h4>
                    <a
                      href="tel:+79001234567"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      +7 (900) 123-45-67
                    </a>
                  </div>
                </Card>

                <Card className="p-6 flex items-start gap-4 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-gray-900 dark:text-white">Локация</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Москва, Россия
                    </p>
                  </div>
                </Card>
              </div>

              {/* Availability */}
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h4 className="text-gray-900 dark:text-white">Открыт к предложениям</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Рассматриваю интересные backend проекты и консультации. Обычно отвечаю в течение 24 часов.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
