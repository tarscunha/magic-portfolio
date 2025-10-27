"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export function ScrollToHash() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []); // Only run on mount

  return null;
}
