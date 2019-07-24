import ListController from "./list.controller";
import FormController from "./form.controller";

export const pedidoConfig = $stateProvider => {
  $stateProvider
    .state("app.pedido", {
      template: require("@views/default.html"),
      url: "pedidos",
      redirectTo: "app.pedido"
    })
    .state("app.pedido.list", {
      template: require("@views/pedidos/list.html"),
      url: "/list",
      controller: ListController,
      controllerAs: "vm"
    })
    .state("app.pedido.new", {
      template: require("@views/pedidos/form.html"),
      url: "/new",
      controller: FormController,
      controllerAs: "vm"
    })
    .state("app.pedido.edit", {
      template: require("@views/pedidos/form.html"),
      url: "/{id}",
      controller: FormController,
      controllerAs: "vm"
    });
};

pedidoConfig.$inject = ["$stateProvider"];
