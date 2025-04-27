import { Healthprogram } from "./healthprogram";

export interface ClientI {
  id: number;
  name: string;
  healthprograms: Healthprogram[];
}
