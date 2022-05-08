import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import "./App.css"
import RegisterPage from "./pages/registerPage/RegisterPage";
import LoginPage from "./pages/loginPage/LoginPage";
import HomePage from "./pages/homePage/HomePage";
import PageNotFound from "./pages/pageNotFound/PageNotFound";

const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("LoggedInUser")));
  }, []);

  const updateUser = (user) => {
    localStorage.setItem("LoggedInUser", JSON.stringify(user));
    setUser(user);
  };

  return (
    <div>
      <Router>
        <Routes>
          {user && user.name ? (
            <>
              <Route
                path="/"
                element={<HomePage user={user} updateUser={updateUser} />}
              />
            </>
          ) : (
            <>
              <Route
                path="/"
                element={<LoginPage user={user} updateUser={updateUser} />}
              />
            </>
          )}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
