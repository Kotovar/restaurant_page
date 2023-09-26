export default function createMainPage() {
  let content = document.getElementById("content");
  //настройка заголовка header
  let header = document.createElement("header");
  let headerText = ["Home", "Menu", "About"];
  for (let i = 0; i < headerText.length; i++) {
    let div = document.createElement("div");
    let a = document.createElement("a");
    a.href = "";
    a.textContent = headerText[i];
    header.appendChild(div);
    div.appendChild(a);
  }
  content.appendChild(header);

  //настройка основного раздела main
  let main = document.createElement("main");
  let pMain = document.createElement("h1");
  pMain.textContent = "Fish restaurant 'Underwater gourmet'";
  main.appendChild(pMain);
  let mainText = [
    "Hello, dear fish! Do you want to taste something new and delicious?" +
      "Then you need to visit our restaurant 'Aquarium'! This is not just a restaurant," +
      "this is a whole world of underwater cuisine, where you will find dishes for every taste and color.",
    "Our restaurant is open from 10:00 to 20:00 every day, except Sunday.",
    "You can come to us without an appointment or book a table in advance by phone or through our website." +
      "Our restaurant is located in the center of Paris, at: Rue de Rivoli, 15. On our website you will find" +
      "more information about our menu, our history and our services. We are waiting for you in our restaurant!",
  ];
  for (let i = 0; i < mainText.length; i++) {
    let div = document.createElement("div");
    if (i === 1) {
      let h3 = document.createElement("h3");
      h3.textContent = "Hours";
      div.appendChild(h3);
    }
    div.append(mainText[i]);
    main.appendChild(div);
  }
  content.appendChild(main);

  //настройка нижнего раздела footer
  let footer = document.createElement("footer");
  let p = document.createElement("p");
  p.textContent = "Underwater gourmet © 2023 | All Rights Reserved";
  footer.appendChild(p);
  content.appendChild(footer);
}
