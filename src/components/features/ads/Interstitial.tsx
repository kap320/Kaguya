import React, { useEffect, useState } from "react";
import nookies from "nookies";
import Script from "next/script";

const INTERSTITIAL_COOKIE = "kaguya_interstitial";
const USER_COOKIE = "sb-access-token";

const Interstitial = () => {
  // const [isShow, setIsShow] = useState(false);
  // useEffect(() => {
  //   const cookies = nookies.get(null);
  //   let shownTime = 0;
  //   shownTime = Number(cookies?.[INTERSTITIAL_COOKIE]);
  //   shownTime = isNaN(shownTime) ? 0 : shownTime;
  //   if (shownTime >= 3 || cookies?.[USER_COOKIE]) {
  //     return;
  //   }
  //   nookies.set(null, INTERSTITIAL_COOKIE, String(shownTime + 1), {
  //     // 30 minutes
  //     maxAge: 30 * 60,
  //     path: "/",
  //   });
  //   setIsShow(true);
  // }, []);
  // return isShow ? (
  //   <Script
  //     async
  //     strategy="afterInteractive"
  //     data-cfasync="false"
  //     src="//arsnivyr.com/1?z=5547899"
  //   ></Script>
  // ) : null;
  return null;
};

export default Interstitial;
