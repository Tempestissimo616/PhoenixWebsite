import Script from 'next/script'
import React from 'react'

const GoogleAnalyticsScript = () => {
  return (
    <>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-WVDP8LLT2V"></Script>
        <Script strategy='afterInteractive' id="google-analytics">
            {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WVDP8LLT2V');`}
        </Script>
    </>
  )
}

export default GoogleAnalyticsScript