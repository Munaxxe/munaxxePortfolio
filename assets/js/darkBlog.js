document.body.style="background-color: var(--bs-dark);transition: 0.5s;"
const sun = "sun.svg";
const moon = "moon.svg";


// var theme = "dark";
var theme = "light";

  const root = document.querySelector(":root");
  const container = document.getElementsByClassName("theme-container")[0];
  const themeIcon = document.getElementById("theme-icon");
  container.addEventListener("click", setTheme);
  function setTheme() {
    switch (theme) {
      case "dark":
        setLight();
        theme = "light";
        break;
      case "light":
        setDark();
        theme = "dark";
        break;
    }
  }
  function setLight() {
root.style.setProperty(
      "--bs-dark",
      "linear-gradient(318.32deg, #c3d1e4 0%, #dde7f3 55%, #d4e0ed 100%)"
    );
    root.style.setProperty("--second-color", "black");
    root.style.setProperty("color", "black")
    container.classList.remove("shadow-dark");
    setTimeout(() => {
      container.classList.add("shadow-light");
      themeIcon.classList.remove("change");
    }, 300);
    themeIcon.classList.add("change");
    themeIcon.src = sun;
  }
  function setDark() {
    root.style.setProperty("--bs-dark", "black");
    root.style.setProperty("--second-color", "white");
    root.style.setProperty("color", "white"); 
    container.classList.remove("shadow-light");

    setTimeout(() => {
      container.classList.add("shadow-dark");
      themeIcon.classList.remove("change");
    }, 300);
    themeIcon.classList.add("change");
    themeIcon.src = moon;
  }
