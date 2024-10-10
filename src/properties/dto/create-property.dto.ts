import { Prisma } from '@prisma/client';

export interface CreateProperty extends Prisma.propiedadesCreateInput {
  tipo: number;
  nombre: string;
  direccion: string;
  latitud: number;
  longitud: number;
  ciudades: string;
  direccionPub: string;
  latitudPub: number;
  longitudPub: number;
  distancia: string;
  libre: string;

  isPetFriendly: boolean;
}
