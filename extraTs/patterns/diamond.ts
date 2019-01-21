export default function diamond(n: number): void {
  console.log("This is Diamond");
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

  let pattern2: string = "";
  for (i = n; i >= 1; i--) {
    for (j = i; j <= n - 1; j++) {
      pattern2 += " ";
    }
    for (k = 1; k <= i; k++) {
      pattern2 += "* ";
    }
    console.log(pattern2);
    pattern2 = "";
    console.log("");
  }
}
