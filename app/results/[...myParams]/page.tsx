import { Metadata } from 'next';
import Photos from "@/app/components/Photos";
import SingleImage from "@/app/components/SingleImage";

type Props = {
  params: {
    myParams: string | undefined;
  }
}

export async function generateMetadata({ params: { myParams } }: Props): Promise<Metadata> {
  const isSingleImage = myParams?.length === 1 && myParams[0].startsWith('image-');
  if (isSingleImage) {
    return {
      title: `${myParams[0]}`
    }
  }

  const topic = myParams?.[0] ?? 'curated';
  const page = myParams && myParams.length > 1 ? myParams[1] : '1';

  return {
    title: `Results: for ${topic} — Page ${page}`
  }
}

export default function Results({ params: { myParams } }: Props) {
  if (!myParams) return;

  const isSingleImage = myParams.length === 1 && myParams[0].startsWith('image-');
  if (isSingleImage) {
    const id = myParams[0].replace('image-', '').toString();
  
    return <SingleImage params={ {id: id} } />;
  }

  const topic = myParams[0];
  const page = !isSingleImage && myParams.length > 1 ? myParams[1] : '1';

  return (
    <section className="py-20">
      <div className="container">
        <Photos topic={topic} page={page} />
      </div>
    </section>
  )
}
