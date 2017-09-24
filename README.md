# react
A reaction based, one to two player game

# Instructions

1. Click the "Start Game" button, select your player mode (at this time, two player mode isn't available). Close the dialog box when you are done. 

2. Next, click on the "Start Level" button, this will start your game. A series of squares will at one at a time display a color and a letter for at most just a few seconds. The goal of this game is to type in the letter on your keyboard in the *capitalized* position. So it would be better to use caps lock to play this game. To give a general outline of what is required per level:

* **Practice Level:** The practice level contains two changing squares where you have 3 seconds to type a matching letter displayed on them.

* **Level One:** Level One has 10 changing squares at 2 seconds per square.

* **Level Two:** Level two has 10 changing squares at 1 second per square.

* **Level Three:** Level three, which is the last level, has 8 changing squares at a little less then a second per square.

Note: Every time you want to advance a level after you have finished a level, press the "Start Level" button again. 



## Introduction and Concept of Game
This game originally was intended to be a *one* player game that would allow the person to test their reflexes and their judgement abilities. The gamer would be given a set of instructions, such as: "Only type the letters displayed in the RED squares". Following those instructions, a grid of squares would randomly change color and display letters, one by one. Each time a square would change it would only be for at most a few seconds. The higher level the shorter amount of time. If you typed a letter matching the letter on the right color of square, you would earn a point. Being able to find the letter on a matching square and also judge if whether you should press it, becomes a somewhat more challenging feat to accomplish, which is the basis of this game. As opposed to a lot of other games, this game does not have rules, so there isn't a lot of game logic in it, however, it does have logic in that it's a more intensive game to pay attention to. 

## Planning
Unfortunately, one of the biggest challenges that I encounterd when making my game was that I did not put sufficient time in planning it out. At first I set up the basics: HTML, some CSS to get everything shaped the way I want it and change some colors for me to distinguish between <div> tags a lot quicker. When I started to work on my logic, I realized there were also a few challenges. 

Firstly, because I came up with this idea of the game by myself, I didn't necessarily plan out the rules of the game, and didn't break down the conditions that needed to be met into getting a point. In addition to that, I also challenged myself to implement levels into the game which also (for someone who is still learning JavaScript) was challenging, so I had to figure out the logic for that.

What I ended up actually planning out was the layout of the game, and the basic idea of what I wanted it to do, by the time I started to go ahead and develop the game.

## In Development/Technical Details

### How I started the logic
Since I recently learned jQuery UI, I decided to plug one of their UI features, the dialog box, into my game. I intended to make this box an important feature of the game. Because I wanted to add a conditional of a correct square and also add a variable to each level, I wanted to communicate that with the person playing the game by having the dialog box pop up every time the player finished a level. I spent a lot of time trying to figure that out that I decided that it wasn't that necessarily important, but because I still wanted the dialog box to choose your player mode. I decided to go ahead and work off that part. By doing this I decided to program chronologically, working my way "through" what I wanted the game to do step by step. 

### Task One: Player Logic
To use the dialog box efficiently, The goal of being able to choose a player mode and assign that value to a variable before anything else would be the obvious thing to do. So I modified the default dialog box to also include a form that would achieve this very task. And by adding an event listener to the form submit button, that event listener would call a function that would then assign the values passed by the form into global variables. Why didn't I just use an anonymous function for the event listener? I thought it might be a better idea to have a seperate function because I thought there could be a chance that I would have to call it (like I mentioned I didn't really plan out the whole logic side of it). 

### Task Two: Levels Logic
I thought it would be a good idea to have a "levels" variable and create a function/switch, that depending on what levels is defined as, to reference a function that would assign a different set a variables that would define the parameters of a level and start the level. Once I created the switch, I created a "levelsDefined" function, and with that I decided include multiple other functions inside levelsDefined. So the way it would work is that once the switch is called by the playerMode function it takes the initial global variable "levels" assign it a new value that would prepare it for the next case in the switch. I also included a lot of additonals that would check for player mode (I'll get to that later). The basics would be onece it understands what the value of levels is, it would call a function within a function. I wanted a function called levelsDefined because I thought I could add in code that would repeat the levels if there was the need for a second player. It was a bit difficult to be able to reference a function within another function due to the fact that I didn't know how to do that, and so after looking it up, realized that I had to define the functions within the levelsDefined function as properties of that function. So then when I would want to start a level. I would have to call the levelsDefined function, and then the function within that. If you look at the script.js file and read the code for the levelUp function I also passed an argument to run the function within levelsDefined. For the first case "start" it was an argument of two. That is the number I want the actions in the level to repeat themselves.

### Task Three: Rounds within levels
To finish this task I needed to first implement what a round was, and to run that. In addition, depending on the level, to implement certain variables that could trigger a point in the game. I at first, like I mentioned earlier, had function specific to the level that would alter certain variables in the game differently (such as time), and then call another function that would start a string of functions to run. The first function in this string of functions was pickRandomColor(), with the argument correctColor passed on, 

#### pickRandomColor, pickRandomLetter, and pickRandomCard
Pretty self-explanatory, essentially one of the global variables I had was an array and within that array was a bunch of different strings that contained the values for certain colors in rgb(). It was through this array that I was able to select random colors. To do this, I first had to declare a variable called indexNum that is defined by a few different math functions that would pick a random integer that was between 0 and the length of the colors array. I then took that number and and attached that as the index value to the array and assigned that as a variable randomNum. So randomNum now represents the selected item in the array. I then create a new variable called randomColor and defined that as the actual value of the item in the array, which is the rgb value that I want to use to change the background color of the yet to be selected square. I then passed both the correctColor value and the the randomColor value onto the next function, which was pickRandom letter, and after that the next function was pickRandomCard. The logic for the color function is essentially the same for the rest of those functions, which was just grabbing random values from arrays. From that point on the next thing I needed to do to create a round was to create an instance where you could win, but I need to change a square first.

#### appender
The first thing I needed to do was grab the random square (which was just a div around other divs in a class that would form a grid) and access the properties of that square to apply the state of the changed square (where you can earn a point). I created a specific function called appender that would do just that. There, I grabbed the child of the randomCard value that I had, which was one of those divs, and then I grabbed the child of that div, which was a <p>. At that point I just inserted the value of the random letter I got and then the color as well. By doing that I was creating the instance where you could win. But, as with everything in javascript, you have to declare it, so I also created a variable called winPoint.

#### winPoint
winPoint was a function that just called two seperate functions at once. One setConditionalHanders and the other setTimeOut. These two functions create what defines how to what makes you get a point and for how long.

##### setConditionalHandlers
setConditional handers was simply a function that contained an event listener to check for keys pressed on the board. I could have made this a global event listener but I felt as if I would be able to control it more if I decided to include it as it's own function and call it. In the eventListener was an anonymous callback function that would first define the background color of the square, by taking the color of the square and naming it currentColor. As with everything in the appender function, all the same arguments were passed so when I was able to grab the value of the currentColor I was able to compare that with if it also matches the randomColor. I did this by creating a conditional. If the current color is the same as the random color it would mean that the color hasn't disappeared and the keystroke is still valid for a point. Also, I did the same with the letter, event.key being 
the given value and checked to see if matches the value for randomLetter. This was also one of the times where I realized a problem. 

**The Problem** in this function was that I realized I wasn't able control how many time the correctColor would appear, and by not being able to control it, it would be very hard to define how the player could win, and there's always the chance that the correct color would not appear (espcially with the practice round). Due to this and time constraints, I decided to not check for that as a conditional and instead base the game purely on reaction speed, I still left the variables in mainly due to the fact that if I did want to work on doing that later than it would be easier to just start off where I left off.

Withe the game so far, if the conditional passes (which is simply now the color and letter match),  a points function is called with the argument of one to add a point to the players score. If it doesn't the points function is still run, however instead the argument is 0. In the points function, I also made it so the points display and update live.

##### setTimeout
setTimeout was a function within the winPoint function that simply gave a delay, that delay being dependent on the time variable (which was established in the current level function). The time delay was simply delaying the call to execute another function called the appender. For instance, the practice level established the delay time as 3 seconds. So the square is displayed for 3 seconds and then the unappender function executes.

#### unappender
Unappender is the next step in finalizing the round and this simply takes the attributes of the selected square and undoes them back to the normal square color state without any letters displayed.

#### switcher
switcher is a function that is not currently being used at this point but it's intended use was to allow the two player mode to work. Due to time constaints I wasn't able to complete this functionality. I originally thought this this could be automatic and for the function to detect if two player mode was selected and if so to just reference the same function being executed, but that would be a bit difficult because I didn't have anything being defined as the current variable. 

In order to finsish this I would have to assign the current level as a variable and then use the button "Switcher" on the website to act as the trigger to cause the the level to play again, and then with that I would also have to check that that function has only been run once per round.

### Timing and repitition of rounds
So now that I could run once instance of a round, how could I run multiple per round? That was one of the more time consuming challenges due to the fact that I had to look it up.
If you look closely in the functions defining each level you see I assigned a setInterval function, this function would would cycle through the function and repeat it at the same rate as the the length the squares would display. Now I manually entered the numbers in at this point but in hindsight I could've used the time variable as well. 

In the levelUp function when I called any level function I also included an arugment that was a number, which is the number of rounds that are two be played. With that number passed on I was able to control the number of rounds to be played each time using the parameter that argument went in, which was keysNum. I also set a variable called i outside of the setInterval function. So every time a round would go, it would add one too i and if i matched the number of keysNum then it would clear the interval.

## Overall Review
This is definitely still a work in progress, and isnt' what I exactly want the game to be, but for what it is I'm still impressed an happy that I was able to put it together all by myself. I will continuet to add in more features like

* Adding more levels
* Possibly adding in that correctColor variable into the conditonial for a win if I can control the amount of times it displays while still being random
* Figuring out the two player mode
