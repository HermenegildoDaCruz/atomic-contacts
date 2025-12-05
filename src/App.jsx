import Backdrop from "./components/Backdrop";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import NewContact from "./components/NewContact";
import EditContact from "./components/EditContact";
import ConfirmDeletion from "./components/ConfirmDeletion";
import ErrorMessage from "./components/ErrorMessage";
import useContactHook from "./hooks/useContactHook";

localStorage.clear()
let DEFAULT_CONTACT_STATE =
  JSON.parse(localStorage.getItem("contact-app-data")) || null;

if (DEFAULT_CONTACT_STATE === null) {
  DEFAULT_CONTACT_STATE = {
    selectedContactId: null,
    isEditing: false,
    isCreating: false,
    isDeleting: false,
    contacts: [],
    filter: "a-z",
    searchedContacts: [],
    hasResult: true,
    showFavorites: false,
    error: {
     hasError: false,
     errorMessage: ""
    }
  };
}

function App() {
  const {
    contactState,
    selectedContact,
    sortedContacts,
    searchByName,
    handleSetFilter,
    handleShowFavorites,
    handleAddContact,
    handleStartCreating,
    handleStopCreating,
    handleDeleteContact,
    handleStartDeleting,
    handleStopDeleting,
    handleEditContact,
    handleStartEditing,
    handleStopEditing,
    handleSetFavorite,
  } = useContactHook(DEFAULT_CONTACT_STATE);

  return (
    <>
      {contactState.error.hasError && (
        <ErrorMessage
          open={contactState.hasError}
          message={contactState.error.errorMessage}
        />
      )}
      <Backdrop
        isCreating={contactState.isCreating}
        isEditing={contactState.isEditing}
        isDeleting={contactState.isDeleting}
        hasError={contactState.hasError}
      />
      {contactState.isCreating && (
        <NewContact
          open={contactState.isCreating}
          onAddContact={handleAddContact}
          onStopCreating={handleStopCreating}
        />
      )}

      {selectedContact && (
        <EditContact
          open={contactState.isEditing}
          contact={selectedContact}
          onUpdateContact={handleEditContact}
          onStopEditing={handleStopEditing}
        />
      )}
      {contactState.isDeleting && (
        <ConfirmDeletion
          open={contactState.isDeleting}
          onDelete={handleDeleteContact}
          onStopDeleting={handleStopDeleting}
        />
      )}
      <Header
        filter={contactState.filter}
        onStartCreating={handleStartCreating}
        onSetFilter={handleSetFilter}
        onShowFavorites={handleShowFavorites}
        onSearch={searchByName}
      />

      {contactState.searchedContacts.length === 0 &&
        (contactState.hasResult ? (
          sortedContacts && (
            <Contacts
              contacts={sortedContacts}
              onStartDeletion={handleStartDeleting}
              onStartEditing={handleStartEditing}
              onStartCreating={handleStartCreating}
              onSetFavorite={handleSetFavorite}
            />
          )
        ) : (
          <div className="container">
            <h2>No contact founded. </h2>
            <button className="btn--primary" onClick={handleStartCreating}>
              create
            </button>
          </div>
        ))}
      {contactState.searchedContacts.length > 0 && (
        <Contacts
          contacts={contactState.searchedContacts}
          onStartDeletion={handleStartDeleting}
          onStartEditing={handleStartEditing}
          onStartCreating={handleStartCreating}
          onSetFavorite={handleSetFavorite}
        />
      )}
    </>
  );
}

export default App;
