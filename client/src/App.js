import axios from "axios";
import "./App.css";

function App() {
  const handleSubmitEvent = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const response = await axios.post(
      "http://localhost:3001/upload/singleImage",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
  };

  const handleImagesUpload = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const response = await axios.post(
      "http://localhost:3001/upload/multipleImages",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
  };

  return (
    <div className="App">
      <img src="http://localhost:3001/images/1dd22376c13f3a9eb836f5aa25901f49" />
      <form onSubmit={handleSubmitEvent}>
        <label>
          Enter username
          <input type="text" name="username" />
        </label>
        <label>
          Enter birthday
          <input type="date" name="birthday" />
        </label>
        <label>
          Select image for upload
          <input type="file" accept="image/*" name="image" />
        </label>
        <button type="submit">Submit form</button>
      </form>

      <form onSubmit={handleImagesUpload}>
        <label>
          Select images for upload
          <input type="file" multiple accept="image/*" name="images" />
        </label>
        <button type="submit">Submit form</button>
      </form>
    </div>
  );
}

export default App;
