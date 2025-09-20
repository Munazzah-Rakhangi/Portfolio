"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpCircle, Download, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const BASE = process.env.NODE_ENV === "production" ? "/Portfolio" : "";
  return (
    <section
      id="home"
      className="py-20 md:py-32 flex flex-col items-center justify-center min-h-[90vh]"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Hi, I&apos;m <span className="gradient-text">Munazzah Rakhangi</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-xl text-muted-foreground md:text-2xl">
              <span className="js-only">
                <span>Software developer & ML Engineer</span>
              </span>
              <noscript>
                <span>
                  Software developer | ML Engineer | Full-Stack Developer | Healthcare Technology
                </span>
              </noscript>
            </p>
          </div>
          <div className="max-w-[700px] text-muted-foreground">
            <p className="text-lg">
              Building intelligent healthcare solutions with AI/ML expertise and full-stack
              development skills
            </p>
          </div>

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            {/* Contact button */}
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="#contact">Get In Touch</Link>
            </Button>

            {/* Resume download button */}
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <a
                href={`${BASE}/munazzah_rakhangi_resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                download="Munazzah_Rakhangi_Resume.pdf"
              >
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
          </div>

          {/* Social links */}
          <div className="flex gap-4 mt-6">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-primary hover:bg-primary/10"
            >
              <Link
                href="https://github.com/Munazzah-Rakhangi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-primary hover:bg-primary/10"
            >
              <Link
                href="https://www.linkedin.com/in/munazzah-rakhangi-9748471b4/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-primary hover:bg-primary/10"
            >
              <Link href="mailto:munazzahrizwan.rakhangi@slu.edu">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll to top button */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block js-only">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <ArrowUpCircle className="h-10 w-10 text-primary animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  );
}
