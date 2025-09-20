import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  list-style: none;
`;
const Button=styled.button`
  transition-duration: 0.3s;
  margin-left: 10px;
  &:hover{
    transition-duration: 0.5s;
    background: #a02c2c;
    color: white;
    border: none;
  }
`
const Contacts = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const dispatch=useDispatch()
  const contactId=(event)=>{
    dispatch({type:"Delete",payload:event.target.id})
  };

  return (
    <>
      <List>
        {visibleContacts.map((contact) => (
          <li id={contact.id}>
            {contact.name} : {contact.telephone}
            <Button id={contact.id} onClick={contactId}>
              Delete
            </Button>
          </li>
        ))}
      </List>
    </>
  );
};

export default Contacts
