import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  Instagram,
  Facebook,
  Phone,
  Mail,
  MapPin,
  Send,
  MessageSquare
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const { name, email, service, message } = formData;

  if (!service) {
    toast({
      title: "Please select a service",
      description: "Choose one of the services before submitting.",
      duration: 4000
    });
    return;
  }

  setIsSubmitting(true);

  const fullMessage = `Name: ${name}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`;
  const encodedMessage = encodeURIComponent(fullMessage);
  const phoneNumber = "919381187905"; // your WhatsApp number

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappLink, "_blank");

  toast({
    title: "Redirecting to WhatsApp...",
    description: "Your message will be sent via WhatsApp.",
    duration: 5000
  });

  setFormData({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  setIsSubmitting(false);
};



  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-blue-500" />,
      title: "Email Us",
      details: "info@thedevstechnologies.online",
      link: "mailto:info@thedevstechnologies.online"
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-500" />,
      title: "Call Us",
      details: "+91 9381187905",
      link: "tel:+919381187905"
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-500" />,
      title: "Visit Us",
      details: "Bhavanipuram Vijayawada, Andhra Pradesh, India",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Have questions or ready to get started? We're here to help!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-white dark:bg-gray-600 p-3 rounded-full shadow-md mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">{item.title}</h4>
                      <a
                        href={item.link}
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {item.details}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <h4 className="font-medium text-lg mb-4">Follow Us</h4>
                <div className="flex space-x-6">
  <a
    href="https://www.instagram.com/thedevstechnologies"
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center text-center text-xs group"
  >
    <div className="bg-white dark:bg-gray-600 p-3 rounded-full shadow-md group-hover:bg-blue-50 dark:group-hover:bg-gray-500 transition-colors">
      <Instagram className="w-5 h-5 text-pink-500" />
    </div>
    <span className="mt-1 text-xs text-gray-600 dark:text-gray-300">Instagram</span>
  </a>

  <a
    href="https://wa.me/9381187905"
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center text-center text-xs group"
  >
    <div className="bg-white dark:bg-gray-600 p-3 rounded-full shadow-md group-hover:bg-blue-50 dark:group-hover:bg-gray-500 transition-colors">
      <MessageSquare className="w-5 h-5 text-green-500" />
    </div>
    <span className="mt-1 text-xs text-gray-600 dark:text-gray-300">WhatsApp</span>
  </a>

  <a
    href="https://www.facebook.com/ThedevsTechonlogies"
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center text-center text-xs group"
  >
    <div className="bg-white dark:bg-gray-600 p-3 rounded-full shadow-md group-hover:bg-blue-50 dark:group-hover:bg-gray-500 transition-colors">
      <Facebook className="w-5 h-5 text-blue-600" />
    </div>
    <span className="mt-1 text-xs text-gray-600 dark:text-gray-300">Facebook</span>
  </a>
</div>


              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    What Service Are You Looking For?
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {["Custom Website", "Logo Design", "Digital Marketing", "Mobile App"].map(
                      (service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({ ...prev, service }))
                          }
                          className={`px-4 py-2 rounded-full text-sm border ${
                            formData.service === service
                              ? "bg-blue-600 text-white border-blue-600"
                              : "bg-white dark:bg-gray-700 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600"
                          } hover:bg-blue-500 hover:text-white transition`}
                        >
                          {service}
                        </button>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Tell us what you need..."
                  ></textarea>
                </div>

                <div>
                  <Button
                    type="submit"
                    className="w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
