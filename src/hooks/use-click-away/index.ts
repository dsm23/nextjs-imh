import { useEffect, useRef } from "react";
import type { RefObject } from "react";

const addEvent = (
  obj: EventTarget | null,
  type: string,
  listener: globalThis.EventListener,
  options?: boolean | globalThis.AddEventListenerOptions,
): void => {
  obj?.addEventListener(type, listener, options);
};

const defaultEvents = ["mousedown", "touchstart"] as const;

// oxlint-disable-next-line typescript/no-unnecessary-type-parameters
const useClickAway = <E extends Event = Event>(
  ref: RefObject<HTMLElement | null>,
  onClickAway: (event: E) => void,
  events: readonly string[] = defaultEvents,
) => {
  const savedCallback = useRef(onClickAway);

  useEffect(() => {
    savedCallback.current = onClickAway;
  }, [onClickAway]);

  useEffect(() => {
    const handler: globalThis.EventListener = (event) => {
      const { current: el } = ref;
      if (el && !el.contains(event.target as Node)) {
        savedCallback.current(event as E);
      }
    };

    const abortController = new AbortController();

    for (const eventName of events) {
      addEvent(document, eventName, handler, {
        signal: abortController.signal,
      });
    }

    return () => {
      abortController.abort();
    };
  }, [events, ref]);
};

export default useClickAway;
