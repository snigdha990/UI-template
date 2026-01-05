"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "Is Agentic AI suitable for startups?",
    answer:
      "Absolutely! Agentic AI is designed with startups in mind, offering scalable and easy-to-integrate AI tools.",
  },
  {
    question: "Do I need coding skills to use the platform?",
    answer:
      "No coding skills are required. Our platform is user-friendly and supports no-code integrations.",
  },
  {
    question: "Can I connect Agentic AI to existing services?",
    answer:
      "Yes, you can seamlessly integrate with popular APIs and services to extend your workflows.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes! You can explore core features on the free tier before upgrading to a premium plan.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative max-w-7xl mx-auto px-6 py-20 md:py-32 text-white"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        {faqs.map(({ question, answer }, i) => {
          const isOpen = openIndex === i;

          return (
            <motion.div
              key={question}
              className="bg-[#111827]/70 rounded-3xl p-6 shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <div className="flex justify-between items-center text-lg font-medium">
                <h3>{question}</h3>
                <span className="text-indigo-400 text-2xl">
                  {isOpen ? "-" : "+"}
                </span>
              </div>

              {isOpen && (
                <motion.p
                  className="mt-4 text-indigo-300 text-sm leading-relaxed"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  {answer}
                </motion.p>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
