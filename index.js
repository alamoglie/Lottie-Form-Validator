var logo = document.getElementById('bm')

var animation = bodymovin.loadAnimation({
  container: document.getElementById('bm'), // Required
  renderer: 'svg', // Required
  loop: false, // Optional
  autoplay: false, // Optional
  path: 'data.json' // Required

  //   name: 'Hello World' // Name for future reference. Optional.
})
logo.addEventListener('mouseover', function () {
  animation.play()
})

logo.addEventListener('mouseleave', function () {
  animation.goToAndStop(0)
})

// var logo = document.getElementById("logo");
// var animation = bodymovin.loadAnimation({
// container: logo,
// renderer: "svg",
// loop: true,
// autoplay: false,
// prerender: true,
// path: "json/logo.json"
// });
// anim.addEventListener('DOMLoaded', function(){
// logo.addEventListener("mouseover", function(){ anim.play(); });
// }
