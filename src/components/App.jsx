import { Profile } from '../components/Profile/Profile';
import user from '../data/user.json';
import { Statistics } from '../components/Statistics/Statistics';
import data from '../data/data.json';
import { FriendList } from '../components/FriendList/FriendList';
import friends from '../data/friends.json';
import { TransactionHistory } from '../components/TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} title={'Upload stats'} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
