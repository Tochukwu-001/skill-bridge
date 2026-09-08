import { doc, getDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import { Theme } from "@/components/Theme";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaArrowLeft,
  FaBriefcase,
  FaExternalLinkAlt,
  FaRegClock,
  FaUserCircle,
} from "react-icons/fa";

export default async function SkillDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  let skill = null;

  try {
    const docRef = doc(db, "skills", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      skill = {
        id: docSnap.id,
        authorName: data.author || "Anonymous",
        authorImage:
          data.authorImage || `https://i.pravatar.cc/150?u=${docSnap.id}`,
        timestamp: data.timestamp || "Recently",
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
    }
  } catch (error) {
    console.error("Error fetching skill details:", error);
  }

  if (!skill) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 pb-20 pt-12">
      <div className="max-w-5xl mx-auto px-6">
        <Link
          href="/explore"
          className="inline-flex items-center gap-2 text-sm font-semibold mb-8 hover:opacity-80 transition-opacity"
          style={{ color: Theme.darkGreen }}
        >
          <FaArrowLeft />
          <span>Back to Explore</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <article className="bg-white rounded-2xl border p-8 shadow-sm">
              <div className="mb-6 border-b pb-6 border-slate-100">
                <span
                  className="px-4 py-1.5 rounded-full text-sm font-semibold inline-block mb-4"
                  style={{
                    backgroundColor: `${Theme.lightYellow}40`,
                    color: Theme.darkGreen,
                  }}
                >
                  {skill.skillCategory}
                </span>
                <h1
                  className="text-3xl md:text-4xl font-bold mb-4"
                  style={{ color: Theme.darkGreen }}
                >
                  {skill.skillName}
                </h1>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-3">
                  About this Skill
                </h2>
                <div className="prose max-w-none">
                  <p className="text-slate-600 leading-relaxed whitespace-pre-wrap">
                    {skill.skillDescription}
                  </p>
                </div>
              </div>
            </article>
          </div>

          <aside className="space-y-6">
            <div className="bg-white rounded-2xl border p-6 shadow-sm space-y-6">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                  Posted By
                </h3>
                <div className="flex items-center gap-4">
                  {skill.authorImage ? (
                    <img
                      src={skill.authorImage}
                      alt={skill.authorName}
                      className="w-16 h-16 rounded-full object-cover border-2"
                      style={{ borderColor: Theme.lightYellow }}
                    />
                  ) : (
                    <FaUserCircle className="w-16 h-16 text-slate-300" />
                  )}
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">
                      {skill.authorName}
                    </h4>
                    <div className="flex items-center gap-1.5 text-sm text-slate-500 mt-1">
                      <FaRegClock />
                      <span>{skill.timestamp}</span>
                    </div>
                  </div>
                </div>
              </div>

              {skill.additionalLink && skill.additionalLink !== "#" && (
                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    External Resource
                  </h3>
                  <a
                    href={skill.additionalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:underline break-all inline-flex items-center gap-1.5"
                    style={{ color: Theme.darkGreen }}
                  >
                    <span>{skill.additionalLink}</span>
                    <FaExternalLinkAlt className="text-xs shrink-0" />
                  </a>
                </div>
              )}
            </div>

            {skill.jobOpportunities.length > 0 && (
              <div className="bg-white rounded-2xl border p-6 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                  <FaBriefcase />
                  Related Opportunities
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.jobOpportunities.map((job: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-slate-50 text-slate-700 rounded-lg text-sm font-medium border border-slate-200"
                    >
                      {job}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
}