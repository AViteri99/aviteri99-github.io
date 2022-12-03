function toggleTheme(){
    var element = document.body;
    element.classList.toggle("dark-mode")
}
document.getElementById("toggleButton").onclick = toggleTheme;