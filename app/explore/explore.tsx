"use client";

import { useState } from "react";
import { Theme } from "@/components/Theme";
import Link from "next/link";
import { FaSearch, FaExternalLinkAlt, FaBriefcase, FaRegClock } from "react-icons/fa";

// Mock data to demonstrate the UI
const MOCK_SKILLS = [
  {
    id: "1",
    authorName: "Sarah Jenkins",
    authorImage: "https://i.pravatar.cc/150?u=sarah",
    timestamp: "2 hours ago",
    skillName: "Full-Stack Web Development",
    skillCategory: "Engineering",
    skillDescription: "Experienced in building scalable web applications using React, Next.js, and Node.js. Passionate about clean code and accessible UI.",
    additionalLink: "https://github.com/sarahj",
    jobOpportunities: ["Frontend Developer", "React Engineer", "Technical Lead"],
  },
  {
    id: "2",
    authorName: "David Chen",
    authorImage: "https://i.pravatar.cc/150?u=david",
    timestamp: "5 hours ago",
    skillName: "Product Marketing & SEO",
    skillCategory: "Marketing",
    skillDescription: "Helping startups grow their organic traffic and build compelling product narratives. Proficient in Ahrefs, Google Analytics, and content strategy.",
    additionalLink: "https://davidchen.portfolio",
    jobOpportunities: ["SEO Specialist", "Marketing Manager"],
  },
  {
    id: "3",
    authorName: "Maya Rodriguez",
    authorImage: "https://i.pravatar.cc/150?u=maya",
    timestamp: "1 day ago",
    skillName: "UI/UX & Interaction Design",
    skillCategory: "Design",
    skillDescription: "Creating intuitive and visually stunning user experiences. Specializing in Figma prototyping, user research, and design systems.",
    additionalLink: "https://dribbble.com/mayadesigns",
    jobOpportunities: ["Product Designer", "UX Researcher", "UI Designer"],
  },
];

const CATEGORIES = ["All Categories", "Engineering", "Design", "Marketing", "Data Science", "Writing"];

export default function Explore({session}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  // Filter logic
  const filteredSkills = MOCK_SKILLS.filter((skill) => {
    const matchesSearch = skill.skillName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          skill.skillDescription.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || skill.skillCategory === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* Header Section */}
      <header 
        className="pt-20 pb-12 px-6 shadow-sm border-b"
        style={{ backgroundColor: Theme.darkGreen }}
      >
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Explore Skills
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl font-light">
            Discover talented individuals, explore their expertise, and find the right match for your next big opportunity.
          </p>
          
          {/* Search and Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <div className="relative flex-1">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search skills or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border-none focus:ring-2 focus:outline-none text-white shadow-sm"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="py-3.5 px-5 rounded-xl border-none focus:ring-2 focus:outline-none text-slate-900 shadow-sm font-medium appearance-none bg-white cursor-pointer min-w-[200px]"
            >
              {CATEGORIES.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </header>

      {/* Grid Section */}
      <section className="max-w-7xl mx-auto px-6 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill) => (
            <article 
              key={skill.id} 
              className="bg-white rounded-2xl border p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow"
              style={{ borderColor: `${Theme.lightYellow}60` }}
            >
              {/* Card Header: Author Info */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img 
                    src={skill.authorImage} 
                    alt={skill.authorName} 
                    className="w-12 h-12 rounded-full object-cover border"
                  />
                  <div>
                    <h3 className="font-bold text-slate-900">{skill.authorName}</h3>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <FaRegClock />
                      <span>{skill.timestamp}</span>
                    </div>
                  </div>
                </div>
                <span 
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ backgroundColor: `${Theme.lightYellow}40`, color: Theme.darkGreen }}
                >
                  {skill.skillCategory}
                </span>
              </div>

              {/* Card Body: Skill Details */}
              <div className="space-y-3 flex-1 mb-6">
                <h2 className="text-xl font-bold" style={{ color: Theme.darkGreen }}>
                  {skill.skillName}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {skill.skillDescription}
                </p>
              </div>

              {/* Card Footer: Jobs & Links */}
              <div className="space-y-5 mt-auto pt-5 border-t border-slate-100">
                {/* Job Opportunities */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <FaBriefcase />
                    Opportunities
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.jobOpportunities.map((job, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-medium border border-slate-200"
                      >
                        {job}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Additional Link */}
                <Link 
                  href={skill.additionalLink}
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold transition-transform active:scale-[0.98]"
                  style={{ backgroundColor: Theme.darkGreen, color: Theme.lightYellow }}
                >
                  <span>View Portfolio</span>
                  <FaExternalLinkAlt className="text-xs" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            <p className="text-lg">No skills found matching your criteria.</p>
            <button 
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Categories");
              }}
              className="mt-4 text-sm font-bold hover:underline"
              style={{ color: Theme.darkGreen }}
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}