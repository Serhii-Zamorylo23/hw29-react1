import { useDispatch } from "react-redux"

const Filter=()=>{
    const dispatch=useDispatch()
    const filterValue=(event)=>{
        dispatch({
              type:"Filter",
              payload:event.target.value
            })
    }
    return(
        <>
        <p>Find contacts by name</p>
        <input type="text" onChange={filterValue}/>
        </>
    )
}
export default Filter