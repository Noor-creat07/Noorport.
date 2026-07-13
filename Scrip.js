// ==============================
// Loading Screen
// ==============================
window.addEventListener("load", () => {
 const loader = document.getElementById("loader");
 setTimeout(() => {
 loader.style.opacity = "0";
 loader.style.visibility = "hidden";
 }, 1200);
});
// ==============================
// Typing Effect
// ==============================
const text = [
 "Computer Science Student",
 "Web Developer",
 "Frontend Developer",
 "UI / UX Designer",
 "Programmer"
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
(function type(){
 if(count === text.length){
 count = 0;
 }
 currentText = text[count];
 letter = currentText.slice(0, ++index);
 document.querySelector(".typing").textContent = letter;
 if(letter.length === currentText.length){
 count++;
 index = 0;
 setTimeout(type,1500);
 }else{
 setTimeout(type,120);
 }
})();
// ==============================
// Back To Top
// ==============================
const topBtn = document.getElementById("topBtn");
window.onscroll = function(){
 if(document.body.scrollTop > 300 ||
 document.documentElement.scrollTop > 300){
 topBtn.style.display="block";
 }else{
 topBtn.style.display="none";
 }
};
topBtn.onclick = function(){
 window.scrollTo({
 top:0,
 behavior:"smooth"
 });
};
// ==============================
// Mobile Menu
// ==============================
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav ul");
menu.addEventListener("click",()=>{
 nav.classList.toggle("show");
});
// ==============================
// Scroll Reveal Animation
// ==============================
const reveals = document.querySelectorAll("section");
function reveal(){
 reveals.forEach(section=>{
 const top = section.getBoundingClientRect().top;
 const windowHeight = window.innerHeight;
 if(top < windowHeight - 100){
 section.classList.add("active");
 }
 });
}
window.addEventListener("scroll",reveal);
reveal();
// ==============================
// Active Navigation
// ==============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");
window.addEventListener("scroll",()=>{
 let current="";
 sections.forEach(section=>{
 const sectionTop = section.offsetTop;
 if(pageYOffset >= sectionTop - 120){
 current = section.getAttribute("id");
 }
 });
 navLinks.forEach(link=>{
 link.classList.remove("active");
 if(link.getAttribute("href")==="#"+current){
 link.classList.add("active");
 }
 });
});
// ==============================
// Contact Form
// ==============================
const form = document.querySelector("form");
form.addEventListener("submit",(e)=>{
 e.preventDefault();
 alert("Thank you! Your message has been received.");
 form.reset();
});
// ==============================
// Hero Image Animation
// ==============================
const image = document.querySelector(".hero-image img");
setInterval(()=>{
 image.classList.toggle("float");
},2000);
// ==============================
// Skill Bar Animation
// ==============================
const skills = document.querySelectorAll(".bar span");
window.addEventListener("load",()=>{
 skills.forEach(skill=>{
 const width = skill.style.width;
 skill.style.width="0";
 setTimeout(()=>{
 skill.style.width=width;
 },500);
 });
});
// ==============================
// Current Year
// ==============================
const footer = document.querySelector("footer p");
footer.innerHTML =
`© ${new Date().getFullYear()} Kasheem Salamat (Noor). All Rights Reserved.`;
// ==============================
// Console Message
// ==============================
console.log("%cWelcome to Kasheem Salamat Portfolio",
"color:maroon;font-size:20px;font-weight:bold;");