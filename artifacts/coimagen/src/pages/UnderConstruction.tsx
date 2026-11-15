import { useEffect } from "react";
import { siteConfig } from "@/config/site";

export default function UnderConstruction() {
  useEffect(() => {
    window.location.replace(siteConfig.storeUrls.en);
  }, []);

  return null;
}
