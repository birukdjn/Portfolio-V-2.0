"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, Suspense } from "react";
import { usePathname } from "next/navigation";

const TerminalIntro = dynamic(() => import("./terminalIntro"), { ssr: false });
const Navbar = dynamic(() => import("./navbar"), { ssr: false });
const Footer = dynamic(() => import("./footer"), { ssr: false });
const ScrollToTop = dynamic(() => import("./ScrollToTop"), { ssr: false });

export default function RootClient({ children }) {
  const pathname = usePathname();
  const [showContent, setShowContent] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  const isStandalonePage = pathname === "/success" || pathname === "/error";

  // Check if intro already played this session
  useEffect(() => {
    const played = sessionStorage.getItem("introPlayed");
    if (played) {
      setShowContent(true);
      setHasPlayed(true);
    }
  }, []);

  // When intro finishes, save it in sessionStorage
  const handleFinish = () => {
    sessionStorage.setItem("introPlayed", "true");
    setShowContent(true);
    setHasPlayed(true);
  };

  if (isStandalonePage) {
    return <main className="min-h-screen bg-slate-950 flex items-center justify-center">{children}</main>;
  }

  return (
    <>
      {!hasPlayed && !showContent && (
        <TerminalIntro onFinish={handleFinish} />
      )}

      <Suspense fallback={<div />}>
        <div
          className={`transition-opacity duration-300 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
          <ScrollToTop />
        </div>
      </Suspense>
    </>
  );
}
