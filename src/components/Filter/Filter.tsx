import FilterControls from "./FilterControls/FilterControls";
import FilterTable from "./FilterTable/FilterTable";
import { FilterData } from "./types";

interface FilterProps {
  data: FilterData;
}

const Filter = ({ data }: FilterProps) => {
  return (
    <div>
      <FilterControls
        onShowFiltersClick={() => { }}
        onSearchChange={() => { }}
        onReset={() => { }}
      />
      <FilterTable data={data} />
    </div>
  )
}

export default Filter