import Contact from "./Contact";

export default function Contacts({
  contacts,
  onStartDeletion,
  onStartEditing,
  onStartCreating,
  onSetFavorite
}) {
  return (
    <div className="contacts">
      {contacts &&
        contacts.map((contact) => (
          <Contact
            key={contact.id}
            contactId={contact.id}
            contactName={contact.name}
            contactNumber={contact.number}
            isFavorite = {contact.isFavorite}
            onStartDeletion={onStartDeletion}
            onStartEditing={onStartEditing}
            onSetFavorite = {onSetFavorite}
          />
        ))}
        {contacts.length === 0 && (
          <div>
            <h2>No contacts.. </h2>
            <button className="btn--primary" onClick={onStartCreating}>
              create
            </button>
          </div>
      )}
    </div>
  );
}
