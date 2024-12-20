import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Footer from "./components/Footer";

const inter = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  other: {
    'google-site-verification': "t6dnqcadULsfgfDxvP9GApAJ0I_ICBX5JixuO5LvVBA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-FMKTNRFE9G" />
      <GoogleTagManager gtmId="GTM-PLFC5655" />
      <body className={`w-full ${inter.className}`}>
        <div className="bg-white">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
