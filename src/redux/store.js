import { createStore } from "redux";

const InitState = {
    contacts: [],
    filter: ""
}

export const reducer=(state=InitState,action)=>{

    switch(action.type){
        case "Add":
            return {
                ...state,
                contacts: [...state.contacts, {
                    id: action.payload.id,
                    name: action.payload.name,
                    telephone: action.payload.telephone
                }]
            }
            case "Delete":
                return {
                    ...state,
                    contacts: state.contacts.filter(contact => contact.id !== action.payload)
                }
        case "Filter":
            return {...state,filter:action.payload} 
        case "Load":
            return{
                ...state,
                contacts: action.payload
            }
        default:
            return state; 
    }
}

export const store=createStore(reducer)