import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export const initScroll = () => {
  const container = document.querySelector(
    "[data-scroll-container]",
  ) as HTMLElement;
  if (!container) return;

  const scroll = new LocomotiveScroll();

  return scroll;
};
