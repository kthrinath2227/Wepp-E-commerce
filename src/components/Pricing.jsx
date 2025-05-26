
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: 29,
    description: "Perfect for small businesses and startups",
    features: [
      "Up to 5 team members",
      "10GB storage",
      "Basic analytics",
      "24/7 email support",
      "Mobile app access"
    ],
    notIncluded: [
      "Advanced reporting",
      "Custom branding",
      "API access",
      "Dedicated account manager"
    ],
    popular: false,
    buttonText: "Get Started"
  },
  {
    name: "Professional",
    price: 79,
    description: "Ideal for growing businesses and teams",
    features: [
      "Up to 20 team members",
      "50GB storage",
      "Advanced analytics",
      "24/7 priority support",
      "Mobile app access",
      "Advanced reporting",
      "Custom branding"
    ],
    notIncluded: [
      "API access",
      "Dedicated account manager"
    ],
    popular: true,
    buttonText: "Start Free Trial"
  },
  {
    name: "Enterprise",
    price: 199,
    description: "For large organizations with complex needs",
    features: [
      "Unlimited team members",
      "500GB storage",
      "Enterprise analytics",
      "24/7 phone & email support",
      "Mobile app access",
      "Advanced reporting",
      "Custom branding",
      "API access",
      "Dedicated account manager"
    ],
    notIncluded: [],
    popular: false,
    buttonText: "Contact Sales"
  }
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Choose the plan that works best for your business needs
          </p>
          
          <div className="flex justify-center items-center space-x-4 mb-8">
            <button
              className={`px-4 py-2 rounded-lg ${
                billingCycle === "monthly"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${
                billingCycle === "annual"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
              onClick={() => setBillingCycle("annual")}
            >
              Annual <span className="text-xs font-bold">Save 20%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden ${
                plan.popular ? "ring-2 ring-blue-500 transform md:-translate-y-4" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="bg-blue-500 text-white text-center py-2 font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">${billingCycle === "annual" ? Math.round(plan.price * 0.8) : plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-400">/month</span>
                  {billingCycle === "annual" && (
                    <div className="text-green-500 text-sm font-medium mt-1">Save 20% with annual billing</div>
                  )}
                </div>
                
                <Button className="w-full mb-8">{plan.buttonText}</Button>
                
                <div>
                  <p className="font-medium mb-4">What's included:</p>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.notIncluded.length > 0 && (
                    <>
                      <p className="font-medium mb-4 text-gray-500 dark:text-gray-400">Not included:</p>
                      <ul className="space-y-3">
                        {plan.notIncluded.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-500 dark:text-gray-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-400">
            All plans include a 14-day free trial. No credit card required.
            <br />
            Need a custom solution? <a href="#contact" className="text-blue-600 hover:underline">Contact us</a> for enterprise pricing.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
