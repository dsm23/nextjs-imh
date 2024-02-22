"use client";

const RegisterServiceWorker = () => {
  if ("serviceWorker" in globalThis.navigator) {
    navigator.serviceWorker.register("/sw.js").then(
      (registration) => {
        if (process.env.NODE_ENV === "development") {
          console.info("Service worker registration succeeded:", registration);
        }
      },
      (error) => {
        console.error(`Service worker registration failed: ${error}`);
      },
    );
  }

  return null;
};

export default RegisterServiceWorker;
