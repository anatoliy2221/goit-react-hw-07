import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  
  const handleDelete = () => dispatch(deleteContact(contact.id));
  
  return (
    <div className={css.contactContainer}>
      <div className={css.contactWrapper}>
        <div className={css.contact}>
          <FaUser />
          <p>{contact.name}</p>
        </div>
        <div className={css.contact}>
          <FaPhoneAlt />
          <p>{contact.number}</p>
        </div>
      </div>
      <button className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
