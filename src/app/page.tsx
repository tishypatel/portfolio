"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { RESUME_DATA } from "@/data/resume-data";
import {
  Mail,
  Phone,
  FileText,
  Globe,
  ArrowUpRight,
  Terminal,
  Cpu,
  Code2,
} from "lucide-react";
import { CommandMenu } from "@/components/command-menu";
import { motion } from "framer-motion";

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
} as const;

const itemVariants = {
  hidden: { y: 20, opacity: 0, filter: "blur(4px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
} as const;

export default function Page() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground selection:bg-foreground selection:text-background p-6 md:p-12">
      <div className="mx-auto max-w-7xl">
        {/* ANIMATED GRID CONTAINER */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-12 lg:grid-cols-12"
        >
          {/* =================================================
              LEFT PARTITION (SIDEBAR) - 4 Columns
              Sticks to the screen while you scroll
             ================================================= */}
          <section className="flex flex-col gap-6 lg:col-span-4 lg:sticky lg:top-12 lg:h-fit">
            {/* PROFILE CARD */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl border bg-card p-6 shadow-sm"
            >
              <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
                <Avatar className="h-24 w-24 border-2 border-muted">
                  <AvatarImage
                    src={RESUME_DATA.avatarUrl}
                    alt={RESUME_DATA.name}
                  />
                  <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
                </Avatar>

                <div className="space-y-1">
                  <h1 className="text-3xl font-bold tracking-tight">
                    {RESUME_DATA.name}
                  </h1>
                  <p className="text-muted-foreground">
                    Senior Software Engineer
                  </p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {RESUME_DATA.about}
                </p>

                <div className="grid grid-cols-1 gap-2 mt-4 sm:grid-cols-2">
                  <Button className="w-full" variant="outline" asChild>
                    <a href={`mailto:${RESUME_DATA.contact.email}`}>
                      <Mail className="mr-2 h-4 w-4" /> Email
                    </a>
                  </Button>
                  <Button className="w-full" variant="default" asChild>
                    <a href={RESUME_DATA.contact.social[0].url} target="_blank">
                      <Globe className="mr-2 h-4 w-4" /> LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* SKILLS PARTITION */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl border bg-card/50 p-6"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <Terminal className="h-4 w-4" /> Tech Stack
              </h3>

              <div className="space-y-4">
                <div>
                  <span className="text-xs text-muted-foreground mb-2 block">
                    Core
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {RESUME_DATA.skills.technical.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="rounded-md px-2 py-0.5 text-xs font-normal"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Separator className="bg-border/50" />
                <div>
                  <span className="text-xs text-muted-foreground mb-2 block">
                    AI & Cloud
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {RESUME_DATA.skills.cloud_ai.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="rounded-md px-2 py-0.5 text-xs font-normal"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* =================================================
              RIGHT PARTITION (CONTENT) - 8 Columns
              Scrolls independently
             ================================================= */}
          <section className="flex flex-col gap-10 lg:col-span-8">
            {/* PROJECTS SECTION */}
            <motion.div variants={itemVariants}>
              <h2 className="mb-6 text-xl font-bold tracking-tight flex items-center gap-2">
                <Code2 className="h-5 w-5 text-muted-foreground" /> Selected
                Projects
              </h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {RESUME_DATA.projects.map((project) => (
                  <Card
                    key={project.title}
                    className="group relative flex flex-col overflow-hidden border bg-muted/20 transition-all hover:bg-muted/40 hover:shadow-md"
                  >
                    <CardHeader className="p-5">
                      <CardTitle className="text-base flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          {project.title}
                          <span className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed mt-2">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto p-5 pt-0">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((t) => (
                          <Badge
                            key={t}
                            variant="outline"
                            className="bg-background/50 text-[10px]"
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <a
                      href={project.link.href}
                      className="absolute inset-0 z-10"
                      target="_blank"
                    >
                      <span className="sr-only">View</span>
                    </a>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* EXPERIENCE SECTION */}
            <motion.div variants={itemVariants}>
              <h2 className="mb-6 text-xl font-bold tracking-tight flex items-center gap-2">
                <Cpu className="h-5 w-5 text-muted-foreground" /> Professional
                History
              </h2>
              <div className="space-y-6">
                {RESUME_DATA.work.map((role) => (
                  <Card
                    key={role.company}
                    className="border-none bg-transparent shadow-none"
                  >
                    <div className="relative border-l-2 border-border pl-6 pb-2">
                      <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-border bg-background" />

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                        <h3 className="font-semibold text-lg">
                          {role.company}
                        </h3>
                        <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
                          {role.start} - {role.end}
                        </span>
                      </div>

                      <div className="text-sm font-medium text-primary mb-3">
                        {role.title}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {role.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {role.badges.map((badge) => (
                          <Badge
                            key={badge}
                            variant="secondary"
                            className="text-[10px] px-1.5"
                          >
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>
          </section>
        </motion.div>
      </div>

      <CommandMenu
        links={[
          { url: RESUME_DATA.personalWebsiteUrl, title: "Personal Website" },
        ]}
      />
    </main>
  );
}
