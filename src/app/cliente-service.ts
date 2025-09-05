import { Injectable } from '@angular/core';
import { Clientes } from './cadastro/clientes';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  constructor() {}

  static REPO_CLIENTES = '_CLIENTES';

  salvar(cliente: Clientes) {
    console.log(cliente);
  }

  obterStorage(): Clientes[] {
    const respositorioClientes = localStorage.getItem(ClienteService.REPO_CLIENTES);
    if (respositorioClientes) {
      const clientes: Clientes[] = JSON.parse(respositorioClientes);
      return clientes;
    }

    const clientes: Clientes[] = [];
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(clientes));
    return clientes;
  }
}
