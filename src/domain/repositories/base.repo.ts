export type BaseRepo<T> = () => {
  save: (data: T) => void;
  getAll: () => Set<T>;
  getById: (id: T & { id: string }) => T;
  removeById: (id: T & { id: string }) => T;
  cleanRepo: () => void;
};
