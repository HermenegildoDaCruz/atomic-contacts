import { formatContactNumber } from "./formatContactNumber";
// (contactState) Reducer function:
export function contactReducer(contactState, action) {
  const contacts = contactState.contacts;
  if (action.type === "ADD_CONTACT") {
    const contactData = {
      id: Math.random(),
      name: action.contact.name,
      number: formatContactNumber(action.contact.number),
      isFavorite: false,
    };

    const contactAlreadyExists =
      contacts.filter((contact) => contact.number === contactData.number)
        .length > 0
        ? true
        : false;

    if (contactAlreadyExists) {
      return {
        ...contactState,
        error: {
          ...contactState.error,
          hasError: true,
          errorMessage: "This number already exists.",
        },
      };
    }

    if (contactData.name.length === 0 || contactData.number.length === 0) {
      return {
        ...contactState,
        error: {
          ...contactState.error,
          hasError: true,
          errorMessage: "Fill all fields.",
        },
      };
    }

    return {
      ...contactState,
      contacts: [...contacts, contactData],
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
    const otherContacts = contacts.filter(
      (contact) => contact.id !== contactState.selectedContactId
    );
    const contactAlreadyExists =
      otherContacts.filter(
        (contact) => contact.number === action.contact.number
      ).length > 0
        ? true
        : false;

    if (contactAlreadyExists) {
      return {
        ...contactState,
        error: {
          ...contactState.error,
          hasError: true,
          errorMessage: "This number already exists.",
        },
      };
    }

    if (action.contact.name.length < 1 || action.contact.number.length < 1) {
      return {
        ...contactState,
        error: {
          ...contactState.error,
          hasError: true,
          errorMessage: "Fill all fields.",
        },
      };
    }
    return {
      ...contactState,
      isEditing: false,
      contacts: [
        ...contacts.map((contact) =>
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
      const filteredContacts = contacts.filter(
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
      const searchResults = contacts.filter((contact) =>
        contact.name.includes(action.searchValue)
      );

      let clearResults = {
        ...contactState,
        searchedContacts: [],
        hasResult: false,
      };
      if (searchResults.length === 0) {
        return clearResults;
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
        ...contacts.map((contact) =>
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
  if (action.type === "HIDE_ERROR") {
    return {
      ...contactState,
      error: { ...contactState.error, hasError: false, errorMessage: "" },
    };
  }

  return contactState;
}
