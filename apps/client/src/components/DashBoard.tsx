"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Overview from "./Overview";
import Active from "./Active";
import Recent from "./Recent";
import Closed from "./Closed";
import Profile from "./Profile";
import { deleteCookie, hasCookie } from "cookies-next";
import { useRouter } from "next/navigation";

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
  const router = useRouter(); // Move inside component

  const handlelogout = () => {
    if (hasCookie("Auth_token")) {
      deleteCookie("Auth_token");
      router.push("/auth/register");
    }
  };

  const [activeTab, setActiveTab] = useState<
    "overview" | "recent" | "active" | "closed" | "profile"
  >("overview");

  return (
    <div className="h-[100vh] w-[100%] bg-black flex justify-center items-center overflow-x-hidden">
      {/* sidebar */}
      <div className="h-[100vh] w-[20%] bg-slate-800">
        <div className="h-full w-full">
          <div className="h-[10%] p-6 text-3xl font-bold">Hashmap.ai</div>
          <div className="h-[80%] flex flex-col justify-center items-center space-y-8">
            <Link href="/">Home</Link>
            <button onClick={() => setActiveTab("overview")}>Overview</button>
            <button onClick={() => setActiveTab("recent")}>Recent jobs</button>
            <button onClick={() => setActiveTab("active")}>Active jobs</button>
            <button onClick={() => setActiveTab("closed")}>Closed jobs</button>
            <button onClick={() => setActiveTab("profile")}>Profile</button>
            <div>
              <button onClick={handlelogout}>Log out</button>
            </div>
          </div>
        </div>
      </div>

      {/* right hand content */}
      <motion.div
        className="space-y-8 p-7 h-full w-[80%]"
        initial="hidden"
        animate="show"
        variants={container}
      >
        {activeTab === "overview" && <Overview />}
        {activeTab === "active" && <Active />}
        {activeTab === "recent" && <Recent />}
        {activeTab === "closed" && <Closed />}
        {activeTab === "profile" && <Profile />}
      </motion.div>
    </div>
  );
}
