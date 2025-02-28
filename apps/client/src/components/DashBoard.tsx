"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Overview from "./Overview";
import Active from "./Active";
import Closed from "./Closed";
import Profile from "./Profile";
import { deleteCookie, hasCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import Createjobs from "./Createjobs";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Dashboard() {
  const router = useRouter();

  const handleLogout = () => {
    if (hasCookie("Auth_token")) {
      deleteCookie("Auth_token");
      router.push("/auth/register");
    }
  };

  const [activeTab, setActiveTab] = useState<
    "overview" | "Createjob" | "active" | "closed" | "profile"
  >("overview");

  return (
    <div className="h-screen w-full bg-black flex">
      {/* Sidebar */}
      <div className="h-screen w-[250px] bg-slate-800 fixed left-0 top-0 p-6 flex flex-col items-start space-y-6 overflow-y-auto">
        <div className="text-3xl font-bold text-white">Hashmap.ai</div>
        <nav className="flex flex-col space-y-4 w-full">
          <button
            className={`w-full text-left p-3 rounded-md transition ${
              activeTab === "overview" ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-600"
            }`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`w-full text-left p-3 rounded-md transition ${
              activeTab === "overview" ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-600"
            }`}
            onClick={() => setActiveTab("Createjob")}
          >
            Create Job
          </button>
          <button
            className={`w-full text-left p-3 rounded-md transition ${
              activeTab === "active" ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-600"
            }`}
            onClick={() => setActiveTab("active")}
          >
            Active Jobs
          </button>
          <button
            className={`w-full text-left p-3 rounded-md transition ${
              activeTab === "closed" ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-600"
            }`}
            onClick={() => setActiveTab("closed")}
          >
            Closed Jobs
          </button>
          <button
            className={`w-full text-left p-3 rounded-md transition ${
              activeTab === "profile" ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-600"
            }`}
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </button>
        </nav>

        <button
          onClick={handleLogout}
          className="mt-auto bg-red-600 text-white w-full py-3 rounded-md hover:bg-red-700 transition"
        >
          Log out
        </button>
      </div>

      {/* Right Content */}
      <motion.div
        className="ml-[250px] space-y-8 p-7 h-full w-[calc(100%-250px)] overflow-auto"
        initial="hidden"
        animate="show"
        variants={container}
      >
        {activeTab === "overview" && <Overview />}
        {activeTab === "active" && <Active />}
        {activeTab === "Createjob" && <Createjobs/>}
        {activeTab === "closed" && <Closed />}
        {activeTab === "profile" && <Profile />}
      </motion.div>
    </div>
  );
}
