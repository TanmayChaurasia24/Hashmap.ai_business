"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface JobFormData {
  id: string;
  title: string;
  description: string;
  company: string;
  location: string;
  salary: string;
  jobtype: string;
  applicationurl: string;
  skills: string;
  postedby: string;
}

export default function JobForm() {
  const [formData, setFormData] = useState<JobFormData>({
    id: "",
    title: "",
    description: "",
    company: "",
    location: "",
    salary: "",
    jobtype: "",
    applicationurl: "",
    skills: "",
    postedby: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Job Posted:", formData);
    alert("Job Posted Successfully!");
  };

  return (
    <div className="h-[90vh] overflow-hidden flex items-center justify-center bg-slate-900 text-white pt-3 pb-3">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 4 }}
        className="w-full max-w-2xl bg-gray-800 p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Post a Job</h2>

        <form onSubmit={handleSubmit} className="space-y-2 ">
          {/* Title */}
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="text"
            name="title"
            placeholder="Job Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none"
            required
          />

          {/* Description */}
          <motion.textarea
            whileFocus={{ scale: 1.05 }}
            name="description"
            placeholder="Job Description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none"
            required
          />

          {/* Company & Location */}
          <div className="grid grid-cols-2 gap-4">
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none"
              required
            />
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none"
              required
            />
          </div>

          {/* Salary & Job Type */}
          <div className="grid grid-cols-2 gap-4">
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="text"
              name="salary"
              placeholder="Salary"
              value={formData.salary}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none"
              required
            />
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="text"
              name="jobtype"
              placeholder="Job Type (Full-time, Part-time)"
              value={formData.jobtype}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none"
              required
            />
          </div>

          {/* Application URL */}
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="text"
            name="applicationurl"
            placeholder="Application URL"
            value={formData.applicationurl}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none"
            required
          />

          {/* Skills Required */}
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="text"
            name="skills"
            placeholder="Required Skills (comma-separated)"
            value={formData.skills}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none"
            required
          />

          {/* Posted By */}
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="text"
            name="postedby"
            placeholder="Posted By (Your Name)"
            value={formData.postedby}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none"
            required
          />

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            className="w-full p-3 bg-blue-600 hover:bg-blue-700 rounded-md font-bold text-white transition"
          >
            Post Job
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
