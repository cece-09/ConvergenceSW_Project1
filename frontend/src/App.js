import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

// const refreshList = () => {
//   axios
//     .get("http://localhost:8000/api/texts")
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };

// const createItem = (item) => {
//   axios
//     .post("http://localhost:8000/api/texts", item)
//     .then((res) => refreshList());
// };

function App() {
  axios
    .get("http://localhost:8000/api/texts")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  return <div>Hello World</div>;
  // <div className="container">
  //   <form>
  //     <input type="text"></input>
  //     <textarea></textarea>
  //     <button onClick={createItem}>submit</button>
  //   </form>
  // </div>
}

export default App;
