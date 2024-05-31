import { z } from 'zod';

const ImagesScheme = z.object({
  page: z.number(),
  per_page: z.number(),
  prev_page: z.string().optional(),
  next_page: z.string().optional(),
  total_results: z.number(),
});

const PhotosScheme = z.object({
  id: z.number(),
  width: z.number(),
  height: z.number(),
  url: z.string(),
  src: z.object({
    large: z.string(),
  }),
  alt: z.string(),
  blurredDataUrl: z.string().optional(),
});

export const ImagesSchemeWithPhotos = ImagesScheme.extend({
  photos: z.array(PhotosScheme)
});

export type Photo = z.infer<typeof PhotosScheme>

export type ImagesResults = z.infer<typeof ImagesSchemeWithPhotos>

