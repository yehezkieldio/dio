import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

export interface Experience {
    place: string;
    position: string;
    period: string;
    type: string;
    description: string[];
}

export interface ExperienceProps {
    title: string;
    experiences: Experience[];
}

const Experience = (props: ExperienceProps) => {
    return (
        <div className="max-w-[780px] pb-24 pt-16">
            <h2 className="inline-block w-full scroll-m-20 border-b bg-gradient-to-r from-foreground via-accent to-accent-foreground bg-clip-text pb-2 text-3xl font-semibold tracking-tight text-transparent first:mt-0">
                {props.title}
            </h2>
            <div className="mt-10 flex flex-col gap-4">
                {props.experiences.map((experience, index) => (
                    <Card className="relative z-20" key={experience.place}>
                        <CardHeader>
                            <CardTitle className="text-lg">
                                <div className="flex items-center justify-between">
                                    <span>
                                        {experience.place}{" "}
                                        <Badge className="ml-1 text-xs font-normal" variant="outline">
                                            {experience.type}
                                        </Badge>
                                    </span>
                                    <span className="text-xs">{experience.period}</span>
                                </div>
                            </CardTitle>
                            <CardDescription className="text-xs">{experience.position}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="ml-4 list-disc [&>li]:mt-2 [&>li]:max-w-[600px] [&>li]:text-sm [&>li]:font-normal [&>li]:leading-snug">
                                {experience.description.map((desc, index) => (
                                    <li className="[&>span]:font-medium [&>span]:italic" key={index}>
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
                <Card>
                    <CardContent className="pt-6">
                        <p className="text-center text-sm font-medium leading-snug tracking-tight">
                            Hire me to build your next project! 🚀
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Experience;
