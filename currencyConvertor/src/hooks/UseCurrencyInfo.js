import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [rates, setRates] = useState({});

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
      .then((response) => response.json())
      .then((data) => {
        setRates(data.rates); // ✅ correct
        console.log(data.rates);
      })
      .catch((error) => {
        console.error("Error fetching currency data:", error);
      });
  }, [currency]);

  return rates;
}

export default useCurrencyInfo;
