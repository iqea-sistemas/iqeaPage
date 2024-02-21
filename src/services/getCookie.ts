export const getCookieValue = (name:string) => {
  if (typeof document !== 'undefined') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Si la cookie comienza con el nombre buscado, devuelve su valor
      if (cookie.startsWith(`${name}=`)) {
        return cookie.substring(name.length + 1);
      }
    }
  }
  return ''; // Si no se encuentra la cookie, devuelve una cadena vacía
};
