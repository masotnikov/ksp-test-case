import {useEffect, useState} from "react";
import {fetchCards} from "../api/cardsApi.ts";

export const useCards = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCards()
      .then(setCards)
      .catch(setError)
      .finally(() => setLoading(false))
  }, []);

  return {cards, loading, error}
}