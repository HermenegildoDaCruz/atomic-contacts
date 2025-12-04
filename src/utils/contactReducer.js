import { formatContactNumber } from "./formatContactNumber";
// (contactState) Reducer function:
export function contactReducer(contactState, action) {
  if (action.type === "ADD_CONTACT") {
    const contact = {
      id: Math.random(),
      name: action.contact.name,
      number: formatContactNumber(action.contact.number),
      isFavorite: false,
    };
    return {
      ...contactState,
      contacts: [...contactState.contacts, contact],
      isCreating: false,
    };
  }

  if (action.type === "START_CREATING") {
    return {
      ...contactState,
      isCreating: true,
    };
  }

  if (action.type === "STOP_CREATING") {
    return {
      ...contactState,
      isCreating: false,
    };
  }

  if (action.type === "UPDATE_CONTACT") {
    return {
      ...contactState,
      isEditing: false,
      contacts: [
        ...contactState.contacts.map((contact) =>
          contact.id === contactState.selectedContactId
            ? {
                ...contact,
                name: action.contact.name,
                number: action.contact.number,
              }
            : contact
        ),
      ],
      selectedContactId: null,
    };
  }

  if (action.type === "START_UPDATING") {
    return {
      ...contactState,
      isEditing: true,
      selectedContactId: action.id,
    };
  }

  if (action.type === "STOP_UPDATING") {
    return {
      ...contactState,
      isEditing: false,
      selectedContactId: null,
    };
  }
  // **
  if (action.type === "DELETE_CONTACT") {
    if (contactState.selectedContactId !== null) {
      const filteredContacts = contactState.contacts.filter(
        (contact) => contact.id !== contactState.selectedContactId
      );
      const filteredSearchedContacts = contactState.searchedContacts.filter(
        (contact) => contact.id !== contactState.selectedContactId
      );
      return {
        ...contactState,
        contacts: filteredContacts,
        searchedContacts: filteredSearchedContacts,
        isDeleting: false,
      };
    }
  }

  if (action.type === "START_DELETING") {
    return {
      ...contactState,
      isDeleting: true,
      selectedContactId: action.id,
    };
  }

  if (action.type === "STOP_DELETING") {
    return {
      ...contactState,
      isDeleting: false,
      selectedContactId: null,
    };
  }
  if (action.type === "SEARCH_CONTACT") {
    if (action.searchValue.length > 0) {
      const searchResults = contactState.contacts.filter((contact) =>
        contact.name.includes(action.searchValue)
      );
      
      let clearResults = {
          ...contactState,
          searchedContacts: [],
          hasResult: false,
        };
      if (searchResults.length === 0) {
        return clearResults
      }
      return {
        ...contactState,
        searchedContacts: [...searchResults],
      };
    }
    if (action.searchValue.length === 0) {
      return {
        ...contactState,
        searchedContacts: [],
        hasResult: true,
      };
    }
  }
  if (action.type === "FILTER_CONTACT") {
    return {
      ...contactState,
      filter: action.filter,
    };
  }

  if (action.type === "TOGGLE_ISFAVORITE") {
    return {
      ...contactState,
      contacts: [
        ...contactState.contacts.map((contact) =>
          contact.id === action.id
            ? { ...contact, isFavorite: !contact.isFavorite }
            : contact
        ),
      ],
    };
  }

  if (action.type === "SHOW_AND_HIDE_FAVORITES") {
    if (contactState.filter === "fav") {
      return {
        ...contactState,
        filter: "a-z",
      };
    } else {
      return {
        ...contactState,
        filter: "fav",
      };
    }
  }

  if (action.type === "ERROR"){
    return {
      ...contactState,
      hasError: !contactState.hasError,
      isCreating:false,
      isEditing: false
    }
  }

  return contactState;
}
