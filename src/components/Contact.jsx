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
    const phoneNumber = "919381187905"; 

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

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you!
          </p>
        </motion.div>

        
        <div className="grid lg:grid-cols-2 gap-12">
        
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Mail className="mr-3 h-6 w-6 text-blue-400" />
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white mb-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-4 py-2 rounded-md glass-effect border border-white/20 text-white placeholder-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="w-full px-4 py-2 rounded-md glass-effect border border-white/20 text-white placeholder-gray-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white mb-2">
                    What Service Are You Looking For?
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {["Electronics", "Clothing", "T Shirt Casual", " Gold Plated Stainless Steel"].map(
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
                              : "glass-effect text-white border-white/20"
                          } hover:bg-blue-500 hover:text-white transition`}
                        >
                          {service}
                        </button>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-white mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Your message..."
                    className="w-full px-4 py-2 rounded-md glass-effect border border-white/20 text-white placeholder-gray-400"
                    required
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
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
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Call Us</p>
                    <p className="text-gray-300">+91 9381187905</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email Us</p>
                    <p className="text-gray-300">k.thrinath2227@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Visit Us</p>
                    <p className="text-gray-300">
                      Hitech City, TG, India
                    </p>
                  </div>
                </div>
              </div>

               <div className="mt-8">
                     <iframe
        width="100%"
        height="300"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=kondapur+hyd&t=&z=13&ie=UTF8&iwloc=&output=embed"
       
        style={{ border: 0 }}
        title="Kondapur, Hyderabad Map"
      ></iframe>
                  </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
