import { ImagesResults, ImagesSchemeWithPhotos } from "@/models/Images";

const pexelsApiKey = process.env.NEXT_PUBLIC_PEXELS_API_KEY;

type Props = {
  URL: string
}

export async function fetchImages({ URL }: Props): Promise<ImagesResults | undefined> {
  return fetch(URL, {
    headers: {
      Authorization: pexelsApiKey as string,
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const parsedData = ImagesSchemeWithPhotos.parse(data);
    if (parsedData.total_results === 0) {
      return undefined;
    }
    return parsedData;
  })
  .catch(error => {
    console.error('Error fetching images:', error);
    throw error;
  });
}
