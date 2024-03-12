import { SiGithub, SiInstagram, SiLinkedin, SiProtonmail, SiWhatsapp, SiX } from "@icons-pack/react-simple-icons";

export interface Socials {
    whatsapp: string;
    email: string;
    github: string;
    instagram: string;
    x: string;
    linkedin: string;
}

export interface PersonalProfileProps {
    header_introduction: string;
    header_highlight: string;
    introduction: string;
    socials: Socials;
}

const PersonalProfile = (props: PersonalProfileProps) => {
    return (
        <div className="max-w-[780px] pt-14">
            <h1 className="relative z-20 text-xl font-bold leading-snug tracking-tight lg:text-3xl">
                {props.header_introduction}{" "}
                <span className="inline-block bg-gradient-to-r from-accent-foreground via-primary to-accent-foreground bg-clip-text text-transparent">
                    {props.header_highlight}
                </span>
            </h1>
            <p className="relative z-20 text-sm font-normal leading-7 tracking-tight text-accent-foreground lg:text-base [&:not(:first-child)]:mt-4 [&>span]:font-medium">
                {props.introduction}
            </p>
            <div className="mt-12 flex flex-row gap-4 lg:gap-8">
                <a className="transition-all hover:-translate-y-0.5" href={props.socials.whatsapp}>
                    <SiWhatsapp size={24} />
                </a>
                <a className="transition-all hover:-translate-y-0.5" href={props.socials.email}>
                    <SiProtonmail size={24} />
                </a>
                <a className="transition-all hover:-translate-y-0.5" href={props.socials.github}>
                    <SiGithub size={24} />
                </a>
                <a className="transition-all hover:-translate-y-0.5" href={props.socials.instagram}>
                    <SiInstagram size={24} />
                </a>
                <a className="transition-all hover:-translate-y-0.5" href={props.socials.x}>
                    <SiX size={24} />
                </a>
                <a className="transition-all hover:-translate-y-0.5" href={props.socials.linkedin}>
                    <SiLinkedin size={24} />
                </a>
            </div>
        </div>
    );
};

export default PersonalProfile;
