import { FriendCard } from './FriendCard';
import PropTypes from 'prop-types';
import css from '../css/FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendlist}>
      {friends.map((friend, id) => (
        <li key={friend.id}>
          <FriendCard friend={friend} />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};
