import Script from 'next/script';
import { GTM, GA } from '@/lib/constants';

export default function Analytics() {
  return (
    <>
      {/* Google Tag Manager (Head) */}
      {GTM.id && (
        <>
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM.id}');`,
            }}
          />
        </>
      )}

      {/* Google Analytics (GA4) */}
      {GA.id && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA.id}`}
            strategy="afterInteractive"
          />
          <Script
            id="ga-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA.id}', {
  page_path: window.location.pathname,
  send_page_view: true,
});`,
            }}
          />
        </>
      )}

      {/* GTM No-Script Fallback */}
      {GTM.id && (
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM.id}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
      )}
    </>
  );
}
