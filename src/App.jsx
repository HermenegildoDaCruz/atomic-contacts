import Backdrop from "./components/Backdrop";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import NewContact from "./components/NewContact";
import EditContact from "./components/EditContact";
import ConfirmDeletion from "./components/ConfirmDeletion";
import useContactHook from "./hooks/useContactHook";

// GET CONTACTS STORAGED IN LOCALSTORAGE (CONTACTS, FAVORITES)
const DEFAULT_CONTACT_STATE = {
  selectedContactId: null,
  isEditing: false,
  isCreating: false,
  isDeleting: false,
  contacts: [],
  filter: "a-z",
  searchedContacts: [],
  hasResult: true,
  messages: {
    show: false,
    sucess: false,
  }
};

function App() {
  const {
    contactState,
    selectedContact,
    sortedContacts,
    searchByName,
    handleSetFilter,
    handleAddContact,
    handleStartCreating,
    handleStopCreating,
    handleDeleteContact,
    handleStartDeleting,
    handleStopDeleting,
    handleEditContact,
    handleStartEditing,
    handleStopEditing,
    handleSetFavorite
  } = useContactHook(DEFAULT_CONTACT_STATE);


  return (
    <>
      <Backdrop
        isCreating={contactState.isCreating}
        isEditing={contactState.isEditing}
        isDeleting={contactState.isDeleting}
      />
      <NewContact
        open={contactState.isCreating}
        onAddContact={handleAddContact}
        onStopCreating={handleStopCreating}
      />
      {selectedContact && (
        <EditContact
          open={contactState.isEditing}
          contact={selectedContact}
          onUpdateContact={handleEditContact}
          onStopEditing={handleStopEditing}
        />
      )}

      <ConfirmDeletion
        open={contactState.isDeleting}
        onDelete={handleDeleteContact}
        onStopDeleting={handleStopDeleting}
      />
      <Header 
      onStartCreating={handleStartCreating}
      onSetFilter={handleSetFilter}
      onSearch = {searchByName}
      />
      
      {contactState.searchedContacts.length === 0 && (contactState.hasResult ? sortedContacts && (
        <Contacts
          contacts={sortedContacts}
          onStartDeletion={handleStartDeleting}
          onStartEditing={handleStartEditing}
          onStartCreating={handleStartCreating}
          onSetFavorite = {handleSetFavorite}
        />
      ):<div className="container">
            <h2>No contact founded. </h2>
            <button className="btn--primary" onClick={handleStartCreating}>
              create
            </button>
          </div>)}
      {contactState.searchedContacts.length > 0 && (
        <Contacts
          contacts={contactState.searchedContacts}
          onStartDeletion={handleStartDeleting}
          onStartEditing={handleStartEditing}
          onStartCreating={handleStartCreating}
          onSetFavorite = {handleSetFavorite}
        />
      )}
    </>
  );
}

export default App;
