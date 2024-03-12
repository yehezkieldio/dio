import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

export interface FeaturedProjects {
    title: string;
    description: string;
    link: string;
    technologies: JSX.Element[];
}

export interface FeaturedProps {
    title: string;
    projects: FeaturedProjects[];
}

const Featured = (props: FeaturedProps) => {
    return (
        <div className="max-w-[780px] pt-16">
            <h2 className="relative z-20 inline-block w-full scroll-m-20 border-b bg-gradient-to-r from-foreground via-accent to-accent-foreground bg-clip-text pb-2 text-3xl font-semibold tracking-tight text-transparent first:mt-0">
                {props.title}
            </h2>
            <div className="mt-10 flex flex-col gap-4">
                {props.projects.map((project, index) => (
                    <Card className="group relative z-20 flex-1 hover:bg-slate-950" key={project.title}>
                        <Link href={project.link} target="_blank">
                            <CardHeader>
                                <CardTitle className="text-lg">{project.title}</CardTitle>
                                <CardDescription className="max-w-[500px] text-xs">
                                    {project.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="relative">
                                <div className="flex flex-row gap-4">
                                    {project.technologies.map((technology, index) => (
                                        <div key={index}>{technology}</div>
                                    ))}
                                </div>
                            </CardContent>
                        </Link>
                    </Card>
                ))}
                <Card className="relative z-20 border-transparent bg-transparent">
                    <CardContent className="bg-transparent pl-0 pt-5">
                        <p className="text-left text-base font-medium leading-snug tracking-tight [&>span]:font-medium [&>span]:underline [&>span]:hover:text-cyan-200">
                            View more on{" "}
                            <span>
                                <a href="/projects"> #projects. </a>
                            </span>
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Featured;
