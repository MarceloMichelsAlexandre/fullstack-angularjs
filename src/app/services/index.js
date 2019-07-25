import angular from "angular";
import ClienteService from "./cliente.service";
import ItemService from "./item.service";
import OSService from "./os.service";
import CorService from "./cor.service";
import PedidoService from "./pedido.service";

export default angular
  .module("services", [])
  .service("clienteService", ClienteService)
  .service("itemService", ClienteService)
  .service("osService", OSService)
  .service("corService", CorService)
  .service("pedidoService", PedidoService).name;
