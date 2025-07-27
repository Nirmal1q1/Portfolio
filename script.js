const header = document.querySelector("header");

window.addEventListener ("scroll",function(){
	header.classList.toggle ("sticky", window.scrollY > 120);
});
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
}

<script>
  document.getElementById("contactBtn").addEventListener("click", function(event) {
    event.preventDefault(); // prevents link jump
    var phone = document.getElementById("phoneNumber");
    phone.style.display = phone.style.display === "none" ? "inline" : "none";
  });
</script>