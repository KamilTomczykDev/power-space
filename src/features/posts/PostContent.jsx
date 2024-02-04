import { useState } from "react";

function PostContent({ content, image }) {
  const [fullText, setFullText] = useState(false);
  console.log(image);
  function handleClick() {
    setFullText(!fullText);
  }
  return (
    <>
      <div className="text-white md:text-xl">
        {fullText ? content : `${content.slice(0, 100)}`}
        {content.length > 100 && (
          <button
            className="ml-1 cursor-pointer text-green-400"
            onClick={handleClick}
          >
            {fullText ? "Show less" : "Show more"}
          </button>
        )}
      </div>
      {image && <img src={image} className="w-full rounded-md" />}
    </>
  );
}

export default PostContent;
