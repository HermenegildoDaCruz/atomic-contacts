import useIsActive from "../hooks/useIsActive"; 

export default function Contact({
  contactId,
  contactName,
  contactNumber,
  isFavorite,
  onStartDeletion,
  onStartEditing,
  onSetFavorite
}) {

  const {active,handleToggleIsActive} = useIsActive(false)

  return (
    <div className="contact">
      <div className="contact-cover">{contactName[0]}</div>
      <div className="contact-info">
        <div className="contact-header">
          <div>
            <span className="contact-name">{contactName}</span>
            <span className="contact-number">{contactNumber}</span>
          </div>
          <button className="btn" onClick={() => onStartDeletion(contactId)}>
            <ion-icon name="trash-bin-outline" className = "icon"></ion-icon>
          </button>
        </div>
        <div className="contact-btns">
          <button
            className="btn--primary"
            onClick={() => onStartEditing(contactId)}
          >
            Edit
          </button>
          <button className="btn" onClick={handleToggleIsActive}>
            {active ? <ion-icon name="checkmark-outline" className = "icon"></ion-icon>:<ion-icon name="copy-outline" className="icon"></ion-icon>}
          </button>
          <button className="btn" onClick={() => onSetFavorite(contactId)}>
            {isFavorite ? <ion-icon name="star" className="icon"></ion-icon>:<ion-icon name="star-outline" className="icon"></ion-icon>}
          </button>
        </div>
      </div>
    </div>
  );
}
