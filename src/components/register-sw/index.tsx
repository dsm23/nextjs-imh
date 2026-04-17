"use client";

import { useEffect } from "react";

const register = async () => {
  try {
    const registration = await navigator.serviceWorker.register("/sw.js");
    if (process.env.NODE_ENV === "development") {
      console.info("SW registered:", registration.scope);
    }
  } catch (error) {
    console.error("SW registration failed:", error);
  }
};

const RegisterServiceWorker = () => {
  useEffect(() => {
    const abortController = new AbortController();

    if ("serviceWorker" in navigator) {
      // Register after the page has fully loaded to avoid
      // competing with main thread resources
      if (document.readyState === "complete") {
        void register();
      } else {
        window.addEventListener("load", register, {
          signal: abortController.signal,
        });
      }
    }
    return () => {
      abortController.abort();
    };
  }, []);

  return null;
};

export default RegisterServiceWorker;
