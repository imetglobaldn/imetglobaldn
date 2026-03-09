import Script from 'next/script'
import Image from 'next/image'

const FB_PIXEL_ID = '1259661645299920'
const GTM_ID = 'G-RB4ZKFHDBD'

// Type definitions for analytics events
type AnalyticsEvent = Record<string, string | number | boolean>;

// Basic type definitions for analytics functions
type FbqFunction = (
  type: string,
  eventName: string,
  params?: AnalyticsEvent
) => void;

type GtagFunction = (
  command: string,
  eventName: string,
  params?: AnalyticsEvent
) => void;

// Type guard for checking if window.fbq exists
function isFbqDefined(obj: Window): obj is Window & { fbq: FbqFunction } {
  return 'fbq' in obj;
}

// Type guard for checking if window.gtag exists
function isGtagDefined(obj: Window): obj is Window & { gtag: GtagFunction } {
  return 'gtag' in obj;
}

export function FacebookPixel() {
  return (
    <>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <Image
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          alt="Facebook Pixel"
          width={1}
          height={1}
          style={{ display: 'none' }}
          priority={false}
          unoptimized
        />
      </noscript>
    </>
  )
}

export function GoogleTagManager() {
  return (
    <>
      <Script
        id="gtm-base"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
      />
      <Script
        id="gtm-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GTM_ID}', {
              page_path: window.location.pathname,
              transport_type: 'beacon',
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure'
            });
          `,
        }}
      />
    </>
  )
}

/**
 * Track a custom event with Facebook Pixel
 * @param eventName - Name of the event to track
 * @param options - Optional event parameters
 */
export const trackFBEvent = (eventName: string, options: AnalyticsEvent = {}) => {
  if (typeof window !== 'undefined' && isFbqDefined(window)) {
    window.fbq('track', eventName, options);
  }
}

/**
 * Track a custom event with Google Analytics
 * @param eventName - Name of the event to track
 * @param params - Optional event parameters
 */
export const trackGAEvent = (eventName: string, params: AnalyticsEvent = {}) => {
  if (typeof window !== 'undefined' && isGtagDefined(window)) {
    window.gtag('event', eventName, params);
  }
}
