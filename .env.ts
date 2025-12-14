import { z } from "zod";

export const env = {
  DATABASE_URL: process.env.DATABASE_URL as string,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET as string,
};
