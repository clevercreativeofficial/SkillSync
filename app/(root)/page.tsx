// app/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Icons } from "@/components/icons";
import Container from "@/components/container";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background">
        <Container>
          <div className="flex flex-col items-center justify-center gap-6 py-24 text-center">
            <div className="flex items-center gap-2 rounded-full border bg-background px-4 py-1 text-sm">
              <Icons.bolt className="h-4 w-4 text-primary" />
              <span>Where Creatives Connect</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block title">Find Opportunities.</span>
              <span className="block title text-rose-500">Showcase Skills.</span>
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              SkillSync bridges the gap between talented creatives and exciting projects.
              Build your portfolio, discover collaborations, and grow your career.
            </p>
            <div className="flex sm:flex-row flex-col gap-4">
              <Button size="lg" className="gap-2">
                <i className="fi fi-rr-user-add"></i>
                Join as Talent
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <i className="fi fi-rr-briefcase"></i>
                Post Opportunities
              </Button>
            </div>
            <div className="mt-8 flex sm:flex-row flex-col items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <Avatar key={i} className="h-10 w-10 border-2 border-background">
                    <AvatarImage src={`/avatars/avatar-${i}.jpg`} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <span>Join 10,000+ creatives already collaborating</span>
            </div>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl title font-bold tracking-tight sm:text-4xl">
              How SkillSync Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Get started in just three simple steps
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: <i className="fi fi-rr-user text-accent"></i>,
                title: "Create Your Profile",
                description: "Showcase your skills, projects, and experience in minutes."
              },
              {
                icon: <i className="fi fi-rr-signal-stream text-accent"></i>,
                title: "Connect & Discover",
                description: "Find projects matching your skills or talent for your team."
              },
              {
                icon: <i className="fi fi-rr-users text-accent"></i>,
                title: "Start Collaborating",
                description: "Work together seamlessly with built-in tools."
              }
            ].map((step, i) => (
              <Card key={i} className="flex flex-col items-center text-center">
                <div className="w-full">
                  <CardHeader>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      {step.icon}
                    </div>
                  </CardHeader></div>
                <CardContent>
                  <CardTitle className="mb-2">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Profile Showcase */}
      <section className="bg-secondary py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl title font-bold tracking-tight sm:text-4xl">
              Stunning Portfolio Showcase
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              See how top creatives present their work
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Alex Chen",
                role: "UI/UX Designer",
                skills: ["Figma", "Prototyping", "User Research"]
              },
              {
                name: "Jamie Smith",
                role: "Frontend Developer",
                skills: ["React", "TypeScript", "Next.js"]
              },
              {
                name: "Taylor Wong",
                role: "Content Creator",
                skills: ["Copywriting", "SEO", "Social Media"]
              }
            ].map((profile, i) => (
              <Card key={i} className="group overflow-hidden transition-all hover:shadow-lg pt-0">
                <div className="h-48 bg-gradient-to-r from-primary/10 to-muted/50" />
                <CardHeader className="relative">
                  <Avatar className="absolute -top-20 left-5 h-20 w-20 border-4 border-background">
                    <AvatarImage src={`/avatars/avatar-${i + 1}.jpg`} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-1 mt-6">
                    <CardTitle>{profile.name}</CardTitle>
                    <CardDescription>{profile.role}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-secondary px-3 py-1 text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <Button variant="link" className="mt-4 -ml-4 hover:border-none">
                    View Full Profile
                    <i className="fi fi-rr-arrow-small-right"></i>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Job Preview */}
      <section className="py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl title font-bold tracking-tight sm:text-4xl">
              Latest Opportunities
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Find projects that match your skills
            </p>
          </div>
          <div className="mt-12 space-y-6">
            {[
              {
                title: "UI Designer for SaaS Platform",
                type: "Full-time",
                budget: "$80k - $100k",
                skills: ["Figma", "UI Design", "Design Systems"],
                posted: "2 days ago"
              },
              {
                title: "React Developer Needed",
                type: "Contract",
                budget: "$50 - $80/hr",
                skills: ["React", "TypeScript", "GraphQL"],
                posted: "1 week ago"
              },
              {
                title: "Content Writer for Tech Blog",
                type: "Freelance",
                budget: "$0.10/word",
                skills: ["Technical Writing", "SEO", "Markdown"],
                posted: "3 days ago"
              }
            ].map((job, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                  <div>
                    <CardTitle>{job.title}</CardTitle>
                    <CardDescription className="mt-1">
                      <span className="capitalize">{job.type}</span> • {job.budget} • Posted {job.posted}
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    Quick Apply
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-secondary px-3 py-1 text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" className="gap-2">
              View All Opportunities
              <i className="fi fi-rr-arrow-small-right"></i>
            </Button>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-background py-16">
        <Container>
          <div className="rounded-xl bg-secondary p-8 text-center shadow-sm">
            <h2 className="text-3xl title font-bold tracking-tight sm:text-4xl">
              Ready to Grow Your Creative Career?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join SkillSync today and connect with amazing opportunities
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="gap-2">
                <i className="fi fi-rr-user"></i>
                Sign Up as Talent
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <i className="fi fi-rr-briefcase"></i>
                Post a Job
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}