import { Profile } from './Profile';
import user from '../data/user.json';
import { Statistics } from './Statistics';
import data from '../data/data.json';
import { FriendList } from './FriendList';
import friends from '../data/friends.json';
import { TransactionHistory } from './TransactionHistory';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
};
