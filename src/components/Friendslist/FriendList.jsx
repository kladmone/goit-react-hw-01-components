import { FriendListItem } from 'Helpers/FriendListFunction';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(friend => (
      <FriendListItem key={friend.id} {...friend} />
    ))}
  </ul>
);

export { FriendList };
