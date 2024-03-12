import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import {
    SiEspressif,
    SiReact,
    SiCapacitor,
    SiVite,
    SiTailwindcss,
    SiNestjs,
    SiPrisma,
    SiPostgresql,
    SiDiscord,
    SiNextdotjs,
    SiDrizzle,
    SiNx,
} from "@icons-pack/react-simple-icons";

export default function Home() {
    return (
        <div className="relative z-40 min-h-screen overflow-x-hidden md:overflow-x-visible">
            <div className="absolute inset-x-0 z-10 m-40 h-80 max-w-lg bg-gradient-to-tr from-accent via-background to-accent blur-[218px]"></div>
            <main className="relative z-20 mx-4 mt-8 max-w-[720px] lg:mx-auto">
                <div className="max-w-[780px] pt-14">
                    <h1 className="relative z-20 text-xl font-bold leading-snug tracking-tight lg:text-3xl">
                        Hello! I&apos;m{" "}
                        <span className="inline-block bg-gradient-to-r from-accent-foreground via-primary to-accent-foreground bg-clip-text text-transparent">
                            Yehezkiel Dio Sinolungan.
                        </span>
                    </h1>
                    <p className="relative z-20 text-sm font-normal leading-7 tracking-tight text-accent-foreground lg:text-base [&:not(:first-child)]:mt-4 [&>span]:font-medium">
                        A <span>software engineer</span> based in <span>Balikpapan, Indonesia</span> with a passion for
                        building digital experiences that are accessible and delightful with a focus on performance and
                        user experience. I strive to create meaningful and impactful products that make a difference in
                        people&apos;s lives, and I&apos;m always looking for new opportunities to learn and grow.
                    </p>
                    <div className="mt-10 flex flex-row gap-8">
                        <a className="transition-all hover:-translate-y-0.5" href="mailto:yehezkieldio@proton.me">
                            <Icon name="Mail" size={24} />
                        </a>
                        <a className="transition-all hover:-translate-y-0.5" href="https://github.com/yehezkieldio">
                            <Icon name="Github" size={24} />
                        </a>
                        <a
                            className="transition-all hover:-translate-y-0.5"
                            href="https://www.instagram.com/yhezkiel.dio/"
                        >
                            <Icon name="Instagram" size={24} />
                        </a>
                        <a className="transition-all hover:-translate-y-0.5" href="https://twitter.com/yhezkieldio">
                            <Icon name="Twitter" size={24} />
                        </a>
                        <a
                            className="transition-all hover:-translate-y-0.5"
                            href="https://www.linkedin.com/in/yehezkieldio/"
                        >
                            <Icon name="Linkedin" size={24} />
                        </a>
                    </div>
                </div>
                <div className="max-w-[780px] pt-16">
                    <h2 className="inline-block w-full scroll-m-20 border-b bg-gradient-to-r from-foreground via-primary to-accent-foreground bg-clip-text pb-2 text-2xl font-semibold tracking-tight text-transparent first:mt-0">
                        Experience
                    </h2>
                    <div className="mt-10 flex flex-col gap-4">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">
                                    <div className="flex items-center justify-between">
                                        <span>
                                            Dinas Ketenagakerjaan Kota Balikpapan{" "}
                                            <Badge className="ml-1 text-xs font-normal" variant="outline">
                                                Internship
                                            </Badge>
                                        </span>
                                        <span className="text-xs">April 2022 - July 2022</span>
                                    </div>
                                </CardTitle>
                                <CardDescription className="text-xs">
                                    Full-stack Web Developer & System Administrator
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="ml-4 list-disc [&>li]:mt-2 [&>li]:max-w-[600px] [&>li]:text-sm [&>li]:font-normal [&>li]:leading-snug">
                                    <li className="[&>span]:font-medium [&>span]:italic">
                                        Developed a comprehensive inventory management web application from the from the
                                        ground up, covering back-end services, front-end interface, and database.
                                        Employed technologies such as{" "}
                                        <span>Python, FastAPI, Node.js, TypeScript, Next.js, NestJS, and MongoDB.</span>
                                    </li>
                                    <li className="[&>span]:font-medium [&>span]:italic">
                                        Designed and implemented a financial recapitulation web application using the
                                        <span>Laravel framework</span>. This initiative led to a more streamlined user
                                        experience and enhanced overall efficiency.
                                    </li>
                                    <li className="[&>span]:font-medium [&>span]:italic">
                                        Deployed and administered{" "}
                                        <span>web servers, application servers, and database servers.</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6">
                                <p className="text-center text-sm font-medium leading-snug tracking-tight">
                                    Hire me to build your next project! 🚀
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className="max-w-[780px] pb-24 pt-20">
                    <h2 className="relative z-20 inline-block w-full scroll-m-20 border-b bg-gradient-to-r from-foreground via-primary to-accent-foreground bg-clip-text pb-2 text-2xl font-semibold tracking-tight text-transparent first:mt-0">
                        Featured
                    </h2>
                    <div className="absolute inset-x-0 z-10 m-40 h-80 max-w-lg bg-gradient-to-tr from-accent via-background to-accent blur-[218px]"></div>
                    <div className="mt-10 flex flex-col gap-4">
                        <Card className="group relative z-20 flex-1 hover:bg-slate-950">
                            <CardHeader>
                                <CardTitle className="text-lg">Imperia</CardTitle>
                                <CardDescription className="max-w-[500px] text-xs">
                                    A versatile and multipurpose Discord bot with a comprehensive array of features.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="relative">
                                <div className="flex flex-row gap-4">
                                    <SiDiscord size={14} />
                                    <SiNextdotjs size={14} />
                                    <SiReact size={14} />
                                    <SiTailwindcss size={14} />
                                    <SiDrizzle size={14} />
                                    <SiPostgresql size={14} />
                                    <SiNx size={14} />
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="group relative z-20 flex-1 transition-all hover:bg-slate-950">
                            <CardHeader>
                                <CardTitle className="text-lg">TrashTrack</CardTitle>
                                <CardDescription className="max-w-[500px] text-xs">
                                    A smart waste management system utilizes IoT technology and data analysis to sort
                                    waste efficiently and in real-time.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="relative">
                                <div className="flex flex-row gap-4">
                                    <SiEspressif size={14} />
                                    <SiReact size={14} />
                                    <SiCapacitor size={14} />
                                    <SiVite size={14} />
                                    <SiTailwindcss size={14} />
                                    <SiNestjs size={14} />
                                    <SiPrisma size={14} />
                                    <SiPostgresql size={14} />
                                    <SiNx size={14} />
                                </div>
                            </CardContent>
                        </Card>
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
            </main>
        </div>
    );
}
