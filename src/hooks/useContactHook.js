import { useReducer } from "react";
import { contactReducer } from "../utils/contactReducer";

export default function useContactHook(initialState) {
    const [contactState, dispatch] = useReducer(contactReducer, initialState);

    const selectedContact = contactState.selectedContactId !== null
        ? contactState.contacts.filter((contact) => contact.id === contactState.selectedContactId)[0]:null;
        

    function handleAddContact(name, number) {
        dispatch({
        type: "ADD_CONTACT",
        contact: { name: name, number: number },
        });
    }

    function handleStartCreating() {
        dispatch({
        type: "START_CREATING",
        });
    }

    function handleStopCreating() {
        dispatch({
        type: "STOP_CREATING",
        });
    }

    function handleDeleteContact() {
        dispatch({
        type: "DELETE_CONTACT",
        });
    }
    function handleStartDeleting(id) {
        dispatch({
        type: "START_DELETING",
        id: id,
        });
    }
    function handleStopDeleting() {
        dispatch({
        type: "STOP_DELETING",
        });
    }
    function handleEditContact(selectedContactName, selectedContactNumber) {
        dispatch({
        type: "UPDATE_CONTACT",
        contact: { name: selectedContactName, number: selectedContactNumber },
        });
    }

    function handleStartEditing(id) {
        dispatch({
        type: "START_UPDATING",
        id: id,
        });
    }
    function handleStopEditing() {
        dispatch({
        type: "STOP_UPDATING",
        });
    }

    return {
        contactState,
        selectedContact,
        handleAddContact,
        handleStartCreating,
        handleStopCreating,
        handleDeleteContact,
        handleStartDeleting,
        handleStopDeleting,
        handleEditContact,
        handleStartEditing,
        handleStopEditing
    };
}
