import ListController from "./list.controller";
import FormController from "./form.controller";

export const corConfig = $stateProvider => {
  $stateProvider
    .state("app.cor", {
      template: require("@views/default.html"),
      url: "cores",
      redirectTo: "app.cor.list"
    })
    .state("app.cor.list", {
      template: require("@views/cores/list.html"),
      url: "/list",
      controller: ListController,
      controllerAs: "vm"
    })
    .state("app.cor.new", {
      template: require("@views/cores/form.html"),
      url: "/new",
      controller: FormController,
      controllerAs: "vm"
    })
    .state("app.cor.edit", {
      template: require("@views/cores/form.html"),
      url: "/{id}",
      controller: FormController,
      controllerAs: "vm"
    });
};

corConfig.$inject = ["$stateProvider"];
