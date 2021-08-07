// Declare Now Playing variables
const nowOnImage = document.querySelector("#on-now-thumbnail");
const nowOnTitle = document.querySelector("#now-on-mid-text");
const nowOnDescription = document.querySelector("#now-on-bottom-text");

// Declare Schedule variables
const scheduleTitleList = document.querySelectorAll(".schedule-title");
const scheduleThumbnailList = document.querySelectorAll(".schedule-thumbnail");
const scheduleGenreList = document.querySelectorAll(".schedule-genre");
const scheduleTimeList = document.querySelectorAll(".schedule-time");

// Declare Recommended variables
const recommendedTitle = document.querySelector("#recommended-mid-text");
const recommendedDescription = document.querySelector(
  "#recommended-bottom-text"
);
const recommendedThumbnail = document.querySelector("#recommended-thumbnail");

// Create a current film and TV object array
const liveSchedule = [
  {
    title: "Forest Freedom",
    genre: "Action",
    time: 9,
    description: "Can they all escape the forest in time?",
    thumbnail: "ForestFreedom.png"
  },
  {
    title: "Darkness Hollows",
    genre: "Horror",
    time: 10,
    description: "What lurks in the old town that only she can see?",
    thumbnail: "Darkness Hollows.png"
  },
  {
    title: "Have You Seen My Pants?",
    genre: "Comedy",
    time: 11,
    description: "Watch this duo of nutters perform outrageous stunts.",
    thumbnail: "Have you seen my pants.png"
  },
  {
    title: "Hearts Of Fire",
    genre: "Thriller",
    time: 12,
    description: "War at the base of an erupting volcano.",
    thumbnail: "Hearts of Fire.png"
  },
  {
    title: "Drewbridge Abbey",
    genre: "Drama",
    time: 1,
    description:
      "Master Atticus delivers a message that has all the residents by surprise.",
    thumbnail: "Drewbridge Abbey.png"
  },
  {
    title: "Sea of Dreams",
    genre: "Drama",
    time: 2,
    description:
      "A retired police officer struggles to pay his debts and decides to become a ferryman.",
    thumbnail: "Sea of Dreams.png"
  },
  {
    title: "Maniac Racers",
    genre: "Action",
    time: 3,
    description:
      "Contestants race for glory in this push-kart build and race series.",
    thumbnail: "Maniac Racers.png"
  },
  {
    title: "Constant Alert",
    genre: "Thriller",
    time: 4,
    description:
      "The FBI are out of action, can Brenda pull them together to stop the bomb?",
    thumbnail: "Constant Alert.png"
  },
  {
    title: "The Demon",
    genre: "Horror",
    time: 5,
    description:
      "Possession, Corruption and Cults, who is next on the Demon’s list?",
    thumbnail: "The Demon.png"
  },
  {
    title: "Swarm Enemy",
    genre: "Action",
    time: 6,
    description:
      "The world is held to ransom by a mad scientist and his swarm of robo-bees.",
    thumbnail: "Swarm Enemy.png"
  },
  {
    title: "Elixir",
    genre: "Fantasy",
    time: 7,
    description:
      "With no heir to the throne, Strotfell becomes under attack and only magic can stop it.",
    thumbnail: "Elixir.png"
  },
  {
    title: "Daughter of Romulus",
    genre: "Fantasy",
    time: 8,
    description:
      "She has war in her blood, will she be able to rule the kingdom and keep the peace?",
    thumbnail: "Daughter of Romulus.png"
  }
];

// Check what time it is function invoked by the findFeature() function
function scheduleCheck() {
  let currentDate = new Date();
  let currentHour = currentDate.getHours();

  return currentHour;
}

// The main function, called at refresh as well as programmed to loop using setTimeout() function
function findFeature() {
  let times = scheduleCheck(); // returns the hour in 24 hour format
  let times12Hour;

  if (times === 12) {
    times12Hour = times; // keep 12 pm is times is equal to 12
  } else {
    times12Hour = times % 12;
  } // convert scheduleCheck() time to 12 hour format

  // Search the liveSchedule array using the returned times12Hour variable
  let findProgram = liveSchedule.map((e) => e.time).indexOf(times12Hour);

  // Populate the Now Playing feature thumbnail, title and description
  nowOnImage.src = `./img/${liveSchedule[findProgram].thumbnail}`;
  nowOnTitle.textContent = liveSchedule[findProgram].title;
  nowOnDescription.textContent = liveSchedule[findProgram].description;

  // Populate the Schedule thumbnails, titles, genres and time of show
  // Iterate through the node list of the Schedule.
  let scheduled = findProgram;
  let times24increment = times;

  for (let i = 0; i < scheduleTitleList.length; i++) {
    scheduleTitleList[i].textContent = liveSchedule[scheduled].title;
    scheduleGenreList[i].textContent = liveSchedule[scheduled].genre;
    scheduleTimeList[i].textContent = `${liveSchedule[scheduled].time}${amPm(
      times24increment
    )}`;
    scheduleThumbnailList[i].src = `./img/${
      liveSchedule[scheduled++].thumbnail
    }`;

    if (times24increment === 23) {
      times24increment = 0;
    } else {
      times24increment++;
    }

    if (scheduled >= liveSchedule.length) {
      scheduled = 0;
    }
  }
  setTimeout("findFeature()", 60000);
}

function amPm(times24increment) {
  let morningAfternoon;

  if (times24increment >= 12 && times24increment < 24) {
    morningAfternoon = ":00 pm";
    return morningAfternoon;
  } else {
    morningAfternoon = ":00 am";
    return morningAfternoon;
  }
}

// Randomly pick a feature as a TastyTV recommendation
let randomFeature = Math.floor(Math.random() * liveSchedule.length);

recommendedTitle.textContent = liveSchedule[randomFeature].title;
recommendedDescription.textContent = liveSchedule[randomFeature].description;
recommendedThumbnail.src = `./img/${liveSchedule[randomFeature].thumbnail}`;

findFeature();
