// app/projects/page.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

import Container from "@/components/container";

export default function ProjectsPage() {
    return (
        <div className="py-8">
            <Container>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-bold">Explore Projects</h1>
                        <p className="text-muted-foreground">
                            Find creative projects to collaborate on or get inspired
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div className="flex-1">
                            <Input placeholder="Search projects..." className="max-w-md" />
                        </div>
                        <div className="flex gap-2">
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Filter by category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Categories</SelectItem>
                                    <SelectItem value="design">Design</SelectItem>
                                    <SelectItem value="development">Development</SelectItem>
                                    <SelectItem value="writing">Writing</SelectItem>
                                    <SelectItem value="marketing">Marketing</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Sort by" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="recent">Most Recent</SelectItem>
                                    <SelectItem value="popular">Most Popular</SelectItem>
                                    <SelectItem value="collaborators">Most Collaborators</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {[1, 2, 3, 4, 5, 6].map((project) => (
                            <Card key={project} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="h-10 w-10 rounded-full bg-muted"></div>
                                        <div>
                                            <p className="text-sm font-medium">Creator Name</p>
                                            <p className="text-xs text-muted-foreground">2 days ago</p>
                                        </div>
                                    </div>
                                    <CardTitle>Project {project}</CardTitle>
                                    <CardDescription>
                                        {project === 1
                                            ? "A modern UI/UX design system for web applications"
                                            : project === 2
                                                ? "Open-source React component library"
                                                : "Creative writing collaboration platform"}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {["Design", "React", "Figma"].map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                            <span>12 collaborators</span>
                                        </div>
                                        <Button variant="outline" size="sm">
                                            View Project
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="flex justify-center">
                        <Button variant="outline">Load More</Button>
                    </div>
                </div>
            </Container>
        </div>
    );
}