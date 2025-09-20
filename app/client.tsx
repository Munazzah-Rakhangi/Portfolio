"use client";

import type React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import AnimatedBackground from "@/components/animated-background";
import { cn } from "@/lib/utils";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
      <div className={cn("min-h-screen bg-background font-mono antialiased")}>
        <div className="relative flex min-h-screen flex-col overflow-hidden">
          {/* Background behind everything, non-interactive */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <AnimatedBackground />
          </div>

          {/* Sticky header on top */}
          <Header />

          {/* Add top padding so content isn't under the fixed header */}
          <main className="flex-1 relative z-10 pt-16">{children}</main>

          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
