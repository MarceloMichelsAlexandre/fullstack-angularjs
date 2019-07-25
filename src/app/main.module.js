import angular from "angular";

import { default as uiRouter } from "@uirouter/angularjs";
import diretivas from "./diretivas";
import services from "./services";

import { mainConfig } from "./main/config";
import { clienteConfig } from "./clientes/config";
import { itemConfig } from "./itens/config";
import { osConfig } from "./os/config";
import { corConfig } from "./cores/config";
import { pedidoConfig } from "./pedidos/config";

export default angular
  .module("app", [uiRouter, diretivas, services])
  .config(mainConfig)
  .config(clienteConfig)
  .config(itemConfig)
  .config(osConfig)
  .config(corConfig)
  .config(pedidoConfig).name;
