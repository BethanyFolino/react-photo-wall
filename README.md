# Assessment: Photo Wall

For this assessment, you'll be creating a photo wall:

<img src="https://s3.us-east-2.amazonaws.com/files.kenzie.academy/frontend-q2/photo_wall.gif" alt="example output" height="400px" />

Note that the above gif also demonstrates bonus features that are not part of the initial acceptance criteria.

In doing so, you'll be demonstrating a basic understanding of the following:

- Maintaining state in functional React components
- Making API calls from within a React component
- Correctly invoking a useEffect lifecycle method for asynchronous method call in a functional React component.
- Iterating over state to dynamically generate DOM elements

## Getting Started

Clone this repository. Before coding, you should ensure that this scaffold works by opening your html file in your internet browser.

## Acceptance Criteria

The acceptance criteria are all
laid out in App.js in comments. We've also reproduced them
below:

### Step 1: Declare state  

State should be set up with "useState" to include an array of photos and a method to "setPhotos", which will be iterated over later and displayed to the user in a grid.

### Step 2: Declare a useEffect life cycle method 

This life cycle method should:
- be called after the component is initially rendered
- fetch an array of photos
- add that array of photos to state once received


### Step 3: Ensure valid images are rendered 

The generated images should include:
- a photo's filename 
- a photo's id
- a photo's URL

Where "photo" is the current photo in the array of `photos` being iterated over.

### Step 4: Styling 

Modify App.css to include styling that accomplishes the following:

   - cause the header and .collage div to be centered on the page
   - ensure that no more than 4 photos appear in a row 

## Stretch Goals (Optional) 

If you find yourself with extra time (e.g., don't have other assessments to
catch up on), you may consider improving the quality in a number of ways:

- You may have noticed that in the gif, the header remains at the top of the page while
  photos are being scrolled. Add styles to accomplish this in your version.
- See if you can find a way to limit the number of photos that get appended to say, 10
- Having done the above, see if you can add a button that, when clicked, will
  append the next 10 photos (that is, increases the limit from 10 to 20, 30,
  40, etc). You'll need to look ahead to the documentation on event handlers
  and add another piece of state to your component in order to accomplish
  this.

## Submission

Once you finish the assessment please push your code to your "dev" branch for this repository then create a Pull Request on Github, and submit the link for your pull request.

## Credits and References
Author:

References:
