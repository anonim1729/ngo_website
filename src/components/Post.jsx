import { useParams, Link } from "react-router-dom";
import posts from "../../data/posts.json";
import comments from "../../data/comments.json";

const Post = () => {
    const { id } = useParams();
    const currentPostId = parseInt(id, 10);
    const post = posts.find((p) => p.id === currentPostId);
    const coms = comments.filter((c) => c.postId === currentPostId); // Filter comments by postId

    const currentIndex = posts.findIndex((p) => p.id === currentPostId);
    const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
    const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

    if (!post) {
        return <div>Post not found.</div>;
    }

    return (
        <div>
            <div className="max-w-2xl mx-auto my-10 p-6 bg-white shadow-lg">
                {/* Post Details */}
                <h1 className="text-3xl font-semibold mb-2">{post.title}</h1>
                <div className="flex items-center space-x-2 text-gray-500 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>

                    <span>By <span className="hover:text-orange-500 cursor-pointer">{post.by}</span> / {post.date}</span>
                </div>
                {post.imgLink && <img src={post.imgLink} alt={post.title} className="mb-4" />}
                <div>
                    {post.text && post.text.map((section, index) => (
                        <div key={index} className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">{section.heading}</h2>
                            {section.paragraphs.map((paragraph, idx) => (
                                <p key={idx} className="text-lg text-gray-600 mb-4 leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Links */}
            <div className="flex justify-between max-w-2xl mx-auto my-10 p-6">
                {prevPost && (
                    <div className="flex flex-col">
                        <div className="flex items-center text-gray-500 hover:text-orange-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 mr-2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                            </svg>
                            <p>PREVIOUS</p>
                        </div>
                        <Link to={`/blog/${prevPost.id}`} className="text-gray-500 hover:text-orange-500">
                            &laquo; {prevPost.title}
                        </Link>
                    </div>
                )}

                {nextPost && (
                    <div className="flex flex-col items-end">
                        <div className="flex items-center text-gray-500 hover:text-orange-500">
                            <p>NEXT</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 ml-2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </div>
                        <Link to={`/blog/${nextPost.id}`} className="text-gray-500 hover:text-orange-500">
                            {nextPost.title} &raquo;
                        </Link>
                    </div>
                )}
            </div>

            {/* Comment Section */}
            <div className="max-w-2xl mx-auto my-10 p-6 bg-white shadow-lg">
                {/* Display Comments */}
                <h2 className="text-2xl font-semibold mb-4">{coms.length} {coms.length === 1 ? "thought" : "thoughts"} on "{post.title}"</h2>
                {coms.length > 0 ? (
                    coms.map((comment, index) => (
                        <div key={index} className="mb-6 flex items-start">
                            <img
                                src="https://www.gravatar.com/avatar?d=mp&s=64" // Placeholder for avatar
                                alt="avatar"
                                className="w-16 h-16 rounded-full mr-4"
                            />
                            <div>
                                <div className="flex items-center space-x-2">
                                    <span className="font-semibold text-red-600">{comment.by}</span>
                                    <span className="text-gray-500 text-sm">{comment.time}</span>
                                </div>
                                <p className="text-gray-600 mt-2">{comment.comment}</p>
                                <a href="#reply" className="text-orange-500 hover:text-orange-600 text-sm mt-2 block">Reply</a>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-600">No comments yet.</p>
                )}

                {/* Form Title */}
                <h2 className="text-2xl font-semibold mb-4 mt-8">Leave a Comment</h2>
                <p className="text-gray-600 mb-4">
                    Your email address will not be published. Required fields are marked *
                </p>

                {/* Comment Form */}
                <form className="space-y-4">
                    {/* Comment Textarea */}
                    <div>
                        <textarea
                            className="w-full p-4 border border-gray-500 focus:outline-none focus:border-blue-500"
                            rows="5"
                            placeholder="Type here.."
                            required
                        ></textarea>
                    </div>

                    {/* Input Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input
                            type="text"
                            className="w-full p-3 border border-gray-500 focus:outline-none focus:border-blue-500"
                            placeholder="Name*"
                            required
                        />
                        <input
                            type="email"
                            className="w-full p-3 border border-gray-500 focus:outline-none focus:border-blue-500"
                            placeholder="Email*"
                            required
                        />
                        <input
                            type="url"
                            className="w-full p-3 border border-gray-500 focus:outline-none focus:border-blue-500"
                            placeholder="Website"
                        />
                    </div>

                    {/* Save Checkbox */}
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="save-info" className="h-4 w-4 text-blue-600" />
                        <label htmlFor="save-info" className="text-gray-600">
                            Save my name, email, and website in this browser for the next time I comment.
                        </label>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition-colors"
                        >
                            POST COMMENT
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Post;
