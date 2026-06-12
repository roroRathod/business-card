"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Share2, X } from "lucide-react";
import { siteConfig } from "@/config";
import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState } from "react";

export default function CTASection() {
  const [currentUrl, setCurrentUrl] = useState(siteConfig.siteUrl || "https://rohnitrathod.dev");
  const [qrModalOpen, setQrModalOpen] = useState(false);

  useEffect(() => {
    // If siteUrl is empty, use the actual window URL once mounted
    if (!siteConfig.siteUrl && typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleShare = async () => {
    const shareData = {
      title: `${siteConfig.personal.fullName} - ${siteConfig.personal.title}`,
      text: `Connect with ${siteConfig.personal.fullName}`,
      url: currentUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log("Share cancelled or failed:", err);
      }
    } else {
      // Fallback: copy URL to clipboard
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(currentUrl);
          alert("Link copied to clipboard!");
        } else {
          // Fallback for non-HTTPS dev environments where clipboard is blocked
          alert("Sharing requires a secure connection (HTTPS). It will work in production!");
        }
      } catch (err) {
        alert("Failed to copy link.");
      }
    }
  };

  return (
    <>
      <section className="px-5 pb-4" id="cta-section">
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {/* Share My Card */}
          <button
            onClick={handleShare}
            className="btn-secondary"
            id="share-card-btn"
          >
            <Share2 size={16} strokeWidth={2} />
            Share My Card
          </button>

          {/* QR Code Section (Clickable) */}
          <div 
            className="qr-container cursor-pointer hover:border-gray-400 transition-colors" 
            id="qr-section"
            onClick={() => setQrModalOpen(true)}
          >
            <div className="w-16 h-16 border-2 border-gray-300 rounded-lg flex items-center justify-center bg-gray-50 shrink-0 overflow-hidden p-1">
              <QRCodeSVG value={currentUrl} size={100} style={{ width: "100%", height: "100%" }} />
            </div>
            <div>
              <p className="text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-0.5">
                QR Code
              </p>
              <p className="text-[10px] text-gray-400 leading-relaxed">
                Tap to enlarge and scan
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* QR Code Popup Modal */}
      <AnimatePresence>
        {qrModalOpen && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setQrModalOpen(false)}
          >
            <motion.div 
              className="bg-white rounded-2xl p-8 max-w-sm w-full relative shadow-2xl flex flex-col items-center"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200 transition-colors"
                onClick={() => setQrModalOpen(false)}
              >
                <X size={20} />
              </button>
              
              <h3 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wide">
                Scan My Card
              </h3>
              
              <div className="p-4 border-2 border-gray-200 rounded-xl bg-white mb-6">
                <QRCodeSVG value={currentUrl} size={220} />
              </div>
              
              <p className="text-sm text-gray-500 text-center font-medium">
                Point your camera at this code to open the card.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
