export const uppercase = (obj: any) => {
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

export const generate = () => {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);

  return `:host ::ng-deep .mat-progress-spinner circle, .mat-spinner circle {   
          stroke: #${randomColor};
      }`;
};
