import { v4 as uuid } from 'uuid';

export class Clientes {
  id?: string;
  nome?: string;
  cpf?: string;
  dataNascimento?: string;
  email?: string;

  static newCliente() {
    const cliente = new Clientes();
    cliente.id = uuid();

    return cliente;
  }
}
