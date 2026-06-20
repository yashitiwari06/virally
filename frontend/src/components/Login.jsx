import { Link } from "react-router-dom";
import virally from "../assets/viral.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [errMessage, setErrMessage] = useState("");


  const navigate = useNavigate();
  const handleLogin = async(userDetails) => {
    const response = await fetch("http://localhost:3000/login",{
      method : 'POST',
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(userDetails),
      credentials: "include"
    });

    const data = await response.json();
    console.log(data);
    if(response.ok) {
      console.log("RESPONSE -> " + response.ok)
      setErrMessage("");
      navigate("/home");
    } else {
      setErrMessage(data.message);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-fuchsia-800 to-pink-700 flex items-center justify-center px-6">
      
      <div className="w-full max-w-6xl grid lg:grid-cols-2 overflow-hidden rounded-3xl shadow-2xl">

        {/* LEFT SIDE */}
        <div className="relative p-12 flex flex-col justify-center text-white">
          <img
            src={virally}
            alt="Virally Logo"
            className="w-40 mb-6"
          />

          <h1 className="text-7xl font-black mb-4">
            VIRALLY
          </h1>

          <p className="text-2xl font-semibold mb-6 text-white/90">
            Welcome back! 👋
          </p>

          <p className="text-lg text-white/80 leading-relaxed max-w-md">
            Log in to continue creating, connecting, and going viral with your
            community.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white/10 backdrop-blur-xl border-l border-white/20 p-10 flex items-center justify-center">
          <div className="w-full max-w-md">

            <h1 className="text-5xl font-extrabold text-white text-center mb-8">
              Login
            </h1>

            {errMessage && (
              <div className="mb-5 bg-red-500/20 border border-red-400/30 rounded-xl px-4 py-3 text-red-100">
                {errMessage}
              </div>
            )}

            <input
              type="text"
              id="username"
              placeholder="Username"
              className="w-full mb-4 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full mb-6 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            <button
              className="
                w-full py-3 rounded-xl
                font-bold text-white
                bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500
                hover:scale-105
                transition-all duration-300
              "
              onClick={() => {
                const userDetails = {
                  username : document.getElementById("username").value,
                  password : document.getElementById("password").value
                }
                handleLogin(userDetails);
              }}
            >
              Login
            </button>

            <p className="text-sm text-center mt-5 text-white/80">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-pink-300 hover:text-pink-200 font-semibold"
              >
                Signup
              </Link>
            </p>

          </div>
        </div>

      </div>

    </div>
  );
};

export default Login;