"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  XCircle,
  RefreshCw,
  Building2,
  X,
  ShieldAlert,
  AlertTriangle
} from "lucide-react";

function ErrorContent() {
  const searchParams = useSearchParams();
  const [closed, setClosed] = useState(false);

  // Dynamic parameters
  const company =
    searchParams.get("company") ||
    searchParams.get("merchant") ||
    searchParams.get("vendor") ||
    "Arifpay Financial Technologies";
  const errorCode =
    searchParams.get("error") ||
    searchParams.get("code") ||
    "PAYMENT_FAILED";
  const errorMessage =
    searchParams.get("message") ||
    "The payment transaction could not be processed.";

  const handleClose = () => {
    setClosed(true);
    if (typeof window !== "undefined" && window.history.length > 1) {
      window.history.back();
    }
  };

  if (closed) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-950 flex items-center justify-center text-slate-500 text-sm font-mono">
        Session closed.
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-2xl flex items-center justify-center p-4 overflow-y-auto">
      {/* Background Ambient Radial Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-rose-500/15 blur-[150px] rounded-full" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-amber-500/10 blur-[120px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-950/95 border border-slate-800/80 rounded-3xl p-7 sm:p-9 text-center shadow-[0_0_80px_rgba(244,63,94,0.15)] space-y-7 relative backdrop-blur-xl"
      >
        {/* Top Accent Gradient Line */}
        <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-rose-500 to-transparent opacity-80" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-full transition-all duration-200 border border-transparent hover:border-slate-700/60"
          title="Close Popup"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Animated Icon with Glow Rings */}
        <div className="relative inline-block pt-2">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 220, damping: 18 }}
            className="w-24 h-24 rounded-full bg-rose-500/10 border border-rose-500/25 flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(244,63,94,0.25)]"
          >
            <div className="w-16 h-16 rounded-full bg-rose-500/20 border border-rose-400/40 flex items-center justify-center">
              <XCircle className="w-9 h-9 text-rose-400 stroke-[2.2]" />
            </div>
          </motion.div>
        </div>

        {/* Header Text & Merchant Badge */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20 shadow-sm">
            <ShieldAlert className="w-3.5 h-3.5" /> {errorCode}
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight pt-1">
            Payment Failed
          </h1>
          <p className="text-xs text-slate-400 flex items-center justify-center gap-1.5 pt-0.5">
            <Building2 className="w-3.5 h-3.5 text-indigo-400" />
            <span className="font-medium text-slate-300">{company}</span>
          </p>
        </div>

        {/* Failure Message Box */}
        <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/20 text-xs text-slate-300 leading-relaxed text-center shadow-inner flex items-start gap-3">
          <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
          <p className="text-left text-rose-200/90 text-xs font-normal">
            {errorMessage}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function ErrorPage() {
  return (
    <Suspense
      fallback={
        <div className="fixed inset-0 z-50 bg-slate-950 flex items-center justify-center text-slate-400">
          <RefreshCw className="w-6 h-6 animate-spin text-rose-400" />
        </div>
      }
    >
      <ErrorContent />
    </Suspense>
  );
}
