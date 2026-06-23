import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet, useNavigate } from "react-router-dom";
import UserContext from "./uitils/UserContext";
import { useContext, useEffect, useState } from "react";
import useVerifyToken from "./uitils/useVerifyToken";

const App = () => {
  //const { token } = useContext(TokenContext);

  const navigate = useNavigate();
  const [verificationObject, setVerificationObject] = useState({});

  useEffect(() => {
    console.log("use effect called");
    const checkAuth = async () => {
      const obj = await verifyToken(); // Now obj will be the resolved data, not a promise
      // console.log(obj);
      
      if (!obj || !obj.verify) {
        navigate("/login");
      } else {
        setVerificationObject(obj);
      }
      console.log(obj);
    };

    checkAuth();
  }, []);

  async function verifyToken() {
    const obj = await useVerifyToken();
    return obj;
  }

  return (
    <>
      <UserContext.Provider value = {{obj : verificationObject, setObj: setVerificationObject}}>
        <div className="min-h-screen flex flex-col">
          <Header />

          <main className="flex-1">
            <Outlet />
          </main>

          <Footer />
        </div>
      </UserContext.Provider>
    </>
  );
};

export default App;
