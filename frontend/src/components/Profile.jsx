import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

import pfp from "../assets/pfp.jpg";
import PostCard from "./PostCard";
const Profile = () => {
  return (
    <div className="border border-black rounded-2xl p-2.5 m-10 mx-50">
      <div className="flex flex-col">
        <div className="flex gap-36">
          <div className="flex items-center gap-2">
            <img src={pfp} alt="pfp" className="h-30 w-30"></img>
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl">Dummy Name</h1>
              <div className="flex gap-2 items-center">
                <h1 className="">Living my non-chalant life</h1>
                <button className="hover: cursor-pointer">
                  <FontAwesomeIcon icon={faPenToSquare} />
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-16">
            <div className="flex flex-col justify-center items-center font-bold">
              <h1>
                <Link>Posts</Link>
              </h1>
              <h1>0</h1>
            </div>
            <div className="flex flex-col justify-center items-center font-bold">
              <h1>
                <Link>Followers</Link>
              </h1>
              <h1>0</h1>
            </div>
            <div className="flex flex-col justify-center items-center font-bold">
              <h1>
                <Link>Following</Link>
              </h1>
              <h1>0</h1>
            </div>
          </div>
        </div>

        <div>
          <h1 className="font-extrabold text-center">MY POSTS</h1>
        </div>
        <div className="">
          <PostCard />
        </div>
      </div>
    </div>
  );
};

export default Profile;
