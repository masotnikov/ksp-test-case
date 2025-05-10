export const fetchCards = async () => {
  const response = await fetch("/db.json");
  if (!response.ok) {
    throw new Error("Failed to load cards");
  }
  const data = await response.json();
  return data.cards;
};