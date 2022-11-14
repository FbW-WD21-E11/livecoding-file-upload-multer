import "./App.css";

function App() {
  const handleSubmitEvent = () => {};

  return (
    <div className="App">
      <form onSubmit={handleSubmitEvent}>
        <label>
          Select image for upload
          <input type="file" accept="image/*" />
        </label>
        <button type="submit">Upload files</button>
      </form>
    </div>
  );
}

export default App;
