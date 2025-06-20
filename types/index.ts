import { z } from 'zod';
import { inserProductShema } from '@/lib/validators';

export type Product = z.infer<typeof inserProductShema> & {
    id: string;
    rating: string;
    createdAt: Date;
};