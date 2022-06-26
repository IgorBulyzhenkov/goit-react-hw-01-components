// import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import user from './components/Profile/user.json';
import data from './components/Statistics/data.json';

const dataStatistics = data;
const userData = user;

export default function App() {
  return (
    <div className="App">
      <Profile
        src={userData.avatar}
        alt={userData.username}
        userName={userData.username}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
        tag={userData.tag}
        location={userData.location}
      />

      <Statistics
        title="Upload stats"
        items={dataStatistics}
        // id={dataStatistics.map(d => d.id)}
        // label={dataStatistics.map(l => l.label)}
        // percentage={dataStatistics.map(p => p.percentage)}
      />
    </div>
  );
}
