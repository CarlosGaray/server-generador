import * as mongodb from 'mongodb';

export interface Schedule {
    codigo: string,
    seccion: string,
    nombre: string,
    ciclo: string,
    dia: string,
    horainicio: string,
    horafin: string,
    tipo: string,
    profesor: string
}