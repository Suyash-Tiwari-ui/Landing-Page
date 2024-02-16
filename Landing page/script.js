var tl = gsap.timeline({
    repeat: -1

});

tl
.to(".image-container", {
    ease: Expo.easeInOut ,
    width: "100%" ,
    duration: 2 ,
    stagger: 3

}, 'b')

.to(".text h2", {
    ease: Expo.easeInOut ,
    stagger: 3 ,
    top: 0 , 

}, 'b')
.to(".text h2", {
    delay : 3 ,
    ease: Expo.easeInOut ,
    stagger: 3 ,
    top: "-100" , 

}, 'b')
