import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const getNASAContext = createContext();

const GetNASAProvider = ({ children }) => {
  const [apiKey] = useState("x2w72vyvvg1pCbCH7zabgccankzi6TLcUCHZXjTm");
  const [nasaResponse, setNasaResponse] = useState();

  useEffect(() => {
    if(apiKey){
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then((response) => {
        if(response){
            setNasaResponse(response.data)
        }
    })
      .catch((error) => {
        console.error("Error NASA Response", error);
      });
    }
  }, [apiKey,setNasaResponse]);

  return (
    <getNASAContext.Provider value={{ nasaResponse }}>
      {children}
    </getNASAContext.Provider>
  );
};
export default GetNASAProvider;