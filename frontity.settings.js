const settings = {
  "name": "car-app",
  "state": {
    "frontity": {
      "url": "https://dev-ft-car-app.pantheonsite.io/",
      "title": "Un Blog de carros",
      "description": "Otro blog de carros :)"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Noticias",
              "/category/noticias/"
            ],

            [
              "Eventos",
              "/eventos/"
            ],
            [
              "Mis autos",
              "/autos/"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://dev-ft-car-app.pantheonsite.io/wp-json/",
          "postTypes":[
            {
              type:"autos",
              endpoint:"autos",
              archive: "/autos"
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
