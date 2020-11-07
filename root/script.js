for (let i = 0; i < 7; i++) {
  const item_slot = document.createElement("div");
  item_slot.setAttribute("class", "item_slot");

  const item_image = document.createElement("img");
  item_image.setAttribute("class", "item_image");
  item_image.setAttribute("src", "../images/tshirt.jpg");

  const item_name = document.createElement("a");
  item_name.setAttribute("class", "item_name");
  item_name.setAttribute("href", "./buy/buy.html");
  item_name.innerHTML = "Cool T-Shirt";

  const item_price = document.createElement("span");
  item_price.setAttribute("class", "item_price");
  item_price.innerHTML = "$100,00";

  //append item image/price/name to item_place
  item_slot.appendChild(item_image);
  item_slot.appendChild(item_name);
  item_slot.appendChild(item_price);

  document.getElementById("items-place").appendChild(item_slot);
}
const item_slot = document.createElement("div");
item_slot.setAttribute("class", "item_slot");

const item_image = document.createElement("img");
item_image.setAttribute("class", "item_image");
item_image.setAttribute("src", "../images/tshirt.jpg");

const item_name = document.createElement("a");
item_name.setAttribute("class", "item_name");
item_name.setAttribute("href", "../buy/buy.html");
item_name.innerHTML = "Normal T-Shirt";

const item_price = document.createElement("span");
item_price.setAttribute("class", "item_price");
item_price.innerHTML = "$100,00";

//append item image/price/name to item_place
item_slot.appendChild(item_image);
item_slot.appendChild(item_name);
item_slot.appendChild(item_price);
document.getElementById("items-place").appendChild(item_slot);
