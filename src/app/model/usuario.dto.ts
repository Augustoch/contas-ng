import { Perfil } from './perfil';

export interface UsuarioDTO {
  usuario: string;
  senha: string;
  perfis: Array<Perfil>;
}
