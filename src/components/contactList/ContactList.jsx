import { useSelector } from "react-redux";
import Contact from "../contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";


const ContactList = () => {

const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {visibleContacts.map( contact => 
        <Contact key={contact.id} contact={contact}  />
        )
      }
    </ul>
  );
};

export default ContactList;
