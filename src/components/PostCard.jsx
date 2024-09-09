import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-4">
      {post?.imgLink ? (
        <img className="w-full" src={post.imgLink} alt={post?.title || "Post image"} />
      ) : (
        <div
          className="w-full bg-gray-200 flex items-center justify-center"
          style={{ height: "200px" }}
        >
          <span className="text-gray-500">No Image Available</span>
        </div>
      )}

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{post?.title || "Untitled Post"}</div>
        <p className="text-gray-600 text-sm mb-4">{post?.date || "Unknown Date"}</p>
        <p className="text-gray-700 text-base">{post?.description || "No description available."}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link to={`/blog/${post?.id}`} className="text-orange-600 hover:underline">
          Read More &raquo;
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
