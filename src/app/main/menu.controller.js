export default class MenuController {
  constructor() {
    this.itens = [
      {
        state: "app.dashboard",
        icon: "icon-home",
        name: "Dashboard"
      },
      {
        state: "app.cliente",
        icon: "icon-users",
        name: "clientes"
      },
      {
        state: "app.item",
        icon: "icon-shopping-cart",
        name: "Itens"
      },
      {
        state: "app.pedido",
        icon: "icon-file",
        name: "Pedidos"
      },
      {
        state: "app.os",
        icon: "icon-file",
        name: "Ordens de Serviço"
      }
    ];
  }
}
