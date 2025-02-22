"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { FileText, MapPin, DollarSign, Calendar, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const jobDetails = {
  title: "Senior Frontend Developer",
  company: "TechCorp Inc.",
  location: "New York, NY",
  salary: "$120,000 - $150,000",
  posted: "2024-02-15",
  description: "We are looking for a Senior Frontend Developer to join our team...",
  applicants: [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@email.com",
      experience: "5 years",
      appliedDate: "2024-02-16",
      resumeUrl: "#"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      experience: "7 years",
      appliedDate: "2024-02-17",
      resumeUrl: "#"
    },
  ]
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
}

export default function JobDetails({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-black p-8">
      <motion.div
        className="max-w-7xl mx-auto space-y-8"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.div variants={item}>
          <h1 className="text-4xl font-bold text-neutral-200">{jobDetails.title}</h1>
          <p className="text-muted-foreground mt-2">{jobDetails.company}</p>
        </motion.div>

        <motion.div variants={item}>
          <Card className="p-[1px] bg-gradient-to-r from-purple-700 via-cyan-600 to-blue-700">
            <div className="p-6 bg-slate-900 rounded-lg">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-neutral-200" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-neutral-200">{jobDetails.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="h-5 w-5 text-neutral-200" />
                  <div>
                    <p className="text-sm text-muted-foreground">Salary</p>
                    <p className="text-neutral-200">{jobDetails.salary}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-neutral-200" />
                  <div>
                    <p className="text-sm text-muted-foreground">Posted</p>
                    <p className="text-neutral-200">{jobDetails.posted}</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="p-[1px] bg-gradient-to-r from-purple-700 via-cyan-600 to-blue-700">
            <div className="p-6 bg-slate-900 rounded-lg">
              <h2 className="text-xl font-semibold text-neutral-200 mb-6">Applicants</h2>
              <div className="space-y-4">
                {jobDetails.applicants.map((applicant) => (
                  <motion.div
                    key={applicant.id}
                    className="p-4 bg-black rounded-lg"
                    variants={item}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-neutral-200">{applicant.name}</h3>
                        <p className="text-sm text-muted-foreground">{applicant.email}</p>
                        <p className="text-sm text-muted-foreground">Experience: {applicant.experience}</p>
                        <p className="text-sm text-muted-foreground">Applied: {applicant.appliedDate}</p>
                      </div>
                      <Button variant="outline" size="sm" className="gap-2">
                        <FileText className="h-4 w-4" />
                        <span>Resume</span>
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}