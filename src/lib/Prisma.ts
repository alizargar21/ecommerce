import { PrismaClient } from '@prisma/client';
import type * as PrismaType from '@prisma/client';
export const pc = new PrismaClient();
export type { PrismaType };
