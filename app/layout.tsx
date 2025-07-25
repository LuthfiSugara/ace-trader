
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
        
        {/* <!-- End Meta Pixel Code --> */}

        {/* <!-- Google Tag Manager --> */}
        <script
          dangerouslySetInnerHTML={{
          __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MFKX2WVT');
            `,
          }}
        />
        {/* <!-- End Google Tag Manager --> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased hide-scrollbar`}
      >
        {/* <!-- Meta Pixel Code --> */}
        <noscript><img height="1" width="1" style={{display: "none"}}
        src="https://www.facebook.com/tr?id=1802128230344761&ev=PageView&noscript=1"
        /></noscript>
        {/* <!-- End Meta Pixel Code --> */}

        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MFKX2WVT"
        height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe></noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
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
