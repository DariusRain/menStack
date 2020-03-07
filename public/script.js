// Task 2: create hotel.js to send and get hotels from server (Pending)
const clickSignUpElement = document.getElementById("click");
const searchInput = document.getElementById("search");
const hotelForm = document.getElementById("hotel_services");

hotelForm.addEventListener("submit", submitForm);

clickSignUpElement.addEventListener("click", showHideById);

async function submitForm() {
  event.preventDefault();
  let json = {};
  json.rooms = [];
  for (elements of hotelForm.children) {
    if (elements.value) {
      if (!elements.className) {
        json[elements.name] = elements.value;
      } else {
        let temp = {};
        let i = 0;
        switch (elements.name) {
          case "singleBedrooms":
            temp.roomType = "Single Bedroom";
           console.log(1, temp.roomType)
            while (i <= elements.value) {
              json.rooms.push(temp);
              ++i;
            }
            break;

          case "doubleBedrooms":
            temp.roomType = "Double Bedroom";
            console.log(2, temp.roomType)

            while (i <= elements.value) {
              json.rooms.push(temp);
              ++i;
            }
            break;

          case "tripleBedrooms":
            temp.roomType = "Triple Bedroom";
            console.log(3, temp.roomType)

            while (i <= elements.value) {
              json.rooms.push(temp);
              ++i;
            }
            break;

          case "quadBedrooms":
            temp.roomType = "Quad Bedroom";
            console.log(4, temp.roomType)

            while (i <= elements.value) {
              json.rooms.push(temp);
              ++i;
            }
            break;

          case "kingBedrooms":
            temp.roomType = "King Bedroom";
            console.log(5, temp.roomType)

            while (i <= elements.value) {
              json.rooms.push(temp);
              ++i;
            }
            break;

          case "queenBedrooms":
            temp.roomType = "Queen Bedroom";
            console.log(6, temp.roomType)

            while (i <= elements.value) {
              json.rooms.push(temp);
              ++i;
            }
            break;

          default:
            break;
        }
      }
    }
  }

  if (json.rooms.length > 0) {
    json.numberOfRooms = json.rooms.length
  }

  console.log(json);
  try {
    const sendForm = await fetch(`${location.href}hotels`, {
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      },

      method: "POST",

      body: JSON.stringify(json)
    });
    const data = await sendForm.json();
    console.log(data);
    location.assign(data.url);
  } catch {
    console.log("Error");
  }
}

// const getHotelsExample = (async () => {
//   try {
//     const getHotelData = await fetch(
//       `https://rest-hotels-api.herokuapp.com/v1/hotels`
//     );
//     const data = await getHotelData.json();
//     const parent = document.getElementById("display_hotels");
//     data.map(elements => {
//       //elements = JSON.parse(elements)
//       let div = document.createElement("div");
//       let img = document.createElement("img");
//       let name = document.createElement("a");
//       let starsPrice = document.createElement("kbd");
//       let location = document.createElement("span");
//       let hr = document.createElement("hr")
//       let br = document.createElement("br");
//       let price = document.createElement("span");
//         hr.style.width = '100%'
//       price.style.color = "green";
//       img.style = "width: 100%; border-radius: 12px; border-style: solid; border-color:white;";
//       img.setAttribute("src", elements.images[0]);
//       div.className = "hotel-flex-item"
//         name.style = " font-weight: bold; font-size: 12px;"
//       name.setAttribute("href", "#");
//         location.style = 'font-size: 12px; font-weight: bold;'
//       location.innerText = ` ${elements.city} ${elements.country} \n ${elements.address} \n ${elements.phone} `;
//       name.innerText = `\n ${elements.name} ⭐${elements.stars}`;
//         starsPrice.innerText = ` 💲 ${elements.price}`
//       div.appendChild(img);
//       div.appendChild(name);
//       div.appendChild(hr)
//       div.appendChild(location);
//       div.appendChild(starsPrice);

//       parent.appendChild(div);
//       console.log(elements);
//     });
//   } catch {
//     console.log("Hotels Not Found");
//   }
// })();


const getHotels = (async () => {
  let parent = document.getElementById("display_hotels")
  try {
    const getHotels = await fetch(`${location.href}hotels/getallhotels`)
    const data = await getHotels.json()
    const displayELements = data.map(elements => {
      const hotelCard = new HotelCard(
        elements.hotelName, 
        elements.numberOfRooms - 1,
         `${elements.street}, \n ${elements.city} ${elements.state}`,
         elements.phoneNumber,
        `${location.href}hotels/profile/${elements._id}`
         )

      parent.appendChild(hotelCard)
    })
  } catch {
    console.log('Error in the try block of function getHotels()')
  }
})()


class HotelCard {
  constructor(hotelName, numberOfRooms, location, phoneNumber, linkUrl){
    let div = document.createElement("div");
    let hotelNameText = document.createElement("a");
    let hr = document.createElement("hr")
    let numOfRooms = document.createElement("span")
    let locationOf = document.createElement("span")
    let phoneNumberOf = document.createElement("span")
    div.className = 'hotel-flex-item'

    hotelNameText.style = 'margin-bottom:12px; text-align: center;'
    locationOf.style = 'margin-bottom: 12px;'
    phoneNumberOf.style = 'margin-bottom: 12px;'
    hr.style = " width: 100%; margin-bottom:12px;"
    
    hotelNameText.setAttribute("href", linkUrl)

    phoneNumberOf.innerText = `📞 \n ${phoneNumber}`
    hotelNameText.innerText = hotelName;
    numOfRooms.innerText = `🛌\n Rooms: ${numberOfRooms}`
    locationOf.innerText = `📍 \n ${location}`
    div.appendChild(hotelNameText)
    div.appendChild(hr)
    div.appendChild(locationOf) 
    div.appendChild(phoneNumberOf);
    div.appendChild(numOfRooms) 

    return div;
  }
}


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
