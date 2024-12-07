import ContactCard from '../ContactCard/ContactCard';
import style from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      {contacts.length > 0 ? (
        <ul className={style['contacts-list']}>
          {contacts.map(({ id, name, number }) => (
            <li className={style['contact-item']} key={id}>
              <ContactCard
                id={id}
                name={name}
                number={number}
                onDelete={onDelete}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts available.</p>
      )}
    </div>
  );
};

export default ContactList;
