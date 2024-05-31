const pexelsApiKey = process.env.NEXT_PUBLIC_PEXELS_API_KEY;

export async function fetchImage(id: number) {
  const URL = `https://api.pexels.com/v1/photos/${id}`;

  const response = await fetch(URL, {
    headers: {
      Authorization: pexelsApiKey as string,
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch image');
  }

  const data = await response.json();
  return data;
}
