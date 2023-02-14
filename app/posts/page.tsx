import Link from "next/link";
import CreatePost from "./CreatePost";

async function  getPost(){
  const res =await fetch("http://127.0.0.1:8090/api/collections/posts/records", {cache : "no-store"}) ;
 
  const data =await res.json();
  //console.log("data  getPost : " , data);
  return data?.items  as  any[];
}

const  PostPage =async()=> {
  const posts =await getPost();
  //console.log("posts  : " , posts);
  return (
    <div>
      <h1>Posts</h1>
      {posts?.map((post)=>{
          return <PostItem  key={post.id}  post={post}   />
      })}


       <CreatePost />      
    </div>
  )
}

export default PostPage;


const PostItem = ({post} : any)=>{
  const {id , title, created } = post ||  {};

  return (
    <div>
        <Link href={`/posts/${id}`}>
            <div>
                <h3>
                  {title}
                </h3>
                <p>{created}</p>
            </div>
          </Link>  

      
     </div>

  )
}