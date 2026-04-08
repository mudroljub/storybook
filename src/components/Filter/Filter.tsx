import FilterControls from "./FilterControls/FilterControls";
import FilterTable from "./FilterTable/FilterTable";
import { FilterData, FilterPosition } from "./types";

interface FilterProps {
  data: FilterData;
  position: FilterPosition,
}

const Filter = ({ data, position }: FilterProps) => {
  const controls = (
    <FilterControls 
      key="controls" 
      onShowFiltersClick={() => {}} 
      onSearchChange={() => {}} 
      onReset={() => {}} 
    />
  )
  const table = <FilterTable key="table" data={data} />

  const content = position === FilterPosition.TOP 
    ? [table, controls] 
    : [controls, table]

  return <div>{content}</div>
}

export default Filter