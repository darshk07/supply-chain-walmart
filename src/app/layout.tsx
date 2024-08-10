import "./globals.css";
import type { Metadata } from "next";
import { Hanuman } from "next/font/google";
import { headers } from "next/headers";
import { type ReactNode } from "react";
import { cookieToInitialState } from "wagmi";

import { config } from "@/config";
import AppKitProvider from "@/context";

const inter = Hanuman({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "D-ERP 2.0",
  description: "A dApp for supply chain management",
};

export default function RootLayout(props: { children: ReactNode }) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppKitProvider initialState={initialState}>
          {props.children}
        </AppKitProvider>
      </body>
    </html>
  );
}
