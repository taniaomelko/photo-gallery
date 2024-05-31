import Link from "next/link";

type Props = {
  topic: string,
  page: string | undefined,
  prevPage: string | null,
  nextPage: string | null,
  totalResults: number,
  perPage: number,
}

export default function Pagination({ topic, page, prevPage, nextPage, totalResults, perPage }: Props) {
  if (!page) return;

  let currentPage = +page;
  const pagesAll = Math.ceil(totalResults / perPage);
  
  if (!prevPage && !nextPage) return; 
  if (currentPage > pagesAll) return;

  const pageNums = [];
  const maxPagesToShow = 5;
  
  const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  const endPage = Math.min(pagesAll, startPage + maxPagesToShow - 1);

  if (endPage - startPage + 1 < maxPagesToShow && startPage > 1) {
    const adjustedStartPage = Math.max(1, endPage - maxPagesToShow + 1);
    for (let i = adjustedStartPage; i <= endPage; i++) {
      pageNums.push(i);
    }
  } else {
    for (let i = startPage; i <= endPage; i++) {
      pageNums.push(i);
    }
  }

  return (
    <div className="flex gap-10 justify-center">
      {currentPage > 1 && pagesAll > maxPagesToShow && (
        <Link 
          href={`/results/${topic}/${currentPage - 1}`}
          className="transition duration-300 hover:text-cyan"
        >
          Prev
        </Link>
      )}
      {pageNums.map(num => (
        currentPage === num
          ? <span key={num} className="text-cyan">{num}</span>
          : (
            <Link 
              href={`/results/${topic}/${num}`} 
              key={num}
              className="transition duration-300 hover:text-cyan"
            >
              {num}
            </Link>
          )
      ))}
      {currentPage < pagesAll && pagesAll > maxPagesToShow && (
        <Link 
          href={`/results/${topic}/${+currentPage + 1}`} 
          className="transition duration-300 hover:text-cyan"
        >
          Next
        </Link>
      )}
    </div>
  )
}

