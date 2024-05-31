'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Photo as Pic } from '@/models/Images';

interface PhotoProps {
  image: Pic;
}

export default function Photo({ image }: PhotoProps) {
  const { src, alt, blurredDataUrl } = image;

  const ratio = image.height / image.width;
  const galleryHeight = Math.ceil(300 * ratio);
  const photoSpans = Math.ceil(galleryHeight / 10) + 1;

  const href = `/results/image-${image.id}`;

  return (
    <>
      <div
        className="w-[300px] justify-self-center"
        style={{ gridRow: `span ${photoSpans}` }}
      >
        <div className="grid place-content-center">
          <Link href={href}>
            <Image
              src={src.large}
              alt={alt}
              width={300}
              height={galleryHeight}
              sizes="300px"
              placeholder="blur"
              blurDataURL={blurredDataUrl}
              className="rounded-medium cursor-pointer transition duration-300 hover:opacity-75"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
