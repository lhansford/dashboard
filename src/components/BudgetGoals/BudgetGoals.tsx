import React, { useState, useEffect } from 'react';
import { getBudgetCategories, IYnabCategory } from '../../helpers/misc';

const BudgetGoals = (): JSX.Element => {
  const [categories, setCategories] = useState<IYnabCategory[] | null>(null);
  useEffect(() => {
    getBudgetCategories().then(setCategories);
  }, []);
  console.log(categories);
  switch (categories) {
    case null:
      return <p>Loading...</p>;
    case []:
      return <p>Data could not be loaded</p>;
    default:
      return (
        <>
          {
            categories.map(({ name, goal_target, balance, goal_percentage_complete }) => (
              <p title={`${balance / 1000} SEK / ${goal_target / 1000} SEK`}>
                {name}: {goal_percentage_complete}%
              </p>
            ))
          }
        </>
      );
  }
};

export default BudgetGoals;
