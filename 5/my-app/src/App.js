import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserRegisterPage from "./pages/userRegisterPage/UserRegisterPage";
import UsersListPage from "./pages/usersListPage/UsersListPage";
import Menu from "./components/menu/menu";

function App() {
  return (
    <BrowserRouter className="App">
        <Menu/>
      <Routes>
        <Route index element={<UserRegisterPage/>}/>
          <Route path="/users" element={<UsersListPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
