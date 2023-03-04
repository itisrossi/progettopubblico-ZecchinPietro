let quadrato = [];
function stampaquadrato(n) {
    for (let i = 0; i < 2*n - 1; i++) {
      quadrato.push([]);
      for (let j = 0; j < 2*n - 1; j++) {
        quadrato[i].push(0);
      }
    }

    let considerato = n;
    for (let i = 0; i < n; i++) {
      for (let j = i; j < 2*n - i - 1; j++) {
        quadrato[i][j] = considerato;
        quadrato[2*n - i - 2][j] = considerato;
        quadrato[j][i] = considerato;
        quadrato[j][2*n - i - 2] = considerato;
      }
      considerato--;
    }
    
    for (let i = 0; i < 2*n - 1; i++) {
      console.log(quadrato[i].join(' '));
      document.write(quadrato[i].join(' '));
      document.write("<br>");
    }
  }
    let n = prompt("inserisci numero");
    stampaquadrato(n);