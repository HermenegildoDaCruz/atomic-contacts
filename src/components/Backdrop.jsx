export default function Backdrop({ isCreating, isDeleting, isEditing, hasError }) {
  let show = isCreating || isDeleting || isEditing || hasError? true : false;
  return <>{show && <div className="backdrop"></div>}</>;
}
