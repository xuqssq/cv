import localFont from "next/font/local";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { siteUrl, title, description, jobTitle, profileImage } from "@/constants";

const menlo = localFont({
  src: "../../public/fonts/Menlo-Regular.woff",
  variable: "--font-menlo",
  display: "swap",
});

const celine = localFont({
  src: "../../public/fonts/celine-stencil.otf",
  variable: "--font-celine",
  weight: "500",
  display: "swap",
});

export const metadata = {
  title: `${title} - ${jobTitle} | Full Stack Developer`,
  description,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: title,
    title,
    description,
    images: [
      {
        url: profileImage,
        width: 400,
        height: 400,
        alt: title,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className={`${menlo.variable} ${celine.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.github.com" />
        <link rel="preconnect" href="https://github.com" />
      </head>
      <body className="bg-white dark:bg-gray-900 transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
