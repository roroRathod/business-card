"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import ActionRow from "@/components/ActionRow";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import CTASection from "@/components/CTASection";
import SocialFooter from "@/components/SocialFooter";
import { UserPlus } from "lucide-react";

export default function Home() {
  return (
    <motion.main
      className="relative flex flex-col min-h-screen max-w-md mx-auto w-full bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <HeroSection />
      <ActionRow />

      {/* Save to Contacts — placed above the infographics */}
      <div className="px-5 pb-5">
        <a
          href="/business-card/contact.vcf"
          className="btn-primary"
          id="save-contact-inline"
        >
          <UserPlus size={18} strokeWidth={2} />
          Save to Contacts
        </a>
      </div>

      <CapabilitiesSection />
      <CTASection />
      <SocialFooter />
    </motion.main>
  );
}
