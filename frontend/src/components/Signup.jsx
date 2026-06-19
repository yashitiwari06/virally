import { Link } from "react-router-dom";
import virally from "../assets/viral.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const [errMessage, setErrMessage] = useState("");

  const navigate = useNavigate();
  const handleSignup = async (userDetails) => {
    const response = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });
    if (response.ok) {
      setErrMessage("");
      navigate("/login");
    } else if (response.status == 409) {
      setErrMessage("User Already Exist");
    } else if (response.status == 400) {
      setErrMessage("password don't match");
    }
  };

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
          MAKE NOISE. GO VIRALLY 
        </p>

        <p className="text-lg text-white/80 leading-relaxed max-w-md">
          Join thousands of creators, storytellers, artists and trendsetters.
          Share your ideas, build your audience and make your next post go
          viral.
        </p>

        {/* Stats */}
        <div className="flex gap-10 mt-10">
          
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="bg-white/10 backdrop-blur-xl border-l border-white/20 p-10 flex items-center justify-center">

        <div className="w-full max-w-md">

          <h1 className="text-5xl font-extrabold text-white text-center mb-8">
            Sign Up
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
            type="email"
            id="email"
            placeholder="Email"
            className="w-full mb-4 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          <input
            type="password"
            id="password"
            placeholder="Password"
            className="w-full mb-4 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          <input
            type="password"
            id="confirmpassword"
            placeholder="Confirm Password"
            className="w-full mb-6 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          <button
            className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 hover:scale-105 transition-all duration-300"
            onClick={() => {
              const userDetails = {
                username: document.getElementById("username").value,
                email: document.getElementById("email").value,
                password: document.getElementById("password").value,
                confirmpassword:
                  document.getElementById("confirmpassword").value,
              };

              handleSignup(userDetails);
            }}
          >
            Create Account
          </button>

          <p className="text-center text-white/80 mt-5">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-pink-300 hover:text-pink-200 font-semibold"
            >
              Login
            </Link>
          </p>

        </div>
      </div>

    </div>
  </div>
);
}

export default Signup;
