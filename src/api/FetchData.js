export const FetchData = async () => {
    try {
      const response = await fetch("/data.json");
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const dataFromServer = await response.json();
      return dataFromServer
    } catch (error) {
      console.error(error);
    }
  };