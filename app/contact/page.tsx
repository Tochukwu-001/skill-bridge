"use client";

import { useState } from "react";
import { Theme } from "@/components/Theme";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Add your Firebase logic here
    // Example: await addDoc(collection(db, "contact_messages"), formData);

    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage("Thank you for reaching out! Your message has been received.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSuccessMessage(""), 5000);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h1 
            className="text-4xl md:text-5xl font-bold tracking-tight"
            style={{ color: Theme.darkGreen }}
          >
            Get in Touch
          </h1>
          <p className="text-slate-600 text-lg">
            Have a question, feedback, or need support? We would love to hear from you. Fill out the form below and our team will get back to you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100">
          
          {/* Contact Information (Left Column) */}
          <div 
            className="p-10 lg:p-12 text-white flex flex-col justify-between"
            style={{ backgroundColor: Theme.darkGreen }}
          >
            <div className="space-y-8">
              <h2 
                className="text-2xl font-bold tracking-tight"
                style={{ color: Theme.lightYellow }}
              >
                Contact Information
              </h2>
              <p className="text-gray-300 text-sm">
                Fill up the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-4">
                  <FaPhoneAlt style={{ color: Theme.lightYellow }} className="text-xl" />
                  <span className="text-sm font-medium">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaEnvelope style={{ color: Theme.lightYellow }} className="text-xl" />
                  <span className="text-sm font-medium">support@example.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt style={{ color: Theme.lightYellow }} className="text-xl" />
                  <span className="text-sm font-medium">123 Innovation Drive, Tech City, TC 90210</span>
                </div>
              </div>
            </div>

            {/* Decorative background element */}
            <div className="relative mt-20">
              <div 
                className="absolute -bottom-24 -right-12 w-48 h-48 rounded-full opacity-20"
                style={{ backgroundColor: Theme.lightYellow }}
              />
              <div 
                className="absolute -bottom-10 -right-24 w-32 h-32 rounded-full opacity-40"
                style={{ backgroundColor: Theme.lightYellow }}
              />
            </div>
          </div>

          {/* Contact Form (Right Column) */}
          <div className="p-10 lg:p-12 lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold uppercase text-slate-500">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border-b-2 border-slate-200 bg-slate-50 focus:bg-white focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold uppercase text-slate-500">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border-b-2 border-slate-200 bg-slate-50 focus:bg-white focus:outline-none transition-colors"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-bold uppercase text-slate-500">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl border-b-2 border-slate-200 bg-slate-50 focus:bg-white focus:outline-none transition-colors"
                  placeholder="How can we help you?"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold uppercase text-slate-500">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl border-b-2 border-slate-200 bg-slate-50 focus:bg-white focus:outline-none transition-colors resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-10 py-4 rounded-xl font-bold text-white transition-transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed shadow-md"
                  style={{ backgroundColor: Theme.darkGreen }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                
                {successMessage && (
                  <p className="text-sm font-semibold text-green-600 animate-fade-in-up">
                    {successMessage}
                  </p>
                )}
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </main>
  );
}