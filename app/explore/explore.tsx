"use client";

import { useEffect, useState } from "react";
import { Theme } from "@/components/Theme";
import Link from "next/link";
import {
  FaSearch,
  FaExternalLinkAlt,
  FaBriefcase,
  FaRegClock,
  FaTrash,
} from "react-icons/fa";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/config/firebase";

const CATEGORIES = [
  "All Categories",
  "Engineering",
  "Design",
  "Marketing",
  "Data Science",
  "Writing",
  "Transportation and Logistics",
];

export default function Explore({ session }: { session?: any }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [skills, setSkills] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  console.log(session?.user?.id);

  // Fetch skills from Firestore
  useEffect(() => {
    const handleFetch = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "skills"));
        const skillArr: any[] = [];

        querySnapshot.forEach((docSnap) => {
          const data = docSnap.data();

          // Map Firestore document structure to internal component representation
          const skillObj = {
            id: docSnap.id,
            authorName: data.author || "Anonymous",
            authorImage:
              data.authorImage || `https://i.pravatar.cc/150?u=${docSnap.id}`,
            timestamp: data.timestamp || "Recently",
            userId: data.userId,
            skillName: data.name || "Untitled Skill",
            skillCategory: data.cat || "General",
            skillDescription: data.desc || "",
            additionalLink: data.res || "#",
            jobOpportunities: Array.isArray(data.job)
              ? data.job
              : data.job
                ? [data.job]
                : Array.isArray(data.jobOpportunities)
                  ? data.jobOpportunities
                  : [],
          };

          skillArr.push(skillObj);
        });

        setSkills(skillArr);
        console.log(skillArr);
        
      } catch (error) {
        console.error("An error occurred while fetching skills:", error);
      } finally {
        setLoading(false);
      }
    };

    handleFetch();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "skills", id));
      setSkills((prev) => prev.filter((skill) => skill.id !== id));
    } catch (error) {
      console.error("An error occurred while deleting:", error);
    }
  };

  // Filter logic based on Firestore state
  const filteredSkills = skills.filter((skill) => {
    const matchesSearch =
      skill.skillName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.skillDescription.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All Categories" ||
      skill.skillCategory === selectedCategory;

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
            Discover talented individuals, explore their expertise, and find the
            right match for your next big opportunity.
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
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border-none focus:ring-2 focus:outline-none text-slate-900 shadow-sm"
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
        {loading ? (
          <div className="text-center py-20 text-slate-500">
            <p className="text-lg font-medium">Loading skills...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                      <h3 className="font-bold text-slate-900">
                        {skill.authorName}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <FaRegClock />
                        <span>{skill.timestamp}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        backgroundColor: `${Theme.lightYellow}40`,
                        color: Theme.darkGreen,
                      }}
                    >
                      {skill.skillCategory}
                    </span>
                    {session?.user?.id == skill.userId && (
                      <button
                        type="button"
                        onClick={() => handleDelete(skill.id)}
                        className="p-1.5 text-slate-400 hover:text-red-600 transition-colors"
                        title="Delete Skill"
                      >
                        <FaTrash className="text-xs" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Card Body: Skill Details */}
                <div className="space-y-3 flex-1 mb-6">
                  <h2
                    className="text-xl font-bold"
                    style={{ color: Theme.darkGreen }}
                  >
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
                      {skill.jobOpportunities.map(
                        (job: string, idx: number) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-medium border border-slate-200"
                          >
                            {job}
                          </span>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Additional Link */}
                  <Link
                    href={`/explore/${skill.id}`}
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold transition-transform active:scale-[0.98]"
                    style={{
                      backgroundColor: Theme.darkGreen,
                      color: Theme.lightYellow,
                    }}
                  >
                    <span>View Details</span>
                    <FaExternalLinkAlt className="text-xs" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredSkills.length === 0 && (
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