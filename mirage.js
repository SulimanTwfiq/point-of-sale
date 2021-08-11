import { Server, Model, RestSerializer, hasMany, belongsTo, Factory } from "miragejs"
import { randomIntFromInterval } from "utills/common"
import faker from "faker"
export function makeServer({ environment } = {}) {
  return new Server({
    // environment,
    serializers: {
      application: RestSerializer,
      menu: RestSerializer.extend({
        include: ["meals"],
        embed: true,
      }),
    },

    models: {
      menu: Model.extend({
        meals: hasMany(),
      }),
      meal: Model.extend({
        menu: belongsTo(),
      }),
    },

    factories: {
      meal: Factory.extend({
        name(i) {
          const numberOfWords = randomIntFromInterval(1, 4)
          const dishName = [...Array(numberOfWords).keys()].map(() => faker.lorem.word()).join(" ")
          return dishName
        },
        price() {
          return randomIntFromInterval(0, 50)
        },
        bowlsAvailable() {
          return randomIntFromInterval(0, 1000)
        },
      }),
    },
    seeds(server) {
      let hotDishes = server.create("menu", { name: "Hot Dishes" })
      let coldDishes = server.create("menu", { name: "Cold Dishes" })
      let soup = server.create("menu", { name: "Soup" })
      let grill = server.create("menu", { name: "Grill" })
      let appetizer = server.create("menu", { name: "Appetizer" })
      let Dessert = server.create("menu", { name: "Dessert" })

      server.createList("meal", 10, {
        menu: hotDishes,
        imagesUnsplashCollectionId: "1117933",
      })
      server.createList("meal", 4, {
        menu: coldDishes,
        imagesUnsplashCollectionId: "1117933",
      })
      server.createList("meal", 12, {
        menu: soup,
        imagesUnsplashCollectionId: "7770560",
      })
      server.createList("meal", 14, {
        menu: grill,
        imagesUnsplashCollectionId: "2504231",
      })
      server.createList("meal", 3, {
        menu: appetizer,
        imagesUnsplashCollectionId: "1591989",
      })
      server.createList("meal", 1, {
        menu: Dessert,
        imagesUnsplashCollectionId: "8914877",
      })
    },

    routes() {
      this.namespace = "api"
      this.timing = 1500
      this.resource("menu")
      this.resource("meal")
      this.namespace = "" // or this.namespace = "/"
      this.passthrough()
    },
  })
}
