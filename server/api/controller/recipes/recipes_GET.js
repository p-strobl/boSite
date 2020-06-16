const Recipe = require("../../models/recipe");

module.exports = (request, response) => {
  Recipe.find()
    .select("_id category title subtitle ingredients infos preparation images")
    .exec()
    .then((result) => {
      console.log("result", result);
      const getResult = {
        count: result.length,
        collection: result.map((item) => {
          return {
            _id: item.id,
            category: item.category,
            title: item.title,
            subtitle: item.subtitle,
            ingredients: item.ingredients,
            infos: item.infos,
            preparation: item.preparation,
            images: item.images,
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
