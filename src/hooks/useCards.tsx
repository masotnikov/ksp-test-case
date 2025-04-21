import {useEffect, useState} from "react";
import {fetchCards} from "../api/cardsApi.ts";
import {IData_SnippetNews} from "../types/news.types.ts";

export const useCards = () => {
  const [cards, setCards] = useState<IData_SnippetNews[]>([]);
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