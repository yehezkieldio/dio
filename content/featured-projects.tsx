import { FeaturedProjects } from "@/components/featured";
import {
    SiCapacitor,
    SiDiscord,
    SiDrizzle,
    SiEspressif,
    SiNestjs,
    SiNextdotjs,
    SiNx,
    SiPostgresql,
    SiPrisma,
    SiReact,
    SiTailwindcss,
    SiVite,
} from "@icons-pack/react-simple-icons";

/**
 * TODO: Find a better way to include the technologies.
 */

export const featured: FeaturedProjects[] = [
    {
        title: "Imperia",
        description: "A versatile and multipurpose Discord bot with a comprehensive array of features.",
        link: "https://github.com/yehezkieldio/imperia",
        technologies: [
            <SiDiscord key="discord" size={14} />,
            <SiNextdotjs key="nextjs" size={14} />,
            <SiReact key="react" size={14} />,
            <SiTailwindcss key="tailwindcss" size={14} />,
            <SiDrizzle key="drizzle-orm" size={14} />,
            <SiPostgresql key="postgresql" size={14} />,
            <SiNx key="nx-monorepo" size={14} />,
        ],
    },
    {
        title: "TrashTrack",
        description:
            "A smart waste management system utilizing IoT technology and data analysis to sort waste efficiently and in real-time.",
        link: "https://github.com/trashtrack-team/trashtrack",
        technologies: [
            <SiEspressif key="espressif-iot" size={14} />,
            <SiReact key="react" size={14} />,
            <SiCapacitor key="capacitor" size={14} />,
            <SiVite key="vite" size={14} />,
            <SiTailwindcss key="tailwindcss" size={14} />,
            <SiNestjs key="nestjs" size={14} />,
            <SiPrisma key="prisma-orm" size={14} />,
            <SiPostgresql key="postgresql" size={14} />,
            <SiNx key="nx-monorepo" size={14} />,
        ],
    },
];
