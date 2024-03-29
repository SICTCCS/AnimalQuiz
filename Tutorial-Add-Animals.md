# Animal Quiz Game

## How to add more Animals
This quiz was made using scratch. All of the core mechanics of the game are all built out and ready to be copy and pasted to the other animals.


## Step 1: Joining Scrach <br>
---
- Go to <a href="https://scratch.mit.edu">Scratch.com</a>
- Click "Join Scratch" and create an account or log in with an existing account.
- Then, click this link to go to the [Scratch Project](https://scratch.mit.edu/projects/885605066)
- Click the "See inside button" on the project page.<br>
![ ](ImagesforMarkdown/seeinside.png)
- If you are signed into your account, there should be a remix button on the top of the page, click that to make a copy. You may also be able to find the remix button on the project page.<br>
![ ](ImagesforMarkdown/remix.png)
- Congratulations! You made a copy of the project and are ready to start making your animal.

  
## Step 2: Setting up the Project <br>
---
- Open the remix file under the "My Stuff" section in your account.
- Rename the file by replacing "cow" with your new animal.
- Now that you are inside the file, look to the right side of the screen where it says "sprites"
- There are going to be many sprites, but the main sprite you are going to be messing with is called "Question"
- The "Question" sprite contains about 90% of the code for the game. <br>
![ ](ImagesforMarkdown/mainpage.png)

- If you are on this page, you are caught up
- Look to the right bottom corner, there will be an button with a image icon, hover over it and click (the upload file option) and change the backdrop to the image of the animal you want (use the animal images provided). <br>
![ ](ImagesforMarkdown/uploadimage.PNG) <br>
  <a href="ImagesforMarkdown/goat.PNG" download>Goat Background Download</a> | <a href="ImagesforMarkdown/sheep.PNG" download>Sheep Background Download</a> | <a href="ImagesforMarkdown/pig.PNG" download>Pig Background Download</a> | <a href="ImagesforMarkdown/Horse.png" download>Horse Background Download</a> | <a href="ImagesforMarkdown/dog.png" download>Dog Background Download</a> | <a href="ImagesforMarkdown/cat.png" download>Cat Background Download</a>

- Make sure to transform the animal image to a reasonable size. You will most likely have to make the image bigger, do this by using the select tool. Keeping in consideration we have to fit the buttons and question at the top.
- Load up the Google Slides provided. This will allow you to know where exactly to move the buttons to and what to name them. <br>
  [Animals (Google Slides)](https://docs.google.com/presentation/d/1W9TLpBbRJW16OxwPiJRk59h7bLMFIbT_2sgsnoBHBMQ/edit?usp=sharing)
- The buttons on the screen are draggable. Move them to the location of where your new animal's body parts are.<br>
![ ](ImagesforMarkdown/movebutton.png)
- If there are extras, delete the button sprite from the sprite list of blue dots on the bottom right screen.
- If you need more buttons, right click a sprite from the list and you should be given the option to duplicate it (click the sprite from the list and change the global costume picker variable to a new one not already taken by another sprite).
- Now, here is the time consuming part. You will need to go to the sprites list and change all the old names of the body part sprites to the new names of the animal parts of your new animal by going to the sprite list of blue buttons on the bottom right of the screen, clicking the sprite you want to change, then right below the game preview screen, its name should appear and by clicking on it, you will be able to rename it. You will not need to rename the question or asking sprites.
- You will also need to go into the code for each of the sprites and make sure that the globalpicker variable corresponds to the sprites location in the sprite list. For example, if you have 35 body part sprites, then in the first sprite's code, the globalpicker variable will have a value of 1. The second sprite will have a globalpicker value of 2, and so on until the last sprite has a globalpicker value of 35. This is important because it will correspond with the list of questions. Technically, the placement of the sprites in the sprite list does not matter; only the value of the globalpicker variable does. However organizing these sprites will make it easier when you are changing the question costumes.  
- Then, click on the "Question" sprite. To the left of your screen, there will be a costumes tab, click it on the tab on the top left.
- Change the text on each costume to the sprite names you chose, this will make the game ask the user the question of which sprite to click on. Clicking on the big text in the costume preview screen should give you the option to change the text. Do this with every costume you need to change. You should have the same amount of costumes as body part sprites. The names of the costumes do not matter, only the placement of each costume in the list indicated in the top left of every costume box. You may need to delete costumes if you have less than 35 body parts. If you need to add more costumes, duplicate the last one until you have enough.


## Step 3: Changing the Code <br>
---
- If you get confused with what the code does, I commented almost all of the code to tell you what it does. Before you change anything, I would recommend that you read my comments first.
- Most of this code does NOT need to be touched, the only code you need to mess with is code that uses the variables: Points, Global CostumePicker, and Random Number.
- Look at the amount of body part sprites you have, change "random number to pick a number between 1 and (the amount of sprites you have).<br>
  ![ ](ImagesforMarkdown/random.png)
- Change the variable "Points" to the amount of sprites you have.<br>
  ![ ](ImagesforMarkdown/points.png)
- This is an example of what one of the "points" blocks look like, there are a lot of these in the code so make sure to change all of them. However, these two blocks will need to be changed to your number of sprites minus 1.<br>
  ![ ](ImagesforMarkdown/otherpoints.png)
- The leaderboard blocks should not need to be touched.
- That should be it with the code you need to change, if you are still having issues, the code is labeled and should be easy to troubleshoot. If you are still having problems, ask Bander for help or he can ask me to help.
- This should be it for coding.


## Step 4: Updating the Website <br>
---
- The way that the vet students access this game is through a website we made (through an html file). The scratch projects are embedded into html through an iframe tag. If that sounds like a lot, don't worry, its just a lot of copying and pasting.
- Go to this github [Repo](https://github.com/SICTCCS/AnimalQuiz), this is where the website is being hosted.
- Click the green "Code" button then you should have the option to copy the HTTPS URL.
- Copy it and clone the repo in your desired path in command line. Then open the folder in an IED (VS Code, Replit, etc.)
![ ](ImagesforMarkdown/codeimg.png)

- These should be the files you are seeing.
- There should be a file for your animal, it may sound weird but the only updated files are the cow.html and index.html so for you animal, delete everything in that file.
- Go to cow.html and press (ctrl + a) and copy and paste it into your animal's file. This is the updated template.
- Now that you copied the code over to your file, you will see a "iframe" tag.
  ```
  <iframe src="https://scratch.mit.edu/projects/embed/885605066/" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
  ```
- Remove the link from inside the iframe, and replace it with the link from your new animal. (Tip: In your link, put the word "embed" after projects, your link will not work otherwise. Look at the image above for reference.)
- In each of the files, uncomment your animal's file name from the class "nav", this way it will show up on the navagation bar when you view the website.
  ```
  <li>
  <a href="YourAnimal.html">YourAnimal</a>
  </li>
  ```
- Open the index.html file in chrome to view the website.
![ ](ImagesforMarkdown/cow.png)
- This is what your animal's webpage should look like when its done.
- Thats all you need to do with the website code!
- Show your new html files to Mr. Bander and he will review it before you add them to the repo.
- If you have any questions, ask Bander or contact me through my [Website](https://andrewscheller2006.github.io/Portfolio/contact.html).
