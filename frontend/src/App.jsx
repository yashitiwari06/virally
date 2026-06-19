import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet, useNavigate } from "react-router-dom";
import TokenContext from "./uitils/TokenContext";
import { useContext, useEffect } from "react";

const App = () => {
  const { token } = useContext(TokenContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (token.token) {
      navigate("/");
    } else {
      navigate("/signup");
    }
  }, [token]);

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default App;
