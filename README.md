<img src="/img/Logo2.png" alt="Tasty TV logo for project" height="80px" />

## M1 Project, TastyTV

## Goal

Create a website for TastyTV that provides a 12 hour repeating streaming service of movies and tv. The full scope of the brief, including specific deliverables is available [here.](https://docs.google.com/document/d/1qGlMeesgE4X4n4XjRT_8b_scOuI4E2VREpSwqyOmvUw/edit?pli=1)

## Demo

A demo of the website is available [here](https://yl3eb.csb.app/).

## UserStories

1. As a user I want to see what's on now so that I can get watching.

2. As a user I want to see the schedule so that I know what's on throughout the day(s).

3. As an unregistered user I want to register so that I can use the on-demand "recommended" feature.

4. As a registered user I want to request to watch the “recommended” movie/program so that I can enjoy it.

5. As a user I want to be able to see a company about us page so that I can see the company info.

6. As a user I want to be able to see regular announcements so that I see what is coming soon.

7. Social Links:

   a. As a YouTube user I want to be able to follow the organisation on YouTube

   b. As a Facebook user I want to be able to follow the organisation on Facebook

   c. As a Twitter user I want to be able to follow the organisation on Twitter

   d. As a LinkedIn user I want to be able to follow the organisation on LinkedIn

   e. As an Instagram user I want to be able to follow the organisation on Instagram

## Miro Board with Wireframes

A link to my Miro Board and wireframes is available [here.](https://miro.com/app/board/o9J_l49dMrU=/)

## Explanations of the technologies used

1. Flexbox explored and used as the principal display property for the website. I chose this because I like the dynamic and reactive layout Flexbox provides. In my recent experience, Flexbox appears ideal for different devices with different screen resolutions. I will be using this as well as the @media screen query tool for consideration of different device resolutions. For a streaming film/tv business, such as TastyTV, I believe that a website that works across multiple device screen sizes would increase accessibility to the application, and increase user acquisition.

2. Functions used for multiple purposes to run a specific set of tasks when invoked and return values.

3. A `for` loop used to iterate through the film/tv schedule.

4. `if` statements used to check certain parameters return true or false.

5. `document.querySelector` and `document.querySelectorAll` used to reference specific elements from each of the pages.

6. An array was used to store all of the live films and TV.

7. `new Date()` and `getHours()` used to determine the live hour of the day to enable live updates of the program schedule.

8. `map()` used to return the properties of the film and TV objects in the array. `indexOf()` used to determine the index number of the appropriate object.

9. `Math.floor` and `Math.random` used with the array `length` to return a random number in order to search the array index randomly.

10. `setTimeout()` used to loop the `findFeature()` function every minute to refresh the time and return the next playing film/TV program when appropriate.

11. `addEventListener()` used for user inputs and buttons ("input" and "click" respectively).

12. Regular Expression used to validate the user's email input.

13. `class` and `constructor` used to enable a new user account to be created, creating new iterations of the `newUser` object.

## Approach taken

1.  User stories completed.

2.  Wireframes drawn.

3.  Content added to the HTML pages with display, size and position properties added to a CSS file. 3 html files and a CSS stylesheet were created as per below. Each page contains links to each other in the header, as well as links to social media in the footer.

    a. index - the main page where the features will be shown

    b. register - the sign up page where a user can register

    c. about - an information page where the user can see company information

    d. styles - the main stylesheet of all elements in the website

4.  I was unsure whether there are any copyright restrictions on using images/posters of existing films and tv, therefore I have quickly made up a number of films/tv names. The brief states that the website should facilitate a 12 hour repeated stream; therefore, for the sake of demonstrating the functionality of the website, each film/tv will be given a time and genre. I aim to achieve that with a Now Playing and Scheduled feature, which will be dynamic, depending on the time of day the user views the website. All films/tv, genres and times are listed below:

    1. Forest Freedom
       a. Action
       b. 9:00
       c. Can they all escape the forest in time?

    2. Darkness Hollows
       a. Horror
       b. 10:00
       c. What lurks in the old town that only she can see?

    3. Have You Seen My Pants?
       a. Comedy
       b. 11:00
       c. Watch this duo of nutters perform outrageous stunts.

    4. Hearts Of Fire
       a. Thriller
       b. 12:00
       c. War at the base of an erupting volcano.

    5. Drewbridge Abbey
       a. Drama
       b. 13:00
       c. Master Atticus delivers a message that has all the residents by surprise.

    6. Sea of Dreams
       a. Drama
       b. 14:00
       c. A retired police officer struggles to pay his debts and decides to become a ferryman.

    7. Maniac Racers
       a. Action
       b. 15:00
       c. Contestants race for glory in this push-kart build and race series.

    8. Constant Alert
       a. Thriller
       b. 16:00
       c. The FBI are out of action, can Brenda pull them together to stop the bomb?

    9. The Demon
       a. Horror
       b. 17:00
       c. Possession, Corruption and Cults, who is next on the Demon’s list?

    10. Swarm Enemy
        a. Action
        b. 18:00
        c. The world is held to ransom by a mad scientist and his swarm of robo-bees.

    11. Elixir
        a. Fantasy
        b. 19:00
        c. With no heir to the throne, Strotfell becomes under attack and only magic can stop it.

    12. Daughter of Romulus
        a. Fantasy
        b. 20:00
        c. She has war in her blood, will she be able to rule the kingdom and keep the peace?

5.  Six films/TV coming soon as ANNOUNCEMENTS below. These are displayed as fixed on the bottom section of the main index page.

    1. Cake ‘n Bake
       a. Reality

    2. Prey on the Wicked
       a. Thriller

    3. Diesel Strike
       a. Action

    4. Around We Go
       a. Comedy

    5. The Francis Berkley Show
       a. Comedy

    6. Cannonball Trials Extreme
       a. Reality

6.  The essential elements were referenced in JavaScript using both `querySelector` and `querySelectorAll` where appropriate. The index.html page and register.html page were assigned the schedule.js and register.js scripts respectively.

7.  The 12 films/TV that are scoped to be part of the Now Playing and Scheduled feature as shown above were declared inside an array of objects called `liveSchedule`. Properties of each object were as follows and the above film details were added as values to these properties:

    a. `title`
    b. `genre`
    c. `time` (showing)
    d. `description`
    e. `thumbnail` (file path of the feature thumbnail)

8.  The dynamic schedule and times were implemented using a `new Date()` class and setting up some variables with the new date. From there, I was able to pull the hours out of the variable using `getHours()` and converting the returned 24 hour time format into a 12 hour time format. I was able to wrap this up inside a function to be referenced inside a variable called `times` which is invoked by the main `findFeature()` function, detailed below.

9.  The `findFeature()` function is the main function of the script and invoked on start-up. Inside this function is a number of mechanisms as explained below:

    a. A new variable `findProgram` is declared using the `liveSchedule` array and a combination of the `map()` function to extract the Time property of the array, and the `indexOf()` function to locate the index of the matching time passed. The 12 hour converted `times` variable discussed in the previous point is passed into `indexOf()`, which returns the index value of the matching `time` property value from the array.

    b. Once the Now Playing film has been indexed in the array the function continues to populate the rest of the schedule using a `for` loop to iterate through the `liveSchedule` array and filling the Schedule card shown on the website. To enable this, two variables are declared; `scheduled` and `times24Increment`, prior to the `for` loop, which take the values of `findProgram` and the 24 hour `times` variables respectively. These values were declared separate from the original values they are based on, as they are increased by 1 each time the `for` loop repeats, while using the original variables to do this may result in inconsistent times being passed to assigning elements throughout the remainder of the `findFeature()` function. The `scheduled` variable is used to index the next program and then increase by 1.

    c. As part of the `for` loop, an `amPm()` function is invoked from assigning the `time` variable to the selected element. The `times24Increment` is passed to this function which determines if the value of the variable is greater than or equal to 12, and less than 23. If true, the function returns ":00 pm", if false the function returns ":00am. The `times24Increment` is then increased by 1 as the `for` loop continues until the value is 23 where the value is reset to 0 to account for 24 hour time.

    d. All appropriate elements are updated using the `liveSchedule` array and above returns to show the correct Now Playing and Scheduled films and tv element details on the website.

    e. In order to regularly update the website based on the time of day, a `setTimeout()` function was implemented within the `findFeature()` function, and set to invoke `findFeature()` every minute. This is to enable a loop to be created for the function to run the time check every minute and switch the Now Playing and Scheduled program elements when due.

10. In order to achieve a random recommendation to be selected from the a `Math.floor(Math.random() * liveSchedule.length)` is assigned to a variable `randomFeature`. All appropriate elements within the Recommended For You feature are updated using `randomFeature` as a look-up index to the 'liveSchedule' array.

11. A separate Sign Up page was created to enable a user to register. A user would be able to register by providing Name, Email and create a Password. An input form was created and the relevant `type` attribute was added to each input.

12. Each of the input elements have validation in the register script using `document.addEventListener("input", validation function)`. The Name and Password input boxes have a minimum character requirement. The email has a Regular Expression validation check, with the expression assigned to a variable called `emailFormat`. This expression checks the user has entered appropriate characters, the "@" symbol, more appropriate characters, a dot, and a short word that represents "com" or "org" etc. These validation checks are responsive as the user enters information, such as "min 12 characters" for the Password; this means the user can see the validation requirements as they enter their information.

13. The user can click the Sign up button which has a "click" event listener, which will invoke the `signUp` function. The `signUp` function is doing a number of things as detailed below:

    a. First, an `if` statement is used to check for valid inputs as explained above. This includes the email validation passing the `emailFormat` into a `match()` function which compares with the user's input. If false, the statement throws an `alert` message: "Please complete the form with valid details!".

    b. If the `if` statement above returns true then a `new User` class is created inside a `newUser` variable which receives the values of the Name, Email and Password user inputs. `newUser.registerConfirm()` method inside the `User` class is then invoked. The 'User' class is detailed below.

14. The `User` class contains a constructor with 3 properties `username`, `email` and `password`, and the `newUser.registerConfirm()` method. From the `signUp` function the Name, Email and Password are passed through the `new User` call and are stored into the constuctor as a new iteration of the User object. The `registerConfirm()` method enables the user to see the response of their registration details in the heading elements of the page, applying a welcome message which includes the user's name (`this.username`) and email (`this.email`). The messages read: "Welcome ${this.username}!" and "So glad you have registered ${this.email} with us! Now you can enjoy our TastyTV random recommendation on demand.".

15. The main deliverables of the brief have been met as detailed in the following:

    1.  Company info
        a. Met by implementing an About Us page that the user can navigate to. A couple of paragraphs show the company info

    2.  Stream programming for the next few days
        a. A schedule has been implemented that shows the up and coming programming

    3.  Regular announcements
        a. Announcements have been implemented in the main index page that show the programs coming soon

    4.  Recommendations
        a. The main index page shows a randomly recommended feature that the user is able to see

    5.  Registration
        a. The user is able to register via the register page, adding their user details and clicking the Sign up button. This will create a new iteration of the newUser object.

    6.  Social links
        a. All social links specified in the brief are available in the footer of each webpage.

    7.  Produce a README for the project
        a. This README covers the requirements of the brief

    8.  Present your work
        a. Presentation given on 07/08/2021

## Installation instructions

1. The website will be hosted with a URL and available to view through Git.

## Unsolved problems

The time elements (`setTimeout()`, `new Date()` and `getHours()`) within the website appear to be working at the time of project submission, however working with these elements has produced the most delay within the project. There have been noted issues of the film/TV schedule times showing "am" or "pm" incorrectly, as well as `setTimeout()` failing to invoke a function every minute. Investigating the code further revealed that the `times` variable was being created outside of the `findFeature()` function and therefore fixed at refresh of the page. Moving this variable initialisation to inside the `findFeature()` function enabled the variable to be declared each time the function loops. As stated, this appears to have fixed the known issues with time presentation, however in order to be 100% certain there are no known issues, a few more days would be needed to allow the website to run as each hour passes.

## Documentation assets

All images used are from royalty free stock image websites, and have been cropped and resized to form consistent sizing. The source of each image is available in the links below:

1. https://altphotos.com/photo/forest-in-the-mountains-3600/
2. https://altphotos.com/photo/be-quiet-shh-3578/
3. https://altphotos.com/photo/speedboat-adventure-3174/
4. https://altphotos.com/photo/volcano-eruption-mount-sinabung-indonesia-2437/
5. https://pixabay.com/illustrations/downton-abbey-night-fog-moon-star-5380907/
6. https://barnimages.com/chillon-castle-view-from-the-drone-to-lake-geneva-near-montreux/
7. https://pixabay.com/photos/kart-race-competition-race-drive-4297013/
8. https://pixabay.com/photos/girl-woman-pistol-gangster-4540270/
9. https://pixabay.com/photos/fear-nightmare-dreaming-woman-2826804/
10. https://search.creativecommons.org/photos/8ed690f7-0c4d-4626-af00-b3c7aa86d278
11. https://stocksnap.io/photo/nature-landscape-V0ZFMU8W3M
12. https://www.dreamstime.com/stock-photo-viking-woman-sword-traditional-warrior-clothes-posing-dark-background-image77478740#_
13. https://barnimages.com/cake-with-berries/
14. http://absfreepic.com/free-photos/download/gangsters-mystery-5472x3648_24249.html
15. http://absfreepic.com/free-photos/download/old-train-4272x2848_47181.html
16. http://absfreepic.com/free-photos/download/funny-picture-4961x3508_54910.html
17. https://barnimages.com/sound-engineers-desk/
18. https://barnimages.com/cannons-in-a-military-museum/

Validating email input and Regular Expression research on the Sign-up form is based on the w3resource page, found [here.](https://www.w3resource.com/javascript/form/email-validation.php)

## Any other useful information

All elements taught in class have been used or considered as part of this project. Elements used outside class are: `new Date()`, `getHours()`, `setTimeout()`, `map()`, `match()` and regular expression.

## Created By

Neal Lyons-Wake, for Skills Union Software Engineering course.
