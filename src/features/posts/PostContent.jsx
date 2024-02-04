function PostContent({ content, image }) {
  console.log(image);
  return (
    <>
      <div className="text-white md:text-xl">{content}</div>
      {image && <img src={image} className="w-full rounded-md" />}
    </>
  );
}

export default PostContent;
