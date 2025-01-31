import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Travel Camp",
    description: "Traving Camping",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning data-gr-ext-installed="true" data-new-gr-c-s-check-loaded="14.1219.0">
            <body>
                <main className="relative overflow-hidden"></main>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
