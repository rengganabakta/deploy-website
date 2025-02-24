"use client";
import React, { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion, useScroll, useSpring } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

// Data anggota tim
const teamMembers = [
  {
    id: 1,
    name: "Liem Sian Liong",
    image: "/images/Liem Sian Liong.png",
    description:
      "Experienced in tax consulting, information technology, and integrated system implementation. Currently, he is a Partner at KAP Hananta Budianto (An Independent Member of UHY) and holds various certifications, including CPA, CMA, Brevet C, Chartered Accountant, ASEAN CPA, as well as certifications in networking, business valuation, and investigation.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "liem@example.com",
    },
  },
  {
    id: 2,
    name: "Budi Selamet Hartono",
    image: "/images/budi selamet hartono.png",
    description:
      "A certified Tax Consultant and former Deloitte public accountant with extensive experience in tax, audit, and financial statement compilation. Holds a Registered Tax Consultant (Certificate B License).",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "liem@example.com",
    },
  },
  {
    id: 3,
    name: "Soebyantoro",
    image: "/images/soebyantoro.png",
    description:
      "Specialized in costing and financial statement compilation with experience in public companies, as well as expertise in information technology and taxation. Holds a Registered Tax Consultant (Certificate A License).",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "liem@example.com",
    },
  },
  {
    id: 5,
    name: "Diana Kurnia",
    image: "/images/diana kurnia.png",
    description:
      "A certified public accountant and former Ernst & Young auditor with extensive experience in financial statement compilation, auditing, and internal audits. She has a strong background in financial compliance and risk assessment. Currently, she is a Partner at KAP Hananta Budianto (An Independent Member of UHY).",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "liem@example.com",
    },
  },
  {
    id: 6,
    name: "Hendro Susilo",
    image: "/images/hendro susilo.png",
    description:
      "A registered accountant and MBA with extensive experience in consulting, specializing in ISO, management accounting, general consulting, and integrated system implementation. He is also skilled in Initial Public Offering (IPO) and human resource development.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "liem@example.com",
    },
  },
  {
    id: 7,
    name: "Chuie Linda",
    image: "/images/chuie linda.png",
    description:
      "Specialized in information technology, information system and networking. She is also skilled system implementation from Malaysian software.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "liem@example.com",
    },
  },
  {
    id: 8,
    name: "Siti Nurasiah",
    image: "/images/siti nurasiah.png",
    description:
      "Specialized in costing and financial statements compilation and having experience public company. She is also skilled taxation.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "liem@example.com",
    },
  },
  {
    id: 9,
    name: "Irna Natalia",
    image: "/images/irna natalia.png",
    description:
      "Specialized in costing and financial statements compilation. She is also skilled system implementation from Malaysian software.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "liem@example.com",
    },
  },
  {
    id: 10,
    name: "Yenny",
    image: "/images/yenny.png",
    description:
      "Specialized in information technology, information system and networking. She is also skilled system implementation from Malaysian software.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "liem@example.com",
    },
  },
  {
    id: 11,
    name: "Andrian",
    image: "/images/andrian.png",
    description:
      "Specialized in information technology, information system and networking. He is also skilled system implementation from Malaysian software.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "liem@example.com",
    },
  },
  {
    id: 12,
    name: "Merianawati Sinatra",
    image: "/images/merianawati sinatra.png",
    description:
      "Specialized in Managing and optimizing the prices charged for goods, services, and intellectual property transferred between different entities within a multinational corporation. Ensure compliance with international tax regulations and guidelines to minimize tax liabilities while maintaining arm’s length principles.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "liem@example.com",
    },
  },
  {
    id: 13,
    name: "Arin Avila",
    image: "/images/arin avila.png",
    description:
      "Specialized in analyzing financial information and preparing reports to guide management in making strategic business decisions . Focus on budgeting, cost management, performance evaluation, and financial forecasting to help improve operational efficiency and profitability. Supporting insight for the organization in achieving its financial goals effectively.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "liem@example.com",
    },
  },
];

export default function TeamPage() {
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
  });

  // State untuk tracking expanded description
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />
      <Navbar activePage="team" />
      <main className="flex min-h-screen flex-col pt-16">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="relative py-20 bg-gradient-to-b from-primary/5"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="container mx-auto px-4"
          >
            <motion.h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              <span className="gradient-text">{t("team.page.title")}</span>
            </motion.h1>
            <motion.p className="text-lg text-muted text-center max-w-3xl mx-auto">
              {t("team.page.subtitle")}
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Team Members Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group relative bg-white/50 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                >
                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/5] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 z-10" />
                    <motion.div
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-110 transition-transform duration-500"
                    />
                    {member.image && (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    )}
                  </div>

                  {/* Content Container */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>

                      {/* Description with View More */}
                      <div className="relative">
                        <p
                          className={`text-sm text-white/80 leading-relaxed ${
                            expandedId === member.id ? "" : "line-clamp-3"
                          }`}
                        >
                          {member.description}
                        </p>

                        {/* View More Button */}
                        <motion.button
                          onClick={() =>
                            setExpandedId(
                              expandedId === member.id ? null : member.id
                            )
                          }
                          className="text-primary text-sm font-medium mt-2 hover:text-primary/80 transition-colors flex items-center gap-1"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {expandedId === member.id ? (
                            <>
                              View Less
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 15l7-7 7 7"
                                />
                              </svg>
                            </>
                          ) : (
                            <>
                              View More
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </>
                          )}
                        </motion.button>
                      </div>

                      {/* Social Links */}
                      <div className="flex items-center space-x-4 mt-4">
                        {Object.entries(member.social).map(
                          ([platform, link]) => (
                            <motion.a
                              key={platform}
                              href={link}
                              whileHover={{ scale: 1.1 }}
                              className="text-white/80 hover:text-primary transition-all"
                            >
                              {platform === "linkedin" && (
                                <svg
                                  className="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                              )}
                              {platform === "twitter" && (
                                <svg
                                  className="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                </svg>
                              )}
                              {platform === "email" && (
                                <svg
                                  className="w-5 h-5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                  />
                                </svg>
                              )}
                            </motion.a>
                          )
                        )}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Team Section */}
        <section className="py-20 bg-gradient-to-b from-white to-primary/5">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-4">
                {t("team.join.title")}
              </h2>
              <p className="text-muted mb-8">{t("team.join.subtitle")}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-white rounded-full font-medium"
              >
                {t("team.join.button")}
              </motion.button>
            </motion.div>
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <Footer />
        </motion.div>
      </main>
    </>
  );
}
