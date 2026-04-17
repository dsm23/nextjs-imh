declare module "material-ripple-effects" {
  import type { MouseEvent } from "react";

  interface RippleOptions {
    color?: string;
    duration?: number;
    easing?: string;
  }

  class Ripple {
    constructor(options?: RippleOptions);
    create(event: MouseEvent<HTMLButtonElement>, color?: string): void;
  }

  export default Ripple;
}
