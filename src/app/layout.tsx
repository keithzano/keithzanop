import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { SectionProvider } from "@/context/section-context";
import { Footer } from "@/components/footer";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Keith Zanorehamba • Software Developer & Freelancer",
  description:
    "Self-taught & degree-certified coder turning ideas into polished web experiences. From custom WordPress sites to React apps, I deliver clean, efficient solutions—with a side of developer humor. Let’s build something great togethe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.variable} grainy-bg antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
        >
          <SectionProvider>
            <Navbar />
            {children}
            <Footer />
          </SectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
