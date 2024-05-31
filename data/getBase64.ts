import { getPlaiceholder } from "plaiceholder";
import { ImagesResults, Photo } from "@/models/Images";

async function getBase64(imageUrl: string) {
  try {
    const buffer = await fetch(imageUrl).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    );
    const { base64 } = await getPlaiceholder(buffer);

    return base64;
  } catch (err) {
    console.error('Error generating base64:', err);
    return undefined;
  }
}
 
export default async function addBlurredDataUrls(images: ImagesResults): Promise<Photo[]> {
  const base64Promises = images.photos.map(photo => getBase64(photo.src.large));
  const base64Results = await Promise.all(base64Promises);

  const photosWithBlur: Photo[] = images.photos.filter((photo, i) => {
    photo.blurredDataUrl = base64Results[i];
    return photo;
  });

  return photosWithBlur;
}
