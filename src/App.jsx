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
  favorites: [],
  filter: "a-z",
};

function App() {
  const {
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
    handleStopEditing,
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
      <Header onStartCreating={handleStartCreating}/>
      {contactState.contacts && (
        <Contacts
          contacts={contactState.contacts}
          onStartDeletion={handleStartDeleting}
          onStartEditing={handleStartEditing}
        />
      )}
      {contactState.contacts.length === 0 && (
        <div>
          <h2>No contacts.. </h2>
          <button className="btn--primary" onClick={handleStartCreating}>
            create
          </button>
        </div>
      )}
    </>
  );
}

export default App;
