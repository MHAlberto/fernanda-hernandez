export function whatsappUrl(number: string, message: string): string {
  const clean = number.replace(/\D/g, '');
  const text = encodeURIComponent(message);
  return clean ? `https://wa.me/${clean}?text=${text}` : `https://wa.me/?text=${text}`;
}
