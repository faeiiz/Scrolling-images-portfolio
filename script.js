// Initialize Lenis
const lenis = new Lenis({
  duration: 2,
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.querySelectorAll(".elem").forEach((elem) => {
  let image = elem.querySelector("img");
  let tl = gsap.timeline();

  let random = gsap.utils.random(-100, 100);

  tl.set(
    image,
    {
      transformOrigin: `${random < 0 ? 0 : "100%"}`,
    },
    "start"
  )
    .to(
      image,
      {
        scale: 0,
        ease: "none",
        scrollTrigger: {
          trigger: image,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      },
      "start"
    )
    .to(elem, {
      xPercent: random,
      ease: "none",
      scrollTrigger: {
        trigger: image,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
});

console.log(document.querySelectorAll(".elem"));
