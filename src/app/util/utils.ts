import { AbstractControl } from '@angular/forms';
import { HttpParams } from '@angular/common/http';

export const uppercase = (obj: any) => {
  if (typeof obj === 'object') {
    for (const key in obj) {
      if (typeof obj[key] === 'string' && naoEKeyUppercaseAble(key)) {
        if ((obj[key] as string).length > 0) {
          obj[key] = (obj[key] as string).toUpperCase();
        }
      }
    }
  }
};

export const naoEKeyUppercaseAble = (keyCompare: string) => {
  return !keysToNotUpdate.some((key) => {
    return key === keyCompare;
  });
};

export const keysToNotUpdate = ['senha'];

export const generate = () => {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);

  return `:host ::ng-deep .mat-progress-spinner circle, .mat-spinner circle {   
          stroke: #${randomColor};
      }`;
};

export const formData = (obj) => {
  const data = new FormData();

  for (const chave in obj) {
    if (obj[chave]) {
      data.append(chave, obj[chave]);
    }
  }
  return data;
};

export const httpParams = (obj) => {
  let params = new HttpParams();

  for (const key in obj) {
    if (Boolean(obj[key]) || obj[key] === '') {
      params = params.append(key, obj[key]);
    }
  }

  return { params };
};

export const maxSizeMB = (size: number) => {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const sizeEmMB = size * 1048576;
    if (control.value?.size > sizeEmMB) {
      return { sizeEmMBExcedido: true };
    } else {
      return null;
    }
  };
};

export const stringVazia  = (control: AbstractControl) => {
    if (control.value === '') {
      return { invalidValue: true };
    } else {
      return null;
    }
  };
