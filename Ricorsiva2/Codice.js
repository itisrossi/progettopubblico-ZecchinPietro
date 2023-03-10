let quadrato = [];

function stampaquadrato(n) {
  for (let i = 0; i < 2 * n - 1; i++) {
    quadrato.push([]);
    for (let j = 0; j < 2 * n - 1; j++) {
      quadrato[i].push(0);
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = i; j < 2 * n - i - 1; j++) {
      quadrato[i][j] = n - i;
      quadrato[2 * n - i - 2][j] = n - i;
      quadrato[j][i] = n - i;
      quadrato[j][2 * n - i - 2] = n - i;
    }
  }

  // copy the top half of the matrix to the bottom half
  for (let i = n; i < 2 * n - 1; i++) {
    for (let j = 0; j < 2 * n - 1; j++) {
      quadrato[i][j] = quadrato[2 * n - i - 2][j];
    }
  }

  // copy the left half of the matrix to the right half
  for (let i = 0; i < 2 * n - 1; i++) {
    for (let j = n; j < 2 * n - 1; j++) {
      quadrato[i][j] = quadrato[i][2 * n - j - 2];
    }
  }

  for (let i = 0; i < 2 * n - 1; i++) {
    console.log(quadrato[i].join(' '));
    document.write(quadrato[i].join(' '));
    document.write("<br>");
  }
}

let n = prompt("inserisci numero");
stampaquadrato(n);