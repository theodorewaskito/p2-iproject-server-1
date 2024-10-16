## Food Recipe App Server

### REGISTER

URL
```
/register
```

Method
```
POST 
```

_Request Params_
```
None
```

_Request Header_
```
None
```

_Request Body_
```
{
  "email": <email> (validation: required, uniq, email format),
  "password": <password> (validation: required, length min 5),
  "phoneNumber": <phoneNumber>
}
```
_Response (201 - Ok)_
```
{
  "email": <email>
}
```
_Response (400 - Validation Error)_
```
{
  "message": [
    "email is required",
    ...
  ]
}
```
_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```

### LOGIN

URL
```
/login
```

Method
```
POST 
```

_Request Params_
```
None
```

_Request Header_
```
None
```

_Request Body_
```
{
    "email": <email>,
    "password": <password>
}
```

_Response (200 - Ok)_
```
{
  "access_token": <token>
}
```
_Response (401 - Unauthorized)_
```
{
  "message": "Username/Password is wrong"
}
```
_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```


### SHOW FAVOURITE

URL
```
/favourite
```

Method
```
GET
```

_Request Params_
```
None
```

_Request Header_
```
{
  "access_token": <token>
}
```

_Request Body_
```
None
```

_Response (200 - Ok)_
```
{
  "UserId": <UserId>,
  "recipeName": <recipeName>,
  "recipeImage": <recipeImage>,
}
```
_Response (403 - Forbidden)_
```
{
  "message": "Forbidden to Access"
}
```
_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```

### ADD FAVOURITE

URL
```
/favourite/addFav
```

Method
```
POST
```

_Request Params_
```
None
```

_Request Header_
```
{
  "access_token": <token>
}
```

_Request Body_
```
{
  "recipeName": <recipeName>,
  "recipeImage": <recipeImage>
}
```

_Response (201 - Ok)_
```
{
  "UserId": <UserId>,
  "recipeName": <recipeName>,
  "recipeImage": <recipeImage>,
}
```
_Response (403 - Forbidden)_
```
{
  "message": "Forbidden to Access"
}
```
_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```


### SEARCH RECIPE

URL
```
/recipe/search
```

Method
```
GET
```

_Request Params_
```
None
```

_Request Header_
```
None
```

_Request Body_
```
None
```

_Request Query_
```
{
  "keyword": <keyword>
}
```

_Response (200 - Ok)_
```
[
    {
        "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b79327d05b8e5b838ad6cfd9576b30b6",
            "label": "Chicken Vesuvio",
            "image": "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
            "source": "Serious Eats",
            "url": "http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html",
            "shareAs": "http://www.edamam.com/recipe/chicken-vesuvio-b79327d05b8e5b838ad6cfd9576b30b6/chicken",
            "yield": 4,
            "dietLabels": [
                "Low-Carb"
            ],
            "healthLabels": [
                "Mediterranean",
                "Dairy-Free",
                "Gluten-Free",
                "Wheat-Free",
                "Egg-Free",
                "Peanut-Free",
                "Tree-Nut-Free",
                "Soy-Free",
                "Fish-Free",
                "Shellfish-Free",
                "Pork-Free",
                "Red-Meat-Free",
                "Crustacean-Free",
                "Celery-Free",
                "Mustard-Free",
                "Sesame-Free",
                "Lupine-Free",
                "Mollusk-Free",
                "Kosher"
            ],
            "cautions": [
                "Sulfites"
            ],
            "ingredientLines": [
                "1/2 cup olive oil",
                "5 cloves garlic, peeled",
                "2 large russet potatoes, peeled and cut into chunks",
                "1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)",
                "3/4 cup white wine",
                "3/4 cup chicken stock",
                "3 tablespoons chopped parsley",
                "1 tablespoon dried oregano",
                "Salt and pepper",
                "1 cup frozen peas, thawed"
            ],
            "ingredients": [
                {
                    "text": "1/2 cup olive oil",
                    "quantity": 0.5,
                    "measure": "cup",
                    "food": "olive oil",
                    "weight": 108,
                    "foodCategory": "Oils",
                    "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                    "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                },
                {
                    "text": "5 cloves garlic, peeled",
                    "quantity": 5,
                    "measure": "clove",
                    "food": "garlic",
                    "weight": 15,
                    "foodCategory": "vegetables",
                    "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                    "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                },
                {
                    "text": "2 large russet potatoes, peeled and cut into chunks",
                    "quantity": 2,
                    "measure": "<unit>",
                    "food": "russet potatoes",
                    "weight": 738,
                    "foodCategory": "vegetables",
                    "foodId": "food_brsjy86bq09pzgbmr4ri8bnohrf7",
                    "image": "https://www.edamam.com/food-img/71b/71b3756ecfd3d1efa075874377038b67.jpg"
                },
                {
                    "text": "1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)",
                    "quantity": 3.5,
                    "measure": "pound",
                    "food": "chicken",
                    "weight": 1587.5732950000001,
                    "foodCategory": "Poultry",
                    "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
                    "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
                },
                {
                    "text": "3/4 cup white wine",
                    "quantity": 0.75,
                    "measure": "cup",
                    "food": "white wine",
                    "weight": 176.39999999999998,
                    "foodCategory": "wines",
                    "foodId": "food_bn44h7baron9ufaoxinmya8l0yye",
                    "image": "https://www.edamam.com/food-img/a71/a718cf3c52add522128929f1f324d2ab.jpg"
                },
                {
                    "text": "3/4 cup chicken stock",
                    "quantity": 0.75,
                    "measure": "cup",
                    "food": "chicken stock",
                    "weight": 180,
                    "foodCategory": "canned soup",
                    "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
                    "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
                },
                {
                    "text": "3 tablespoons chopped parsley",
                    "quantity": 3,
                    "measure": "tablespoon",
                    "food": "parsley",
                    "weight": 11.399999999999999,
                    "foodCategory": "vegetables",
                    "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
                    "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
                },
                {
                    "text": "1 tablespoon dried oregano",
                    "quantity": 1,
                    "measure": "tablespoon",
                    "food": "dried oregano",
                    "weight": 2.9999999997971143,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_bkkw6v3bdf0sqiazmzyuiax7i8jr",
                    "image": "https://www.edamam.com/food-img/1b0/1b0eaffb1c261606e0d82fed8e9747a7.jpg"
                },
                {
                    "text": "Salt and pepper",
                    "quantity": 0,
                    "measure": null,
                    "food": "Salt",
                    "weight": 17.720239769998784,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                    "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                },
                {
                    "text": "Salt and pepper",
                    "quantity": 0,
                    "measure": null,
                    "food": "pepper",
                    "weight": 8.860119884999392,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                    "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                },
                {
                    "text": "1 cup frozen peas, thawed",
                    "quantity": 1,
                    "measure": "cup",
                    "food": "frozen peas",
                    "weight": 134,
                    "foodCategory": "vegetables",
                    "foodId": "food_aqrct01b4nxw5eaxoo8woaxc3xd7",
                    "image": "https://www.edamam.com/food-img/c91/c9130a361d5c5b279bf48c69e2466ec2.jpg"
                }
            ],
            "calories": 4228.043058200812,
            "totalWeight": 2976.8664549004047,
            "totalTime": 60,
            "cuisineType": [
                "american"
            ],
            "mealType": [
                "lunch/dinner"
            ],
            "dishType": [
                "main course"
            ],
            "totalNutrients": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 4228.043058200812,
                    "unit": "kcal"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 274.4489059026023,
                    "unit": "g"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 62.497618998656044,
                    "unit": "g"
                },
                "FATRN": {
                    "label": "Trans",
                    "quantity": 1.047163345382,
                    "unit": "g"
                },
                "FAMS": {
                    "label": "Monounsaturated",
                    "quantity": 147.39060633938868,
                    "unit": "g"
                },
                "FAPU": {
                    "label": "Polyunsaturated",
                    "quantity": 47.35051984782951,
                    "unit": "g"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 175.96206666631727,
                    "unit": "g"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 19.83181033081862,
                    "unit": "g"
                },
                "SUGAR": {
                    "label": "Sugars",
                    "quantity": 16.239344767255698,
                    "unit": "g"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 230.72689680763318,
                    "unit": "g"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 815.06238045,
                    "unit": "mg"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 6888.614561646296,
                    "unit": "mg"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 400.0807431570531,
                    "unit": "mg"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 478.1771035229573,
                    "unit": "mg"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 5918.1808352043345,
                    "unit": "mg"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 22.546435238210286,
                    "unit": "mg"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 18.341531378501646,
                    "unit": "mg"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 2231.0712550999992,
                    "unit": "mg"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 635.3716670147774,
                    "unit": "µg"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 103.72979744959534,
                    "unit": "mg"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 1.7264528338354403,
                    "unit": "mg"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 1.9119200245119274,
                    "unit": "mg"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 86.90416982948213,
                    "unit": "mg"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 6.886357390963229,
                    "unit": "mg"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 276.2712108159691,
                    "unit": "µg"
                },
                "FOLFD": {
                    "label": "Folate (food)",
                    "quantity": 276.2712108159691,
                    "unit": "µg"
                },
                "FOLAC": {
                    "label": "Folic acid",
                    "quantity": 0,
                    "unit": "µg"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 3.34660450586,
                    "unit": "µg"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 2.1590996812000003,
                    "unit": "µg"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 19.62869476856695,
                    "unit": "mg"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 353.31486385948267,
                    "unit": "µg"
                },
                "WATER": {
                    "label": "Water",
                    "quantity": 1738.7966568296217,
                    "unit": "g"
                }
            },
            "totalDaily": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 211.4021529100406,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 422.2290860040035,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 312.48809499328024,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 58.65402222210575,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 79.32724132327448,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 461.4537936152663,
                    "unit": "%"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 271.68746015,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 287.0256067352624,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 40.008074315705315,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 113.85169131498982,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 125.9187411745603,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 125.25797354561271,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 166.74119435001495,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 318.7244650142856,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 70.59685189053081,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 115.25533049955037,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 143.8710694862867,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 147.0707711163021,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 543.1510614342633,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 529.7197993048637,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 69.06780270399227,
                    "unit": "%"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 139.44185441083332,
                    "unit": "%"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 14.393997874666669,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 130.85796512377968,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 294.42905321623556,
                    "unit": "%"
                }
            },
            "digest": [
                {
                    "label": "Fat",
                    "tag": "FAT",
                    "schemaOrgTag": "fatContent",
                    "total": 274.4489059026023,
                    "hasRDI": true,
                    "daily": 422.2290860040035,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 62.497618998656044,
                            "hasRDI": true,
                            "daily": 312.48809499328024,
                            "unit": "g"
                        },
                        {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 1.047163345382,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 147.39060633938868,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 47.35051984782951,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        }
                    ]
                },
                {
                    "label": "Carbs",
                    "tag": "CHOCDF",
                    "schemaOrgTag": "carbohydrateContent",
                    "total": 175.96206666631727,
                    "hasRDI": true,
                    "daily": 58.65402222210575,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 19.83181033081862,
                            "hasRDI": true,
                            "daily": 79.32724132327448,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 16.239344767255698,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars, added",
                            "tag": "SUGAR.added",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        }
                    ]
                },
                {
                    "label": "Protein",
                    "tag": "PROCNT",
                    "schemaOrgTag": "proteinContent",
                    "total": 230.72689680763318,
                    "hasRDI": true,
                    "daily": 461.4537936152663,
                    "unit": "g"
                },
                {
                    "label": "Cholesterol",
                    "tag": "CHOLE",
                    "schemaOrgTag": "cholesterolContent",
                    "total": 815.06238045,
                    "hasRDI": true,
                    "daily": 271.68746015,
                    "unit": "mg"
                },
                {
                    "label": "Sodium",
                    "tag": "NA",
                    "schemaOrgTag": "sodiumContent",
                    "total": 6888.614561646296,
                    "hasRDI": true,
                    "daily": 287.0256067352624,
                    "unit": "mg"
                },
                {
                    "label": "Calcium",
                    "tag": "CA",
                    "schemaOrgTag": null,
                    "total": 400.0807431570531,
                    "hasRDI": true,
                    "daily": 40.008074315705315,
                    "unit": "mg"
                },
                {
                    "label": "Magnesium",
                    "tag": "MG",
                    "schemaOrgTag": null,
                    "total": 478.1771035229573,
                    "hasRDI": true,
                    "daily": 113.85169131498982,
                    "unit": "mg"
                },
                {
                    "label": "Potassium",
                    "tag": "K",
                    "schemaOrgTag": null,
                    "total": 5918.1808352043345,
                    "hasRDI": true,
                    "daily": 125.9187411745603,
                    "unit": "mg"
                },
                {
                    "label": "Iron",
                    "tag": "FE",
                    "schemaOrgTag": null,
                    "total": 22.546435238210286,
                    "hasRDI": true,
                    "daily": 125.25797354561271,
                    "unit": "mg"
                },
                {
                    "label": "Zinc",
                    "tag": "ZN",
                    "schemaOrgTag": null,
                    "total": 18.341531378501646,
                    "hasRDI": true,
                    "daily": 166.74119435001495,
                    "unit": "mg"
                },
                {
                    "label": "Phosphorus",
                    "tag": "P",
                    "schemaOrgTag": null,
                    "total": 2231.0712550999992,
                    "hasRDI": true,
                    "daily": 318.7244650142856,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin A",
                    "tag": "VITA_RAE",
                    "schemaOrgTag": null,
                    "total": 635.3716670147774,
                    "hasRDI": true,
                    "daily": 70.59685189053081,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin C",
                    "tag": "VITC",
                    "schemaOrgTag": null,
                    "total": 103.72979744959534,
                    "hasRDI": true,
                    "daily": 115.25533049955037,
                    "unit": "mg"
                },
                {
                    "label": "Thiamin (B1)",
                    "tag": "THIA",
                    "schemaOrgTag": null,
                    "total": 1.7264528338354403,
                    "hasRDI": true,
                    "daily": 143.8710694862867,
                    "unit": "mg"
                },
                {
                    "label": "Riboflavin (B2)",
                    "tag": "RIBF",
                    "schemaOrgTag": null,
                    "total": 1.9119200245119274,
                    "hasRDI": true,
                    "daily": 147.0707711163021,
                    "unit": "mg"
                },
                {
                    "label": "Niacin (B3)",
                    "tag": "NIA",
                    "schemaOrgTag": null,
                    "total": 86.90416982948213,
                    "hasRDI": true,
                    "daily": 543.1510614342633,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin B6",
                    "tag": "VITB6A",
                    "schemaOrgTag": null,
                    "total": 6.886357390963229,
                    "hasRDI": true,
                    "daily": 529.7197993048637,
                    "unit": "mg"
                },
                {
                    "label": "Folate equivalent (total)",
                    "tag": "FOLDFE",
                    "schemaOrgTag": null,
                    "total": 276.2712108159691,
                    "hasRDI": true,
                    "daily": 69.06780270399227,
                    "unit": "µg"
                },
                {
                    "label": "Folate (food)",
                    "tag": "FOLFD",
                    "schemaOrgTag": null,
                    "total": 276.2712108159691,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Folic acid",
                    "tag": "FOLAC",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin B12",
                    "tag": "VITB12",
                    "schemaOrgTag": null,
                    "total": 3.34660450586,
                    "hasRDI": true,
                    "daily": 139.44185441083332,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin D",
                    "tag": "VITD",
                    "schemaOrgTag": null,
                    "total": 2.1590996812000003,
                    "hasRDI": true,
                    "daily": 14.393997874666669,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin E",
                    "tag": "TOCPHA",
                    "schemaOrgTag": null,
                    "total": 19.62869476856695,
                    "hasRDI": true,
                    "daily": 130.85796512377968,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin K",
                    "tag": "VITK1",
                    "schemaOrgTag": null,
                    "total": 353.31486385948267,
                    "hasRDI": true,
                    "daily": 294.42905321623556,
                    "unit": "µg"
                },
                {
                    "label": "Sugar alcohols",
                    "tag": "Sugar.alcohol",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                },
                {
                    "label": "Water",
                    "tag": "WATER",
                    "schemaOrgTag": null,
                    "total": 1738.7966568296217,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                }
            ]
        },
        "_links": {
            "self": {
                "href": "https://api.edamam.com/api/recipes/v2/b79327d05b8e5b838ad6cfd9576b30b6?type=public&app_id=3859f1ed&app_key=d5f7f14ab3b57071ddc3b39526e9961d",
                "title": "Self"
            }
        }
    },
  ...
]
```
_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```

