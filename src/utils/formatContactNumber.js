export function formatContactNumber(number) {
  const digits = String(number).replace(/\D+/g, "");
  if (!digits) return "";
  return digits.replace(/\B(?=(\d{3})+(?!\d))/g, "-");
}
