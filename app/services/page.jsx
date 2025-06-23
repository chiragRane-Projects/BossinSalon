"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, MessageCircle, Sparkles, Scissors, Palette } from 'lucide-react';

const servicesData = [
  {
    category: "Hair Services",
    subcategories: [
      {
        name: "Hair Wash",
        gender: "Unisex",
        services: [
          { name: "Pineapple Wash", price: 220 },
          { name: "Bamboo Wash", price: 250 },
          { name: "Shine Shampoo Wash", price: 260 },
          { name: "Dandruff Wash", price: 350 },
          { name: "Hair Growth Wash", price: 370 },
          { name: "L'ORÉAL Shampoo Wash", price: 400 },
          { name: "Schwarzkopf Wash", price: 450 },
          { name: "Keratine Wash", price: 470 },
          { name: "BOTOX Wash", price: 500 },
          { name: "Morrocan Wash", price: 600 },
          { name: "Argan Wash", price: 700 },
          { name: "Kerastase Wash", price: 1000 },
        ],
      },
      {
        name: "Relaxing Hair Spa",
        gender: "Unisex",
        services: [
          { name: "Deep Conditioning", price: 400 },
          { name: "Detox Spa", price: 600 },
          { name: "BOSSIN Shine Spa", price: 650 },
          { name: "L'Oréal Regular Spa", price: 700 },
          { name: "L'Oréal Nourishing Spa", price: 1000 },
          { name: "BOSSIN SHINE-Protein Spa", price: 1000 },
          { name: "L'Oréal Protein Spa", price: 1500 },
          { name: "Karatine Spa", price: 1700 },
          { name: "BOTOX Spa", price: 2000 },
          { name: "Argan Cocktail Glossing Spa", price: 2500 },
          { name: "Schwarzkopf Fiber Spa", price: 3000 },
          { name: "Morrocan Repair Spa", price: 4000 },
          { name: "Morrocan Hydration Spa", price: 4500 },
          { name: "Kerastase", price: 5500 },
        ],
      },
    ],
  },
  {
    category: "Hair Cutting & Shaving",
    subcategories: [
      {
        name: "Haircuts",
        gender: "Male",
        services: [
          { name: "Shape-up (Any Style)", price: 200 },
          { name: "Hair Cut (Boy)", price: 150 },
          { name: "Senior Citizen Cut", price: 100 },
          { name: "Hair Set", price: 150 },
        ],
      },
      {
        name: "Haircuts",
        gender: "Female",
        services: [
          { name: "Hair Cut (Girl)", price: 350 },
          { name: "Clean Line (Straight Cut)", price: 200 },
          { name: "U Turn (U Cut)", price: 200 },
          { name: "Forward Graduation (Layered Cut)", price: 500 },
          { name: "Reverse Graduation (Step Cut)", price: 500 },
          { name: "Bangs", price: 150 },
          { name: "Fringes", price: 150 },
          { name: "Flicks", price: 150 },
          { name: "Veg Cut", price: 500 },
          { name: "Diana Cut", price: 500 },
          { name: "Curtain Bangs", price: 200 },
          { name: "Bob Cut", price: 700 },
          { name: "Lob Cut", price: 700 },
          { name: "Blunt Cut", price: 700 },
          { name: "Wolf Cut", price: 800 },
          { name: "Butterfly Cut", price: 1000 },
          { name: "Designer Cut", price: 1200 },
        ],
      },
      {
        name: "Shaving",
        gender: "Male",
        services: [
          { name: "Standard Shave", price: 150 },
          { name: "Coco Butter Luxury Shave", price: 300 },
          { name: "Royal Shave", price: 400 },
          { name: "Beard Trim", price: 120 },
          { name: "Beard Style", price: 100 },
          { name: "Moustache Trim", price: 100 },
        ],
      },
    ],
  },
  {
    category: "Temporary Hair Styling",
    subcategories: [
      {
        name: "Blow Dry",
        gender: "Unisex",
        services: [
          { name: "Blast Dry", price: 250 },
          { name: "Up to Shoulder", price: 350 },
          { name: "Below Shoulder", price: 400 },
          { name: "Mid Waist", price: 500 },
          { name: "Below Waist", price: 600 },
        ],
      },
      {
        name: "Standard Ironing",
        gender: "Unisex",
        services: [
          { name: "Up to Shoulder", price: 400 },
          { name: "Below Shoulder", price: 500 },
          { name: "Mid Waist", price: 700 },
          { name: "Below Waist", price: 900 },
          { name: "Add Steam-Pod", price: 100 },
        ],
      },
    ],
  },
  {
    category: "Skin Services",
    subcategories: [
      {
        name: "Dtan Services",
        gender: "Unisex",
        services: [
          { name: "Full Face (Ragaa)", price: 500 },
          { name: "Full Face (Ozone)", price: 600 },
          { name: "Full Face (Kanpeki)", price: 700 },
          { name: "Full Face (O3 Whitening Brightening)", price: 1000 },
          { name: "Neck", price: 200 },
          { name: "Hands", price: 1000 },
          { name: "Half Legs", price: 1200 },
          { name: "Full Legs", price: 2000 },
          { name: "Full Body", price: 4000 },
        ],
      },
    ],
  },
  {
    category: "Facial Services",
    subcategories: [
      {
        name: "Clean-Ups",
        gender: "Unisex",
        services: [
          { name: "Hydra Fresh", price: 600 },
          { name: "Deep Pore", price: 700 },
          { name: "Tann Clear", price: 800 },
          { name: "Fruitsu", price: 900 },
          { name: "Organic", price: 1000 },
          { name: "Ainoha", price: 1500 },
        ],
      },
    ],
  },
  {
    category: "Manicure & Pedicure",
    subcategories: [
      {
        name: "Manicure",
        gender: "Unisex",
        services: [
          { name: "Standard", price: 500 },
          { name: "Classic", price: 600 },
          { name: "Kanpeki Pedi Pie", price: 700 },
          { name: "Exotic Bomb", price: 800 },
          { name: "D-Tan", price: 900 },
          { name: "American Divine Choco", price: 1000 },
        ],
      },
    ],
  },
  {
    category: "Waxing",
    subcategories: [
      {
        name: "Standard Flavored Wax",
        gender: "Unisex",
        services: [
          { name: "Full Arm", price: 400 },
          { name: "Half Arm", price: 150 },
          { name: "Full Leg", price: 600 },
          { name: "Half Leg", price: 300 },
        ],
      },
    ],
  },
];

const ServicePage = () => {
  const [expandedCategories, setExpandedCategories] = useState({});
  const [expandedSubcategories, setExpandedSubcategories] = useState({});

  const toggleCategory = (categoryIndex) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryIndex]: !prev[categoryIndex]
    }));
  };

  const toggleSubcategory = (categoryIndex, subcategoryIndex) => {
    const key = `${categoryIndex}-${subcategoryIndex}`;
    setExpandedSubcategories(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const getCategoryIcon = (category) => {
    if (category.includes('Hair')) return <Scissors className="w-5 h-5" />;
    if (category.includes('Skin') || category.includes('Facial')) return <Sparkles className="w-5 h-5" />;
    return <Palette className="w-5 h-5" />;
  };

  const getGenderBadgeColor = (gender) => {
    switch (gender) {
      case 'Male': return 'bg-blue-100 text-blue-800';
      case 'Female': return 'bg-pink-100 text-pink-800';
      case 'Unisex': return 'bg-emerald-100 text-emerald-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("I want to book service in bossin salon.");
    window.open(`https://wa.me/918108051050?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-emerald-50 py-16 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            Bossin Salon Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Experience luxury and elegance with our premium salon services. From hair styling to skincare, we've got you covered.
          </motion.p>
        </div>
      </motion.div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="space-y-6">
          {servicesData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(categoryIndex)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-2xl transition-colors duration-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-emerald-100 rounded-xl">
                    {getCategoryIcon(category.category)}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      {category.category}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {category.subcategories.length} service{category.subcategories.length > 1 ? 's' : ''} available
                    </p>
                  </div>
                </div>
                {expandedCategories[categoryIndex] ? 
                  <ChevronUp className="w-5 h-5 text-gray-400" /> : 
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                }
              </button>

              {/* Category Content */}
              <motion.div
                initial={false}
                animate={{
                  height: expandedCategories[categoryIndex] ? 'auto' : 0,
                  opacity: expandedCategories[categoryIndex] ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 space-y-4">
                  {category.subcategories.map((subcategory, subcategoryIndex) => (
                    <motion.div
                      key={subcategoryIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: subcategoryIndex * 0.1 }}
                      className="bg-gray-50 rounded-xl border border-gray-100"
                    >
                      {/* Subcategory Header */}
                      <button
                        onClick={() => toggleSubcategory(categoryIndex, subcategoryIndex)}
                        className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-100 rounded-xl transition-colors duration-200"
                      >
                        <div className="flex items-center space-x-3">
                          <h3 className="font-medium text-gray-700">
                            {subcategory.name}
                          </h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getGenderBadgeColor(subcategory.gender)}`}>
                            {subcategory.gender}
                          </span>
                        </div>
                        {expandedSubcategories[`${categoryIndex}-${subcategoryIndex}`] ? 
                          <ChevronUp className="w-4 h-4 text-gray-400" /> : 
                          <ChevronDown className="w-4 h-4 text-gray-400" />
                        }
                      </button>

                      {/* Services List */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: expandedSubcategories[`${categoryIndex}-${subcategoryIndex}`] ? 'auto' : 0,
                          opacity: expandedSubcategories[`${categoryIndex}-${subcategoryIndex}`] ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {subcategory.services.map((service, serviceIndex) => (
                              <motion.div
                                key={serviceIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.2, delay: serviceIndex * 0.05 }}
                                className="bg-white p-4 rounded-lg border border-gray-200 hover:border-emerald-200 hover:shadow-sm transition-all duration-200"
                              >
                                <h4 className="font-medium text-gray-800 text-sm">
                                  {service.name}
                                </h4>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-emerald-50 py-16 px-4"
      >
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Book Your Service?
            </h2>
            <p className="text-gray-600 mb-8">
              Contact us for pricing and availability. Our team is ready to make you look and feel amazing!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppClick}
              className="inline-flex items-center space-x-3 bg-emerald-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-emerald-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Book via WhatsApp</span>
            </motion.button>
            <p className="text-sm text-gray-500 mt-4">
              Click to send us a message and we'll get back to you with pricing and availability
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicePage;