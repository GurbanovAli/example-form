export default {
  set: (name: string, value: unknown): void => {
    localStorage.setItem(name, JSON.stringify(value));
  },

  get: <T>(name: string): T | '' => {
    const item = localStorage.getItem(name);

    return item ? JSON.parse(item) : '';
  },

  delete: (name: string): void => {
    localStorage.removeItem(name);
  },
};
