import { AiOutlinePhone, AiOutlineUser } from 'react-icons/ai';
import style from './ContactCard.module.css';

const ContactCard = ({ id, name, number, onDelete }) => {
  return (
    <div className={style['contact-card']}>
      <div className={style['contact-info']}>
        <div className={style['contact-name']}>
          <AiOutlineUser size={25} />
          {name}
        </div>
        <div className={style['contact-number']}>
          <AiOutlinePhone size={25} />
          {number}
        </div>
      </div>
      <button className={style['button']} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default ContactCard;
