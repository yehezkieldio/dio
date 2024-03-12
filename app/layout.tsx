import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { data } from "@/content/metadata";
import { cn } from "@/lib/utils";
import "./globals.css";
import NavigationMenu from "@/components/navigation-menu";

const PlusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
    title: data.title,
    description: data.description,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(PlusJakartaSans.variable, "min-h-screen bg-background font-sans antialiased")}>
                <div className="relative z-40 min-h-screen overflow-x-hidden md:overflow-x-visible">
                    <div className="absolute inset-x-0 z-10 m-40 h-80 max-w-lg bg-gradient-to-tr from-accent via-background to-accent blur-[218px]"></div>
                    <NavigationMenu />
                    {children}
                </div>
            </body>
        </html>
    );
}
