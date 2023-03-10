import { FullBook } from "./types.ts";

export async function getBook(id: string){
  const res = await fetch(`http://libgen.is/json.php?ids=${id}&fields=*`)
  const data = await res.json() as FullBook[]

  console.log(data)
  
  return data[0]
}