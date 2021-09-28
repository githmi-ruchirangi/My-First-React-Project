import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://images.pexels.com/photos/5380647/pexels-photo-5380647.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      <Post img="https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      <Post img="https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
      <Post img="https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
      <Post img="https://images.pexels.com/photos/8084484/pexels-photo-8084484.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
      
    </div>
  );
}
