import { Server, Model, RestSerializer, hasMany, belongsTo } from "miragejs"

export function makeServer({ environment = "test" } = {}) {
  return new Server({
    environment,
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

    seeds(server) {
      let burgers = server.create("menu", { name: "burgers" })
      let pizzas = server.create("menu", { name: "pizzas" })

      server.create("meal", { name: "meat pizza", price: 10, menu: pizzas })
      server.create("meal", { name: "chicken pizza", price: 12, menu: pizzas })

      //   burgers.createMeal({ mealName: "hey!" })
      //   pizzas.createMeal({ mealName: "hey man" })
    },

    routes() {
      this.namespace = "api"
      this.resource("menu")
      this.resource("meal")
    },
  })
}
