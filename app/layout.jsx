import { Inter, DM_Mono } from "next/font/google";
import "../src/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "NORTH / HOUSE — Interactive Architecture",
  description: "A cinematic digital home experience from plan to place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmMono.variable} ${inter.className}`}>{children}</body>
    </html>
  );
}
