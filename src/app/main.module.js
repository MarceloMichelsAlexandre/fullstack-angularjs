import angular from "angular";

import { default as uiRouter } from "@uirouter/angularjs";
import diretivas from "./diretivas";

import { mainConfig } from "./main/config";
import { clienteConfig } from "./clientes/config";
import { itemConfig } from "./itens/config";
import { ordemServicoConfig } from "./os/config";
import { corConfig } from "./cores/config";
import { pedidoConfig } from "./pedidos/config";

export default angular
  .module("app", [uiRouter, diretivas])
  .config(mainConfig)
  .config(clienteConfig)
  .config(itemConfig)
  .config(ordemServicoConfig)
  .config(corConfig)
  .config(pedidoConfig).name;
