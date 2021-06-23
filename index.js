import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable'

console.log(gsap);

const wrapper = document.getElementById("wrapper");
const el = document.getElementById("box");

gsap.registerPlugin(Draggable);
// gsap.registerPlugin(InertiaPlugin);

gsap.set(wrapper, {
  width: "390px",
  height: "798px",
  backgroundColor: "#121212",
  overflow: "hidden",
  position: "absolute"

})

gsap.set(el, {
  width: "390px",
  height: "200px",
  backgroundColor: "#657544",
  delay:1,
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

})

function move(e){
  let startY = 0;
  let endY = 798-200;

  let currentY = el.getBoundingClientRect().top;

  if(currentY > endY/2){
    console.log("go down");
    gsap.to(el, {y:endY, duration:.5})
  } else {
    console.log("go up");
    gsap.to(el, {y:startY, duration:.5})
  }

  
}


//Draggable.create(".box", {type:"x,y", edgeResistance:0.65, bounds:"#container", inertia:true});
Draggable.create("#box", {type:"y", edgeResistance:0.65, onRelease:()=>{
  console.log("onRelease")
  move();
}});
//el.addEventListener("touchstart", move);

