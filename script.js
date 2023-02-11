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
  .to(".sah", {x: 0, autoAlpha: 1, duration: 2})
  .to(".sah", {x: 500, autoAlpha: 0, duration: 2});
  var tlSah1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".second",
      scrub: true,
      pin: true,
    }
  });

tlSah1.from("#sahText", {x: 500, autoAlpha: 0})
.to("#sahText", {x: 0, autoAlpha: 1, duration: 2})
.to("#sahText", {x: -500, autoAlpha: 0, duration: 2});


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

  var tlCartiText = gsap.timeline({
    scrollTrigger: {
      trigger: ".third",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%"
    }
  });

  tlCartiText.from("#carti1", {scale: 0.3, rotation:45, autoAlpha: 0, ease: "power2"})
  .from("#carti2", {scale: 0.3, rotation:45, autoAlpha: 0, ease: "power2"})


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

var tlBabyText = gsap.timeline({
  scrollTrigger: {
    trigger: ".fourth",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%"
  }
});

tlBabyText.from("#babyText", {y: 500, autoAlpha: 0})
.to("#babyText", {y: 200, autoAlpha: 1, duration: 2})
.to("#babyText", {y: -500, autoAlpha: 0, duration: 2});
  

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
        .to(".lucki", {scale: 1, rotation:45, autoAlpha: 0, ease: "power1"});

        var tlLuckiText = gsap.timeline({
          scrollTrigger: {
            trigger: ".fifth",
            scrub: true,
            pin: true,
            start: "top top",
            end: "+=100%"
          }
        });
      
        tlLuckiText.from("#luckiText", {scale: 0.3, autoAlpha: 0, ease: "power1"})
              .to("#luckiText", {scale: 1, autoAlpha: 0, ease: "power1"});
    
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

tlSosa.from(".sosa", { y: -500, autoAlpha: 0 })
  .to(".sosa", { y: 0, autoAlpha: 1, duration: 2 })
  .to(".sosa", { y: 500, autoAlpha: 0, duration: 2 });

var tlSosaText = gsap.timeline({
  scrollTrigger: {
    trigger: ".six",
    scrub: true,
    pin: true,
    snap: true,
    start: "top top",
    end: "+=100%"
  }
});

tlSosaText
  .from("#sosaText", { scale: 1, rotation: 95, autoAlpha: 0, ease: "power1" })
  .to("#sosaText", { x: 900, scale: 1, rotation: 155, autoAlpha: 1, ease: "power1" });


//ball mouse follow
// gsap.set(".ball", { xPercent: -50, yPercent: -50 });

// const ball = document.querySelector(".ball");
// const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
// const mouse = { x: pos.x, y: pos.y };
// const speed = 0.2;

// const xSet = gsap.quickSetter(ball, "x", "px");
// const ySet = gsap.quickSetter(ball, "y", "px");

// window.addEventListener("mousemove", (e) => {
//   mouse.x = e.x;
//   mouse.y = e.y;
// });

// gsap.ticker.add(() => {
//   // adjust speed for higher refresh monitors
//   const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

//   pos.x += (mouse.x - pos.x) * dt;
//   pos.y += (mouse.y - pos.y) * dt;
//   xSet(pos.x);
//   ySet(pos.y);
// });

const ball = document.querySelector(".ball");
const trailContainer = document.querySelector(".trail-container");
const trail = document.createElement("div");
trail.classList.add("trail");
trailContainer.appendChild(trail);

gsap.set(".ball", { xPercent: -50, yPercent: -50 });

const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse = { x: pos.x, y: pos.y };
const speed = 0.2;

const xSet = gsap.quickSetter(ball, "x", "px");
const ySet = gsap.quickSetter(ball, "y", "px");

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

gsap.ticker.add(() => {
  // adjust speed for higher refresh monitors
  const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt;
  xSet(pos.x);
  ySet(pos.y);

  const newTrail = trail.cloneNode();
  newTrail.style.left = `${pos.x}px`;
  newTrail.style.top = `${pos.y}px`;
  trailContainer.appendChild(newTrail);

  gsap.to(newTrail, {
    duration:0.5,
    opacity: 0.5,
    onComplete: () => {
      newTrail.remove();
    },
  });
});
