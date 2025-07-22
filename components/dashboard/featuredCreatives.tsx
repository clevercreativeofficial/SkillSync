import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import Container from "@/components/container";

const featuredCreatives = () => {
    return (
        <section className="py-12">
            <Container>
                <h2 className="title mb-8 text-4xl font-bold text-center">Featured Creatives</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <Card key={i} className="justify-center hover:shadow-lg transition-shadow">
                            <CardHeader className="items-center justify-center text-center">
                                <Avatar className="mx-auto h-20 w-20 mb-4">
                                    <AvatarImage src={`/avatars/avatar-${i + 1}.jpg`} />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <CardTitle>Creative Name</CardTitle>
                                <CardDescription className="text-center">
                                    Designer & Developer
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="text-center">
                                <div className="flex flex-wrap justify-center gap-2 mb-4">
                                    <span className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                                        UI/UX
                                    </span>
                                    <span className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                                        React
                                    </span>
                                    <span className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                                        Figma
                                    </span>
                                </div>
                                <Button size="sm">
                                    View Profile
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default featuredCreatives