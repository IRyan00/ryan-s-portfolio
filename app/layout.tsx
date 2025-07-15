import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { title } from "process";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ryan's Portfolio • Junior Full Stack Developer",
  description:
    "Discover Ryan's portfolio, a junior Full Stack developer using TypeScript, Next.js, Shadcn/ui and TailwindCSS..",
  keywords: [
    "Ryan",
    "Développeur Full Stack",
    "Full Stack Developer",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "Shadcn/ui",
    "Développeur Web",
    "Web Developeur",
    "Junior Developer",
  ],
  authors: [{ name: "Ryan", url: "https://ryan-s-portfolio.vercel.app/" }],
  creator: "Ryan",
  metadataBase: new URL("https://ryan-s-portfolio.vercel.app/"),
  openGraph: {
    title: "Ryan's Portfolio • Junior Full Stack Developer",
    description: "Discover Ryan's portfolio, a junior Full Stack developer.",
    url: "https://ryan-s-portfolio.vercel.app/",
    siteName: "Ryan's Portfolio • Junior Full Stack Developer",
    images: [
      {
        url: "/media/portfolioShowcase.avif",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    locale: "en_EN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryan's Portfolio • Junior Full Stack Developer",
    description: "Discover Ryan's portfolio, a junior Full Stack developer.",
    images: ["/media/portfolioShowcase.avif"],
    creator: "@IRyan___",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className="h-full scroll-smooth">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "antialiased",
          "h-full"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
