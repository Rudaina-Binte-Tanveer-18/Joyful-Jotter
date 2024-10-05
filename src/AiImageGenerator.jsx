// Importing necessary libraries and modules
import React, { useState, useEffect } from "react"; // React library and specific hooks
import axios from "axios"; // Axios for API requests

// Defining a functional component called AiImageGenerator
const AiImageGenerator = () => {
  // Defining state variables
  const [text, setText] = useState(""); // State for storing the input text
  const [images, setImages] = useState([]); // State for storing the generated images
  const [loading, setLoading] = useState(false); // State for loading status
  const [currentIndex, setCurrentIndex] = useState(0); // State for tracking the current index of images to display
  const [buttonText, setButtonText] = useState("Random Image Generate"); // State for button text

  // useEffect hook to update button text based on input text
  useEffect(() => {
    setButtonText(text ? "Generate Image" : "Random Image Generate");
  }, [text]);

  // Function to generate images based on the input text using the new API
  const generateImage = async () => {
    setLoading(true); // Set loading to true when the function starts

    const options = {
      method: "POST",
      url: "https://open-ai21.p.rapidapi.com/texttoimage2",
      headers: {
        "x-rapidapi-key": "9a097b83d4mshb03d8ff461e8ac7p14567cjsn7529a29f3416",
        "x-rapidapi-host": "open-ai21.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      data: {
        text: text || "dog", // Use the input text or a default 'dog' if no text is provided
      },
    };

    try {
      const response = await axios.request(options);

      // Log the full API response to inspect it
      console.log("Full API Response:", response.data);

      // Handling the response based on its structure
      const imageUrl = response.data.generated_image; // Adjusted to match the field in your response

      if (imageUrl) {
        // If the API returns a valid URL, use it directly
        setImages([imageUrl, ...images]);
      } else {
        console.error("No valid image data returned from the API");
      }

      setCurrentIndex(0); // Reset the current index
    } catch (error) {
      console.error("Error generating image:", error); // Log any errors
    } finally {
      setLoading(false); // Set loading to false when the function ends
    }
  };

  // Function to load more images
  const loadMoreImages = () => {
    setCurrentIndex(currentIndex + 4); // Increase the current index by 4
  };

  // JSX for rendering the component
  return (
    <div className="container mx-auto p-6 bg-pink-100 rounded-lg shadow-md">
      <h1
        className="text-4xl font-bold text-center mb-6 text-blue-300"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        🌸 Text to Image Generator 🌸
      </h1>
      <div className="flex flex-col items-center">
        <textarea
          className="w-full md:w-3/4 p-3 border border-pink-300 rounded-lg mb-4 outline-none focus:ring-2 focus:ring-fuchsia-200"
          rows="3"
          placeholder="Enter text to generate your cute image..."
          value={text} // Bind the textarea value to the text state
          onChange={(e) => setText(e.target.value)} // Update text state on change
        ></textarea>
        <button
          className="bg-gradient-to-r from-pink-300 to-blue-300 hover:bg-gradient-to-br text-white font-semibold rounded-lg text-lg px-6 py-3 shadow-lg transition-transform transform hover:scale-105"
          style={{ fontFamily: "Poppins, sans-serif" }}
          onClick={generateImage} // Call generateImage function on click
          disabled={loading} // Disable button if loading is true
        >
          {loading ? "Generating..." : buttonText} {/* Conditional button text */}
        </button>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.length === 0 && !loading && (
            <p className="text-gray-500">No images generated yet. Enter text and generate one!</p>
          )}
          {images.slice(0, currentIndex + 4).map(
            (
              image,
              index // Map over images to display them
            ) => (
              <img
                key={index}
                src={image}
                alt={'Generated ${index}'}
                className="max-w-full rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
            )
          )}
        </div>
        {currentIndex + 4 < images.length && ( // Show 'Generate More' button if there are more images to display
          <button
            className="bg-gradient-to-r from-pink-300 to-blue-300 hover:bg-gradient-to-br text-white font-semibold rounded-lg text-lg px-6 py-3 shadow-lg transition-transform transform hover:scale-105 mt-6"
            onClick={loadMoreImages} // Call loadMoreImages function on click
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

// Export the AiImageGenerator component as default
export default AiImageGenerator;