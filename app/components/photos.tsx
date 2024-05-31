import { fetchImages } from "@/data/fetchImages";
import Photo from "./Photo";
import addBlurredDataUrls from "@/data/getBase64";
import { ImagesResults, Photo as Pic } from "@/models/Images";
import getPrevNextPages from "@/data/getPrevNextPages";
import Pagination from "./Pagination";

type Props = {
  topic?: string | undefined;
  page?: string | undefined;
}

export default async function Photos({ topic = 'curated', page }: Props) {
  let URL;
  if (topic == 'curated' && page) {
    URL = `https://api.pexels.com/v1/curated?page=${page}`;
  } else if (topic === 'curated') {
    URL = `https://api.pexels.com/v1/curated`;
  } else if (!page) {
    URL = `https://api.pexels.com/v1/search?query=${topic}`;
  } else {
    URL = `https://api.pexels.com/v1/search?query=${topic}&page=${page}`;
  }

  const images: ImagesResults | undefined = await fetchImages({URL});  

  if (!images || images.per_page === 0 || images.photos.length === 0) {
    return (
      <h1>No images found.</h1>
    );
  } 

  const imagesWithBlur = await addBlurredDataUrls(images);
  
  const { prevPage, nextPage } = getPrevNextPages(images);
  const {total_results, per_page} = images;

  const paginationProps = { topic, page, prevPage, nextPage, totalResults: total_results, perPage: per_page };

  return (
    <>
      {!!imagesWithBlur.length && (
        <>
          {topic !== 'curated' && (
            <div className="mb-20">
              <h1 className="text-20 font-bold">
                {topic.slice(0, 1).toUpperCase() + topic.slice(1)} Images
              </h1>
            </div>
          )} 

          <div className="-mx-10 grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] auto-rows-[10px]">
            {imagesWithBlur.map((image: Pic) => (
              <Photo key={image.id} image={image} />
            ))}
          </div>

          <div className="mt-20">
            <Pagination {...paginationProps} />
          </div>
        </>
      )}
    </>
  );
}
