import gsap from "gsap";

type AnimateTypes = {
  target: string;
  animationProps
  scrollProps
};

export const animateWithGsap = (
  target,
  animationProps,
  scrollProps
): AnimateTypes => {
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

// export const animateWithGsapTimeline = (
//   timeline,
//   rotationRef,
//   rotationState,
//   firstTarget,
//   secondTarget,
//   animationProps
// ) => {
//   timeline.to(rotationRef.current.roation, {
//     y: rotationState,
//     duration: 1,
//     ease: "power2.inOut",
//   });

//   timeline.to(
//     firstTarget,
//     {
//       ...animationProps,
//       ease: "power2.inOut",
//     },
//     "<"
//   );
//   timeline.to(
//     secondTarget,
//     {
//       ...animationProps,
//       ease: "power2.inOut",
//     },
//     "<"
//   );
// };
