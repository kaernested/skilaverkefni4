var test = `virkar`;

var button = document.querySelector("#btn");
var heading = document.querySelector("#heading");
var subheading = document.querySelector("#subheading");
var rating = document.querySelector("#rating");
var date = document.querySelector("#date");
var picture = document.querySelector("#picture");
var main = document.querySelector(".main")

var makeEvent = function(){
    main.innerHTML += info(heading.value, subheading.value, rating.value, date.value, picture.value);

}
button.onclick = makeEvent; 


var info = function(heading, subheading, rating, date, pictureURL){
    var newEvent = `
    <div class="event" style="background-image: url(&quot;${pictureURL}&quot;);">
        <div class="heading">
            <h1>${heading}</h1>
        </div>
        <div class="subheading">
            <h2>${subheading}|${rating}|${date}</h2>
        </div>
        <div class="banner">
            <div class="btn-container">
                <div class="button1">
                    <button id=buy>Buy tickets</button>
                </div>
                <div class="button2">
                    <button id=info>Info</button>
                </div>
            </div>
        </div>
    </div>

    `
    return newEvent;
}