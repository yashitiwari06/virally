import pfp from "../assets/pfp.jpg";
import post from "../assets/post.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";

const PostCard = () => {
  return (
    <>
      {Array.from({ length: 5 }).map((_,index) => (
        <div className="flex flex-col items-center p-1.5">
          <div className="border border-e-black rounded-2xl w-96 ">
            
            <div className="flex gap-1 p-1 mx-2 items-center">
              <img
                className="h-8 w-8 border border-black rounded-full"
                src={pfp}
                alt="pfp"
              ></img>
              <div className="flex flex-col">
                <h1 className="text-xs">Dummy Name</h1>
                <h1 className="text-xs" >13-06-2026 | 12:20 PM</h1>
            </div>
            </div>
            
            <div className="flex justify-center items-center mx-2">
              <img src={post} alt="post" className=""></img>
            </div>
            <div className="mx-2 pt-2 flex gap-1">
              <FontAwesomeIcon className="text-xl" icon={faHeart} />
              <FontAwesomeIcon className="text-xl" icon={faComment} />
            </div>
            <div>
              <div className="text-lg p-1 mx-2">Caption : this is a post</div>
            </div>
          </div>
        </div>
      ))}
      ;
    </>
  );
};

export default PostCard;
