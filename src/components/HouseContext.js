import React, { useState, useEffect, createContext } from "react";

//import Data
import { housesData } from "../data";

// create Context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
  const [loading, setLoading] = useState(false);

  // return all countries
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });
    // Remove cac ten trung lap
    const uniqueCountries = ["Location (any)", ...new Set(allCountries)];
    // Set countries state (Đặt trạng thái quốc gia)
    setCountries(uniqueCountries);
  }, []);

  // return all properties
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });
    // Remove cac ten trung lap
    const uniqueProperties = ["Location (any)", ...new Set(allProperties)];
    // Set properties state (Đặt trạng thái thuộc tính)
    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    //set Loading
    setLoading(true);

    // create a function that checks if the string includes '(any)'
    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };
    // get the first value of price part it to number(lấy giá trị đầu tiên của phần giá thành số)
    const minPrice = parseInt(price.split(" ")[0]);
    // get the second value which it the maximum price & part it to number(lấy giá trị thứ hai là giá tối đa và chia nó thành số)
    const maxPrice = parseInt(price.split(" ")[2]);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);
      // if all values selected
      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }
      // if all values default
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }
      // if country is not default
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }
      // if property is not default
      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.type === property;
      }
      // if price is not default
      if (!isDefault(price) && isDefault(country) && isDefault(property)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }
      // if country && property is not default
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }
      // if country && price is not default
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }
      // if property && price is not default
      if (isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
      return false;
    });

    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      );
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        houses,
        loading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
