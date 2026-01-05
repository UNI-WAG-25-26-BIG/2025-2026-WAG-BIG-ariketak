import './Emaitzak.css';
import { Link } from "react-router-dom";

export default function Emaitzak({ emaitza = [] }) {
  return (
    <div className="emaitzak-wrapper">
      <ul id="emaitzak">
        {emaitza.map((item) => (
          <li key={item.id} className="kluba">
            <div className="kluba-info">
              <h2>
                {item.name}{' '}
                {item.club_type && (
                  <span className="label">{item.club_type.toUpperCase()}</span>
                )}{' '}
                {item.privatea && <span className="lock">🔒</span>}
              </h2>
              {item.description && <p>{item.description}</p>}
              {item.sport_type && (
                <p>
                  Kirol mota: <em>{item.sport_type}</em>
                </p>
              )}
              <p>
                Partehartzaileak:{' '}
                <span className="count">{item.member_count ?? 0}</span>
              </p>
              <div className="kluba-bottom">
                <Link className="details-button" to={`/detailea/${item.id}`}>🛈 Detaileak ikusi</Link>
              </div>
            </div>
            <img className="kluba-cover" src={item.cover_photo_small} alt="kluba" />
          </li>
        ))}
      </ul>
    </div>
  );
}