export default function diamond(n) {
  console.log("This is Diamond");
  let k, i, j;
  let pattern = "";
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

  let pattern2 = "";
  for (let i = n; i >= 1; i--) {
    for (let j = i; j <= n - 1; j++) {
      pattern2 += " ";
    }
    for (let k = 1; k <= i; k++) {
      pattern2 += "* ";
    }
    console.log(pattern2);
    pattern2 = "";
    console.log("");
  }
}
