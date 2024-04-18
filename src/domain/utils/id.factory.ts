const idParams = {
  length: 5,
  parts: 3,
};

export const createId = (): string => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let temp: string = '';

  for (let i = 0; i < idParams.parts; i++) {
    for (let j = 0; j < idParams.length; j++) {
      temp += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    if (i !== idParams.parts - 1) {
      temp += '-';
    }
  }

  return temp;
};
