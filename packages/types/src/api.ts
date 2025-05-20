import { z } from 'zod';

export const ErrorResponse = z.object({
  statusCode: z.number(),
  message: z.string(),
  error: z.string(),
  timestamp: z.string().datetime(),
  path: z.string(),
});

export type ErrorResponse = z.infer<typeof ErrorResponse>;

export const PaginatedResponse = <T extends z.ZodTypeAny>(schema: T) =>
  z.object({
    data: z.array(schema),
    meta: z.object({
      total: z.number(),
      page: z.number(),
      limit: z.number(),
      totalPages: z.number(),
    }),
  });

export type PaginatedResponse<T> = {
  data: T[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
};

export const SortOrder = z.enum(['asc', 'desc']);
export type SortOrder = z.infer<typeof SortOrder>;

export const QueryParams = z.object({
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(10),
  sortBy: z.string().optional(),
  order: SortOrder.default('asc'),
  search: z.string().optional(),
});

export type QueryParams = z.infer<typeof QueryParams>;
