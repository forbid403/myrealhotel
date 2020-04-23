import React, { useState, createContext } from 'react'

const RecentContext = createContext({
  clickedHotels: [],
  pushHotels: () => { }
});

export const RecentProvider = ({ children }) => {
  const [clickedHotels, setHotel] = useState([]);

  const pushHotels = (name) => {
    setHotel([...clickedHotels, name]);
  }

  const value = {
    clickedHotels,
    pushHotels
  }

  return (
    <RecentContext.Provider value={value}>{children}</RecentContext.Provider>
  );
};

export default RecentContext
