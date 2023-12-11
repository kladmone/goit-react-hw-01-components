import css from '../components/Friendslist/FriendList.module.css';
export const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={css.item}>
    <span
      className={`${css.status} ${isOnline ? css.online : css.offline}`}
    ></span>
    <img
      className={css.avatar}
      src={avatar}
      alt={`User avatar ${name}`}
      width="48"
    />
    <p className={css.name}>{name}</p>
  </li>
);
