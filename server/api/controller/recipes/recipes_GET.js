const Recipe = require("../../models/recipe");

module.exports = (request, response) => {
  Recipe
    .find()
    .select("_id name title ingredients infos preparation")
    .exec()
    .then((result) => {
      console.log("GET request successful", result);
      const getResult = {
        count: result.length,
        collection: result.map((item) => {
          return {
            _id: item.id,
            name: item.name,
            title: item.title,
            ingredients: item.ingredients,
            infos: item.infos,
            preparation: item.preparation,
            request: {
              type: "GET",
              url: `http://localhost:5000/api/recipes/${item.id}`,
            },
          };
        }),
      };
      response.status(200).json(getResult);
    })
    .catch((err) => {
      console.log("GET request failed", err);
      response.status(500).json({
        error: err,
      });
    });
};
