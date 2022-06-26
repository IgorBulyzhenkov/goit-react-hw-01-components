// import logo from './logo.svg';
import './App.css';
import Profile from "./components/Profile/Profile";
import user from "./user.json";

const data = user;

export default function App() {
  return (
    <div className="App">
      <Profile
        src={data.avatar}
        alt={data.username}
        userName={data.username}
        followers={data.stats.followers}
        views={data.stats.views}
        likes={data.stats.likes}
        tag={data.tag}
        location={data.location}
      />
    </div>
  );
}
