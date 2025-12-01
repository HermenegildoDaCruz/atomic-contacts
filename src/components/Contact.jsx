export default function Contact({
  contactId,
  contactName,
  contactNumber,
  onStartDeletion,
  onStartEditing,
}) {
  return (
    <div className="contact">
      <div className="contact-cover">{contactName[0]}</div>
      <div className="contact-info">
        <div className="contact-header">
          <div>
            <span className="contact-name">{contactName}</span>
            <span className="contact-number">{contactNumber}</span>
          </div>
          <button onClick={() => onStartDeletion(contactId)}>
            <ion-icon name="trash" className="icon"></ion-icon>
          </button>
        </div>
        <div className="contact-btns">
          <button
            className="btn--primary"
            onClick={() => onStartEditing(contactId)}
          >
            Edit
          </button>
          <button className="btn">
            <ion-icon name="copy-outline" className="icon"></ion-icon>
            {/* <ion-icon name="checkmark-outline" className = "icon"></ion-icon> */}
          </button>
          <button className="btn">
            <ion-icon name="star-outline" className="icon"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
}
