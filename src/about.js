import { main } from "./index.js";

export default function createAboutPage() {
  //настройка раздела About
  let elementsAbout = [
    "Do you want to know more about our restaurant 'Underwater gourmet'?" +
      " Then welcome here, where we will tell you about our history, our" +
      " mission and our team.",
    "Our restaurant was founded by two friends - a perch and a pike, who" +
      " loved to travel around different water bodies and try different types" +
      " of food. They noticed that many fish did not know about the diversity" +
      " of underwater cuisine and ate monotonously and boringly. They decided" +
      " that creating such a restaurant for fish would be a great idea, where" +
      " they could offer their visitors the most delicious and healthy dishes" +
      " from different corners of the world.",
    "They started with a small kiosk, where they sold live worms and brine" +
      " shrimp. Gradually they expanded their range and their audience. They" +
      " found suppliers of dry pellets and flakes, as well as made contacts" +
      " with other fish, who could deliver them exotic food from other water" +
      " bodies. They also furnished their kiosk, adding different plants and" +
      " decorations, to create a cozy atmosphere.",
    "After a few years they moved to the center of Paris, where they rented" +
      " a building of an old mansion, which was rebuilt into a modern store." +
      " They opened their restaurant “Underwater gourmet”, which became known" +
      " not only among the locals, but also among tourists from other" +
      " countries. They hired a professional chef, who knows all the" +
      " subtleties of underwater cuisine and can cook dishes for any type of" +
      " fish. They also created their website, where they tell about their" +
      " menu, their history and their services.",
    "Our mission is to make the life of aquarium fish more tasty," +
      " interesting and diverse. We want every fish to find something that" +
      " suits them, and enjoy the food. We also want our visitors to" +
      " communicate with each other, share their impressions and learn new" +
      " things.",
    "Our team is a friendly team of experienced and talented fish who work" +
      " for the benefit of our customers. We are always happy to see you in" +
      " our restaurant and ready to fulfill any of your wishes. We are also" +
      " open for feedback and suggestions for improving our service.",
    "If you want to contact us, you can call us by phone +7 (495) 123-45-67" +
      " or write us an email at aquarium@gmail.com. You can also subscribe to" +
      " our page on the social network [Fishbook], where we post news," +
      " promotions and photos of our dishes.",
    "Thank you for choosing our restaurant “Underwater gourmet”! We are" +
      " waiting for you again!",
  ];
  let div = document.createElement("div");
  div.classList.add("about");
  main.appendChild(div);
  for (let i = 0; i < elementsAbout.length; i++) {
    let p = document.createElement("p");
    p.textContent = elementsAbout[i];
    div.appendChild(p);
  }

  let div2 = document.createElement("div");
  div2.style = `background-image: url(/img/cook.png)`;
  div2.classList.add("cook");
  main.appendChild(div2);
}
