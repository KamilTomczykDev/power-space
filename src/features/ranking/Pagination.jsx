import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/config";

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  }
  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  if (count <= PAGE_SIZE) return null;

  return (
    <tr className="flex border-t-2 border-stone-400 bg-stone-800 p-2 text-[0.5rem] text-white md:p-4 md:text-base">
      <td className="flex w-full items-center justify-between">
        <p>
          Showing{" "}
          <span className="font-semibold">
            {(currentPage - 1) * PAGE_SIZE + 1}
          </span>{" "}
          to{" "}
          <span className="font-semibold">
            {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
          </span>{" "}
          of
          <span className="font-semibold"> {count}</span> results
        </p>
        <div className="flex gap-2">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="flex items-center gap-2 rounded-md px-2 py-1 transition-all duration-100 hover:bg-green-500 disabled:opacity-60"
          >
            <HiChevronLeft size={20} />
            <span>Previous</span>
          </button>
          <button
            onClick={nextPage}
            disabled={currentPage === pageCount}
            className="flex items-center gap-2 rounded-md px-2 py-1 transition-all duration-100 hover:bg-green-500 disabled:opacity-60"
          >
            <span>Next</span>
            <HiChevronRight size={20} />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default Pagination;
