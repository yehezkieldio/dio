import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { data } from "@/content/metadata";
import { cn } from "@/lib/utils";
import "./globals.css";

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
                {children}
            </body>
        </html>
    );
}
