import PropTypes from 'prop-types';
import { getRandomHexColor } from './random-color';
import './Statistics.css';

export default function Statistics({ items, title }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {items.map(({ id, label, percentage }) => {
          return (
            <li
              className="item"
              key={id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};