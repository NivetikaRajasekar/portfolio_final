import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "./data";
import Card from "./card";
import AppWrap from "../appwrap";
import "./portfolio.css"

function PortFolio() {
  const [filter, setFilter] = useState("all");
  const [numCards, setNumCards] = useState(6); // number of cards to display
  const [showMore, setShowMore] = useState(true); // toggle show more button

  const handleFilterChange = (category, event) => {
    event.preventDefault();
    setFilter(category);
    setNumCards(6); // reset number of cards to display
  };

  const filteredData = data.filter((work) => {
    if (filter === "all") {
      return true;
    } else {
      return work.category === filter;
    }
  });

  const workElements = filteredData.slice(0, numCards).map((work) => {
    return (
      <Card
        key={work.id}
        img={work.img}
        git={work.git}
        deploy={work.deploy}
        desc={work.desc}
        title={work.title}
      />
    );
  });

  const handleShowMore = () => {
    if (numCards + 3 >= filteredData.length) {
      // if there are no more cards to display, hide the "Show More" button
      setShowMore(false);
    }
    setNumCards(numCards + 4); // display 3 more cards
  };

  return (
    <div id="portfolio">
      <h2 id="header__p">My creative Portfolio</h2>
      <div id="port__filters">
        <div id="filter__div">
          <button
            className={filter === "all" ? "active" : "normal"}
            onClick={(event) => handleFilterChange("all", event)}
          >
            All
          </button>
        </div>
        <div id="filter__div">
          <button
            className={filter === "web apps" ? "active" : "normal"}
            onClick={(event) => handleFilterChange("web apps", event)}
          >
            Web Design
          </button>
        </div>
        <div id="filter__div">
          <button
            className={filter === "AI/ML" ? "active" : "normal"}
            onClick={(event) => handleFilterChange("AI/ML", event)}
          >
            AI/ML
          </button>
        </div>
      </div>
      <div id="port__content">
        <AnimatePresence exit={false}>
          {workElements.map((work) => (
            <motion.div
              key={work.key}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {work}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {showMore && filteredData.length > numCards && (
        <div id="show-more">
          <button onClick={handleShowMore} className="button-4">Show More</button>
        </div>
      )}
    </div>
  );
}

export default AppWrap(PortFolio, "works");
