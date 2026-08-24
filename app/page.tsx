import { Theme } from "@/components/Theme";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* Hero Section */}
      <section className="min-h-dvh bg-[url('/image.png')] bg-no-repeat bg-center bg-cover">
        <div className="min-h-dvh bg-black/60 flex items-center justify-center">
          <div className="w-11/12 md:w-2/3 mx-auto space-y-10 py-20 text-center">
            <h2 className="text-white uppercase text-3xl md:text-5xl font-bold tracking-wide">
              practice . learn . achieve
            </h2>
            <p className="text-lg md:text-2xl font-thin text-white leading-relaxed">
              Bridging the gap between what you know, can do, and the opportunities waiting for you. Turning potentials into progress. Connect with the right people and take the next step towards your future.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center pt-4">
              <Link
                href="#"
                className="text-white text-xl px-10 py-4 rounded-full w-full sm:w-auto text-center font-medium transition-transform active:scale-95"
                style={{ backgroundColor: Theme.darkGreen }}
              >
                Start Now
              </Link>
              <Link
                href="#how-it-works"
                className="border border-white text-white px-10 py-4 rounded-full text-xl w-full sm:w-auto text-center font-medium hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: Theme.darkGreen }}>
            How SkillBridge Works
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A simple three-step process to showcase your talent, collaborate with peers, and level up your career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="p-8 rounded-2xl border space-y-4 shadow-sm"
            style={{ backgroundColor: `${Theme.lightYellow}30`, borderColor: Theme.lightYellow }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
              style={{ backgroundColor: Theme.darkGreen }}
            >
              1
            </div>
            <h3 className="text-xl font-bold" style={{ color: Theme.darkGreen }}>
              Post Your Skills
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              Create detailed posts showcasing what you can do—from coding and design to writing and digital marketing.
            </p>
          </div>

          <div
            className="p-8 rounded-2xl border space-y-4 shadow-sm"
            style={{ backgroundColor: `${Theme.lightYellow}30`, borderColor: Theme.lightYellow }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
              style={{ backgroundColor: Theme.darkGreen }}
            >
              2
            </div>
            <h3 className="text-xl font-bold" style={{ color: Theme.darkGreen }}>
              Engage & Interact
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              Receive feedback, answer questions, and collaborate with other users interested in learning or partnering with you.
            </p>
          </div>

          <div
            className="p-8 rounded-2xl border space-y-4 shadow-sm"
            style={{ backgroundColor: `${Theme.lightYellow}30`, borderColor: Theme.lightYellow }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
              style={{ backgroundColor: Theme.darkGreen }}
            >
              3
            </div>
            <h3 className="text-xl font-bold" style={{ color: Theme.darkGreen }}>
              Unlock Opportunities
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              Build a verified portfolio of active skills that attracts recruiters, mentors, and prospective clients.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Skill Categories */}
      <section
        id="categories"
        className="py-24 px-6 border-y"
        style={{ backgroundColor: `${Theme.lightYellow}20`, borderColor: Theme.lightYellow }}
      >
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: Theme.darkGreen }}>
                Explore Skill Categories
              </h2>
              <p className="text-slate-600 mt-2">Find active skills posted by creators across various domains.</p>
            </div>
            <Link
              href="#"
              className="inline-flex items-center font-semibold hover:underline"
              style={{ color: Theme.darkGreen }}
            >
              View All Categories &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Web Development", count: "120+ Skills" },
              { name: "UI/UX Design", count: "85+ Skills" },
              { name: "Digital Marketing", count: "64+ Skills" },
              { name: "Content Writing", count: "50+ Skills" },
              { name: "Data Science", count: "42+ Skills" },
              { name: "Video Editing", count: "38+ Skills" },
              { name: "Mobile App Dev", count: "55+ Skills" },
              { name: "Public Speaking", count: "29+ Skills" },
            ].map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border hover:shadow-md transition-shadow cursor-pointer"
                style={{ borderColor: Theme.lightYellow }}
              >
                <h4 className="font-semibold text-lg" style={{ color: Theme.darkGreen }}>
                  {cat.name}
                </h4>
                <p className="text-xs text-slate-500 mt-1">{cat.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action Banner */}
      <section className="py-20 px-6 my-12 max-w-7xl mx-auto">
        <div
          className="rounded-3xl p-10 md:p-16 text-center space-y-6 text-white relative overflow-hidden"
          style={{ backgroundColor: Theme.darkGreen }}
        >
          <h2 className="text-3xl md:text-5xl font-bold max-w-2xl mx-auto">
            Ready to share your talent with the world?
          </h2>
          <p className="text-lg opacity-90 max-w-xl mx-auto font-light">
            Join thousands of active learners and practitioners on SkillBridge today.
          </p>
          <div className="pt-4">
            <Link
              href="/register"
              className="inline-block px-10 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105"
              style={{ backgroundColor: Theme.lightYellow, color: Theme.darkGreen }}
            >
              Join SkillBridge Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}