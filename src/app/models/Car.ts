import { Rent } from './Rent';

export class Car {
    id: number;
    brand: string;
    model: string;
    regPlate: string;
    active: boolean;
    image: string;
    rents: Rent[];
}
