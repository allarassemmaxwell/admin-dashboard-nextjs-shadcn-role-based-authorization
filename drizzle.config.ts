// drizzle.config.ts 
import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
import { drizzle } from 'drizzle-orm/neon-http';

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
