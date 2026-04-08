import FilterControls from "./components/FilterControls/FilterControls";
import FilterTable from "./components/FilterTable/FilterTable";
import Triangle from "./components/Triangle/Triangle";
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
  const triangle = <Triangle key="triangle" isDown={position === FilterPosition.TOP} />

  const content = position === FilterPosition.TOP 
    ? [table, triangle, controls] 
    : [controls, triangle, table]

  return <div>{content}</div>
}

export default Filter