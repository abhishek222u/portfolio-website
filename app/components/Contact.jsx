"use client";
import React from "react";
import { Mail, Github, Linkedin, Send, Phone } from "lucide-react";
import { toast } from "react-toastify";

export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset(); // Clear the form fields
    toast.success("Successfully Saved! 🎉");
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-transparent to-black/20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16">

          {/* Left: Info */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-heading">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-lg text-body-text leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4 text-body-text hover:text-primary transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                <span className="text-lg">abhishekjain00444@gmail.com</span>
              </div>

              <div className="flex items-center gap-4 text-body-text hover:text-primary transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-primary">
                  <Phone size={20} />
                </div>
                <span className="text-lg">+91 8930222461</span>
              </div>

              <div className="flex items-center gap-4 text-body-text hover:text-primary transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-primary">
                  <Linkedin size={20} />
                </div>
                <a href="https://www.linkedin.com/in/abhishek-jain-5865a6227" target="_blank" className="text-lg">https://www.linkedin.com/in/abhishek-jain-5865a6227</a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="glass-panel p-8 rounded-3xl border-t border-white/10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Name</label>
                <input
                  type="text"
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-heading focus:outline-none focus:border-primary/50 focus:bg-black/30 transition-all placeholder:text-gray-600"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Email</label>
                <input
                  type="email"
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-heading focus:outline-none focus:border-primary/50 focus:bg-black/30 transition-all placeholder:text-gray-600"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-heading focus:outline-none focus:border-primary/50 focus:bg-black/30 transition-all resize-none placeholder:text-gray-600"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
