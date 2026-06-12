"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, Network } from "lucide-react";
import { derivedUrls } from "@/config";
import { useState } from "react";
import NetworkModal from "./NetworkModal";

const actions = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: MessageCircle,
    href: derivedUrls.whatsapp,
    external: true,
  },
  {
    id: "call",
    label: "Call Now",
    icon: Phone,
    href: derivedUrls.call,
    external: false,
  },
  {
    id: "email",
    label: "Email Us",
    icon: Mail,
    href: derivedUrls.email,
    external: false,
  },
  // {
  //   id: "network",
  //   label: "View Network",
  //   icon: Network,
  //   href: "#",
  //   external: false,
  //   isModal: true,
  // },
];

export default function ActionRow() {
  const [networkOpen, setNetworkOpen] = useState(false);

  return (
    <>
      <motion.section
        className="px-6 pb-5"
        id="action-row"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        <div className="flex justify-center gap-5">
          {actions.map((action) => (
            <a
              key={action.id}
              href={action.href} // isModal check removed for now since it's commented out
              target={action.external ? "_blank" : undefined}
              rel={action.external ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center gap-1.5 cursor-pointer"
              id={`action-${action.id}`}
            >
              <div className="action-circle">
                <action.icon
                  size={20}
                  strokeWidth={1.6}
                  className="text-gray-700"
                />
              </div>
              <span className="text-[9px] font-semibold text-gray-500 tracking-wider uppercase leading-tight text-center max-w-[56px]">
                {action.label}
              </span>
            </a>
          ))}
        </div>
      </motion.section>

      {/* NetworkModal is kept in the component tree but trigger is hidden */}
      <NetworkModal
        isOpen={networkOpen}
        onClose={() => setNetworkOpen(false)}
      />
    </>
  );
}
