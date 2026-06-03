'use client';

import { Bookmark, CalendarDays, Clock3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const filters = ['All', 'Remote', 'Full-time', 'Part-time', 'Contract'];

const jobs = [
  {
    title: 'Senior Product Designer',
    company: 'Niscala.io',
    city: 'San Francisco',
    tags: ['Remote', 'Full-time', 'Senior'],
    posted: '2 days ago',
    deadline: '30 April',
    salary: '₹520k - 660k/yr',
  },
  {
    title: 'Full Stack Engineer',
    company: 'SAMTIV',
    city: 'New York',
    tags: ['Onsite', 'Part-time'],
    posted: '2 days ago',
    deadline: '30 April',
    salary: '₹920k - 960k/yr',
  },
  {
    title: 'Data Scientist',
    company: 'UNICA',
    city: 'Berlin',
    tags: ['Onsite', 'Full-time', 'Senior'],
    posted: '1 day ago',
    deadline: '10 April',
    salary: '₹720k - 960k/yr',
  },
];

export default function FeaturedJobListings() {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <section className="bg-white px-5 pb-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1220px]">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="section-kicker">OPPORTUNITIES</p>
            <h2 className="section-title">Featured Job Listings</h2>
          </div>
          <a href="#" className="mb-2 text-sm font-semibold text-slate-700 underline">
            View all
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`h-9 rounded-full border px-7 text-sm font-medium transition ${
                activeFilter === filter
                  ? 'border-blue-700 bg-blue-700 text-white'
                  : 'border-blue-700 bg-white text-blue-700 hover:bg-blue-50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-9 grid gap-10 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <motion.article
              key={job.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-lg border border-slate-300 bg-white p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-950">{job.title}</h3>
                  <p className="mt-1 text-sm font-medium text-slate-400">
                    {job.company} - {job.city}
                  </p>
                </div>
                <button aria-label={`Save ${job.title}`}>
                  <Bookmark className="h-6 w-6 text-slate-400" />
                </button>
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#edf1ff] px-7 py-2 text-xs font-medium text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-5 border-b border-slate-200 pb-6 text-sm text-slate-600">
                <span className="inline-flex items-center gap-1">
                  <Clock3 className="h-4 w-4 text-blue-700" />
                  Posted {job.posted}
                </span>
                <span className="inline-flex items-center gap-1">
                  <CalendarDays className="h-4 w-4 text-blue-700" />
                  Apply by {job.deadline}
                </span>
              </div>

              <div className="mt-6 flex items-center justify-between gap-4">
                <p className="text-lg font-semibold text-slate-400">{job.salary}</p>
                <button className="h-10 rounded-md bg-blue-700 px-7 text-sm font-bold text-white transition hover:bg-blue-800">
                  View Job
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-3">
          {[0, 1, 2].map((dot) => (
            <span
              key={dot}
              className={`h-3 w-3 rounded-full ${dot === 0 ? 'bg-blue-700' : 'bg-slate-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
