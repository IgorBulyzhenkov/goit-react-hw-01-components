import PropTypes from "prop-types";
import './Profile.css';
import '../Utils.css';


export default function Profile(props) {
  console.log(props);
  const { src, location, tag, userName, followers, views, likes } = props;
  return (
    <div className="profile">
      <div className="description">
        <img src={src} alt={userName} className="avatar" width="150" />
        <p className="name">{userName}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers : </span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views : </span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes : </span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  src: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
};
