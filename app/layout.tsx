import type { Metadata, Viewport } from "next";
import { poppins, urbanist } from "./fonts";
import "./globals.css";
import dynamic from 'next/dynamic';
import Script from 'next/script';

// Dynamically import heavy components
const DynamicNavbar = dynamic(() => import('@/components/Navbar'), {
  loading: () => <div className="h-20 bg-gray-100" />,
  ssr: true
});

const DynamicFooter = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-40 bg-gray-100" />,
  ssr: true
});

const DisclaimerPopup = dynamic(() => import('@/components/DisclaimerPopup'));
const ChatBot = dynamic(() => import('@/components/ChatBot'));
const Floating = dynamic(() => import('@/components/Floating'));
const Loader = dynamic(() => import('@/components/LoadingAnimation'));
const ScrollToTop = dynamic(() => import('@/components/ScrollToTop'));
const ToastContainer = dynamic(() => import('react-toastify').then(module => module.ToastContainer));
const Analytics = dynamic(() => import('@vercel/analytics/react').then(module => module.Analytics));
const FacebookPixel = dynamic(() => import('./lib/analytics').then(module => module.FacebookPixel));
const GoogleTagManager = dynamic(() => import('./lib/analytics').then(module => module.GoogleTagManager));

// import { organizationSchema, websiteSchema } from '../lib/schema';

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Imet Global",
  description:
    "iMET Global - A new age B-School focused on digital and AI-driven education for professionals.",
  keywords: "B-School, digital education, AI education, professional development",
  robots: "index, follow",
  openGraph: {
    title: "Imet Global",
    description:
      "iMET Global - A new age B-School focused on digital and AI-driven education for professionals.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Imet Global",
    description:
      "iMET Global - A new age B-School focused on digital and AI-driven education for professionals.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* DNS prefetching */}
        <link
          rel="dns-prefetch"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Nitro Commerce Integration */}
        {/* <Script
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
          }}
        /> */}
      </head>
      <body className={`${poppins.variable} ${urbanist.variable} font-sans bg-main`}>
        <section className="w-full overflow-x-clip">
          <DynamicNavbar />
          <DisclaimerPopup />
          <main>{children}</main>
          <ChatBot />
          <Analytics />
          <ScrollToTop />
          <Loader />
          <Floating />
          <DynamicFooter />
          <ToastContainer />
        </section>

        {/* Load analytics */}
        <FacebookPixel />
        <GoogleTagManager />

        {/* Add passive event listeners */}
        <Script
          id="passive-listeners"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('scroll', function() {}, { passive: true });
              document.addEventListener('touchstart', function() {}, { passive: true });
              document.addEventListener('touchmove', function() {}, { passive: true });
            `
          }}
        />
      </body>
    </html>
  );
}
