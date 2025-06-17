import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (
  target: string | Element | Element[] | NodeListOf<Element>,
  animationProps: Omit<gsap.TweenVars, "scrollTrigger">,
  scrollProps?: Partial<ScrollTrigger.Vars>
): void => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      start: "top 85%",
      ...scrollProps,
    },
  });
};

export const animationScroll = () => {
  gsap.timeline({
    scrollTrigger: {
      scrub: 1,
    },
  });
};
