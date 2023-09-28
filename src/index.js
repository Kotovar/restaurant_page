import "./style.css";
import createMainPage from "./main_page";
import createMenuPage from "./menu";
import createAboutPage from "./about";
export let main = document.createElement("main");

let header = top();
createMainPage();
bottom();

// Основная функция переключения страниц
header.addEventListener("click", function (e) {
  if (e.target.tagName === "A") {
    main.innerHTML = "";
    e.preventDefault();
    switch (e.target.id) {
      case "Home":
        createMainPage();
        break;
      case "Menu":
        createMenuPage();
        break;
      case "About":
        createAboutPage();
        break;
    }
  }
});

//создание общей верхней и нижней части сайта
function top() {
  let content = document.getElementById("content");
  let header = document.createElement("header");
  let headerText = ["Home", "Menu", "About"];
  for (let i = 0; i < headerText.length; i++) {
    let div = document.createElement("div");
    let a = document.createElement("a");
    a.href = "";
    a.textContent = headerText[i];
    a.setAttribute("id", headerText[i]);
    header.appendChild(div);
    div.appendChild(a);
  }
  content.appendChild(header);
  content.appendChild(main);
  return header;
}

function bottom() {
  //настройка нижнего раздела footer
  let footer = document.createElement("footer");
  let p = document.createElement("p");
  p.textContent = "Underwater gourmet © 2023 | All Rights Reserved";
  footer.appendChild(p);
  content.appendChild(footer);
}
