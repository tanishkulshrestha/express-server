export default function triangle(n: number): void {
  console.log("This is Equilateral triangle");
  let k: number, i: number, j: number;
  let pattern: string = "";
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= n - i; j++) {
      pattern += " ";
    }
    for (k = 1; k <= i; k++) {
      pattern += "* ";
    }
    console.log(pattern);
    pattern = "";
    console.log("");
  }
}
