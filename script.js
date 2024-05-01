// Game container
let game = document.querySelector(".game");
// 4 buttons
let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
let clickedIds = [];
let counter = 0;
let name =  document.querySelector(".name");
let message = document.querySelector(".message");

let HowManyTimes = document.querySelector(".howmanytimes");
// Array containing image URLs
let url = "https://cdn.glitch.global/d7c94b0f-62b8-4bb3-a465-daae3796afe4/";
let cards = [
    "card1.jpg?v=1710864780400",
    "card2.jpg?v=1710864801681",
    "card3.jpg?v=1710864808054",
    "card4.jpg?v=1710864814069",
    "card5.jpg?v=1710864821022",
    "card6.jpg?v=1710864832735",
    "card7.jpg?v=1710864839338",
    "card8.jpg?v=1710864846325"




];

// Button to Show Deck
buttonShow.onclick = function() {
    // Log message
    console.log("Showing the deck...");
    // For of loop
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" + url +
            card +
            ")' class='card'>");
    }
     let nameInput = document.querySelector(".name").value;
   
    message.innerHTML =  " hi " + "" + nameInput + "!" + "" + " These are the pictures. ";
};

// Button to Double Deck
buttonDouble.onclick = function() {
    console.log("Deck has " + cards.length + "cards.");
    for (let card of cards) {
        if (cards.length !== 16) {
            cards.push(card);
            game.insertAdjacentHTML("beforeend",
                "<div style='background-image:url(" +
                url + card + ")' class='card'>"
            );
        }
    }
    buttonDouble.style.color = "silver";
    console.log("Now the deck has " + cards.length + " cards.");
};






/* let count = 8;
    if (count > 16) {
        for (let card of cards) {
            if (count > 16) {
                cards.push(card);
                count = count + 1;
            }
        }
    }
};*/

// Button to Shuffle Cards
buttonShuffle.onclick = function() {
    shuffle(cards);
    game.innerHTML = "";
    console.log("i am shuffling it!");
    let i = 0;
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image:url(" +
            url + card + ")' class='card' id='" + i + "'>"
        );

        i = i + 1;
    }
};

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    //while there are elements to shuffle...
    while (currentIndex > 0) {
        //pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;
        //swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}



// Button to Flip All Cards
buttonFlip.onclick = function() {

    let i = 0;
    for (card of cards) {
        document.getElementById(i).style.backgroundImage = "";
        i = i + 1;
    }
    let audio2 = document.querySelector(".audio2");
    audio2.play();
};



// Here we need a function for clicking on individual cards.
// (It won't work until we finish writing it.)
$(document).click(function(event) {
    // Get the id property of the clicked thing.
    let clickedId = event.target.id;
    console.log(clickedId);
    //if a card was clicked...
    if (clickedId !== "") {
        //make the backgroundimage appear!
        document.getElementById(clickedId).style.backgroundImage =
            "url('" + url + cards[clickedId] + "')";
        // console.log(document.getElementById(clickedId).style);
        //Also add the id to an array (and log it)
        clickedIds.push(clickedId);
        //if 1 card was clicked ...
        if (clickedIds.length === 2) {
            //get both image URLS(and log them)

            let card1picture = document.getElementById(clickedIds[0]).style.backgroundImage;
            let card2picture = document.getElementById(clickedIds[1]).style.backgroundImage;
            console.log(card1picture);
            console.log(card2picture);
            //If they are same, just empty the array!
            if (card1picture === card2picture) {
                console.log("match");
                document.getElementById(clickedIds[0]).id = "";
                document.getElementById(clickedIds[1]).id = "";
                clickedIds = [];
                console.log(clickedIds);
                counter = counter + 1;
                 // play a sound
    let audio = document.querySelector(".audio1");
    audio.play();

            }

            //If they are NOT the same...
            //reset both background images and empty the array
        } else if (clickedIds.length > 2) {
            document.getElementById(clickedIds[0]).style.backgroundImage = "";
            document.getElementById(clickedIds[1]).style.backgroundImage = "";
            console.log("no match");

            clickedIds = [];
            clickedIds.push(clickedId);
            console.log(clickedIds);
        }
        HowManyTimes.innerHTML = "You got  " + counter + " matches.";



    }
});