import { FriendCard } from '../FriendCard/FriendCard';
import PropTypes from 'prop-types';
import css from '../FriendList/FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendlist}>
      {friends.map((friend, id) => (
        <li>
          <FriendCard
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
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
