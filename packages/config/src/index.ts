import { z } from 'zod';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const Environment = z.enum(['development', 'test', 'production']);
type Environment = z.infer<typeof Environment>;

const DatabaseConfigSchema = z.object({
  url: z.string().min(1, 'Database URL is required'),
  ssl: z.boolean().default(false),
  logging: z.boolean().default(false),
});

type DatabaseConfig = z.infer<typeof DatabaseConfigSchema>;

const JwtConfigSchema = z.object({
  secret: z.string().min(32, 'JWT secret must be at least 32 characters'),
  expiresIn: z.string().default('15m'),
  refreshSecret: z.string().min(32, 'Refresh token secret must be at least 32 characters'),
  refreshExpiresIn: z.string().default('7d'),
});

type JwtConfig = z.infer<typeof JwtConfigSchema>;

const AppConfigSchema = z.object({
  env: Environment.default('development'),
  port: z.number().default(3000),
  apiPrefix: z.string().default('api'),
  corsOrigin: z.string().or(z.array(z.string())).default('*'),
  debug: z.boolean().default(false),
});

type AppConfig = z.infer<typeof AppConfigSchema>;

const ConfigSchema = z.object({
  app: AppConfigSchema,
  database: DatabaseConfigSchema,
  jwt: JwtConfigSchema,
});

type Config = z.infer<typeof ConfigSchema>;

// Parse and validate environment variables
const config: Config = {
  app: {
    env: (process.env.NODE_ENV as Environment) || 'development',
    port: parseInt(process.env.PORT || '3000', 10),
    apiPrefix: process.env.API_PREFIX || 'api',
    corsOrigin: process.env.CORS_ORIGIN || '*',
    debug: process.env.DEBUG === 'true',
  },
  database: {
    url: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/user_management',
    ssl: process.env.DATABASE_SSL === 'true',
    logging: process.env.DATABASE_LOGGING === 'true',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'default_jwt_secret_change_in_production',
    expiresIn: process.env.JWT_EXPIRES_IN || '15m', // 15 minutes
    refreshSecret: process.env.JWT_REFRESH_SECRET || 'default_refresh_secret_change_in_production',
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '7d', // 7 days
  },
};

// Validate the configuration
const validatedConfig = ConfigSchema.safeParse(config);

if (!validatedConfig.success) {
  console.error('❌ Invalid configuration:', validatedConfig.error.format());
  process.exit(1);
}

export { validatedConfig as config };
export type { Config, AppConfig, DatabaseConfig, JwtConfig, Environment };
