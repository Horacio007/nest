import { Brand } from 'src/brands/entities/brand.entity';
import { v7 as uuid } from 'uuid';

export const BRANDS_SEED:Brand[] = [
    {
        id: uuid(),
        name: 'Jeep',
        createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'Tesla',
        createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'Volkswagen',
        createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'Toyota',
        createdAt: new Date().getTime()
    }
];