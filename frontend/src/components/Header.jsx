import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Virally from "../assets/viral.png";
import UserContext from "../uitils/UserContext";
import defaultUser from "../assets/user.jpg";
import axios from "axios";

const Section = () => {

  const { setObj } = useContext(UserContext);

  const handleLogout = async () => {
    const res = await axios.get("http://localhost:3000/deleteCookie");
    console.log(res);
    setObj({
      "verify" : false,
      "message" : "you are logged out"
    });

    
  }

  return (
    <div className="absolute top-full right-0 mt-2 w-40 bg-white border border-slate-200 rounded-lg shadow-lg z-50">
      <button className="w-full font-semibold text-sm text-slate-900 text-left px-4 py-3 hover:bg-slate-100 text-blue-300font-medium">
        <Link to = "/profile">Profile</Link>
      </button>

      <button className="w-full font-semibold text-left px-4 py-3 hover:bg-slate-100 text-sm text-red-500"
        onClick={() => {
          handleLogout();
        }}
      >
        Logout {" →]"}
      </button>
    </div>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [verificationObject, setVerificationObject] = useState({});
  const [buttonClose, setButtonClose] = useState(true);

  const handleUserButton = () => {
    buttonClose ? setButtonClose(false) : setButtonClose(true);
  };

  const { obj } = useContext(UserContext);
  useEffect(() => {
    setVerificationObject(obj);
  }, [obj]);

  return (
    <nav
      className="sticky top-0 flex py-2 px-4 md:px-8 bg-white border-b border-slate-300 min-h-[68px] z-50"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 w-full">
        <a href="/" className="cursor-pointer">
          <img src={Virally} alt="readymadeui logo" className="h-20 w-auto" />
        </a>

        {/* Menu items */}
        {verificationObject.verify ? (
          <div
            id="collapseMenu"
            className={`${
              isOpen ? "block" : "hidden"
            } lg:block max-lg:bg-white max-lg:border-l max-lg:border-slate-300 max-lg:w-1/2 max-lg:fixed max-lg:top-0 max-lg:right-0 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto max-sm:w-full z-50 outline-none`}
          >
            <div className="py-2 px-4 flex justify-between items-center border-b border-slate-300 sticky top-0 bg-white lg:hidden max-lg:min-h-[68px]">
              <a
                to="#"
                className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              >
                <span className="sr-only">Your Company</span>
                {/* <img
                src="https://readymadeui.com/logo-alt.svg"
                alt="readymadeui logo dialog"
                className="h-9 w-auto"
              /> */}
              </a>
              <button
                type="button"
                aria-controls="collapseMenu"
                id="toggleClose"
                className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <span className="sr-only">Close main menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 fill-slate-900"
                  aria-hidden="true"
                  viewBox="0 0 329.269 329"
                >
                  <path
                    d="M194.8 164.77 323.013 36.555c8.343-8.34 8.343-21.825 0-30.164-8.34-8.34-21.825-8.34-30.164 0L164.633 134.605 36.422 6.391c-8.344-8.34-21.824-8.34-30.164 0-8.344 8.34-8.344 21.824 0 30.164l128.21 128.215L6.259 292.984c-8.344 8.34-8.344 21.825 0 30.164a21.27 21.27 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25l128.21-128.214 128.216 128.214a21.27 21.27 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25 8.343-8.34 8.343-21.824 0-30.164zm0 0"
                    data-original="#000000"
                  />
                </svg>
              </button>
            </div>

            <ul className="flex flex-col gap-8 font-semibold text-sm text-slate-900 lg:flex-row max-lg:p-6">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/chat"
                  className="hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  Chat
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        ) : null}

        {/* Login, Signup, MenuCollapse Button */}
        <div className="flex items-center gap-5">
          {verificationObject.verify ? (
            <div className="relative">
              <button
                className="flex items-center gap-2 cursor-pointer"
                onClick={handleUserButton}
              >
                <img
                  src={defaultUser}
                  alt="userimg"
                  className="h-10 w-10 rounded-full"
                />

                <span className="font-semibold text-sm">
                  {verificationObject.username}
                </span>

                <span>{buttonClose ? "▾" : "▴"}</span>
              </button>

              {!buttonClose && <Section />}
            </div>
          ) : (
            <div>
              <Link
                to="/login"
                className="text-slate-900 p-2.5 text-sm font-semibold hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer text-white border border-[#007ee2] bg-[#007ee2] hover:bg-[#006cc2] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007ee2]"
              >
                Sign up
              </Link>
            </div>
          )}

          {verificationObject.verify ? (
            <button
              type="button"
              aria-controls="collapseMenu"
              aria-expanded="false"
              aria-haspopup="true"
              id="toggleOpen"
              className="cursor-pointer lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="size-7 fill-slate-900"
                aria-hidden="true"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
              </svg>
            </button>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Header;
