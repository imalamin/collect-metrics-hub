import { useState, useEffect } from 'react';

const useTotalCollectionApi = () => {
  const [totalCollection, setTotalCollection] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchTotalCollection = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('https://680323380a99cb7408eb2f03.mockapi.io/CollectHub/api/dashbord/meticCard/totalCollection');
        if (!response.ok) {
          throw new Error('Failed to fetch total collection');
        }
        const data = await response.json();
        setTotalCollection(data === undefined ? 0 : data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTotalCollection();
  }, []);

  return totalCollection;
};

export default useTotalCollectionApi;