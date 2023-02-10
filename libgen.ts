import * as libgen from "npm:libgen";
import { FullBook } from "./types.ts";

export async function searchBook(query: string) {
  const options = {
    mirror: "http://gen.lib.rus.ec",
    query: query,
    count: 20,
    // sort_by: "year",
    // reverse: true,
  };

  try {
    const data = await libgen.search(options) as FullBook[];
    data.map(book=>book.coverurl = `http://libgen.is${book.coverurl}`)
    console.log(data)
  } catch (err) {
    console.error(err);
  }
}

export async function getBook(id: string){
  const res = await fetch(`http://libgen.is/json.php?ids=${id}&fields=*`)
  const data = await res.json() as FullBook[]

  console.log(data)
  
  return data[0]
}