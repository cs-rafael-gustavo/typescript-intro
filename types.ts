// boolean (true / false)
let isOpen: boolean;
isOpen = true;

// string ('foo', "foo", `foo`)
let message: string;
message = `foo ${isOpen}`;

// number (int, float, hex, binary)
let total: number;
total = 0xff0;

// array (type[] ou Array<type>)
let items: number[];
items = [1, 2, 3];

let values: Array<number>;
values = [1, 2, 3];

// tuple
let title: [number, string, boolean];
title = [1, "foo", true];

// enum
enum Colors {
  white = "#fff",
  black = "#000",
}

Colors.black;

// any
let coisa: any;
coisa = "string" || 10;

// void (vazio)
function logger(): void {
  console.log("foo");
}

// null ~ undefined
type Bla = string | undefined; // Cria um tipo novo, que pode ser string ou undefined

// never
function error(): never {
  // nunca terá um retorno
  throw new Error("error");
}

// object
let cart: object;

cart = { key: "string" };
