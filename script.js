
console.log("Welcome to the Community Portal");

window.onload = function () {
  alert("Community Portal Loaded Successfully!");
};

const eventName = "Music Festival";
const eventDate = "2026-07-12";
let seats = 50;

console.log(`Event: ${eventName} | Date: ${eventDate} | Seats: ${seats}`);
class Event {
  constructor(name, category, seats) {
    this.name = name;
    this.category = category;
    this.seats = seats;
  }
}

Event.prototype.checkAvailability = function () {
  return this.seats > 0 ? "Seats Available" : "Full";
};

const e1 = new Event("Music Festival","Music",50);
console.log(Object.entries(e1));

let events = [];

events.push(
  new Event("Music Festival","Music",50),
  new Event("Health Camp","Health",20),
  new Event("Sports Meet","Sports",0)
);

const musicEvents = events.filter(e => e.category==="Music");
console.log(musicEvents);

const cards = events.map(e=>`Workshop on ${e.name}`);
console.log(cards);

// ================= FUNCTIONS + CALLBACK =================
function addEvent(name, category, seats=10){
  events.push(new Event(name,category,seats));
}

function filterEventsByCategory(category, callback){
  const result = events.filter(e=>e.category===category);
  callback(result);
}

filterEventsByCategory("Music", function(data){
  console.log("Filtered:",data);
});
function registrationCounter(){
  let total=0;

  return function(){
    total++;
    return total;
  };
}

const countReg = registrationCounter();

function validatePhone(input) {

  try{

    if(input.value.length!==10){
      throw "Phone number must be 10 digits";
    }

    alert("Valid Phone Number");

  }

  catch(error){
    alert(error);
  }
}

function showEventFee(sel) {

  localStorage.setItem("preferredEvent",sel.value);

  let fee=0;

  if(sel.value==="Music")
    fee=500;
  else if(sel.value==="Health")
    fee=300;
  else if(sel.value==="Sports")
    fee=400;

  alert(`Selected Event: ${sel.value}\nFee: ₹${fee}`);
}


function submitForm() {

  try{

    seats--;

    document.getElementById("confirmOutput").innerText=
      `Registration Successful! Remaining Seats: ${seats}`;

    console.log("Registration Count:",countReg());

  }

  catch(err){
    console.log(err);
  }
}

function countChars(txt){

  document.getElementById("charCount").innerText=
  txt.value.length;
}

function videoReady(){
  alert("Video ready to play");
}

function findLocation(){

  const options={
    enableHighAccuracy:true,
    timeout:5000
  };

  navigator.geolocation.getCurrentPosition(

    function(pos){

      document.getElementById("locationOutput").innerText=
      `Lat: ${pos.coords.latitude}
       Lng: ${pos.coords.longitude}`;

    },

    function(err){

      alert("Location Permission Denied");
    },

    options
  );
}

function enlargeImage(img){

  img.style.width="350px";
}
function submitFeedback(){

  alert("Feedback Submitted Successfully!");
}

function clearPrefs(){

  localStorage.clear();
  sessionStorage.clear();

  alert("Preferences Cleared!");
}

const eventSection=document.querySelector("#events");

events.forEach(ev=>{

  let card=document.createElement("div");

  card.className="eventCard";

  card.innerText=
  `${ev.name} | ${ev.category} | ${ev.checkAvailability()}`;

  eventSection.appendChild(card);

});

document.addEventListener("keydown",function(e){

  console.log("Key Pressed:",e.key);

});

fetch("https://jsonplaceholder.typicode.com/users")

.then(res=>res.json())

.then(data=>console.log("Fetched Data:",data))

.catch(err=>console.log(err));

async function loadData(){

  try{

    const response=
      await fetch("https://jsonplaceholder.typicode.com/posts/1");

    const data=await response.json();

    console.log(data);

  }

  catch(error){

    console.log(error);
  }
}

loadData();

window.onbeforeunload=function(){

  return "You have unsaved changes!";
};

/*
$('#registerBtn').click(function(){

   $('.eventCard').fadeOut().fadeIn();

});
*/
