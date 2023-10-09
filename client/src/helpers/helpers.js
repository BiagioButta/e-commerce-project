export const generateRandomId = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-';
    const charLength = characters.length;
    let randomId = '';

    for (let i = 0; i < 20; i++) {
        const randomIndex = Math.floor(Math.random() * charLength);
        randomId += characters[randomIndex];
    }

    return randomId;
};

export const generateRandomDate = (from, to) => {
  const fromDate = new Date(from).getTime();
  const toDate = new Date(to).getTime();

  const randomTime = Math.random() * (toDate - fromDate) + fromDate;
  return new Date(randomTime);
}