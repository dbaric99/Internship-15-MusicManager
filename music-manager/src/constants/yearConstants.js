export const yearConstants = Array.from(
    {length: new Date().getFullYear() - 1949}, 
    (_, i) => ({
    value: new Date().getFullYear() - i,
    label: `${new Date().getFullYear() - i}`
  })
);
  