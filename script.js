gsap.registerPlugin(ScrollTrigger);

// --- Yeat ---
var tlYeat = gsap.timeline({
    scrollTrigger: {
      trigger: ".first",
      scrub: true,
      pin: true
    }
  });
  tlYeat.from(".yeat", {y: 0, autoAlpha: 1})
  .add(tlYeat.to("#yeatText", {y: 0, autoAlpha: 0, duration: 1}), 0)
  .to(".yeat", {y: -500, autoAlpha: 0, duration: 1}, 0);


// --- SahBabii ---
var tlSah = gsap.timeline({
    scrollTrigger: {
      trigger: ".second",
      scrub: true,
      pin: true,
    }
  });

tlSah.from(".sah", {x: -500, autoAlpha: 0})
  .to(".sah", {x: 0, autoAlpha: 1, duration: 1})
  .to(".sah", {x: 500, autoAlpha: 0, duration: 1});


// --- Carti ---
var tlCarti = gsap.timeline({
    scrollTrigger: {
      trigger: ".third",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%"
    }
  });

tlCarti.from(".carti", {scale: 0.3, rotation:45, autoAlpha: 0, ease: "power2"})
  .from("#cartiText", {scaleX: 0, transformOrigin: "left center", ease: "none"}, 0)

// --- Lil Baby ---
var tlBaby = gsap.timeline({
  scrollTrigger: {
    trigger: ".fourth",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%"
  }
});

tlBaby.from(".baby", {y: -500, autoAlpha: 0})
.to(".baby", {y: 0, autoAlpha: 1, duration: 2})
.to(".baby", {y: 500, autoAlpha: 0, duration: 2});
  

// --- Lucki ---
var tlLucki = gsap.timeline({
    scrollTrigger: {
      trigger: ".fifth",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%"
    }
  });

tlLucki.from(".lucki", {scale: 0.3, rotation:45, autoAlpha: 0, ease: "power1"})
        .to(".lucki", {scale: 1, rotation:45, autoAlpha: 0, ease: "power1"})

// --- Chief Keef ---
var tlSosa = gsap.timeline({
    scrollTrigger: {
      trigger: ".six",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%"
    }
  });

tlSosa.from(".sosa", {scale: 0.3, rotation:45, autoAlpha: 0, ease: "power1",yoyo: true})
        .to(".sosa", {scale: 1, rotation:45, autoAlpha: 0, ease: "power1",yoyo: true})

