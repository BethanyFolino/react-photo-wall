// This URL can be combined with a photo id to fetch a photo.
function getPhotoFromId(photoId) {
  return `https://picsum.photos/id/${photoId}/200/200`;
}
// This URL can be used to get an array of objects that contain information
// about various photos.
const PHOTO_LIST_URL = "https://picsum.photos/list";

const App = (props) => {
  // 1. Set up React.useState in order to create a variable that will be used to include an array of photos and a method to "setPhotos"

  // 2. Declare a React.useEffect life cycle method
  // This life cycle method:
  // - will be called after the component is initially rendered
  // - will fetch an array of photos
  // - will set that array of photos to state once received

  return (
    <React.Fragment>
      <header>
        <h1>Photo Wall</h1>
        <p>
          Read the README and complete the numbered steps. Afterward,
          delete this paragraph.
        </p>
      </header>
      <div className="collage">
        {/* We use map below because Array.prototype.map is an expression,
         and for loops are not. JSX will only be able to interperet Javascript expressions
         when being used inside of curly braces.
         */}
        {/* 
        {photos.map((photo) => (
          <img
            alt="3. Fill me in with the photo's filename"
            key="4. Fill me in with the photo's id"
            src="5. Fill me in with the photo's URL"
          />
        ))} 
        */}
      </div>
    </React.Fragment>
  );
};
