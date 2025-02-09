export const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`something went wrong: ${response.status}`);
    } else {
      const dataJson = await response.json();
      return dataJson;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
