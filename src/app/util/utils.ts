export const uppercase = (obj: Object) => {
  if (typeof obj === 'object') {
    for (const key in obj) {
      if (typeof obj[key] === 'string') {
        if ((obj[key] as string).length > 0) {
          obj[key] = (obj[key] as string).toUpperCase();
        }
      }
    }
  }
};
