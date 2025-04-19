import React, { useState, useEffect } from 'react';

const useTotalProvidersApi = () => {
  const [totalProviders, setTotalProviders] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchTotalProviders = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('https://680323380a99cb7408eb2f03.mockapi.io/CollectHub/api/dashbord/meticCard/totalProvider');
        if (!response.ok) {
          throw new Error('Failed to fetch total providers');
        }
        const data = await response.json();
        setTotalProviders(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTotalProviders();
  }, []);

  if (isLoading || error) return null;
  return totalProviders;
};

export default useTotalProvidersApi;