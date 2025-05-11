export const fetchCards = async () => {
  const response = await fetch(`${import.meta.env.BASE_URL}db.json`);
  if (!response.ok) {
    throw new Error("Failed to load cards");
  }
  const data = await response.json();
  return data.cards;
};
