const StarTrekTweet = {
    name: 'Star Trek',
    handle: '@StarTrek',
    text: 'Welcome to the OFFICIAL Star Trek Twitter Page!'
}

const links = ['https://twitter.com/StarTrek', 'https://twitter.com/StarTrek', 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/26/1530003551-star-trek.jpg']

function modifyText(){
  //Change the text of message2 to be the message of the StarTrekTweet object
  //Change the text of user2 to be the handle from the StarTrekTweet object
  //Changes the text of message 2 class to be the handle from the StarTrekTweet object
  document.querySelector('#message2').innerHTML = StarTrekTweet.name
  document.getElementById('user2').innerHTML = StarTrekTweet.handle
  document.getElementById('message2').innerHTML = StarTrekTweet.text
  //console.log('modifying text')
  // YOUR CODE BELOW THIS LINE.
}

const changeLinkAndImageAttributes = () => {
  //Set the href attribute for link1 to point to the first element in the links array
  //Sets the href attribute for link2 to point to the second element in the links array
  //Sets the src attribute for the Ohlone image to point to the third element in the links array
  document.querySelector('#link1').href = links[0];
  document.querySelector('#link2').href = links[1];
  document.querySelector('#Ohlone').src = links[2];
}

const changeClassAttribute = () => {
  //Update the changeClassAttribute
  //function so that it replaces the “tweet” class with the “tweet-pink” class for the two tweets.
  // change id="tweet1" class="tweet" to id="tweet1" class="tweet-pink"
  // YOUR CODE BELOW THIS LINE
  document.querySelector('#tweet1').className = 'tweet-pink'
  //  document.getElementById('tweet1').className = 'tweet-pink'
}

const appendElements = () => {
  //A. An "a" element (a link) to the bottom of tweet1 that links to Ohlone College
  //(http://www.ohlone.edu) and has a link text that say "Intro to JavaScript."
  //B. An "img" element (an image) to the bottom of tweet1 that
  //points to an image of your choice,symbolizing something about the course.
  //id="tweet1"
  const NewLink = document.createElement('a')
  NewLink.href = "http://www.ohlone.edu"
  NewLink.appendChild(document.createTextNode("intro to JavaScript"))
  document.getElementById('tweet1').appendChild(NewLink)
    //const g = document.createElement('div');
    //g.setAttribute("id", "comment");

  // YOUR CODE BELOW THIS LINE

}
