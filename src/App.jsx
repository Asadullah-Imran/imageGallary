import "./App.css";
import ImageGallery from "./components/ImageGallary.jsx";

function App() {
  const images = [
    "../public/image-1.webp",
    "../public/image-2.webp",
    "../public/image-3.webp",
    "../public/image-4.webp",
    "../public/image-5.webp",
    "../public/image-6.webp",
    "../public/image-7.webp",
    "../public/image-8.webp",
    "../public/image-9.webp",
    "../public/image-1.webp",
    "../public/image-2.webp",
    "../public/image-3.webp",
    "../public/image-4.webp",
    "../public/image-5.webp",
    "../public/image-6.webp",
    "../public/image-7.webp",
    "../public/image-6.webp",

    // Add more image paths as needed
  ];
  return (
    <div className="App">
      <ImageGallery images={images} />
    </div>
  );
}

export default App;
