import ListController from "./list.controller";
import FormController from "./form.controller";

export const ordemServicoConfig = $stateProvider => {
  $stateProvider
    .state("app.ordemServico", {
      template: require("@views/default.html"),
      url: "os",
      redirectTo: "app.ordemServico"
    })
    .state("app.ordemServico.list", {
      template: require("@views/os/list.html"),
      url: "/list",
      controller: ListController,
      controllerAs: "vm"
    })
    .state("app.ordemServico.new", {
      template: require("@views/os/form.html"),
      url: "/new",
      controller: FormController,
      controllerAs: "vm"
    })
    .state("app.ordemServico.edit", {
      template: require("@views/os/form.html"),
      url: "/{id}",
      controller: FormController,
      controllerAs: "vm"
    });
};

ordemServicoConfig.$inject = ["$stateProvider"];
