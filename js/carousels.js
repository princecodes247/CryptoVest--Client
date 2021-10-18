let partners = document.querySelector(".glide__slides")

let glide = new Glide('.glide', {
  type: 'carousel',
  autoplay: 20,
  startAt: 0,
  perView: 3,
  focusAt: 1, 
  gap: 20,
  animationTimingFunc: "linear",
  animationDuration: 4000,

})


for (let index = 0; index < 3; index++) {
    let test = `<li class="partners__item glide__slide">
    <img src="../assets/images/partners/${index}.svg" alt="ag" />
  </li>`    
  partners.innerHTML += test
  
}
glide.mount()



