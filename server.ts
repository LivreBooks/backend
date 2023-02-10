import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { categories } from "./constants.ts";
import { getBooks, searchBook } from "./scrapers.ts";
import { getBook} from "./libgen.ts";

const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Book Server is running";
  })
  .get("/categories", (context) => {
    context.response.body = categories;
  })
  .get("/books/:subcategoryid", async (context) => {
    console.log(context?.params?.category);
    if (!context?.params?.subcategoryid) {
      context.response.status = 400;
      context.response.body =
        "Provide a main and subcategory in the url (/books/:subcategoryid)";
      return;
    }
    const books = await getBooks(context.params.subcategoryid);
    context.response.body = books;
  })
  .get("/book/:id", async (context) => {
    if (!context?.params?.id) {
      context.response.status = 400;
      context.response.body = "Provide a book id (/book/:id)";
      return;
    }
    const book = await getBook(context.params.id)
    context.response.body = book;
  })
  .get("/search/:query",async  (context) => {
    if (!context?.params?.query) {
      context.response.status = 400;
      context.response.body = "Provide a book id (/search/:query)";
      return;
    }
    const books = await searchBook(context.params.query)
    context.response.body = books;
  });

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log(
    `Listening on: ${secure ? "https://" : "http://"}${
      hostname ??
        "localhost"
    }:${port}`,
  );
});

await app.listen({ port: 8000 });
