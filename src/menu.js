import { main } from "./index.js";

export default function createMenuPage() {
  //настройка раздела меню
  let divMain = document.createElement("div");
  divMain.setAttribute("id", "menu");
  let elementsMenu = {
    h1: ["Flakes", "Granules", "Pills", "Waffles", "Frozen food", "Live food"],
    p: [
      "The most common type of fish food, suitable for surface and middle layers of water." +
        "Cereals are rich in proteins and vitamins and minerals, and have different compositions for different types of fish",
      "Food in the form of small balls that can float on the surface, sink" +
        " slowly or quickly. The granules are suitable for fish that feed at" +
        " different depths, and also have a varied composition",
      "Food in the form of flat disks that stick to the glass of the aquarium" +
        " or sink to the bottom. The tablets are ideal for bottom fish such as " +
        "catfish, horses and crayfish.",
      "Food in the form of large round plates that sink to the bottom and" +
        " slowly dissolve. Wafers are suitable for large bottom-dwelling fish" +
        " such as discus, ancistrus and shellfish.",
      "Food made from natural products such as shrimp, worms, mussels and" +
        " yeast that is frozen to maintain freshness and nutritional value.",
      "Food from living organisms such as brine shrimp, daphnia, cyclops and" +
        " enchitraea, which are grown specifically for feeding fish. Alive food" +
        " is the most natural and healthy type of food.",
    ],
  };

  for (let i = 0; i < elementsMenu.h1.length; i++) {
    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
    let div2 = document.createElement("div");

    div.classList.add("dish");

    h1.textContent = elementsMenu.h1[i];
    p.textContent = elementsMenu.p[i];

    div2.style = `background-image: url(/img/dish${i}.webp)`;

    divMain.appendChild(div);
    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(div2);
  }

  main.appendChild(divMain);
}
