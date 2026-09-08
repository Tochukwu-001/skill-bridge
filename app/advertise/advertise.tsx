"use client";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { CiCircleCheck, CiPaperplane } from "react-icons/ci";
import * as Yup from "yup";
import { Theme } from "@/components/Theme";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import { useState } from "react";
import { LuLoaderCircle } from "react-icons/lu";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function Advertise({ session }: { session?: any }) {
  const [sending, setSending] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
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
            Share your expertise with the SkillBridge community, highlight
            related job roles, and share helpful resource links.
          </p>
        </div>

        {/* Form Container Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100">
          <Formik
            initialValues={initVal}
            validationSchema={valSchema}
            onSubmit={async (values, { resetForm }) => {
              setSending(true);
              try {
                const data = {
                  author: session?.user?.name || "User",
                  authorImage: session?.user?.image || "",
                  timestamp: new Date().toLocaleTimeString(),
                  userId: session?.user?.id || "",
                  ...values,
                };
                await addDoc(collection(db, "skills"), data);
                setSending(false);
                resetForm();
                handleOpen();
              } catch (error) {
                console.error("Error adding skill:", error);
                setSending(false);
              }
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
                  <option value="Information Technology">
                    Information Technology
                  </option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Sales and Marketing">
                    Sales and Marketing
                  </option>
                  <option value="Finance">Finance</option>
                  <option value="Medicine and Health Care">
                    Medicine and Health Care
                  </option>
                  <option value="Engineering">Engineering</option>
                  <option value="Transportation and Logistics">
                    Transportation and Logistics
                  </option>
                  <option value="Technical Writing">Technical Writing</option>
                  <option value="Resource Management">
                    Resource Management
                  </option>
                  <option value="Public Speaking">Public Speaking</option>
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
                  disabled={sending}
                  type="submit"
                  className={`w-full py-4 px-6 rounded-2xl font-bold text-sm text-white flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.99] ${sending && "opacity-50"}`}
                  style={{ backgroundColor: Theme.darkGreen }}
                >
                  {sending ? (
                    <span className="flex items-center gap-1">
                      Sending...
                      <LuLoaderCircle className="text-xl animate-spin" />
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      Post Skill
                      <CiPaperplane className="text-xl" />
                    </span>
                  )}
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="rounded-2xl outline-none">
            <Typography id="modal-modal-title" variant="h6" component="h2" className="text-center font-bold text-slate-900">
              Skill Successfully Posted
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <CiCircleCheck className="text-green-600 text-8xl mx-auto" />
            </Typography>
          </Box>
        </Modal>
      </div>
    </main>
  );
}