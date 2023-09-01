function fetchWithLiteralTypeMethod(url: string, method: "post" | "get") {
  console.log(method);
}
// let method = "post";
// fetchWithLiteralTypeMethod("url", method as "post");
const method = "post";
fetchWithLiteralTypeMethod("url", method);
fetchWithLiteralTypeMethod("url", "get");
