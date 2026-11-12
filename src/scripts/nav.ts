/**
 * Satu tempat untuk menentukan tautan navigasi mana yang sedang aktif, supaya
 * header dan footer tidak pernah berbeda pendapat.
 */
export function isActivePath(path: string, href: string): boolean {
  if (href === "/") return path === "/";
  return path === href || path.startsWith(`${href}/`);
}
