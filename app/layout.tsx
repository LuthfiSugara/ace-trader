
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";
import { Suspense } from 'react';
import FacebookPixelTracker from "@/components/FacebookPixelTracker/FacebookPixelTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ace Trader",
  description: "Join Ace Trade and get instant access to funding with zero personal risk. Scale your trading, maximize your profits, and grow without limits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Meta Pixel Code --> */}
        <script dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1802128230344761');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript><img height="1" width="1" style={{display: "none"}}
        src="https://www.facebook.com/tr?id=1802128230344761&ev=PageView&noscript=1"
        /></noscript>
        {/* <!-- End Meta Pixel Code --> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased hide-scrollbar`}
      >
        <Header />
        {children}
        <Suspense fallback={null}>
          <FacebookPixelTracker />
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
