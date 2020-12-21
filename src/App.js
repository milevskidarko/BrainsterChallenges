import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Filter from "./Filter";
import Card from "./Card";
import Footer from "./Footer";

function App() {
  const [cards, setCards] = useState([]);
  const [filters, setFilters] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [allcards, setAllcards] = useState([]);
  
  useEffect(() => {
    let queryString = "?";
    Object.keys(filters).map((filter) => {
      if (filters[filter]) {
        queryString += `${filter}=${filters[filter]}&`;
      }
    });
    fetch(`https://json-project3.herokuapp.com/products${queryString}`)
      .then((res) => res.json())
      .then((cards) => {
        if (queryString === "?") {
          setAllcards(cards);
        }
        setCards(cards);
        setIsLoading(false);
      });
    return () => {};
  }, [filters]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-10 offset-md-1 bg-white">
          <Header />
          {isLoading === true ? (
            <div className="text-center">loading...</div>
          ) : (
            <div className="row mt-3">
              <div className="col-md-3">
                <Filter
                  filters={filters}
                  setFilter={setFilters}
                  allcards={allcards}
                />
              </div>
              <div className="col-md-8 offset-md-1">
                <Card cards={cards} />
              </div>
            </div>
          )}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
