import Experience from "@/components/experience";
import Featured from "@/components/featured";
import NavigationMenu from "@/components/navigation-menu";
import PersonalProfile from "@/components/personal-profile";
import { experiences } from "@/content/experiences";
import { featured } from "@/content/featured-projects";
import { socials } from "@/content/socials";

export default function Home() {
    return (
        <>
            <div className="absolute inset-x-0 z-10 m-40 h-80 max-w-lg bg-gradient-to-tr from-accent via-background to-accent blur-[218px]"></div>
            <NavigationMenu />
            <main className="relative z-20 mx-4 mt-8 max-w-[720px] lg:mx-auto">
                <PersonalProfile
                    header_introduction="Hello, I'm"
                    header_highlight="Yehezkiel Dio Sinolungan"
                    introduction="A software engineer based in Balikpapan, Indonesia with a passion for building digital experiences that are accessible and delightful with a focus on performance and
                        user experience. I strive to create meaningful and impactful products that make a difference in
                        people's lives, and I'm always looking for new opportunities to learn and grow."
                    socials={{
                        ...socials,
                    }}
                />
                <Featured title="Featured" projects={featured} />
                <div className="absolute inset-x-0 z-10 ml-[32rem] h-80 max-w-lg bg-gradient-to-tr from-accent via-background to-accent blur-[218px]"></div>
                <Experience title="Experiences" experiences={experiences} />
            </main>
        </>
    );
}
