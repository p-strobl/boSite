import uuid from "uuid/v4";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTitle } from "hookrouter";
import Class from "classnames";

import { Emoji } from "~components/Emoji";
import { Headline } from "~components/Headline";
import { RecipesCategories } from "./RecipesCategories";

import "./RecipesPage.scss";

export const RecipesPage = () => {
  useTitle("boSite's Rezepte");

  const uiClasses = {
    recipesPage: "RecipesPage",
    recipesPageHeadline: "RecipesPageHeadline",
    recipesPageSubHeadline: "RecipesPageSubHeadline",
    audioSampleBox: "AudioSampleBox",
    audioSampleBoxHeadline: "AudioSampleBoxHeadline",
    audioSampleBoxSubHeadline: "AudioSampleBox__SubHeadline",
    emojiRecipe: "Emoji__Recipes",
  };

  const label = {
    recipes: "Recipes",
  };

  const [fetchedData, setFetchedData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({
    message: "",
    state: false,
  });

  const emojiRecipe = (
    <Emoji
      classs={`${uiClasses.recipesPageHeadline}__`}
      emojiClass={uiClasses.emojiRecipe}
      label={label.recipes}
    />
  );

  const headline = <h1 className={Class(`${uiClasses.recipesPageHeadline}`)}>Rezepte</h1>;

  const subHeadline = (
    <h2 className={Class(`${uiClasses.recipesPageSubHeadline}`)}>
      Meine leckeren Rezepte zum Nachkochen {emojiRecipe}
    </h2>
  );

  const fetchRecipes = () => {
    const recipesApiRoute = "http://localhost:5000/api/recipes";

    axios
      .get(recipesApiRoute, {
        params: {
          category: selectedCategory,
        },
      })
      .then((result) => {
        setFetchedData(result.data.collection);
        setLoading(false);
        console.log("result.data.collection", result.data.collection);
      })
      .catch((fetchedError) => {
        setError({
          message: fetchedError,
          state: true,
        });
      });
  };

  const clickHandler = (ev) => {
    fetchRecipes();
    setSelectedCategory(ev.currentTarget.getAttribute("data-recipe-category"));
    console.log("ec", ev.currentTarget.getAttribute("data-recipe-category"));
  };

  useEffect(() => {}, []);

  return (
    <div className={uiClasses.recipesPage}>
      <Headline parentClass={uiClasses.recipesPage} h1={headline} h2={subHeadline} />
      <div className="RecipesCategoryContainer">
        <RecipesCategories clickHandler={clickHandler} />
      </div>

      {/*{data.map((item) => {*/}
      {/*  return (*/}
      {/*    <div key={uuid()}>*/}
      {/*      <h1 key={uuid()}>{item.title}</h1>*/}
      {/*      <p key={uuid()}>{item.infos.info}</p>*/}
      {/*    </div>*/}
      {/*  );*/}
      {/*})}*/}
    </div>
  );
};
