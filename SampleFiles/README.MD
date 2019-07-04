# Homework 4: Github, Atom and the DOM
> * Due date: ...
> * To submit: See assignment explanation


## PART I: SETUP & REVIEW

### 1. Clone the homework from GitHub
Open the Terminal:
```
$ git clone https://github.com/vanwars/mmart-168-fall2017.git
$ cd mmart-168-fall2017/hw03 #navigate to your hw03 directory
$ ls #list the files
$ open index.html #will open index.html in your default browser
```

### 2. Open the homework directory in Atom
Open Atom, then go to `File > Add Project Folder` and find the homework directory, which should be named `mmart-168-fall2017`. Click the homework directory and then click `Open` in the bottom right.

**Important:** We need to fix part of our atom configuration. If you've installed `jshint` and `linter-jshint`, go ahead and uninstall those packages, and then install `linter-eslint`. This will make it easier to keep our code clean. (:

_Note: You're feeling really fancy, you can use the command line. Use the command `atom hw03` and it'll open the homework directory as a project folder!_

### 3. If you would like, review information on DOM selectors at the following URLS:

[document.getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

[document.querySelectory](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)


## PART II: MAKE CHANGES TO MAIN.JS
### 1. Modifying InnerHTML
Update the ***modifyText*** function so that it:
* Changes the text of message2 to be the message of the StarTrekTweet object
* Changes the text of link2 to be the name from the StarTrekTweet object
* Changes the text of user2 to be the handle from the StarTrekTweet object



### 2. Modifying Attributes: Part I
Update the ***changeLinkAndImageAttributes*** function so that it:
* Sets the href attribute for link1 to point to the first element in the links array
* Sets the href attribute for link2 to point to the second element in the links array
* Sets the src attribute for the Ohlone image to point to the third element in the links array


### 3. Modifying Attributes: Part II
Update the ***changeClassAttribute*** function so that it replaces the “tweet” class with the “tweet-pink” class for the two tweets.

### 4. Appending Elements
Update the appendElements function so that it adds the following elements to the bottom of tweet1:
* An "a" element (a link) that links to the ohlone college website (http://www.ohlone.edu) and has a link text that say "Intro to JavaScript."
* An "img" element (an image) that points to an image of your choice, symbolizing something about the course.

### 5. EXTRA CREDIT 1 (Recommended if you have time): Manipulating the DOM Using Data
To try a slightly more complicated example, open using_data.html and the tweet-data.js files, and:

* Complete the tweet2() function, using tweet1() as a model
* Complete the tweet3() function

### 6. EXTRA CREDIT 2: Adding Details & Adding Loops

* Add more HTML and JavaScript to output more Tweet details
* Make a loop to output all of the Tweets (if you are familiar w/loops)

## PART III: SUBMIT
You may submit the homework in one of two ways:

### 1. Using GitHub (extra credit):
* Commit your updated files to your local repo
* Push your local commit to a remote repository that you create
* Paste a link to your updated files on GitHub in the Moodle

\- OR -

### 2. Through Moodle
Zip all of your files and upload to the Moodle
