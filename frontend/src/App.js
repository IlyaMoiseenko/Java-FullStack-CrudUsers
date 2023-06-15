import NavBar from "./layout/NavBar";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";

function App() {
  return (
    <div className="App">
        <NavBar />

        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="addUser" element={<AddUser />} />
            <Route exact path="editUser" element={<EditUser />} />
            <Route exact path="viewUser" element={<ViewUser />} />
        </Routes>
    </div>
  );
}

export default App;
