import { useState } from "react";

import PostImage from "./PostImage";

function PostContent({ content, image }) {
  const [fullText, setFullText] = useState(false);

  function handleClick() {
    setFullText(!fullText);
  }
  return (
    <>
      <div className="text-white md:text-xl">
        {fullText ? content : `${content.slice(0, 100)}`}
        {content.length > 100 && (
          <button
            className="ml-1 cursor-pointer text-green-400 transition duration-300 hover:text-green-300 hover:underline"
            onClick={handleClick}
          >
            {fullText ? "Show less" : "Show more"}
          </button>
        )}
      </div>
      {image && <PostImage image={image} />}
    </>
  );
}

export default PostContent;
