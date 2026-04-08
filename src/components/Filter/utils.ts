import { FilterItem } from "./types"

export const chunkArray = (arr: FilterItem[], size: number): FilterItem[][] => {
  const chunks: FilterItem[][] = []
  
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size))
  }  
  return chunks
}
