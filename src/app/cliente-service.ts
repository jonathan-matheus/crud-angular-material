import { Injectable } from '@angular/core';
import { Clientes } from './cadastro/clientes';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  constructor() {}

  salvar(cliente: Clientes) {
    console.log(cliente);
  }
}
