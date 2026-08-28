"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import Magnetic from "./Magnetic";

const defaultPhrase = "Let's build the next sharp thing.";

const contacts = [
  {
    href: "mailto:kkota3@asu.edu",
    label: "Email",
    value: "kkota3@asu.edu",
    icon: Mail,
  },
  {
    href: "https://github.com/KashyapHegdeKota",
    label: "GitHub",
    value: "@KashyapHegdeKota",
    icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/kashyap-hegde-kota/",
    label: "LinkedIn",
    value: "kashyap-hegde-kota",
    icon: Linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-pad relative pb-10">
      <div className="content-grid">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr]">
          <motion.div
            className="glass-panel overflow-hidden rounded-[8px] p-6 md:p-8"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.36 }}
            transition={{ duration: 0.42, ease: [0.25, 1, 0.5, 1] }}
          >
            <p className="mb-6 text-sm font-semibold uppercase text-acid">Contact</p>
            <h2 className="fluid-copy type-section-title font-display min-h-[0.96em] font-semibold text-porcelain">
              {defaultPhrase}
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/58">
              I am interested in internships, AI product work, cloud-heavy
              systems, and small teams where design taste matters as much as
              throughput.
            </p>
            <div className="mt-8">
              <Magnetic>
                <a
                  href="mailto:kkota3@asu.edu"
                  className="inline-flex h-12 items-center gap-2 rounded-[8px] bg-porcelain px-5 text-sm font-semibold text-ink transition-colors hover:bg-acid"
                  data-cursor="button"
                >
                  Start a conversation
                  <Send size={16} />
                </a>
              </Magnetic>
            </div>
          </motion.div>

          <motion.div
            className="grid content-end divide-y divide-white/10 border-y border-white/10"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.36 }}
            transition={{ duration: 0.42, delay: 0.06, ease: [0.25, 1, 0.5, 1] }}
          >
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex w-full items-center justify-between gap-4 py-4 transition-colors duration-300 hover:text-cyan"
                data-cursor="link"
              >
                <span>
                  <span className="block text-xs uppercase text-white/42">
                    {contact.label}
                  </span>
                  <span className="mt-1 block text-sm font-medium text-porcelain">
                    {contact.value}
                  </span>
                </span>
                <span className="grid h-10 w-10 shrink-0 place-items-center text-cyan">
                  <contact.icon size={17} />
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
