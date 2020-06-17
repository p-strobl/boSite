import uuid from "uuid/v4";
import React from "react";
import PropTypes from "prop-types";

import { capitalizeFirstLetter } from "~src/helper/Utilities";

import "./RecipesCategories.scss";

export const RecipesCategories = ({ clickHandler }) => {
  const categories = {
    soup: "Suppen",
    salad: "Salat",
    starter: "Vorspeise",
    main: "Hauptspeise",
    dessert: "Dessert",
  };

  const categoryList = Object.entries(categories).map(([key, value]) => {
    return (
      <button
        className={`RecipesCategory RecipesCategory__${capitalizeFirstLetter(key)}`}
        onClick={(ev) => clickHandler(ev)}
        type="button"
        key={uuid()}
        data-recipe-category={key}>
        {value}
      </button>
    );
  });

  return <div className="RecipesCategoryWrapper">{categoryList}</div>;
};

RecipesCategories.defaultProps = {
  clickHandler: () => {},
};

RecipesCategories.propTypes = {
  clickHandler: PropTypes.func,
};
