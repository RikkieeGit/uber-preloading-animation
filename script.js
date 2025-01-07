document.addEventListener("DOMContentLoaded", () => {
  const leftBar = document.querySelector(".animation-left");
  const rightBar = document.querySelector(".animation-right");
  const text = document.querySelector(".wrapper-header h2");

  gsap.set(text, { fontSize: "0px" });

  gsap.to(leftBar, {
    width: "20px",
    delay: 1.5,
    duration: 0.75,
    ease: "power3.inOut",
  });
  gsap.to(rightBar, {
    width: "20px",
    delay: 1.5,
    duration: 0.75,
    ease: "power3.inOut",
  });

  gsap.to(leftBar, {
    width: "50%",
    delay: 2.25,
    stagger: 0.1,
    duration: 1,
    ease: "power3.out",
  });
  gsap.to(rightBar, {
    width: "50%",
    delay: 2.25,
    stagger: 0.1,
    duration: 1,
    ease: "power3.out",
  });
  gsap.to(leftBar, {
    x: "-1000px",
    delay: 2.5,
    stagger: 0.1,
    duration: 1.5,
    ease: "power3.inOut",
  });
  gsap.to(rightBar, {
    x: "1000px",
    delay: 2.5,
    stagger: 0.1,
    duration: 1.5,
    ease: "power3.inOut",
  });
  gsap.to(text, {
    fontSize: "100px",
    delay: 2.75,
    stagger: 0.1,
    duration: 1.5,
    ease: "power3.out",
  });
});
