import { useDispatch,useSelector } from "react-redux";
import styled from "styled-components";
import { nanoid } from "nanoid";
const Form = styled.form`
  width: 255px;
  border: 2px solid black;
  margin-left: 5px;
  padding-left: 5px;
  row-gap: 5px;
`;
const ButtonForm=styled.button`
  background: none;
  margin-bottom: 10px;
  margin-top: 10px;
  border: 2px solid gray;
  border-radius: 5px;
`
const NewContact=()=>{
  const dispatch=useDispatch()
  const contacts=useSelector(state => state.contacts)
  const nameContact=useSelector(state=> state.name)
  const addNewContact = (event) => {
    event.preventDefault();
    const isDuplicate = contacts.some((contact) => contact.name == nameContact);
    if (isDuplicate) {
      alert("A contact with this name already exists!");
      return;
    }
    dispatch({
      type:"Add",
      payload:{
        id:nanoid(),
        name:event.target.elements.userName.value,
        telephone:event.target.elements.number.value
      }
    })

  };
  return(
    <Form onSubmit={addNewContact}>
        <p>Name</p>
        <input name="userName" type="text"></input>
        <p>Number</p>
        <input
          type="tel"
          name="number"
          pattern="^\+[1-9][0-9]{7,14}$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <ButtonForm>Add contact</ButtonForm>
      </Form>
  )
}
export default NewContact;
