# deskbook

##To Run
1. Run npm install
2. Run webpack --watch
3. Run npm start
4. Visit http://localhost:3000 in your browser.

## Using the App and Technologies Used
When you first visit the app in your browser, you'll see a series of default slider images taht you can navigate through.
If you click on the search bar, you'll see a list of available locations appear in a drop down menu. As you type your desired location, you'll see that the drop down menu is filtered to render only locations that match your text. At any time, you can click on a location and that location will be rendered in the Search Bar. Once your location is entered into the search bar, you can click on the Search Icon and an API call will be made to the local server to request the data for your entered location (at this time we only have data for Amsterdam).
Once the data is received from the server, the available work locations in your target city are rendered as boxes below the slider. (At this time, only a maximum of for locations are rendered for any city.) If there are no results for your city, you will see a message ('No Search Results Found') At any time, you can click on any work location and the slider will automatically slide to the image that matches the work location you've clicked.


This app was built using React, Vanilla JS, CSS3, HTML5, Node, and Express.

## Features

#Search Bar
The Search comes with several functionalities.
Once you 'focus' in the search bar, you'll see a list of available locations appear under the Search Bar. As you type out your desired location, your input text is matched against available locations and the locations list is filtered. Only the locations that match your text are rendered below the search bar.
At any time, you can click on a location in the drop down box and that location text will be rendered in the Search Bar.
If at any time, you navigate your mouse from the Search Bar section, the Search Bar will be reset as you move to another part of the page.

#Slider
The Slider is fully responsive and consists of a series of images with a next and previous arrow. You'll see, as you begin the slide deck, the previous arrow does not render. Similarly, as you end the slide deck, the arrow also does not re-render.

#Results Entries
You can click on any of the results entries at the bottom and the slider will automagically slide to the image matching that result entry location.

#Overall App Functionalities
Through a combination of media queries and other responsive design techniques, the app is not just adaptive but fully responsive. You can drag any corner of the screen and see the app adjust automatically. Moreover, the app persists state; you can refresh at any time and the app will re-render with your previous state.

