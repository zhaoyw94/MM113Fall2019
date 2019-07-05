console.log(tweets)
const tweet1 = () => {
    //console.log(tweets.statuses[0])
    document.querySelector('#tweet3.message').innerHTML = tweets.statuses[0].text
    document.querySelector('#tweet3.username').innerHTML = tweets.statuses[0].user.screen_name
    document.querySelector('#tweet3.date').innerHTML = tweets.statuses[0].created_at
}

const tweet2 = () => {
    //TODO: output the contents of the second tweet below the first one:

    document.querySelector('#tweet2 .message').innerHTML = tweets.statuses[1].text
    document.querySelector('#tweet2 .username').innerHTML = tweets.statuses[2].user.screen_name
    document.querySelector('#tweet2 .date').innerHTML = tweets.statuses[2].created_at

}

const tweet3 = () => {
    //TODO: output the contents of the third tweet below the second one:
}

const showAll = () => {
    //https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

    // tweet 1:
    var newDiv = document.createElement('div')
    var newContent = document.createTextNode(tweets.statuses[0].text)

    newDiv.appendChild(newContent) //add the text node to the newly created div.
    document.getElementById('all').appendChild(newDiv)

    // tweet 2:
    newDiv = document.createElement('div')
    newContent = document.createTextNode(tweets.statuses[1].text)
    newDiv.appendChild(newContent) //add the text node to the newly created div.
    document.getElementById('all').appendChild(newDiv)


    var arrayLength = tweets.statuses.length;
    console.log(arrayLength)
    for (var i = 0; i < arrayLength; i++) {
      //creates the div container variable
      newDiv = document.createElement('div')
      //div container variable with class
      newDiv.className = "twitterClass"
      //TextNode objects contain only text content without any HTML or XML markup.
      newContent = document.createTextNode(tweets.statuses[i].text)
      //this is for the user object in the statuses array
      var wrapper = document.createElement('div');
      wrapper.className = "UserClass"
      var newUser = document.createTextNode(tweets.statuses[i].user.screen_name)

      wrapper.appendChild(newUser)
      newDiv.appendChild(newContent)

      newDiv.innerHTML =  wrapper.outerHTML +  newDiv.outerHTML
      document.getElementById('all').appendChild(newDiv)

}

    //.....
}
