import { Perfil } from "./perfil";

export interface TokenDTO{
    token: string;
    tipo: string; 
    perfis: Array<Perfil>;
}