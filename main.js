let url = "http://foo.bar?str=";
let search = "字1+字2";

let uri1 = url + search;

let uriEncoded1 = encodeURI(uri1);

let uriEncoded2 = encodeURIComponent(search);

console.log(uri1);

console.log(uriEncoded1);

console.log(uriEncoded2);

console.log(decodeURI(uriEncoded1));