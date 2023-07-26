import { Comparavel } from "./comparavel";
import { Imprimivel } from "./imprimivel";

// Você pode estender quantas interfaces você quiser,
// porém só uma classe
export interface Modelo<T> extends Imprimivel, Comparavel<T> {}
