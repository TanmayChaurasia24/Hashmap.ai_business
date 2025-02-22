"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Users, Briefcase, Globe, Mail, Lock } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const SignupForm = () => {
  const navigate = useRouter();
  const [companyData, setCompanyData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setCompanyData({ ...companyData, [e.target.name]: e.target.value });
  };

  const handlelogin = async(e: any) => {
    e.preventDefault();
    const email = companyData.email;
    const password = companyData.password;

    if(!email || !password) {
      toast.error("enter both email and password correctly!")
      return
    }

    try {
      const response = await axios.post("http://localhost:8080/login", companyData, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      console.log("resposen from backend is: ", response);

      if(!response.data) {
        toast.error("Invalid email or password")
        return
      } 

      const token = response.data.token;
      console.log("token is: ", token);
      
      setCookie('Auth_token', token, {
        maxAge: 60*60*24
      });

      navigate.push('/dashboard');
      return;
      
    } catch (error: any) {
      console.log("error while doing login: ", error);
      return;
    }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };


  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="w-1/2 bg-gradient-to-r from-slate-900 to-black p-8 overflow-y-auto">
        <motion.div 
          className="max-w-md mx-auto"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <div className="text-center mb-8">
            <motion.div 
              className="inline-block p-3 bg-indigo-50 rounded-full mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Building2 className="h-8 w-8 text-indigo-600" />
            </motion.div>
            <h2 className="text-3xl font-bold text-neutral-200">Login</h2>
            
          </div>

          <form className="space-y-6">
            <motion.div variants={fadeIn} className="space-y-4">
              <div className="relative">
                <Mail className="absolute top-[38px] left-3 h-5 w-5 text-black" />
                <label className="block text-sm font-medium text-neutral-200">Email</label>
                <input
                  type="email"
                  name="email"
                  value={companyData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full pl-10 text-black pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="you@company.com"
                />
              </div>

              <div className="relative">
                <Lock className="absolute top-[38px] left-3 h-5 w-5 text-black" />
                <label className="block text-sm font-medium text-neutral-200">Password</label>
                <input
                  type="password"
                  name="password"
                  value={companyData.password}
                  onChange={handleChange}
                  className="mt-1 block w-full pl-10 pr-3 py-2 border text-black border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your password"
                />
              </div>
            </motion.div>

            <motion.button
              type="button"
              onClick={handlelogin}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Login Company Account
            </motion.button>
          </form>

          <motion.div 
            className="mt-6 text-center"
            variants={fadeIn}
          >
            <Link href="/auth/register" className="text-sm text-indigo-600 hover:text-indigo-500">
              Don't Have an account? Register
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Right side - Animated content */}
      <div className="w-1/2 bg-gradient-to-br from-indigo-500 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c')] bg-cover bg-center opacity-10"></div>
        <div className="relative h-full flex items-center justify-center p-12">
          <div className="text-white text-center max-w-lg">
            <motion.h1 
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Transform Your Business Today
            </motion.h1>
            <motion.p 
              className="text-lg mb-8 text-indigo-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Join thousands of companies that trust us to help them grow and succeed in the digital age.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;