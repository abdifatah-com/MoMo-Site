import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "MOMO - Quality Disability Support Services",
  description: "Professional NDIS service provider offering personal care, community participation, support coordination, and allied health services. Supporting you with quality care.",
  keywords: "NDIS, disability services, personal care, support coordination, community participation, allied health, disability support",
  authors: [{ name: "MOMO" }],
  openGraph: {
    title: "MOMO - Quality Disability Support Services",
    description: "Professional NDIS service provider offering comprehensive disability support services.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
