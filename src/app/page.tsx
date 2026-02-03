"use client";

import { useState } from "react";
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
  Globe,
  ArrowUpRight,
  Terminal,
  Cpu,
  Code2,
  Camera,
  Gamepad2,
  Dumbbell,
  Brain,
  MoreHorizontal,
  User,
  Briefcase,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 10, opacity: 0, filter: "blur(4px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function Page() {
  const [view, setView] = useState<"work" | "life">("work");

  return (
    <main
      /* FIX 1: h-screen + overflow-y-auto makes this container handle the scrolling 
         instead of the window. This isolates the layout calculation. */
      className="h-screen w-full bg-background font-sans text-foreground selection:bg-foreground selection:text-background p-4 md:p-12 overflow-y-auto"
      /* FIX 2: scrollbar-gutter: stable reserves the width of the scrollbar 
         at all times so the content doesn't jump when the bar appears/disappears. */
      style={{ scrollbarGutter: "stable" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[380px_1fr] lg:gap-12 items-start">
          {/* =================================================
              LEFT PARTITION: SIDEBAR
             ================================================= */}
          <section className="flex flex-col gap-6 lg:sticky lg:top-0 lg:h-fit">
            <div className="rounded-2xl border bg-card p-6 shadow-sm relative">
              <div className="absolute top-4 right-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 hover:bg-muted"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem
                      onClick={() => setView("work")}
                      className="gap-2 cursor-pointer"
                    >
                      <Briefcase className="h-4 w-4" /> Professional View
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => setView("life")}
                      className="gap-2 cursor-pointer"
                    >
                      <User className="h-4 w-4" /> Personal Interests
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
                <Avatar className="h-24 w-24 border-2 border-muted shrink-0">
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
                  <p className="text-muted-foreground font-medium text-sm">
                    Senior Software Engineer
                  </p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {RESUME_DATA.about}
                </p>
                <div className="grid grid-cols-1 gap-2 mt-4 w-full sm:grid-cols-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={`mailto:${RESUME_DATA.contact.email}`}>
                      <Mail className="mr-2 h-4 w-4" /> Email
                    </a>
                  </Button>
                  <Button variant="default" size="sm" asChild>
                    <a href={RESUME_DATA.contact.social[0].url} target="_blank">
                      <Globe className="mr-2 h-4 w-4" /> LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border bg-card/50 p-6 hidden lg:block">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <Terminal className="h-4 w-4" /> Tech Stack
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] uppercase text-muted-foreground mb-2 block">
                    Engineering
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {RESUME_DATA.skills.technical.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="rounded-md px-2 py-0.5 text-[10px] font-normal"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Separator className="bg-border/50" />
                <div>
                  <span className="text-[10px] uppercase text-muted-foreground mb-2 block">
                    AI & Infrastructure
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {RESUME_DATA.skills.cloud_ai.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="rounded-md px-2 py-0.5 text-[10px] font-normal"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =================================================
              RIGHT PARTITION: CONTENT
             ================================================= */}
          <section>
            {view === "work" ? (
              <motion.div
                key="work-view"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="space-y-12"
              >
                <motion.div variants={itemVariants}>
                  <h2 className="mb-6 text-xl font-bold tracking-tight flex items-center gap-2">
                    <Code2 className="h-5 w-5 text-muted-foreground" /> Projects
                  </h2>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {RESUME_DATA.projects.map((p) => (
                      <Card
                        key={p.title}
                        className="group relative border bg-muted/10 transition-all hover:bg-muted/30"
                      >
                        <CardHeader className="p-5">
                          <CardTitle className="text-base flex items-center justify-between">
                            <span className="flex items-center gap-2">
                              {p.title}
                              <span className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></span>
                            </span>
                            <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100" />
                          </CardTitle>
                          <CardDescription className="text-sm mt-2 line-clamp-2">
                            {p.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-5 pt-0">
                          <div className="flex flex-wrap gap-1">
                            {p.techStack.map((t) => (
                              <Badge
                                key={t}
                                variant="outline"
                                className="text-[10px] font-mono"
                              >
                                {t}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                        <a
                          href={p.link.href}
                          className="absolute inset-0 z-10"
                          target="_blank"
                        ></a>
                      </Card>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h2 className="mb-6 text-xl font-bold tracking-tight flex items-center gap-2">
                    <Cpu className="h-5 w-5 text-muted-foreground" /> Experience
                  </h2>
                  <div className="space-y-6">
                    {RESUME_DATA.work.map((role) => (
                      <div
                        key={role.company}
                        className="relative border-l-2 border-border pl-6 pb-2"
                      >
                        <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-border bg-background" />
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                          <h3 className="font-semibold">{role.company}</h3>
                          <span className="text-[10px] font-mono text-muted-foreground">
                            {role.start} - {role.end}
                          </span>
                        </div>
                        <div className="text-xs font-medium text-primary mb-2">
                          {role.title}
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          {role.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {role.badges.map((b) => (
                            <Badge
                              key={b}
                              variant="secondary"
                              className="text-[10px] px-1.5 font-normal"
                            >
                              {b}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="life-view"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <motion.div variants={itemVariants}>
                    <Card className="bg-muted/10 border-muted/50 h-full">
                      <CardHeader>
                        <CardTitle className="text-base flex items-center gap-2">
                          <Camera className="h-4 w-4 text-muted-foreground" />{" "}
                          Photography
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-muted-foreground leading-relaxed">
                        Street photography enthusiast capturing urban life.
                        Recently explored Jodhpur and Jaisalmer with a Nikon
                        D3300.
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Card className="bg-muted/10 border-muted/50 h-full">
                      <CardHeader>
                        <CardTitle className="text-base flex items-center gap-2">
                          <Gamepad2 className="h-4 w-4 text-muted-foreground" />{" "}
                          Gaming
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-muted-foreground leading-relaxed">
                        Competitive play in CS2 and deep systems analysis in
                        Path of Exile 2.
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Card className="bg-muted/10 border-muted/50 h-full">
                      <CardHeader>
                        <CardTitle className="text-base flex items-center gap-2">
                          <Dumbbell className="h-4 w-4 text-muted-foreground" />{" "}
                          Fitness
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-muted-foreground leading-relaxed">
                        Focused on progressive bodyweight strength training and
                        calisthenics.
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Card className="bg-muted/10 border-muted/50 h-full">
                      <CardHeader>
                        <CardTitle className="text-base flex items-center gap-2">
                          <Brain className="h-4 w-4 text-muted-foreground" />{" "}
                          Research
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-muted-foreground leading-relaxed">
                        Building a Python-based roadmap for Machine Learning
                        career integration.
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
