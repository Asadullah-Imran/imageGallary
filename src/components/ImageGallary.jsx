import "./ImageGallary.css";

function ImageGallery({ images }) {
  return (
    <div className="image-gallery">
      <h1>Image Gallery</h1>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className={`image ${index === 0 ? "large" : ""}`}>
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
