"use client";

const RegisterServiceWorker = () => {
  if ("navigator" in globalThis) {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").then(
        (registration) => {
          if (process.env.NODE_ENV === "development") {
            console.info(
              "Service worker registration succeeded:",
              registration,
            );
          }
        },
        (error: unknown) => {
          console.error(
            `Service worker registration failed: ${error?.toString()}`,
          );
        },
      );
    }
  }

  return null;
};

export default RegisterServiceWorker;
