'use client';

import Image from 'next/image';
import { fetchImage } from '@/data/fetchImage';
import Loading from './Loading';
import { useQuery } from "@tanstack/react-query";
import { useRouter } from 'next/navigation';

export default function SingleImage({ params: { id } }: { params: { id: string } }) {  
  const router = useRouter();

  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await fetchImage(+id),
    queryKey: ["image"],
  });

  if (isLoading) return <Loading />;
  if (isError) return (
    <section className="py-20">
      <div className="container">
        <h1>Image not found</h1>
      </div>
    </section>
  );

  if (!data) return;

  const { src, alt } = data;

  return (
    <section className="py-20">
      <div className="container">
        {window.history.length > 1 && (
          <div className="mb-10">
            <button 
              className="transition duration-300 cursor-pointer hover:text-cyan" 
              onClick={() => router.back()}
            >
              ← Back
            </button>
          </div>
        )}

        <Image 
          src={src.large} 
          alt={alt} 
          width={0}
          height={0}
          sizes="100vw"
          className="mx-auto w-fit"
        />
      </div>
    </section>
  );
}
