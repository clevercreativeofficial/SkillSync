// app/[username]/page.tsx
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Container from "@/components/container";

export default function UserPortfolioPage() {
    return (
        <div className="py-8">
            <Container>
                <div className="flex flex-col gap-8">
                    {/* Profile Header */}
                    <div className="flex flex-col items-center gap-4 text-center">
                        <Avatar className="h-24 w-24">
                            <AvatarImage src="/avatars/default.jpg" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div>
                            <h1 className="text-3xl font-bold">Creative Name</h1>
                            <p className="text-xl text-muted-foreground">
                                UI/UX Designer & Frontend Developer
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <Button>Contact</Button>
                            <Button variant="outline">Follow</Button>
                        </div>
                    </div>

                    {/* Skills & About */}
                    <div className="grid gap-8 md:grid-cols-3">
                        <Card className="md:col-span-2">
                            <CardHeader>
                                <CardTitle>About</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    I&apos;m a passionate designer and developer with 5+ years of
                                    experience creating beautiful, functional digital experiences.
                                    Specializing in React, TypeScript, and design systems.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Skills</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "UI/UX Design",
                                        "Figma",
                                        "React",
                                        "TypeScript",
                                        "Next.js",
                                        "Tailwind CSS",
                                        "User Research",
                                        "Prototyping",
                                    ].map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Projects */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {[1, 2, 3].map((project) => (
                                <Card key={project}>
                                    <CardHeader>
                                        <CardTitle>Project {project}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="h-40 bg-muted rounded mb-4"></div>
                                        <p className="text-muted-foreground mb-4">
                                            {project === 1
                                                ? "A modern UI/UX design system for web applications"
                                                : project === 2
                                                    ? "Open-source React component library"
                                                    : "Creative writing collaboration platform"}
                                        </p>
                                        <Button variant="outline" size="sm">
                                            View Project
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Experience */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Experience</h2>
                        <div className="space-y-4">
                            {[1, 2].map((exp) => (
                                <div key={exp} className="border rounded-lg p-4">
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className="font-medium">
                                                {exp === 1 ? "Senior Product Designer" : "UI Designer"}
                                            </h3>
                                            <p className="text-muted-foreground">
                                                {exp === 1 ? "Tech Company" : "Design Studio"}
                                            </p>
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            {exp === 1 ? "2020 - Present" : "2018 - 2020"}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}