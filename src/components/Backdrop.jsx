export default function Backdrop({ isCreating, isDeleting, isEditing }) {
  let show = isCreating || isDeleting || isEditing ? true : false;
  return <>{show && <div className="backdrop"></div>}</>;
}
