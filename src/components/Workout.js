import React, { useState, useEffect } from 'react';

// make an array from 1 - 13

export default function Workout({ exercises, setStage, setExercises }) {
  const createCards = (ex) => {
    return Array.from({ length: 13 }).reduce((acc, cv, i) => {
      for (const key in ex) {
        acc.push({ exercise: ex[key], reps: i + 1, suite: key });
      }
      return acc;
    }, []);
  };

  const [cards, setCards] = useState(createCards(exercises));

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  return (
    <div>
      {cards.map((v, i) => {
        return (
          <img
            key={`../svgs/${v.reps}_of_${v.suite}.svg`}
            src={`../svgs/${v.reps}_of_${v.suite}.svg`}
          />
        );
      })}
    </div>
  );
}
