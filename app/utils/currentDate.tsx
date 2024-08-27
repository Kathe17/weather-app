export const getCurrentDate = () => {
  const currentDate = new Date().toLocaleDateString("es-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return currentDate;
};
