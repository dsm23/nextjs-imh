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

const removeEvent = (
  obj: EventTarget | null,
  type: string,
  listener: globalThis.EventListener,
  options?: boolean | globalThis.EventListenerOptions,
): void => {
  obj?.removeEventListener(type, listener, options);
};

const defaultEvents = ["mousedown", "touchstart"] as const;

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
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

    events.forEach((eventName) => addEvent(document, eventName, handler));

    return () => {
      events.forEach((eventName) => removeEvent(document, eventName, handler));
    };
  }, [events, ref]);
};

export default useClickAway;
