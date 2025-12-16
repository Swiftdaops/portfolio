"use client";
import { useEffect } from "react";

export default function CleanBodyAttr() {
  useEffect(() => {
    try {
      if (typeof document !== "undefined" && document.body) {
        // remove any attributes added by extensions that start with 'cz-'
        for (const attr of Array.from(document.body.attributes || [])) {
          if (attr && attr.name && attr.name.startsWith && attr.name.startsWith("cz-")) {
            document.body.removeAttribute(attr.name);
          }
        }
      }
    } catch (e) {
      // swallow errors in dev
      // eslint-disable-next-line no-console
      console.warn("CleanBodyAttr failed:", e);
    }
  }, []);

  return null;
}
