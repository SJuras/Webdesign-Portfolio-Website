// toggle Menu
function toggleMenu(){
  const menuToggle = document.querySelector(".toggle");
  const sidebar = document.querySelector(".sidebar");
  const sidePic = document.querySelector(".sidePic");
  menuToggle.classList.toggle("active");
  sidebar.classList.toggle("active");
  sidePic.classList.toggle("active");
}
