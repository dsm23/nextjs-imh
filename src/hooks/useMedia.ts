import { useEffect, useState } from "react";

const useMedia = (query: string) => {
  const match = () => globalThis.matchMedia(query).matches;
  const [value, set] = useState(match);

  useEffect(() => {
    const handler = () => set(match);
    window.addEventListener("resize", handler);

    return () => window.removeEventListener("resize", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return value;
};

export default useMedia;
