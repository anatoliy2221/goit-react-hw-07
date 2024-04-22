import "./App.css";
import ContactForm from "./components/contactForm/ContactForm";
import SearchBox from "./components/searchBox/SearchBox";
import ContactList from "./components/contactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "./redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import Loader from "./components/loader/Loader";

const App = () => {

const dispatch = useDispatch();
const isLoading = useSelector(selectIsLoading);
const error = useSelector(selectError);

useEffect(() => {
  dispatch(fetchContacts());
}, [dispatch]);

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm  />  
      <SearchBox  />
      {isLoading && <Loader />}
      {error && <b>❌ Something went wrong</b>}
      <ContactList  />
    </div>
  );
};

export default App;


