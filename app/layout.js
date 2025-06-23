import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bossin Salon",
  description: "Developed by Chirag Rane. The website is build for a Salon named BOSSIN situated at multiple locations like Kalyan, Dombivli and Kharghar. The salon offers various of services right from haircare to skincare.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className}`}
      >
        {children}
      </body>
    </html>
  );
}
