import Form from "./Components/Form/Form";
import WatchList from "./Components/WatchList/WatchList";

function App() {
  return (
    <>
      <div className="container w-50">
        <div className="form-container">
          <Form/>
          <WatchList/>
        </div>
      </div>
    </>
  );
}

export default App;
