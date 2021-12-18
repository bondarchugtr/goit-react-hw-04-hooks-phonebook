import { useState, useEffect } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) ?? defaultValue;
  });
  useEffect(() => {
    JSON.stringify(localStorage.setItem(key, JSON.stringify(state)));
  }, [key, state]);
  return [state, setState];
};

export default useLocalStorage;
