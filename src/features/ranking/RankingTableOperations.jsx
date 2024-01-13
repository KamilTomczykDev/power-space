import Filter from "./Filter";
import SortBy from "./SortBy";

function RankingTableOperations() {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <Filter
        filterField="filter"
        options={[
          { value: "all", label: "All" },
          { value: "juniors", label: "Juniors" },
          { value: "seniors", label: "Seniors" },
        ]}
      />
      <SortBy
        options={[
          { value: "score-desc", label: "Sort by score (high first)" },
          { value: "score-asc", label: "Sort by score (low first)" },
          { value: "total-desc", label: "Sort by total (high first)" },
          { value: "total-asc", label: "Sort by total (low first)" },
          { value: "weight-desc", label: "Sort by weight (high first)" },
          { value: "weight-asc", label: "Sort by weight (low first)" },
        ]}
      />
    </div>
  );
}

export default RankingTableOperations;
