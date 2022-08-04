function showText1(text1)
	 {
		 document.getElementById('text1').style.display = "block";
	 }
 function showText2(text2)
	 {
		 document.getElementById('text2').style.display = "block";
	 }
function showText3(text3)
	 {
		 document.getElementById('text3').style.display = "block";
	 }
 function showText4(text4)
	 {
		 document.getElementById('text4').style.display = "block";
	 }
	 const button = document.querySelector('#menu-button'); // Hamburger Icon
const menu = document.querySelector('#menu'); // Menu

button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});