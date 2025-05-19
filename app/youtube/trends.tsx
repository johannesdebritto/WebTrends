// data/trends.ts

export type Trend = {
  title: string;
  channel: string;
  views: string;
  uploaded: string;
  category: string;
};

export const trends: Trend[] = [
  {
    title: "Lagu Viral TikTok 2025",
    channel: "Musik Hits",
    views: "1.2M",
    uploaded: "2 hari lalu",
    category: "Musik",
  },
  {
    title: "Tutorial AI Tools Terbaru",
    channel: "TeknoNow",
    views: "800K",
    uploaded: "1 hari lalu",
    category: "Teknologi",
  },
  {
    title: "Vlog Liburan Bali 2025",
    channel: "Travel ID",
    views: "950K",
    uploaded: "3 hari lalu",
    category: "Travel",
  },
  {
    title: "Resep Makanan Simple Ramadhan",
    channel: "Dapur Mama",
    views: "600K",
    uploaded: "5 hari lalu",
    category: "Kuliner",
  },
];
