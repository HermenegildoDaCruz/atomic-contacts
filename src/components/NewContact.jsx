import { useRef } from "react";
import { hasEmptyFields } from "../utils/contactFormValidators";
import ContactForm from "./ContactForm";

export default function NewContact({
  open,
  showError,
  onAddContact,
  onStopCreating,
}) {
  const name = useRef();
  const number = useRef();

  function handleSetContact() {
    if (hasEmptyFields(name, number)) {
      showError();
    } else {
      onAddContact(name.current.value, number.current.value);
      name.current.value = "";
      number.current.value = "";
    }
  }

  return (
    <dialog open={open} className="modal">
      <h2>Add new contact</h2>
      <ContactForm inputNameRef={name} inputNumberRef={number} />
      <div className="contact-btns">
        <button className="btn--primary" onClick={handleSetContact}>
          Add
        </button>
        <button className="btn" onClick={onStopCreating}>
          close
        </button>
      </div>
    </dialog>
  );
}
