import React from "react";
function DataDisplay({post}){
 
    return(
        <div>
          {post.map((post)=>(
            <div key={post.id} style={{border:"1px solid red",backgroundColor:"yellow"}}>
                <p>Title:{post.title}</p>
                <p>UserId:{post.userId}</p>

            </div>
          ))}

        </div>
)}
export default DataDisplay;