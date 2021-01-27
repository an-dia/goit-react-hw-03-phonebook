import s from './ContactItem.module.css';

const ContactItem = ({ name, number, onDeleteContact }) => {
  return (
    <>
      <p className={s.text}>
        {name} : {number}
      </p>
      <button className={s.button} type="button" onClick={onDeleteContact}>
        Delete
      </button>
    </>
  );
};

export default ContactItem;
