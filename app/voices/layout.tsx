import type { Metadata } from "next";

export const metadata: Metadata = { title: "Voices | Wombs of Wisdom" };

export default function VoicesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
