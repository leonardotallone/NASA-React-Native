import { useState, createContext, useEffect } from "react";
import axios from "axios";
import { format, sub } from "date-fns";

export const getNASA5DaysContext = createContext();

const GetNASA5DaysProvider = ({ children }) => {
  const [apiKey] = useState("x2w72vyvvg1pCbCH7zabgccankzi6TLcUCHZXjTm");
  const [nasaResponse5Days, setNasaResponse5Days] = useState();

  const date = new Date();
  const todayDate = format(date, "yyy-MM-dd");
  const fiveDaysAgoDate = format(sub(date, { days: 5 }), "yyyy-MM-dd");
  const rangeDate = `&start_date=${fiveDaysAgoDate}&end_date=${todayDate}`;
 

  useEffect(() => {
    if (apiKey && rangeDate) {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}${rangeDate}`)
        .then((response) => {
          if (response) {
            setNasaResponse5Days(response.data);
          }
        })
        .catch((error) => {
          console.error("Error NASA Response", error);
        });
    }
  }, [apiKey, setNasaResponse5Days,rangeDate]);

  return (
    <getNASA5DaysContext.Provider value={{ nasaResponse5Days }}>
      {children}
    </getNASA5DaysContext.Provider>
  );
};
export default GetNASA5DaysProvider;
