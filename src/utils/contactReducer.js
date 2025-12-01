// (contactState) Reducer function:
export function contactReducer(contactState,action){

    if (action.type === "ADD_CONTACT"){
        const contact = {
            id: Math.random(),
            name: action.contact.name,
            number: action.contact.number,
        }
        return {
            ...contactState,
            contacts: [...contactState.contacts, contact],
            isCreating: false
        }
    }

    if (action.type === "START_CREATING"){
        return {
            ...contactState,
            isCreating: true,
        }
    }

    if (action.type === "STOP_CREATING"){
        return {
            ...contactState,
            isCreating: false
        }
    }

    if (action.type === "UPDATE_CONTACT"){
        return {
        ...contactState,
        isEditing:false,
        contacts: [...contactState.contacts.map(contact => contact.id === contactState.selectedContactId ? {...contact, name:action.contact.name, number:action.contact.number}:contact) ],
        selectedContactId:null
      }
    }

    if (action.type === "START_UPDATING"){
        return {
            ...contactState,
            isEditing: true,
            selectedContactId:action.id
      }
    }

    if (action.type === "STOP_UPDATING"){
        return {
            ...contactState,
            isEditing: false,
            selectedContactId:null
      }
    }

    if (action.type === "DELETE_CONTACT"){
        if (contactState.selectedContactId !== null){
        return {
            ...contactState,
            contacts: contactState.contacts.filter(contact => contact.id !== contactState.selectedContactId),
            isDeleting: false
            }
        }
    }

    if (action.type === "START_DELETING"){
        return {
        ...contactState,
        isDeleting: true,
        selectedContactId: action.id
      }
    }

    if (action.type === "STOP_DELETING"){
        return {
        ...contactState,
        isDeleting: false,
        selectedContactId:null
      }
    }
    return contactState
}