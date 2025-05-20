// app/page.tsx

import Footer from "./footer";
import HomePage from "./HomePage";

export const metadata = {
  title: "WebTrends | Sosial Media Trends Terupdate",
  description: "Temukan tren terkini dari YouTube dan TikTok di WebTrends. Cari dan ikuti perkembangan sosial media dengan mudah!",
  keywords: "tren TikTok, tren YouTube, trending sosial media, webtrends, cari trend sosmed",
  authors: [{ name: "WebTrends Team" }],
  openGraph: {
    title: "WebTrends | Sosial Media Trends Terupdate",
    description: "Temukan tren terkini dari YouTube dan TikTok di WebTrends.",
    type: "website",
  },
  // icons: {
  //   icon: "/images/logo/logo.ico",
  // },
};

export default function Page() {
  return (
    <>
      <HomePage />
      <Footer />
    </>
  );
}
