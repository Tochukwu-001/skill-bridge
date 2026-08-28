"use client";

import { Field, Form, Formik, ErrorMessage } from "formik";
import { CiPaperplane } from "react-icons/ci";
import * as Yup from "yup";
import { Theme } from "@/components/Theme";

export default function Advertise() {
  const initVal = {
    name: "",
    cat: "",
    desc: "",
    job: "",
    res: "",
  };

  const valSchema = Yup.object({
    name: Yup.string()
      .max(50, "Exceeded number of characters (50)")
      .required("This is a required field"),
    cat: Yup.string().required("This is a required field"),
    desc: Yup.string().required("This is a required field"),
    job: Yup.string().required("This is a required field"),
  });

  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            style={{ color: Theme.darkGreen }}
          >
            Post a Skill
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Share your expertise with the SkillBridge community, highlight related job roles, and share helpful resource links.
          </p>
        </div>

        {/* Form Container Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100">
          <Formik
            initialValues={initVal}
            validationSchema={valSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form className="space-y-6">
              {/* Skill Name */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700"
                >
                  Name of Skill
                </label>
                <Field
                  id="name"
                  name="name"
                  placeholder="e.g., Full-Stack Web Development"
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-400 text-sm transition-all"
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-red-600 text-xs font-medium pt-1"
                />
              </div>

              {/* Skill Category */}
              <div className="space-y-2">
                <label
                  htmlFor="cat"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700"
                >
                  Skill Category
                </label>
                <Field
                  id="cat"
                  name="cat"
                  as="select"
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-400 text-sm transition-all text-slate-700 cursor-pointer"
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="it">Information Technology</option>
                  <option value="agric">Agriculture</option>
                  <option value="sandm">Sales and Marketing</option>
                  <option value="fin">Finance</option>
                  <option value="med">Medicine and Health Care</option>
                  <option value="eng">Engineering</option>
                  <option value="tp">Transportation and Logistics</option>
                  <option value="writing">Technical Writing</option>
                  <option value="hr">Resource Management</option>
                  <option value="pubs">Public Speaking</option>
                  <option value="other">Other</option>
                </Field>
                <ErrorMessage
                  name="cat"
                  component="p"
                  className="text-red-600 text-xs font-medium pt-1"
                />
              </div>

              {/* Skill Description */}
              <div className="space-y-2">
                <label
                  htmlFor="desc"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700"
                >
                  Skill Description
                </label>
                <Field
                  id="desc"
                  name="desc"
                  as="textarea"
                  rows={5}
                  placeholder="Describe what this skill involves, tools used, and key outcomes..."
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-400 text-sm transition-all resize-none"
                />
                <ErrorMessage
                  name="desc"
                  component="p"
                  className="text-red-600 text-xs font-medium pt-1"
                />
              </div>

              {/* Job Opportunities */}
              <div className="space-y-2">
                <label
                  htmlFor="job"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700"
                >
                  Job Opportunities
                </label>
                <Field
                  id="job"
                  name="job"
                  placeholder="e.g., Frontend Developer, React Engineer, Web Designer"
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-400 text-sm transition-all"
                />
                <ErrorMessage
                  name="job"
                  component="p"
                  className="text-red-600 text-xs font-medium pt-1"
                />
              </div>

              {/* Additional Resources */}
              <div className="space-y-2">
                <label
                  htmlFor="res"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700"
                >
                  Additional Resources
                </label>
                <Field
                  id="res"
                  name="res"
                  placeholder="e.g., Portfolio link, GitHub repo, or documentation URL"
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-400 text-sm transition-all"
                />
                <ErrorMessage
                  name="res"
                  component="p"
                  className="text-red-600 text-xs font-medium pt-1"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl font-bold text-sm text-white flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.99] hover:opacity-95"
                  style={{ backgroundColor: Theme.darkGreen }}
                >
                  <span>Post Skill</span>
                  <CiPaperplane className="text-xl" />
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </main>
  );
}