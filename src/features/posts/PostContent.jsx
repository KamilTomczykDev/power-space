import { useState } from "react";

import PostImage from "./PostImage";
import EditPostForm from "./EditPostForm";

function PostContent({ content, image, isEditing, setIsEditing, postId }) {
  const [fullText, setFullText] = useState(false);

  function handleClick() {
    setFullText(!fullText);
  }
  return (
    <>
      {isEditing ? (
        <EditPostForm
          postId={postId}
          setIsEditing={setIsEditing}
          content={content}
        />
      ) : (
        <div className="text-white md:text-lg">
          {fullText ? content : `${content.slice(0, 100)}`}
          {content.length > 100 && (
            <button
              className="ml-1 cursor-pointer text-secondary-400 transition duration-300 hover:text-secondary-300 hover:underline"
              onClick={handleClick}
            >
              {fullText ? "Show less" : "Show more"}
            </button>
          )}
        </div>
      )}

      {image && <PostImage image={image} />}
    </>
  );
}

export default PostContent;
