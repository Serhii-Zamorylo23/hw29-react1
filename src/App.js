import './App.css';
import NewContact from './components/NewContact';
import Contacts from './components/Contacts';
import Filter from './components/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const App=()=>{
  const dispatch=useDispatch()
  useEffect(() => {
    const contactsItem = JSON.parse(localStorage.getItem("Contacts")) || [];
    dispatch({ type: "Load", payload: contactsItem });
  }, [dispatch]);
  const contacts=useSelector(state => state.contacts)
  useEffect(()=>{
    localStorage.setItem("Contacts",JSON.stringify(contacts))
  },[contacts])
  return(
    <>
      <h2>Phonebook</h2>
      <NewContact/>
      <h2>Contacts</h2>
      <Filter/>
      <Contacts /> 
      </>
  )
}
export default App;