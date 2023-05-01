const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";


export const getRandomFact = async () => {
   const res = await fetch(CAT_ENDPOINT_RANDOM_FACT);
    if (!res.ok) {
        setFactError("There was an error fetching the fact");
    }
    const data = await res.json();
    const { fact } = data;
    return fact;
  };
