"use client";

import {
  ArrowRight,
  Building2,
  Globe2,
  Users2,
  Briefcase,
  Shield,
  Clock,
  BadgeCheck,
} from "lucide-react";
import Link from "next/link";
import Spline from "@splinetool/react-spline";
import { NavbarDemo } from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  const stats = [
    {
      number: "10k+",
      title: "Active Companies",
      description: "Trust us for their hiring needs",
    },
    {
      number: "50k+",
      title: "Skilled Professionals",
      description: "Ready to join your team",
    },
    {
      number: "95%",
      title: "Success Rate",
      description: "In matching talent with companies",
    },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen">

      {/* Hero Section - Unchanged */}
      <header className="pb-24 pl-5 bg-gradient-to-r from-slate-800 to-black/30">
        <div className="flex justify-center items-center h-[100vh]">
          <div className="flex justify-center items-center flex-col text-center h-[100vh] w-[50%] ">
            <h1 className="text-5xl font-bold tracking-tight mb-6">
              Hire Best Brains Around The World
            </h1>

            <p className="text-xl text-muted-foreground mb-8 text-slate-300">
              Join <span className="bg-gradient-to-r from-purple-600 via-cyan-300 to-blue-500 text-transparent bg-clip-text">ProHire.ai</span> to connect with skilled remote professionals
              worldwide. Post jobs, manage applications, and build your remote
              team effortlessly.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/auth/register"
                className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl text-black w-[10vw] h-[5vh]"
              >
                Get Started <ArrowRight className=""/>
              </Link>
            </div>
          </div>
          <div className="h-[100vh] w-[50%]">
            <Spline scene="https://prod.spline.design/Psd3RL3UQHPqwaZr/scene.splinecode" />
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-black to-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-lg opacity-75 group-hover:opacity-100 transition-opacity blur-lg" />
                <div className="relative bg-black p-8 rounded-lg border border-slate-800">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold text-white mb-2">
                    {stat.title}
                  </div>
                  <div className="text-slate-400">{stat.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-black">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="container mx-auto px-4"
        >
          <h2 className="text-4xl font-bold text-center mb-4 text-neutral-200">
            Everything You Need to Build Your Remote Team
          </h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            Our comprehensive platform provides all the tools and features you
            need to find and manage remote talent effectively.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe2,
                title: "Global Reach",
                description:
                  "Access talent from around the world and build diverse teams",
                image:
                  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2069&auto=format&fit=crop",
              },
              {
                icon: Shield,
                title: "Verified Profiles",
                description:
                  "Pre-screened candidates with verified skills and experience",
                image:
                  "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop",
              },
              {
                icon: Clock,
                title: "Time-Saving",
                description:
                  "Streamlined hiring process with smart matching technology",
                image:
                  "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=2070&auto=format&fit=crop",
              },
              {
                icon: BadgeCheck,
                title: "Quality Assured",
                description:
                  "Industry-leading vetting process for all candidates",
                image:
                  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="absolute inset-0">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors" />
                </div>
                <div className="relative p-6">
                  <feature.icon className="h-12 w-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 opacity-10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <h2 className="text-4xl font-bold mb-6 text-neutral-200">
            Ready to Transform Your Hiring Process?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-slate-300">
            Join thousands of companies that trust ProHire for their remote
            hiring needs. Get started today and find your next great hire.
          </p>
          <Link
            href="/register"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:from-purple-600 hover:to-cyan-600 transition-all transform hover:scale-105"
          >
            Create Company Account <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                ProHire
              </h3>
              <p className="text-slate-400">
                Connecting great companies with remote talent worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-slate-400 hover:text-purple-400 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-slate-400 hover:text-purple-400 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/press"
                    className="text-slate-400 hover:text-purple-400 transition-colors"
                  >
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/blog"
                    className="text-slate-400 hover:text-purple-400 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guides"
                    className="text-slate-400 hover:text-purple-400 transition-colors"
                  >
                    Guides
                  </Link>
                </li>
                <li>
                  <Link
                    href="/help"
                    className="text-slate-400 hover:text-purple-400 transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy"
                    className="text-slate-400 hover:text-purple-400 transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-slate-400 hover:text-purple-400 transition-colors"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="/security"
                    className="text-slate-400 hover:text-purple-400 transition-colors"
                  >
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-400">
            <p>&copy; 2025 ProHire. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
