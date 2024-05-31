import type { ImagesResults } from "@/models/Images";

function getPageNumber(url: string) {
  const { searchParams } = new URL(url);
  return searchParams.get('page');
}

export default function getPrevNextPages(images: ImagesResults) {
  const { prev_page, next_page, total_results, per_page } = images;

  let prevPage = prev_page 
    ? getPageNumber(prev_page)
    : null;
    
  let nextPage = next_page 
    ? getPageNumber(next_page)
    : null;
  
  let totalPages = total_results % per_page 
    ? Math.ceil(total_results / per_page)
    : (total_results / per_page) + 1;

  if (prevPage && (parseInt(prevPage) + 5) < totalPages) {
    nextPage = (parseInt(prevPage) + 5).toString();
  }
  
  if (nextPage && parseInt(nextPage) >= totalPages) {
    nextPage = null;
  }

  return { prevPage, nextPage };
}
