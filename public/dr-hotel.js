// Task 2: create hotel.js to send and get hotels from server (Pending)
const clickSignUpElement = document.getElementById("click"); 
const searchInput = document.getElementById("search");
searchInput.addEventListener("keynamess", searchHotels);
clickSignUpElement.addEventListener("click", showHideById);
async function searchHotels() {
  try {
    const city = document.getElementById("search").value;
    const getHotelData = await fetch(
      `https://rest-hotels-api.herokuapp.com/v1/hotels?city=${city}`
    );
    const data = await getHotelData.json();
    console.log(data);
  } catch {
    console.log("Not Found");
  }
}







const getHotelsExample = (async () => {
  try {
    const getHotelData = await fetch(
      `https://rest-hotels-api.herokuapp.com/v1/hotels`
    );
    const data = await getHotelData.json();
    const parent = document.getElementById("display_hotels");
    data.map(elements => {
      //elements = JSON.parse(elements)
      let div = document.createElement("div");
      let img = document.createElement("img");
      let name = document.createElement("a");
      let starsPrice = document.createElement("kbd");
      let location = document.createElement("span");
      let hr = document.createElement("hr")
      let br = document.createElement("br");
      let price = document.createElement("span");
        hr.style.width = '100%'
      price.style.color = "green";
      img.style = "width: 100%; border-radius: 12px; border-style: solid; border-color:white;";
      img.setAttribute("src", elements.images[0]);
      div.className = "hotel-flex-item"
        name.style = " font-weight: bold; font-size: 12px;"
      name.setAttribute("href", "#");
        location.style = 'font-size: 12px; font-weight: bold;'
      location.innerText = ` ${elements.city} ${elements.country} \n ${elements.address} \n ${elements.phone} `;
      name.innerText = `\n ${elements.name} ⭐${elements.stars}`;
        starsPrice.innerText = ` 💲 ${elements.price}`
      div.appendChild(img);
      div.appendChild(name);
      div.appendChild(hr)
      div.appendChild(location);
      div.appendChild(starsPrice);

      parent.appendChild(div);
      console.log(elements);
    });
  } catch {
    console.log("Hotels Not Found");
  }
})();

function showHideById() {
  const element = document.getElementById("hotel_services");
  const style = element.style;
  if (style.display === "none") {
    style.display = "inline";
    clickSignUpElement.style.color = "red";
    clickSignUpElement.innerText = "Cancel";
  } else {
    style.display = "none";
    clickSignUpElement.style.color = "#6699cc";
    clickSignUpElement.innerText = "Sign up here";
  }
}
