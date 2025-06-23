"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Star, MapPin, Phone, Mail, Menu, X, Scissors, Users, Award, Clock } from 'lucide-react';
import pic2 from "@/public/uzma.jpg";
import Image from 'next/image';

const branches = [
  {
    name: "Dombivli",
    email: "bossinthesalona@gmail.com",
    address: "Shop No. 16, Sonata Complex, near Kaveri Sweet Corner, MIDC Residential Area, Dombivli, Maharashtra 421201",
    phoneNumber: "+91 81080 51050",
    googleMaps: "https://maps.app.goo.gl/FXpJ9m84r6Ws5bEfA",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Kalyan",
    email: "bossinthesalona@gmail.com",
    address: "Shop no. 3, Aqsa White House Dudh Nakah, Reti Bunder Road, near Chirag Hotel, Kalyan West, Maharashtra 421301",
    phoneNumber: "+91 81080 51050",
    googleMaps: "https://maps.app.goo.gl/EKwnv89qh2aGPQby8?g_st=awb",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Kharghar",
    email: "bossinthesalona@gmail.com",
    address: "Shop no. 3-4, Shree Krupa Harsh Neel Apartment Society, Opp. Shelter Park, Sector 10, Kharghar, Navi Mumbai - 410210.",
    phoneNumber: "+91 81080 51050",
    googleMaps: "https://maps.app.goo.gl/VCUvNHdUw9LMHtE68?g_st=awb",
    image: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  }
];

const testimonials = [
  { name: "Farida Liftwala", review: "I had an amazing experience at Bossin Salon! It's always great when a salon not only delivers quality results but also creates a welcoming and warm atmosphere. Uzma mam seem to truly care about her clients, which is so important. Also her staff is very polite & friendly Their professionalism, hospitality, and personalized advice shows they go above and beyond in customer service. Looking forward to visit you soon", rating: 5 },
  { name: "Mamta Thakur", review: "I've been to many Salons but Bossin is one of the most trusted Salons when it comes to my hairs. Recently before coming back to UK I went to Bossin and did hair colour. I really liked the service provided by Uzma and her team. Thank you so much for making me look more beautiful.", rating: 5 },
  { name: "Nabeel Fodkar", review: "I recently visited Bossin Salon, and I must say, the service here is exceptional. The hairstylist, Danish, is truly a master of his craft. Unlike other salons where I often worry if they'll get the haircut right, at Bossin, there's no such fear. Danish has an incredible sense of style and precision – he understands exactly what I need without me having to explain much. His confidence and expertise make the entire experience stress-free and enjoyable. I highly recommend Bossin Salon for anyone looking for a flawless haircut and a comfortable experience. Thank you, Danish, for your amazing work", rating: 5 },
  { name: "Rutuja Jatkar", review: "Bossin is fantastic! The staff is friendly and professional, and the atmosphere is relaxing. I got a haircut, hairspa and facial, and it was amazing. Manju really understood what I wanted, and the facial left my skin glowing. Highly recommend for anyone looking for top-notch service!", rating: 5 },
  {name: "Sana Ansari", review: "I recently visited bossin salon and had a wonderful experience...Ms Uzma and the staff is very friendly and professional and the ambience here is very soothing and relaxing... Really satisfied with the services provided by them...will surely visit again.. thank you so much...", rating: 4},
  {name: "Deepak Karkera", review: "Recently me and my mom (Nisha Karkera) had face and hair treatment. From customer perspective we received a very good treatment and hospitality from both staff and the owner Uzma. They provided genuine feedback about your skin and hair condition (before treatment) and advise us what all are the requirements for betterment instead of just selling the products. You also get this in a reasonable prices so its's worth to visit once.", rating: 4}
];

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-emerald-700"
            >
              Bossin Salon
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Services', 'Book Appointment', 'Franchise', 'Contact'].map((item) => (
                <a key={item} href={`${item.toLowerCase()}`} className="text-slate-700 hover:text-emerald-600 transition-colors">
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Services', 'Book Appointment', 'Franchise', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`${item.toLowerCase()}`}
                  className="block px-3 py-2 text-slate-700 hover:text-emerald-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-teal-50"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
              Welcome to{' '}
              <span className="text-emerald-700 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text">
                Bossin Salon
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Where beauty meets excellence. Transform your look with our expert stylists and premium services.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg"
            >
              Book Your Appointment
            </motion.button>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-1/4 right-10 text-emerald-300 opacity-20"
        >
          <Scissors size={60} />
        </motion.div>
      </section>

      {/* About Salon Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">About Bossin Salon</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Established with a passion for beauty and excellence, Bossin Salon has been transforming looks and boosting confidence for years.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInUp}>
                <img 
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Salon Interior"
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
              
              <motion.div variants={fadeInUp} className="space-y-6">
                <h3 className="text-3xl font-bold text-slate-800">Our Story</h3>
                <p className="text-lg text-slate-600">
                  At Bossin Salon, we believe that every person deserves to look and feel their absolute best. Our journey began with a simple vision: to create a space where artistry meets relaxation, where every client leaves feeling more confident and beautiful than when they arrived.
                </p>
                <p className="text-lg text-slate-600">
                  We combine traditional techniques with modern innovations, using only the finest products and latest trends to deliver exceptional results. Our commitment to excellence has made us a trusted name in the beauty industry.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center p-6 bg-teal-50 rounded-xl">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">
                      <CountUp end={500} duration={2.5} />+
                    </div>
                    <div className="text-slate-600">Happy Clients</div>
                  </div>
                  <div className="text-center p-6 bg-amber-50 rounded-xl">
                    <div className="text-3xl font-bold text-amber-600 mb-2">
                      <CountUp end={5} duration={2.5} />+
                    </div>
                    <div className="text-slate-600">Years Experience</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Owner Section */}
      <section id="owner" className="py-20 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Meet Our Founder</h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInUp} className="order-2 lg:order-1">
                <h3 className="text-3xl font-bold text-slate-800 mb-4">Uzma - Visionary & Master Stylist</h3>
                <p className="text-lg text-slate-600 mb-6">
                  "Beauty is not just about looking good—it's about feeling confident, empowered, and truly yourself."
                </p>
                <p className="text-lg text-slate-600 mb-6">
                  With over a decade of experience in the beauty industry, Uzma founded Bossin Salon with a dream to create more than just a salon—a sanctuary where transformation happens from the inside out. Her passion for the craft and dedication to excellence has inspired countless clients to embrace their unique beauty.
                </p>
                <p className="text-lg text-slate-600 mb-6">
                  Uzma believes that every client has their own story, and her role is to help them tell it through their style. Her expertise, combined with genuine care for each person who walks through our doors, has built the foundation of Bossin Salon's reputation for exceptional service.
                </p>
                <div className="flex items-center space-x-6 pt-4">
                  <div className="flex items-center">
                    <Award className="text-emerald-600 mr-2" size={24} />
                    <span className="text-slate-700">Certified Professional</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="text-emerald-600 mr-2" size={24} />
                    <span className="text-slate-700">
                      <CountUp end={1000} duration={2.5} />+ Transformations
                    </span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="order-1 lg:order-2">
                <div className="relative">
                  <Image 
                    src={pic2}
                    alt="Uzma - Salon Owner"
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                    <div className="text-2xl font-bold text-emerald-600">
                      <CountUp end={10} duration={2.5} />+
                    </div>
                    <div className="text-sm text-slate-600">Years Experience</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Branches Section */}
      <section id="branches" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Our Locations</h2>
              <p className="text-xl text-slate-600">Visit us at any of our conveniently located branches</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {branches.map((branch, index) => (
                <motion.div
                  key={branch.name}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <img 
                      src={branch.image}
                      alt={`${branch.name} Branch`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {branch.name}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-4">{branch.name} Branch</h3>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start">
                        <MapPin className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={18} />
                        <p className="text-slate-600 text-sm">{branch.address}</p>
                      </div>
                      <div className="flex items-center">
                        <Phone className="text-emerald-600 mr-3" size={18} />
                        <p className="text-slate-600 text-sm">{branch.phoneNumber}</p>
                      </div>
                      <div className="flex items-center">
                        <Mail className="text-emerald-600 mr-3" size={18} />
                        <p className="text-slate-600 text-sm">{branch.email}</p>
                      </div>
                    </div>
                    
                    <a
                      href={branch.googleMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full text-center bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
                    >
                      View on Maps
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="text-center mt-12">
              <div className="inline-flex items-center bg-teal-50 px-6 py-3 rounded-full">
                <Clock className="text-emerald-600 mr-2" size={20} />
                <span className="text-slate-700 font-semibold">
                  <CountUp end={3} duration={2.5} /> Convenient Locations to Serve You Better
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">What Our Clients Say</h2>
              <p className="text-xl text-slate-600">Real experiences from our valued customers</p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="text-amber-400 fill-current" size={24} />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg md:text-xl text-slate-600 text-center mb-6 italic">
                    "{testimonials[activeTestimonial].review}"
                  </blockquote>
                  
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-slate-800">
                      {testimonials[activeTestimonial].name}
                    </h4>
                  </div>
                </motion.div>
              </div>

              {/* Testimonial Navigation */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === activeTestimonial ? 'bg-emerald-600' : 'bg-slate-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            <motion.div variants={fadeInUp} className="text-center mt-12">
              <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
                <Star className="text-amber-400 mr-2" size={20} />
                <span className="text-slate-700 font-semibold">
                  <CountUp end={4.8} decimals={1} duration={2.5} /> Average Rating from <CountUp end={150} duration={2.5} />+ Reviews
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">Bossin Salon</h3>
              <p className="text-slate-300 mb-4">
                Where beauty meets excellence. Your transformation is our passion.
              </p>
              <div className="text-emerald-400 font-semibold">
                <CountUp end={3} duration={2.5} /> Locations • <CountUp end={500} duration={2.5} />+ Happy Clients
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#home" className="hover:text-emerald-400 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-emerald-400 transition-colors">About</a></li>
                <li><a href="#owner" className="hover:text-emerald-400 transition-colors">Our Founder</a></li>
                <li><a href="#branches" className="hover:text-emerald-400 transition-colors">Locations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-300">
                <li>Hair Styling & Cutting</li>
                <li>Hair Coloring</li>
                <li>Facial Treatments</li>
                <li>Hair Spa</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-slate-300">
                <div className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  +91 81080 51050
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  bossinthesalona@gmail.com
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Bossin Salon. All rights reserved. Crafted with ❤️ for beauty enthusiasts.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;