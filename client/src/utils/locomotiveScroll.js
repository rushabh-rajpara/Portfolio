import LocomotiveScroll from "locomotive-scroll";

export const initLocomotiveScroll = () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    lerp: 0.1, // Adjust for smoother inertia
  });

  return scroll;
};
