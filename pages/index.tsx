import {
  ChatIcon,
  ExternalLinkIcon,
  EyeIcon,
  SparklesIcon,
} from "@heroicons/react/solid";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik, useFormikContext } from "formik";
import Link from "next/link";
import { useState } from "react";
import { Accent } from "../src/components/accent";
import { Footer } from "../src/components/footer";
import { Page } from "../src/components/page";
import { ShowcaseCard } from "../src/components/showcase-card";
import { ShowcaseSlideOver } from "../src/components/showcase-slideover";
import { contactSchema } from "../src/contact_schema";
import { items } from "../src/showcase-item";

function ContactForm() {
  const { isSubmitting } = useFormikContext<any>();

  return (
    <>
      <div>
        <label htmlFor="full-name" className="sr-only">
          Name
        </label>
        <Field
          type="text"
          name="name"
          id="name"
          autoComplete="name"
          className="bg-[#201B22] block w-full shadow-sm py-3 px-4 placeholder-gray-300 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          placeholder="Name"
          required
        />
        <ErrorMessage
          name="name"
          className={"text-red-500 text-sm"}
          component={"div"}
        />
      </div>
      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <Field
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className="bg-[#201B22] block w-full shadow-sm py-3 px-4 placeholder-gray-300  rounded-md"
          placeholder="Email"
          required
        />
        <ErrorMessage
          name="email"
          className={"text-red-500 text-sm"}
          component={"div"}
        />
      </div>
      <div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <Field
          as="textarea"
          id="message"
          name="message"
          rows={4}
          className=" bg-[#201B22] block w-full shadow-sm py-3 px-4 placeholder-gray-300    rounded-md"
          placeholder="Message"
          required
        />
        <ErrorMessage
          name="message"
          className={"text-red-500 text-sm"}
          component={"div"}
        />
      </div>
      <div>
        <button
          type="submit"
          className="inline-flex justify-center py-3 px-5 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-[#018E42] hover:bg-[#016530] focus:outline-none focus:ring-2 focus:ring-offset-2 "
          disabled={isSubmitting}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default function Home() {
  const [showcaseOpen, setShowcaseOpen] = useState(false);
  const [selectedShowCase, setSelectedShowCase] = useState(items[0]);

  return (
    <>
      <Page>
        <section className={"mt-20 md:mt-56 mb-64 mx-4"}>
          <div className={"mt-12 grid grid-cols-2 md:mx-3"}>
            {/* I'd love to make the animations play once the elements load into view, but it's not worth the complexity in this case. */}
            <div
              className={"pb-4 md:pb-0 col-span-2 md:col-span-1 animate-fadeIn"}
            >
              <Accent color="4bacfc" />
              <h2
                className={
                  "text-6xl md:text-7xl mb-3 before:underline font-semibold"
                }
              >
                Full Stack Engineer
              </h2>

              <p className="mt-2 text-sm text-white/60">
                I'm a code weaver who loves engineering solutions. I've been at
                it since 2007 and been involved with many industries such as
                gaming(mmorpg), finance, and ecommerce to name a few.
              </p>
              <div className={"mt-6"} />

              <Link href="#my-work">
                <a>
                  <button
                    className={
                      " bg-[#4bacfc] hover:bg-[#457399]    font-medium rounded-md px-5 py-3 text-lg transition-all"
                    }
                  >
                    <EyeIcon className={"h-5 w-5 mr-1 inline"} />
                    <span className={"leading-4"}>View My Work</span>
                  </button>
                </a>
              </Link>
            </div>
            <div />
          </div>
        </section>

        <section className={"mt-14"} id="my-work">
          <div className={"mt-4"} />
          <Accent color="fcdc4d" />
          <div className={"p-3"}>
            <h2 className=" text-3xl  font-semibold">
              <SparklesIcon
                className={
                  "text-[#fcdc4d] h-7 w-7 mr-1 pr-0 inline relative -top-0.5"
                }
              />
              My Work
            </h2>
            <p className="mt-2 text-sm text-white/60">
              I have worked with a breadth of technologies and ecosystems across
              the frontend, backend and ops.
            </p>
          </div>
          <div className={" mt-4"}>
            <div className={"grid-cols-3 grid gap-3"}>
              {items.map((item) => {
                return (
                  <ShowcaseCard
                    showcase={item}
                    key={`showcase-${item.name}`}
                    onClick={(showcase) => {
                      setSelectedShowCase(showcase);
                      setShowcaseOpen(true);
                    }}
                  />
                );
              })}
              <div
                className={
                  "overflow-hidden border-transparent ease-in hover:border hover:border-[#fcdc4d]  hover:-translate-y-2 hover:opacity-75 h-64 w-full rounded-md col-span-3 md:col-span-1 transition-all cursor-pointer  p-3 bg-[#201B22] shadow-lg "
                }
              >
                <Link href="/algorithms">
                  <a>
                    <div className={"w-full h-32"}>
                      <img
                        src={"/images/python.svg.webp"}
                        className={
                          " object-contain aspect-auto rounded-md h-full w-full"
                        }
                        alt={"Python"}
                      />
                    </div>
                    <div className={"mt-2 font-semibold text-lg"}>
                      Algorithms{" "}
                      <ExternalLinkIcon
                        className={"w-5 h-5 inline relative -top-0.5"}
                      />
                    </div>
                    <div className={""}>
                      <p
                        className={
                          "text-white/60 mt-1 text-sm text-ellipsis break-words"
                        }
                      >
                        Designing algorithms is fun.{" "}
                        <span className={"md:hidden"}>Tap here </span>
                        <span className={"hidden md:inline "}>Click here </span>
                        to see a short selection.
                      </p>
                    </div>
                  </a>
                </Link>
              </div>
              <div
                className={
                  "overflow-hidden border-transparent ease-in hover:border hover:border-[#fcdc4d]  hover:-translate-y-2 hover:opacity-75 h-64 w-full rounded-md col-span-3 md:col-span-1 transition-all cursor-pointer  p-3 bg-[#201B22] shadow-lg "
                }
              >
                <Link href="https://github.com/riansaunders">
                  <a target="_blank">
                    <div className={"w-full h-32"}>
                      <img
                        src={"/images/github.svg"}
                        className={
                          "bg-white object-fill aspect-auto rounded-md h-full w-full shadow-md"
                        }
                        alt={"My GitHub"}
                      />
                    </div>
                    <div className={"mt-2 font-semibold text-lg"}>
                      My GitHub{" "}
                      <ExternalLinkIcon
                        className={"w-5 h-5 inline relative -top-0.5"}
                      />
                    </div>
                    <p className={"text-white/60 mt-1 text-sm "}>
                      I periodically contribute to the open source community
                      with tools/studies.
                    </p>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className={"mt-40"} id="contact">
          <div className={"mt-4"} />
          <Accent color="018E42" />
          <div className={"p-3 mb-4"}>
            <h2 className=" font-semibold text-3xl">
              <ChatIcon
                className={
                  "text-[#018E42] h-7 w-7 pr-0 inline relative -top-0.5"
                }
              />
              Contact Me
            </h2>
            <p className="mt-2 text-sm text-white/60">
              Let's get in touch. You can reach me directly at{" "}
              <a
                href="mailto:rian@riansaunders.com"
                className={"underline font-semibold text-white/80"}
              >
                rian@riansaunders.com
              </a>
              .
            </p>
          </div>
          <div className="  ">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  message: "",
                }}
                validationSchema={contactSchema}
                onSubmit={(v, f) => {
                  axios
                    .post("/api/send_email", v)
                    .then(() => {
                      alert("Thanks! I've recieved your message.");
                    })
                    .catch((_e) => {})
                    .finally(() => {
                      f.resetForm();
                      f.setSubmitting(false);
                    });
                }}
              >
                <Form className="grid grid-cols-1 gap-y-6">
                  <ContactForm />
                </Form>
              </Formik>
            </div>
          </div>
        </section>
      </Page>
      <Footer />
      <ShowcaseSlideOver
        open={showcaseOpen}
        showcase={selectedShowCase}
        setOpen={setShowcaseOpen}
      />
    </>
  );
}
