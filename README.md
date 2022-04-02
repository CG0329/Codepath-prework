# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Christian Garcia**

Time spent: **~5.5** hours spent in total

Link to project: (https://glitch.com/edit/#!/colormemorygame)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

![prework gif 1](https://user-images.githubusercontent.com/102681638/161360459-60caea57-e84d-4f5d-b5ba-35fcadaef912.gif)

![prework gif 2](https://user-images.githubusercontent.com/102681638/161360513-9760bd40-b333-400d-8bfd-6e652c7df438.gif)

![prework gif 3](https://user-images.githubusercontent.com/102681638/161360568-5994366e-4600-4d0f-8492-b4bd285c359e.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

These are the resources i used to help me complete this submission:

* [https://cssreference.io/](https://cssreference.io/)

This was just to figure out how to color the buttons and background.

* [https://javascript.plainenglish.io/how-to-generate-random-numbers-in-javascript-8bc3987896a7](https://javascript.plainenglish.io/how-to-generate-random-numbers-in-javascript-8bc3987896a7)

This was to figure out how to randomly generate a certain amount of numbers so I can have the buttons light up in a random order every time the game starts.

* [https://stackoverflow.com/questions/8126466/how-do-i-reset-the-setinterval-timer](https://stackoverflow.com/questions/8126466/how-do-i-reset-the-setinterval-timer)

* [https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown](https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown)

Both of these were to help me implement a timer for when you start a game.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

One of the bigger problems I ran into when creating this submission was creating the guess() function. It was definitely the most
time-consuming part of the required features of this game. The part that gave me trouble specifically was checking for all of the 
conditions that the provided diagram pointed out, and what to do/change when conditions are met. The diagram was a big help with figuring
this part of the code out, since I was having some trouble visualizing the logical order for certain functions to call/variables to 
increment. The thing that gave me the most trouble was most definitely trying to implement the timer. I first read up on the setInterval()
and clearInterval() functions, then created 3 functions; startTime() for starting a setInterval(), stopTime() that uses clearInterval(), and
I made timer(), which displays a timer, with some help from the internet. However, I had a lot of trouble figuring out where to put the
function with startInterval() and where to put the function with clearInterval(). It took me a bit of trial and error, but I eventually 
figured out that I put startTime() at the end of the startGame() function along with timer(), and I also put it in the guess() function in
the else statement that increments the progress variable. I also put stopTime() and timer() there as well. I found it particularly tricky
to figure this one out. Other than these two things, nothing necessarily stood out as challenging to me.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

After completing this project, I do have one question. The question I have is what else can be done with HTML/CSS/JS? When
reading the project task, it sounded very simple, however actually completing it proved to be fairly difficult. It would have been much
harder as well had it not been for the guide provided. I’m now curious about what other things that can be made/accomplished in web
development. This project has piqued my interest and I want to keep learning about web development and get better at it so I can find the
answer to my question, and I hope that I can accomplish this at the SITE Program during this upcoming summer.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had spent a few more hours on this project, there would definitely be some aspects I would change about it. For one, I would try
and improve upon the webpage design. It looks very basic to me, but I didn’t spend much time trying to neaten it up. Another detail I
would touch up on are the game buttons. All I did to them was change their color and pitch, but I would have loved to add some custom
designs and sounds to make the game feel more unique. I was mainly prioritizing the functionality of the game, however, and if I were to
have more time to work on it, I would undoubtedly overhaul the overall looks and design of the project.



## Interview Recording URL Link

[My 5-minute Interview Recording](https://onedrive.live.com/?authkey=%21AAH5H3ZRif0nL%2DU&cid=934B3A08845C15FB&id=934B3A08845C15FB%212476&parId=root&o=OneUp)


## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
