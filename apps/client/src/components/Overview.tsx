import React from "react";
import { Card } from "@/components/ui/card";

import { Briefcase, Users, LineChart, Building2 } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const data = [
  { name: "Feb", value: 30 },
  { name: "Mar", value: 45 },
  { name: "Apr", value: 75 },
  { name: "May", value: 120 },
  { name: "Jun", value: 180 },
];

const Overview = () => {
  return (
    <>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "Total Job Posts", value: "45", icon: Briefcase },
          { title: "Total Applicants", value: "284", icon: Users },
          { title: "Active Jobs", value: "12", icon: LineChart },
          { title: "Departments", value: "8", icon: Building2 },
        ].map((stat, index) => (
          <motion.div key={index}>
            <Card className="p-[1px] bg-gradient-to-r from-purple-700 via-cyan-600 to-blue-700 h-[15vh] w-[13vw] flex justify-center items-center">
              <div className="p-4 rounded-lg flex justify-between items-center bg-slate-900 h-full w-full">
                <div>
                  <p className="text-sm text-neutral-200">{stat.title}</p>
                  <h2 className="text-3xl font-bold mt-2 text-neutral-200">
                    {stat.value}
                  </h2>
                </div>
                <div className="bg-white p-3 rounded-full">
                  <stat.icon className="h-6 w-6 text-black" />
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div className="col-span-2" initial="hidden" animate="show">
          <Card className="p-[1px] bg-gradient-to-r from-purple-700 via-cyan-600 to-blue-700">
            <div className="bg-slate-900 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4 ">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-200">
                    Application Trends
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Monthly job applications received
                  </p>
                </div>
              </div>
              <div className="h-[300px] mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient
                        id="colorValue"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="hsl(var(--primary))"
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="95%"
                          stopColor="hsl(var(--primary))"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      className="stroke-muted/30"
                    />
                    <XAxis dataKey="name" className="text-muted-foreground" />
                    <YAxis className="text-muted-foreground" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--background))",
                        borderColor: "hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="hsl(var(--primary))"
                      fill="url(#colorValue)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </>
  );
};

export default Overview;
