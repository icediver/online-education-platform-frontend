import LayoutBoard from "@/components/ui/layout-board/LayoutBoard";
import "@/assets/styles/globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/providers/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <LayoutBoard>{children}</LayoutBoard>
        </Providers>
        <div id="modal"></div>
      </body>
    </html>
  );
}
