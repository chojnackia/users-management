import { z } from 'zod';

export const UserRole = z.enum(['USER', 'ADMIN']);
export type UserRole = z.infer<typeof UserRole>;

export const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string().min(2).max(100).nullable(),
  role: UserRole.default('USER'),
  emailVerified: z.boolean().default(false),
  createdAt: z.date().or(z.string().datetime()),
  updatedAt: z.date().or(z.string().datetime()),
});

export type User = z.infer<typeof UserSchema>;

export const CreateUserDto = UserSchema.pick({
  email: true,
  name: true,
  role: true,
}).extend({
  password: z.string().min(8),
});

export type CreateUserDto = z.infer<typeof CreateUserDto>;

export const UpdateUserDto = UserSchema.pick({
  name: true,
  role: true,
}).partial();

export type UpdateUserDto = z.infer<typeof UpdateUserDto>;

export const LoginDto = z.object({
  email: z.string().email(),
  password: z.string().min(1, 'Password is required'),
});

export type LoginDto = z.infer<typeof LoginDto>;

export const AuthResponse = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
  user: UserSchema.omit({ password: true }),
});

export type AuthResponse = z.infer<typeof AuthResponse>;
