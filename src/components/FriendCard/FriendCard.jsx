import PropTypes from 'prop-types';
import css from '../FriendCard/FriendCard.module.css';

export const FriendCard = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.item}>
      <span className={isOnline ? css.online : css.offline} />
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </div>
  );
};

FriendCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
