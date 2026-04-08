export type FilterItem = {
  key: string,
  label?: string,
  imgSrc?: string,
};

export type FilterData = Map<string, FilterItem[]>
