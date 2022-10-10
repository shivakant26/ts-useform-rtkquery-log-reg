import "./App.css";
import { Home } from "./Component/Home";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { PageNotFound } from "./Component/404";
import { SignUp } from "./Component/singUp";
import { Header } from "./Common/header";
import { Dashboard } from "./Component/dashboard";
import { useEffect } from "react";
import { ShowPost } from "./Component/showPost";
import { AddPost } from "./Component/addPost";


function App() {
  const Token = localStorage.getItem("Token") ? localStorage.getItem("Token") : false;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  // console.log(123123123,pathname)

  useEffect(()=>{
    if(Token && pathname === '/'){
      navigate('/dashboard');
    }
  },[Token])
  return (
    <div className="App">
      {/* <Router> */}
      <Header />
      <Routes>
        {Token ? (
          <> 
              <Route path="/dashboard/" element={<Dashboard />}>
                <Route path="showpost" element={<ShowPost />}/>
                <Route path="addpost" element={<AddPost />}/>
              </Route>
              <Route path="*" element={<PageNotFound />} />
          </>
        ) : (
        <>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="*" element={<PageNotFound />} />
          </>
        )}
            </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
