import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import { FooterCom } from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { signoutSuccess } from "./redux/user/userSlice";

if (sessionStorage.getItem("isInit") === null) {
  sessionStorage.setItem("isInit", "false");
}

export default function App() {
  //deslogeo solo 1 vez al iniciar la app
  const dispatch = useDispatch();
  useEffect(() => {
    if (sessionStorage.getItem("isInit") === "false") {
      dispatch(signoutSuccess());
      sessionStorage.setItem("isInit", true);
      console.log("reinicio");
    }
  }, []);

  return (
    <BrowserRouter>
      <Header /> {/* lo incluyo en todas las secciones */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />}></Route>{" "}
          {/* ruta privada solo para usuario registrado */}
        </Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
      <FooterCom />
    </BrowserRouter>
  );
}
