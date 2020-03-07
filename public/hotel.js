



const getAllData = (async () => {
    let parent = document.getElementById("display_room_overview")
    console.log(location.href)
    try {
        const data = await fetch(`${location.href}/data`)
        let dataToJson = await data.json();
        
        const kings = dataToJson.rooms.filter(element => {return element.roomType === 'King Bedroom'})
        const queens = dataToJson.rooms.filter(element => {return element.roomType === 'Queen Bedroom'})
        const quads = dataToJson.rooms.filter(element => {return element.roomType === 'Quad Bedroom'})
        const triples = dataToJson.rooms.filter(element => {return element.roomType === 'Triple Bedroom'})
        const doubles = dataToJson.rooms.filter(element => {return element.roomType === 'Double Bedroom'})
        const singles = dataToJson.rooms.filter(element => {return element.roomType === 'Single Bedroom'})

        const allAvailability = dataToJson.rooms.filter(element => {return element.roomOpen === true})
        const kingAvailability = kings.filter(element => {return element.roomOpen === true})
        const queenAvailability = queens.filter(element => {return element.roomOpen === true})
        const quadAvailability = quads.filter(element => {return element.roomOpen === true})
        const tripleAvailability = triples.filter(element => {return element.roomOpen === true})
        const doubleAvailability = doubles.filter(element => {return element.roomOpen === true})
        const singleAvailability = singles.filter(element => {return element.roomOpen === true})
        
        

        document.getElementById("all_available_text").innerText = allAvailability.length - 1;
    

        const kingBedroomsElement = new roomCardElement("King Bedrooms", kingAvailability.length - 1, kings.length - 1)
        const queenBedroomsElement = new roomCardElement("Queen Bedrooms", queenAvailability.length - 1, queens.length - 1)
        const quadBedroomsElement = new roomCardElement("Quad Bedrooms",  quadAvailability.length - 1, quads.length - 1)
        const tripleBedroomsElement = new roomCardElement("Triple Bedrooms", tripleAvailability.length - 1, triples.length - 1)
        const doubleBedroomsElement = new roomCardElement("Double Bedrooms", doubleAvailability.length - 1, doubles.length - 1)
        const singleBedroomsElement = new roomCardElement("Single Bedrooms", singleAvailability.length - 1, singles.length - 1)

        parent.appendChild(kingBedroomsElement)
        parent.appendChild(queenBedroomsElement)
        parent.appendChild(quadBedroomsElement)
        parent.appendChild(tripleBedroomsElement)
        parent.appendChild(doubleBedroomsElement)
        parent.appendChild(singleBedroomsElement)
        // const queenDiv = new anyELement("div");
        // const kingHeading = new anyELement("h1")
        

        // kingDiv.appendChild(kingHeading)
        // parent.appendChild(kingDiv)

        // Testing here
        // console.log('Kings:', kingAvailability.length)
        // console.log('Queens:', queenAvailability.length)
        // console.log('Quads:', quadsAvailability.length)
        // console.log('Triples:', tripleAvailability.length)
        // console.log("Doubles:", doubleAvailability.length)
        // console.log("Singles:", singleAvailability.length)
        
    } catch {
        console.log("Theres an error in the try block of function 'getAllData()' ")
    }
})()


class roomCardElement {
    constructor(headingText, availibilityNumber, amountOfRooms) {
        let div = document.createElement("div")
        let heading = document.createElement("h4");
        let availabilityTitle = document.createElement("span")
        let availablityText = document.createElement("span")
        let hr1 = document.createElement("hr")
        let hr2 = document.createElement("hr")
        let hr3 = document.createElement("hr")

        let button = document.createElement("button")
        availabilityTitle.innerText = 'Available Rooms \n'
        button.innerText = 'Book now'    
        heading.innerText = headingText;   
        // img.setAttribute("src", 'https://bit.ly/3cDwmer')
        availablityText.innerHTML += '<img src="https://bit.ly/3cDwmer" width="10px">'
        availablityText.innerHTML += `   ${availibilityNumber}`

        heading.className = 'click'
        div.className = 'rooms-display-card'

        heading.style = 'color: #6699cc;'
        availabilityTitle.style= 'font-size: 13px; margin-bottom: 6px;'
        button.style = ' width: 100%; color:rgb(21, 32, 43); margin:0 auto; margin-top: 12px;'
        availablityText.style = 'font-size: 12px; margin-bottom: 12px;'
        hr1.style = 'width: 100%; margin-bottom: 30px; margin-top:0px;'
        hr2.style = 'width: 25%;'
        hr3.style = 'width: 100%;'

        div.appendChild(heading);
        div.appendChild(hr1)
        div.appendChild(availabilityTitle)
        div.appendChild(availablityText);
        div.appendChild(hr3)
        div.appendChild(button)
        return div
    }
}