import Contact from "./Contact"

export default function Contacts({contacts,onStartDeletion}){
    return <div className="contacts">
        {contacts && contacts.map(contact => <Contact 
            key={contact.id}
            contactId = {contact.id}
            contactName={contact.name} 
            contactNumber={contact.number}
            onStartDeletion = {onStartDeletion}
        />)}
    </div>
}