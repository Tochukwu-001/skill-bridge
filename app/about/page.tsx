import { Theme } from "@/components/Theme";
import Link from "next/link";
import { FaBullseye, FaLightbulb, FaUsers } from "react-icons/fa";

export default function About() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* Hero Section */}
      <section 
        className="pt-24 pb-20 px-6 text-center shadow-sm border-b"
        style={{ backgroundColor: Theme.darkGreen }}
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 
            className="text-4xl md:text-5xl font-bold tracking-tight"
            style={{ color: Theme.lightYellow }}
          >
            About SkillBridge
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
            We are on a mission to bridge the gap between what you know, what you can do, and the opportunities waiting for you. 
          </p>
        </div>
      </section>

      {/* Our Story / Mission Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 
              className="text-3xl font-bold tracking-tight"
              style={{ color: Theme.darkGreen }}
            >
              Turning Potentials Into Progress
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                The journey from learning a new skill to actually applying it in the real world can often feel isolating. We realized that traditional learning platforms focus heavily on consumption, but rarely on demonstration and connection.
              </p>
              <p>
                That is why we built SkillBridge. A platform dedicated to practitioners. Whether you are a seasoned developer, a creative designer, or a strategic marketer, this is your space to post what you can do, receive feedback, and collaborate.
              </p>
            </div>
          </div>
          
          {/* Decorative Image/Graphic Placeholder */}
          <div 
            className="rounded-3xl p-8 aspect-square md:aspect-video flex items-center justify-center border shadow-sm relative overflow-hidden"
            style={{ backgroundColor: `${Theme.lightYellow}20`, borderColor: Theme.lightYellow }}
          >
            <div className="text-center space-y-4 z-10">
              <h3 
                className="text-2xl font-bold"
                style={{ color: Theme.darkGreen }}
              >
                Practice . Learn . Achieve
              </h3>
              <p className="text-sm text-slate-700 max-w-xs mx-auto">
                Building a portfolio of active skills that attracts the right people.
              </p>
            </div>
            {/* Abstract decorative circles */}
            <div 
              className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full opacity-20"
              style={{ backgroundColor: Theme.darkGreen }}
            />
            <div 
              className="absolute -top-10 -left-10 w-32 h-32 rounded-full opacity-40"
              style={{ backgroundColor: Theme.lightYellow }}
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section 
        className="py-20 px-6 border-y"
        style={{ backgroundColor: `${Theme.lightYellow}10`, borderColor: `${Theme.lightYellow}50` }}
      >
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 
              className="text-3xl font-bold"
              style={{ color: Theme.darkGreen }}
            >
              Our Core Values
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              The principles that guide our community and the platform we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-md transition-shadow">
              <div 
                className="w-14 h-14 mx-auto rounded-2xl flex items-center justify-center rotate-3"
                style={{ backgroundColor: Theme.lightYellow, color: Theme.darkGreen }}
              >
                <FaBullseye className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Action Over Theory</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We believe that showing what you can do is infinitely more powerful than just stating what you know. Practice makes perfect.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-md transition-shadow">
              <div 
                className="w-14 h-14 mx-auto rounded-2xl flex items-center justify-center -rotate-3"
                style={{ backgroundColor: Theme.lightYellow, color: Theme.darkGreen }}
              >
                <FaLightbulb className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Continuous Learning</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The landscape of skills is always evolving. We foster an environment of feedback, curiosity, and mutual growth.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-md transition-shadow">
              <div 
                className="w-14 h-14 mx-auto rounded-2xl flex items-center justify-center rotate-3"
                style={{ backgroundColor: Theme.lightYellow, color: Theme.darkGreen }}
              >
                <FaUsers className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Community First</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Opportunities don't exist in a vacuum. Connecting with peers, mentors, and recruiters is the key to unlocking your future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center space-y-8">
        <h2 
          className="text-3xl md:text-4xl font-bold"
          style={{ color: Theme.darkGreen }}
        >
          Ready to take the next step?
        </h2>
        <p className="text-slate-600 text-lg max-w-xl mx-auto">
          Join a growing network of professionals and learners. Start sharing your skills and connect with the right people today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/register"
            className="w-full sm:w-auto px-10 py-4 rounded-full font-bold text-white transition-transform active:scale-95 shadow-md"
            style={{ backgroundColor: Theme.darkGreen }}
          >
            Create Your Profile
          </Link>
          <Link
            href="/explore"
            className="w-full sm:w-auto px-10 py-4 rounded-full font-bold transition-colors border"
            style={{ 
              borderColor: Theme.darkGreen, 
              color: Theme.darkGreen,
              backgroundColor: "transparent"
            }}
          >
            Explore Skills
          </Link>
        </div>
      </section>
    </main>
  );
}