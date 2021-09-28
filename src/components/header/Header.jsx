import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Online Publishing Platform</span>
        <span className="headerTitleLg">Pencil Pop Ups</span>
      </div>
      <img
        className="headerImg"
        src="https://marketinginsidergroup.com/wp-content/uploads/2020/05/how-long-blog-posts-scaled.jpg"
        alt=""
      />
    </div>
  );
}
