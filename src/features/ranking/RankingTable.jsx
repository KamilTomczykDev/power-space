import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/config";
import Pagination from "./Pagination";
import RankingRow from "./RankingRow";

function RankingTable({ profiles }) {
  const [searchParams] = useSearchParams();
  const count = profiles.length;

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

  const paginatedProfiles = profiles.slice(startIndex, endIndex);

  return (
    <table className="flex w-full flex-col rounded-b-md rounded-t-md border-1 border-stone-500  shadow-middle shadow-green-800">
      <thead>
        <tr className="grid grid-cols-ranking-table items-center bg-stone-800 p-2 text-center text-[0.7rem] text-white md:p-4 md:text-xl md:font-semibold">
          <td>#</td>
          <td>Username</td>
          <td>Total</td>
          <td>Score</td>
          <td>Age</td>
          <td>Weight</td>
        </tr>
      </thead>
      <tbody>
        {paginatedProfiles.map((profile, index) => (
          <RankingRow
            profile={profile}
            index={index + PAGE_SIZE * (currentPage - 1)}
            key={profile.id}
          />
        ))}
      </tbody>
      <tfoot>
        <Pagination
          count={count}
          currentPage={currentPage}
          pageCount={pageCount}
        />
      </tfoot>
    </table>
  );
}

export default RankingTable;
