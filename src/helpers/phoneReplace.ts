export const phoneReplace = (phone: string): string => {
  return phone.replaceAll('-', '').replaceAll('(', '').replaceAll(')', '').replaceAll(' ', '')
}
