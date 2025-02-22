import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, MapPin, DollarSign } from "lucide-react";

import { motion } from "framer-motion";

const recentJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "New York, NY",
    salary: "$120,000 - $150,000",
    applicants: 12,
  },
  {
    id: 2,
    title: "Product Designer",
    company: "DesignHub",
    location: "Remote",
    salary: "$90,000 - $120,000",
    applicants: 8,
  },
  {
    id: 3,
    title: "Marketing Manager",
    company: "GrowthCo",
    location: "San Francisco, CA",
    salary: "$100,000 - $130,000",
    applicants: 15,
  },
];
const Recent = () => {
  return (
    <>
      <div className="bg-slate-900 p-8">
        <motion.div
          className="max-w-7xl mx-auto space-y-8"
          initial="hidden"
          animate="show"
        >
          <motion.div>
            <h1 className="text-4xl font-bold text-neutral-200">Recent Jobs</h1>
            <p className="text-muted-foreground mt-2">
              Browse all Recent job postings
            </p>
          </motion.div>

          <div className="grid gap-6">
            {recentJobs?.length > 0 ? (
              recentJobs.map((job) => (
                <div className="h-auto w-full" key={job.id}>
                  <div>
                    <Card className="p-[1px] h-full w-full bg-gradient-to-r from-purple-700 via-cyan-600 to-blue-700 hover:from-purple-600 hover:via-cyan-500 hover:to-blue-600 transition-all">
                      <div className="p-6 bg-opacity-90 rounded-lg  bg-slate-900 h-full w-full">
                        <div className="flex justify-between items-start">
                          <div className="flex gap-4">
                            <div className="bg-white p-3 rounded-full h-12 w-12 flex items-center justify-center">
                              <Briefcase className="h-6 w-6 text-black" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-neutral-200">
                                {job.title ?? "Unknown Job"}
                              </h3>
                              <p className="text-muted-foreground">
                                {job.company}
                              </p>
                              <div className="flex gap-4 mt-2">
                                <div className="flex items-center gap-1 text-sm text-neutral-200">
                                  <MapPin className="h-4 w-4" />
                                  <span>{job.location}</span>
                                </div>
                                <div className="flex items-center gap-1 text-sm text-neutral-200">
                                  <DollarSign className="h-4 w-4" />
                                  <span>{job.salary}</span>
                                </div>
                                <div className="flex items-center gap-1 text-sm text-neutral-200">
                                  <Users className="h-4 w-4" />
                                  <span>{job.applicants} applicants</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Button variant="ghost" className="text-neutral-200">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-white">No jobs available</p>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Recent;
