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

  const valschema = Yup.object({
    name: Yup.string().max(50, "Expected number of characters (max 50)").required("This is a required field"),
    cat: Yup.string().required("This is a required field"),
    desc: Yup.string().required("This is a required field"),
    job: Yup.string().required("This is a required field"),
    res: Yup.string(),
  });

  return (
    <main className="min-h-dvh bg-slate-50 py-16 px-4 flex items-center justify-center">
      <section className="w-full max-w-2xl bg-white p-8 md:p-10 rounded-3xl shadow-sm border" style={{ borderColor: Theme.lightYellow }}>
        <div className="mb-8 text-center space-y-2">
          <h1 className="text-3xl font-bold" style={{ color: Theme.darkGreen }}>
            Advertise Your Skill
          </h1>
          <p className="text-slate-600 text-sm">
            Fill out the details below to publish your skill offer to the community.
          </p>
        </div>

        <Formik
          initialValues={initVal}
          validationSchema={valschema}
          onSubmit={(values) => {
            console.log("Submitted values:", values);
          }}
        >
          <Form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-semibold text-slate-800">
                Name of Skill:
              </label>
              <Field
                id="name"
                name="name"
                placeholder="e.g. Frontend Web Development"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-amber-900 transition-colors"
              />
              <ErrorMessage name="name" component="p" className="text-red-600 text-xs mt-1" />
            </div>

            <div className="space-y-2">
              <label htmlFor="cat" className="block text-sm font-semibold text-slate-800">
                Skill Category:
              </label>
              <Field
                id="cat"
                name="cat"
                as="select"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-amber-900 transition-colors"
              >
                <option value="" disabled>Select category</option>
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
              <ErrorMessage name="cat" component="p" className="text-red-600 text-xs mt-1" />
            </div>

            <div className="space-y-2">
              <label htmlFor="desc" className="block text-sm font-semibold text-slate-800">
                Skill Description:
              </label>
              <Field
                id="desc"
                name="desc"
                as="textarea"
                rows={4}
                placeholder="Provide a short description of what you can offer or teach..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-amber-900 transition-colors"
              />
              <ErrorMessage name="desc" component="p" className="text-red-600 text-xs mt-1" />
            </div>

            <div className="space-y-2">
              <label htmlFor="job" className="block text-sm font-semibold text-slate-800">
                Job Opportunities:
              </label>
              <Field
                id="job"
                name="job"
                placeholder="e.g. Freelance, Full-time, Project Collaboration"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-amber-900 transition-colors"
              />
              <ErrorMessage name="job" component="p" className="text-red-600 text-xs mt-1" />
            </div>

            <div className="space-y-2">
              <label htmlFor="res" className="block text-sm font-semibold text-slate-800">
                Additional Resources:
              </label>
              <Field
                id="res"
                name="res"
                placeholder="Optional links, GitHub repos, or portfolio links"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-amber-900 transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 text-white font-semibold rounded-full flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-md mt-6"
              style={{ backgroundColor: Theme.darkGreen }}
            >
              <span>Post Skill</span>
              <CiPaperplane className="text-2xl" />
            </button>
          </Form>
        </Formik>
      </section>
    </main>
  );
}