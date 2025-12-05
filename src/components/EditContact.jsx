import { useRef } from "react";
import { hasEmptyFields } from "../utils/contactFormValidators";
import ContactForm from "./ContactForm";

export default function EditContact({
  open,
  contact,
  onUpdateContact,
  onStopEditing,
  showError
}) {
  const name = useRef();
  const number = useRef();

  function handleUpdateContact() {
    if (!hasEmptyFields(name, number)) {
      onUpdateContact(name.current.value, number.current.value);
    } 
  }

  return (
    <dialog open={open} className="modal">
      <div className="selected-contact-info">
        <div className="contact-cover">{contact.name[0]}</div>
        <span>{contact.name}.</span>
      </div>
      <ContactForm
        contactData={contact}
        inputNameRef={name}
        inputNumberRef={number}
      />
      <div className="contact-btns">
        <button className="btn--primary" onClick={handleUpdateContact}>
          Update
        </button>
        <button className="btn" onClick={onStopEditing}>
          close
        </button>
      </div>
    </dialog>
  );
}
