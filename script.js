// for animation scroll
const boxes = document.querySelectorAll('.box')
window.addEventListener('scroll', checkBoxes)
  checkBoxes()

  function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4
    boxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top
      if(boxTop < triggerBottom){
        box.classList.add('show')
      }else{
        box.classList.remove('show')
      }
    })
  }

//   for dark / light theme
var icon = document.getElementById("icon");

icon.addEventListener("click", function() {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    icon.classList.replace("fa-moon", "fa-sun");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
  }
});