let btn = document.createElement("button");

btn.innerHTML = "↑";
btn.id = "backToTop";
btn.style.cssText = "position:fixed;bottom:25px;right:25px;display:none;z-index:9999;cursor:pointer;padding:10px 15px;border:none;border-radius:5px;";

document.body.appendChild(btn);

window.addEventListener("scroll", function() {
    btn.style.display = window.scrollY > 300 ? "block" : "none";
});

btn.addEventListener("click", function() {
    window.scrollTo({top: 0, behavior: "smooth"});
});

