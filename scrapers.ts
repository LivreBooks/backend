import { DOMParser } from "https://deno.land/x/deno_dom@v0.1.36-alpha/deno-dom-wasm.ts";

export async function getBooks(subCategoryId: string, count = 50) {
  const searchPageLink =
    `http://libgen.is/search.php?req=topicid${subCategoryId}&open=0&res=${count}&view=detailed&phrase=1`;
  console.log(searchPageLink);
  const res = await fetch(searchPageLink);
  const html = await res.text();

  const document = new DOMParser().parseFromString(html, "text/html");

  if (document === null) return "An Error Occured";

  const imgSrcRegex = /<img.*?src="(.*?)".*?>/;
  const linkHrefRegex = /href="([^"]*)"/;
  const tables = Array.from(
    document.querySelectorAll(
      'table[rules="cols"][width="100%"][border="0"]',
    ),
  ).filter((table) =>
    table.querySelector(
      "tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(3) > b:nth-child(1) > a:nth-child(1)",
    )
  );

  const books = tables.map((table) => {
      return {
        id:
          table.querySelector(
            "tbody:nth-child(2) > tr:nth-child(8) > td:nth-child(4)",
          ).textContent,
        title:
          table.querySelector(
            "tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(3) > b:nth-child(1) > a:nth-child(1)",
          ).textContent,
        authors: Array.from(
          table.querySelector(
            "tbody:nth-child(2) > tr:nth-child(3) > td:nth-child(2) > b:nth-child(1)",
          ).querySelectorAll("a"),
        ).map((a) => ({ name: a.textContent, link: a.href })),
        link:
          table.querySelector(
            "tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(3) > b:nth-child(1) > a:nth-child(1)",
          ).outerHTML.match(linkHrefRegex)[1],
        cover:
          table.querySelector(
            "tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(1) > a:nth-child(1) > img:nth-child(1)",
          ).outerHTML.match(imgSrcRegex)[1],
        publisher:
          table.querySelector(
            "tbody:nth-child(2) > tr:nth-child(5) > td:nth-child(2)",
          ).textContent,
        year:
          table.querySelector(
            "tbody:nth-child(2) > tr:nth-child(6) > td:nth-child(2)",
          ).textContent,
        pages:
          table.querySelector(
            "tbody:nth-child(2) > tr:nth-child(7) > td:nth-child(4)",
          ).textContent,
        extension:
          table.querySelector(
            "tbody:nth-child(2) > tr:nth-child(10) > td:nth-child(4)",
          ).textContent,
      };
    })


  return books;
}
