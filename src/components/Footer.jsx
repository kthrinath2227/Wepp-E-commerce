import React from "react";
import { Heart, Facebook, Twitter, Instagram } from "lucide-react"; // <-- import added

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Instagram, href: "#", name: "Instagram" },
  ];

  const footerLinks = [
    {
      title: "Shop",
      links: [
        { label: "Electronics", href: "#" },
        { label: "Home Appliances", href: "#" },
        { label: "Mens Cloths", href: "#" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Track Order", href: "#" },
        { label: "Support", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact Us", href: "#" },
      ],
    },
  ];

  return (
    <footer className="glass-effect border-t border-white/20 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a href="/" className="flex items-center space-x-2 mb-4">
  <span className="text-lg sm:text-xl md:text-md font-bold bg-gradient-to-r from-[#8CC43D] to-[#0AA79B] bg-clip-text text-transparent">
    Wepp E-commerce
  </span>
</a>
            <p className="text-gray-400">Your one-stop shop for everything tech and home.</p>
          </div>
          
          {footerLinks.map(section => <div key={section.title}>
              <p className="font-semibold text-white mb-4">{section.title}</p>
              <ul className="space-y-2">
                {section.links.map(link => <li key={link.label}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
  {link.label}
</a>

                  </li>)}
              </ul>
            </div>)}
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} WEPP All Rights Reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Made By THRINATH KANDULA
          </p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map(social => <a key={social.name} href={social.href} className="text-gray-400 hover:text-white transition-colors">
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.name}</span>
              </a>)}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
