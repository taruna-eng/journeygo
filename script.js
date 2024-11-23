function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

function loadingAnimation() {

    var tl = gsap.timeline()
    tl.from("#page1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from("#page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from("#page1 h1, #page1 p, #page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
}
function navAnimation() {
    // var nav = document.querySelector("nav")
    var navElements = document.querySelectorAll(".down");
    navElements.forEach(function(nav) {
        nav.addEventListener("mouseenter", function () {
            let tl = gsap.timeline()
    
            tl.to("#nav-bottom", {
                height: "21vh",
                duration: 0.5
            })
            tl.to(".nav-part2 h5", {
                display: "block",
                duration: 0.1
    
            })
            tl.to(".nav-part2 h5 span", {
                y: 0,
                // duration:0.3,
                stagger: {
                    amount: 0.5
                }
            })
        })
        nav.addEventListener("mouseleave", function () {
            let tl = gsap.timeline()
            tl.to(".nav-part2 h5 span", {
                y: 25,
                stagger: {
                    amount: 0.2
                }
            })
            tl.to(".nav-part2 h5", {
                display: "none",
                duration: 0.1
            })
            tl.to("#nav-bottom", {
                height: 0,
                duration: 0.2
            })
        })
    })
    
    
}

function page2Animation(){
    var rightElems = document.querySelectorAll(".right-elem");

    rightElems.forEach(function(elem){
    
        // console.log("hello");
       
        elem.addEventListener("mouseenter",function(){
            // console.log(elem.childNodes[3]);
            // elem.childNodes[3].style.opacity = 1
    
            
    
    
            gsap.to(elem.childNodes[3],{
                opacity:0.5,
                scale:1.1
            })
    
        })
        elem.addEventListener("mouseleave",function(){
            //  elem.childNodes[3].style.opacity = 0;
             gsap.to(elem.childNodes[3],{
                opacity:0,
                scale:0
            })
    
        })
        elem.addEventListener("mousemove",function(dets){
            // elem -> div (container , section , or a rectangle)
            // console.log(elem.getBoundingClientRect().y);
    
            gsap.to(elem.childNodes[3],{
                x:dets.x-elem.getBoundingClientRect().x-60,
                y:dets.y-elem.getBoundingClientRect().y-160
            })
        })
    })
}

function page3video(){
    var page3center = document.querySelector(".page3-center");
var video = document.querySelector("#page3 video");
console.log(video);
page3center.addEventListener("click",function(){
    video.play()
    gsap.to(video,{
        transform:"scaleX(1) scaleY(1)",
        opacity:1,
        borderRadius:0
    })
})
video.addEventListener("click",function(){
    video.pause();
    gsap.to(video,{
        transform:"scaleX(0) scaleY(0)",
        opacity:0,
        borderRadius:"30px"
    })
})
}

function videoAni(){
    var sections = document.querySelectorAll(".sec-right");
sections.forEach(function(elem){
    // console.log( elem.childNodes[3]);
    elem.addEventListener("mouseenter",function(){
        elem.childNodes[3].style.opacity =1;
        elem.childNodes[3].play();
    })
    elem.addEventListener("mouseleave",function(){
        elem.childNodes[3].style.opacity =0;
        elem.childNodes[3].load();
    })
})
}

function scrollAni(){
    gsap.from("#btn8-part2 h4",{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:"#btn8-part2",
            scroller:"#main",
            // markers:true,
            start:"top 80%",
            end:"top 10%",
            scrub:true
        }
    })
    gsap.from("#btn8-part3 h4",{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:"#btn8-part3",
            scroller:"#main",
            // markers:true,
            start:"top 80%",
            end:"top 10%",
            scrub:true
        }
    })
    gsap.from("#btn8-part4 h4",{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:"#btn8-part4",
            scroller:"#main",
            // markers:true,
            start:"top 80%",
            end:"top 10%",
            scrub:true
        }
    })
}

function navButton(){
    let navbottom = document.querySelector("#NavBottom");
let navtalk = document.querySelector("#NavTalk");

navtalk.addEventListener("mouseover", function () {
  navtalk.style.width = "2.75vw";
  navtalk.style.marginLeft = "6vw";
})

navtalk.addEventListener("mouseleave", function () {
  navtalk.style.width = "9vw";
  navtalk.style.marginLeft = "0vw";
})
}

function sucess(){
    gsap.from("#page4-left h3 span",{
        opacity:0,
        duration:0.5,
        x:30,
        stagger:0.5,
        repeat:-1,
        yoyo:true,
    })
    
}

function digital(){
    gsap.from("#page8>h1",{
        opacity:0.2,
        duration:0.5,
        y:30,
        repeat:-1,
        yoyo:true,
    })
    
}
function height(){
    var pg1 = document.querySelector("#page1");
    var nv = document.querySelector("nav");
    nv.addEventListener("mouseenter", function() {
        nv.style.height = "15vh";
        nv.style.padding= "2vw 10.4vw";
    });
    pg1.addEventListener("mouseenter", function() {
        nv.style.height = "15vh";
        nv.style.padding = "2vw 10.4vw";
    });
    pg1.addEventListener("mouseleave", function() {
        nv.style.height = "10vh";
        nv.style.padding = "1vw 10.4vw";
    });
}


locomotiveAnimation();
loadingAnimation();
// height();
digital();
sucess();
navButton();
navAnimation();
page2Animation();
page3video();
videoAni();
scrollAni();