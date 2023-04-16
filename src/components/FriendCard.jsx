import PropTypes from 'prop-types';
import css from '../css/FriendCard.module.css';

export const FriendCard = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <ul>
      <li className={css.item}>
        <span
          className={css.status}
          style={{ background: isOnline ? 'green' : 'red' }}
        ></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    </ul>
  );
};

FriendCard.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
