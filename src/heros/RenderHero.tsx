import type { FunctionComponent } from "react";
import { HighImpactHero } from "~/heros/HighImpact";
import { LowImpactHero } from "~/heros/LowImpact";
import { MediumImpactHero } from "~/heros/MediumImpact";
import type { Page } from "~/payload-types";

const heroes = {
  highImpact: HighImpactHero,
  lowImpact: LowImpactHero,
  mediumImpact: MediumImpactHero,
};

export const RenderHero: FunctionComponent<Page["hero"]> = (props) => {
  const { type } = props;

  if (type === "none") return null;

  const HeroToRender = heroes[type];

  return <HeroToRender {...props} />;
};
