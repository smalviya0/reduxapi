import React from "react";
import { useLocation } from "react-router-dom";
// Component to display the details of a single post
// function PostDetails() {
//   const{post} = useLocation()
//   if (!post) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="w-full rounded-lg shadow-md lg:max-w-sm">
//       <div className="p-4">
//         <h4 className="text-xl font-semibold text-blue-600">{post.title}</h4>
//         <p className="mb-2 leading-normal">{post.body}</p>
//       </div>
//     </div>
//   );
// }
// export default PostDetails;


function PostDetails() {
  const{state} = useLocation();
  console.log(state.post)
  if (!state.post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full rounded-lg shadow-md lg:max-w-sm">
      <div className="p-4">
        <h4 className="text-xl font-semibold text-blue-600">{state.post.title}</h4>
        <p className="mb-2 leading-normal">{state.post.body}</p>
      </div>
    </div>
  );
}
export default PostDetails;
