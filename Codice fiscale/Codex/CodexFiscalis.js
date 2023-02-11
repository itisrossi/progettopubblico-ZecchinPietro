
let a = 0, b = 0, c = 0, d = 0; 

function codiceFiscale() {   
    let codice = "";
    codice = Cognome();
    if(a != 0){
        return document.getElementById("codice").innerHTML = codice;
    }
    codice = codice + Nome();
    if(b != 0){
        return document.getElementById("codice").innerHTML = Nome();
    }
    codice = codice + Anno();
    codice = codice + Mese();
    codice = codice + Giorno();
    if(c != 0){
        return document.getElementById("codice").innerHTML = Giorno();
    }
    codice = codice + Comune();
    if(d != 0){
        return document.getElementById("codice").innerHTML = Comune();
    }
    codice = codice.toUpperCase();
    codice = codice + Controllo(codice);    
    document.getElementById("codice").innerHTML = codice;
}

function Cognome() {
    let cognome = document.getElementById("cognome").value, cognome1 = "", cognome2 = "";
    if(cognome.length == 0){
        a = a + 1;
        cognome2 = "Cognome non inserito";
        return cognome2;
    }
    if(cognome.length == 1){
        cognome2 = cognome + "XX";
        return cognome2;
    }
    if(cognome.length == 2){
        cognome2 = cognome + "X";
        return cognome2;
    }
    if(cognome.length == 3){
        cognome2 = cognome;
        return cognome2;
    }
    for (let j in cognome) {
        if(cognome1.length == 3)
            return cognome1;
        switch (cognome[j]) {
            default:
                cognome1 = cognome1 + cognome[j];
                break;
            case "A":
                break;
            case "E":
                break;
            case "I":
                break;
            case "O":
                break;
            case "U":
                break;
        }
    }
    
    if(cognome1.length <= 2){
        while(cognome1.length <= 3) {
            for (let j in cognome) {
                switch (cognome[j]) {
                    default:
                        break;
                    case "A":
                        cognome1 = cognome1 + cognome[j];
                        break;
                    case "E":
                        cognome1 = cognome1 + cognome[j];
                        break;
                    case "I":
                        cognome1 = cognome1 + cognome[j];
                        break;
                    case "O":
                        cognome1 = cognome1 + cognome[j];
                        break;
                    case "U":
                        cognome1 = cognome1 + cognome[j];
                        break;
                }            
            }
        }
    }
    return cognome1;
}

function test(parola) {
    let ris = "";
    for (let j in parola) {
        switch (parola[j]) {
            default:
                ris = ris + parola[j];
                break;
            case "A":
                break;
            case "E":
                break;
            case "I":
                break;
            case "O":
                break;
            case "U":
                break;
        }
    }
    return ris;
}

function Nome() {
    let nome = document.getElementById("nome").value, nome1 = "", nome2 = "";
    if(nome.length == 0){
        b = b + 1;
        nome2 = "Errore, nome mancante";
        return nome2;
    }
    if(nome.length <= 2){
        if(nome.length == 1){
            nome1 = nome + "XX";
            return nome1;
        }
        else {
            nome1 = nome + "X";
            return nome1;
        }
    }
    nome1 = test(nome);
    if(nome1.length == 3) {
        return nome1;
    }
    if(nome1.length <= 2) {        
        while(nome1.length < 3) {
            for (let j in nome) {
                if(nome1.length == 3)
                    break;
                switch (nome[j]) {
                    default:
                        break;
                    case "A":
                        nome1 = nome1 + nome[j];
                        break;
                    case "E":
                        nome1 = nome1 + nome[j];
                        break;
                    case "I":
                        nome1 = nome1 + nome[j];
                        break;
                    case "O":
                        nome1 = nome1 + nome[j];
                        break;
                    case "U":
                        nome1 = nome1 + nome[j];
                        break;
                }            
            }
        }
        return nome1;
    }
    nome2 = nome1[0] + nome1[2] + nome1[3];
    return nome2;
}

function Anno() {
    let anno = document.getElementById("datanascita").value, ris = anno.slice(2,4);
    return ris;
}

function Mese() {
        let mese = document.getElementById("datanascita").value, ris = "";
        mese = mese.slice(5,7);
        switch (mese) {
            default:
                ris = "Errore";
                break;
            case "01":
                ris = "A";
                break;
            case "02":
                ris = "B";
                break;
            case "03":
                ris = "C";
                break;
            case "04":
                ris = "D";
                break;
            case "05":
                ris = "E";
                break;
            case "06":
                ris = "H";
                break;        
            case "07":
                ris = "L";
                break;
            case "08":
                ris = "M";
                break;
            case "09":
                ris = "P";
                break;
            case "10":
                ris = "R";
                break;
            case "11":
                ris = "S";
                break;        
            case "12":
                ris = "T";
                break;
        }
        return ris;
    }    

function Giorno() {
    let giorno = document.getElementById("datanascita").value, ris = giorno.slice(8,10), sesso = document.getElementById("sesso").value;
    ris = Number(ris);
    if(ris == 0){
        c = c + 1;
        ris = "Errore, data mancante";
        return ris;
    }
    switch(sesso) {
        default:
            ris = "Errore, non inserito";
            break;
        case "M":
            ris = ris.toString();
            break;
        case "F":
            ris = ris + 40;
            ris = ris.toString();
            break;
    }
    if(ris < 10)
        ris = "0" + ris;
    return ris;
}

function Comune() {
    let comune = document.getElementById("comun").value;
    if(comune.length != 4){
        d = d + 1;
        comune = "Codice comune non inserito correttamente";
    }
    return comune;
}

function Controllo(codice) {
    let ris = 0, pari = 0, dispari = 0;
    codice = "-" + codice;
    for(let j = 1; j <= 15; j++) {
        if(j %2 != 0){
            switch(codice[j]) {
                case "A":
                    dispari = dispari + 1;
                    break;
                case "B":
                    dispari = dispari + 0;
                    break;
                case "C":
                    dispari = dispari + 5;
                    break;
                case "D":
                    dispari = dispari + 7;
                    break;
                case "E":
                    dispari = dispari + 9;
                    break;
                case "F":
                    dispari = dispari + 13;
                    break;
                case "G":
                    dispari = dispari + 15;
                    break;
                case "H":
                    dispari = dispari + 17;
                    break;
                case "I":
                    dispari = dispari + 19;
                    break;
                case "J":
                    dispari = dispari + 21;
                    break;
                case "K":
                    dispari = dispari + 2;
                    break;
                case "L":
                    dispari = dispari + 4;
                    break;
                case "M":
                    dispari = dispari + 18;
                    break;
                case "N":
                    dispari = dispari + 20;
                    break;
                case "O":
                    dispari = dispari + 11;
                    break;
                case "P":
                    dispari = dispari + 3;
                    break;
                case "Q":
                    dispari = dispari + 6;
                    break;
                case "R":
                    dispari = dispari + 8;
                    break;
                case "S":
                    dispari = dispari + 12;
                    break;
                case "T":
                    dispari = dispari + 14;
                    break;
                case "U":
                    dispari = dispari + 16;
                    break;
                case "V":
                    dispari = dispari + 10;
                    break;
                case "W":
                    dispari = dispari + 22;
                    break;
                case "X":
                    dispari = dispari + 25;
                    break;
                case "Y":
                    dispari = dispari + 24;
                    break;
                case "Z":
                    dispari = dispari + 23;
                    break;
                case "0":
                    dispari = dispari + 1;
                    break;
                case "1":
                    dispari = dispari + 0;
                    break;
                case "2":
                    dispari = dispari + 5;
                    break;
                case "3":
                    dispari = dispari + 7;
                    break;
                case "4":
                    dispari = dispari + 9;
                    break;
                case "5":
                    dispari = dispari + 13;
                    break;
                case "6":
                    dispari = dispari + 15;
                    break;
                case "7":
                    dispari = dispari + 17;
                    break;
                case "8":
                    dispari = dispari + 19;
                    break;
                case "9":
                    dispari = dispari + 21;
                    break;
            }
        }
        if(j %2 == 0){
            switch(codice[j]) {
                case "A":
                    pari = pari + 0;
                    break;
                case "B":
                    pari = pari + 1;
                    break;
                case "C":
                    pari = pari + 2;
                    break;
                case "D":
                    pari = pari + 3;
                    break;
                case "E":
                    pari = pari + 4;
                    break;
                case "F":
                    pari = pari + 5;
                    break;
                case "G":
                    pari = pari + 6;
                    break;
                case "H":
                    pari = pari + 7;
                    break;
                case "I":
                    pari = pari + 8;
                    break;
                case "J":
                    pari = pari + 9;
                    break;
                case "K":
                    pari = pari + 10;
                    break;
                case "L":
                    pari = pari + 11;
                    break;
                case "M":
                    pari = pari + 12;
                    break;
                case "N":
                    pari = pari + 13;
                    break;
                case "O":
                    pari = pari + 14;
                    break;
                case "P":
                    pari = pari + 15;
                    break;
                case "Q":
                    pari = pari + 16;
                    break;
                case "R":
                    pari = pari + 17;
                    break;
                case "S":
                    pari = pari + 18;
                    break;
                case "T":
                    pari = pari + 19;
                    break;
                case "U":
                    pari = pari + 20;
                    break;
                case "V":
                    pari = pari + 21;
                    break;
                case "W":
                    pari = pari + 22;
                    break;
                case "X":
                    pari = pari + 23;
                    break;
                case "Y":
                    pari = pari + 24;
                    break;
                case "Z":
                    pari = pari + 25;
                    break;
                case "0":
                    pari = pari + 0;
                    break;
                case "1":
                    pari = pari + 1;
                    break;
                case "2":
                    pari = pari + 2;
                    break;
                case "3":
                    pari = pari + 3;
                    break;
                case "4":
                    pari = pari + 4;
                    break;
                case "5":
                    pari = pari + 5;
                    break;
                case "6":
                    pari = pari + 6;
                    break;
                case "7":
                    pari = pari + 7;
                    break;
                case "8":
                    pari = pari + 8;
                    break;
                case "9":
                    pari = pari + 9;
                    break;
            }
        }
    }
    ris = pari + dispari;
    ris = ris %26;
    switch(ris){
        case 0:
            ris = "A";
            break;
        case 1:
            ris = "B";
            break;
        case 2:
            ris = "C";
            break;
        case 3:
            ris = "D";
            break;
        case 4:
            ris = "E";
            break;
        case 5:
            ris = "F";
            break;
        case 6:
            ris = "G";
            break;
        case 7:
            ris = "H";
            break;
        case 8:
            ris = "I";
            break;
        case 9:
            ris = "J";
            break;
        case 10:
            ris = "K";
            break;
        case 11:
            ris = "L";
            break;
        case 12:
            ris = "M";
            break;
        case 13:
            ris = "N";
            break;
        case 14:
            ris = "O";
            break;
        case 15:
            ris = "P";
            break;
        case 16:
            ris = "Q";
            break;
        case 17:
            ris = "R";
            break;
        case 18:
            ris = "S";
            break;
        case 19:
            ris = "T";
            break;
        case 20:
            ris = "U";
            break;
        case 21:
            ris = "V";
            break;
        case 22:
            ris = "W";
            break;
        case 23:
            ris = "X";
            break;
        case 24:
            ris = "Y";
            break;
        case 25:
            ris = "Z";
            break;
    }
    return ris;
}
