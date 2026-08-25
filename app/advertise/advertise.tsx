"use client"
import { Field, Form, Formik } from "formik";
import { CiPaperplane } from "react-icons/ci";
 import * as Yup from 'yup';


export default function Advertise() {

    const initVal = {
        name: "",
        cat: "",
        desc: "",
        job: "",
        res: ""
    }

    return (
        <main className="min-h-dvh">
            <section>
                <Formik
                    initialValues={initVal}
                >
                    <Form>
                        <div>
                            <label htmlFor="">Name of Skill:</label>
                            <Field name="name"/>
                        </div>
                        <div>
                            <label htmlFor="">Skill Category</label>
                            <Field name="cat" as="select">
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
                        </div>

                        <div>
                            <label htmlFor="">Skill Description</label>
                            <Field name="desc" as="textarea"/>
                        </div>

                        <div>
                            <label htmlFor="">Job Opportunities</label>
                            <Field name="job"/>
                        </div>

                        <div>
                            <label htmlFor="">Additional Resources</label>
                            <Field name="res"/>
                        </div>

                        <button type="submit">
                            Post Skill
                            <CiPaperplane />
                        </button>
                    </Form>
                </Formik>
            </section>
        </main>
    )
}