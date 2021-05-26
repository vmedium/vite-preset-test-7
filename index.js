import gsap from 'gsap';

console.log("test");

const el = document.getElementById("box");

gsap.set(el, {
  width: "200px",
  height: "200px",
  backgroundColor: "#FF7732"
})

gsap.to(el, {y:500, duration:5})