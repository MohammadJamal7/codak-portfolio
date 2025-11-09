import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "كوداك - حلول تقنية حديثة وتعليم",
  description: "نحن نقدم خدمات تطوير التطبيقات المحمولة، تطوير المواقع، والدورات التقنية. حول أفكارك إلى واقع مع فريقنا المتخصص.",
  keywords: ["تطوير التطبيقات", "تطوير المواقع", "الدورات التقنية", "الحلول البرمجية", "التعليم البرمجي"],
  authors: [{ name: "فريق كوكاك" }],
  creator: "كوكاك",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://cocak.dev",
    title: "كوكاك - حلول تقنية حديثة وتعليم",
    description: "نحن نقدم خدمات تطوير التطبيقات المحمولة، تطوير المواقع، والدورات التقنية.",
    siteName: "كوكاك",
    images: [
      {
        url: "/codak.png",
        width: 1200,
        height: 630,
        alt: "كوداك - حلول تقنية حديثة وتعليم",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "كوكاك - حلول تقنية حديثة وتعليم",
    description: "نحن نقدم خدمات تطوير التطبيقات المحمولة، تطوير المواقع، والدورات التقنية.",
    images: ["/codak.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className="font-sans antialiased">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
