//
//  Copyright 2006
//  Version: 1.1
//  User:    m tuver
//  Date:    Jan 4, 2006
//  Redigeret jhc august 13
//
// Test1 variable
var test1Timer =300;   // Test skift automatisk efter 5 min

function Test1Eks(ord1,ord2,ord3,ord4,lyd1,lyd2,correct) {
    this.ord1 = ord1;
    this.ord2 = ord2;
    this.ord3 = ord3;
    this.ord4 = ord4;
    this.lyd1 = lyd1;
    this.lyd2 = lyd2;
    this.correct = correct;
}

function Test1Opg(ord1,ord2,ord3,ord4,answer,pupil) {
    this.ord1 = ord1;
    this.ord2 = ord2;
    this.ord3 = ord3;
    this.ord4 = ord4;
    this.answer = answer;
    this.pupil = 0;
}

test1EksempelListe = new Array();
test1EksempelListe[0] = new Test1Eks("san","syb","l&aelig;l","syf","","1_x1.mp3",1);
test1EksempelListe[1] = new Test1Eks("tyfd","f&aelig;sd","kruf","f&oslash;se","1_x2a.mp3","1_x2b.mp3",2);
test1EksempelListe[2] = new Test1Eks("sg&oslash;","sg&aring;","sg&aelig;","sd&aring;","1_x3a.mp3","1_x3b.mp3",4);

test1OpgaveListe = new Array();
test1OpgaveListe[0] = new Test1Opg("&oslash;t","&aelig;p","ub","or",4);
test1OpgaveListe[1] = new Test1Opg("h&aelig;f","h&aelig;n","gyf","g&aring;b",2);
test1OpgaveListe[2] = new Test1Opg("n&aelig;t","nif","nyl","nos",1);
test1OpgaveListe[3] = new Test1Opg("sty","spi","sgy","sn&aring;",3);
test1OpgaveListe[4] = new Test1Opg("vim","lan","num","uns",2);
test1OpgaveListe[5] = new Test1Opg("fajl","fjal","f&aelig;lk","fajk",1);
test1OpgaveListe[6] = new Test1Opg("k&aring;lm","k&aring;sd","kols","kons",2);
test1OpgaveListe[7] = new Test1Opg("s&aelig;n","tunk","s&aelig;lm","tilk",1);
test1OpgaveListe[8] = new Test1Opg("sgib","slin","sont","ins",1);
test1OpgaveListe[9] = new Test1Opg("plaks","plasg","pilsg","pulsk",2);
test1OpgaveListe[10] = new Test1Opg("h&aelig;lk","j&aelig;lm","jelk","jalm",2);
test1OpgaveListe[11] = new Test1Opg("stuf","sniv","flil","sald",4);
test1OpgaveListe[12] = new Test1Opg("sygem","sykel","cykil","cykub",2);
test1OpgaveListe[13] = new Test1Opg("v&oslash;gge","d&oslash;bbe","dagge","vikke",2);
test1OpgaveListe[14] = new Test1Opg("d&oslash;gti","dagti","dakti","dugti",1);
test1OpgaveListe[15] = new Test1Opg("h&aelig;ffe","hymme","h&aring;gge","haffe",3);
test1OpgaveListe[16] = new Test1Opg("g&aelig;mme","gymme","m&aelig;mme","fommer",1);
test1OpgaveListe[17] = new Test1Opg("biff&aelig;d","bill&aelig;d","billaf","bamm&aelig;d",2);
test1OpgaveListe[18] = new Test1Opg("gleng","k&aelig;lmd","kelmd","kl&aelig;md",4);
test1OpgaveListe[19] = new Test1Opg("sbrit","sbryt","sg&aelig;t","br&aring;t",1);
test1OpgaveListe[20] = new Test1Opg("fr&aring;gd","fl&oslash;md","fr&oslash;ms","froms",1);
test1OpgaveListe[21] = new Test1Opg("buf","buv","b&aring;f","b&aring;n",4);
test1OpgaveListe[22] = new Test1Opg("vilne","vulge","valbe","velme",3);
test1OpgaveListe[23] = new Test1Opg("stratgis","tisksedrat","sdrategisg","sdratgisk",3);
test1OpgaveListe[24] = new Test1Opg("pogge","progge","porge","pr&aelig;gge",4);
test1OpgaveListe[25] = new Test1Opg("sargel","songel","sdirgel","sirgel",4);
test1OpgaveListe[26] = new Test1Opg("fraf&aelig;d","sabr&aelig;d","sarf&aelig;d","sdaf&aelig;d",4);
test1OpgaveListe[27] = new Test1Opg("tunaj","tenja","tajn","tanij",3);
test1OpgaveListe[28] = new Test1Opg("sorliks","sorniks","t&aelig;gnisg","talnisg",3);
test1OpgaveListe[29] = new Test1Opg("efel","&aelig;fle","efler","&aelig;fder",4);
test1OpgaveListe[30] = new Test1Opg("uv&aelig;r","uv&aelig;l","uvin","uvelk",1);
test1OpgaveListe[31] = new Test1Opg("tegger","tyffer","tammer","t&oslash;ller",1);
test1OpgaveListe[32] = new Test1Opg("k&aring;nsd","kinsd","mansd","donsd",1);
test1OpgaveListe[33] = new Test1Opg("tul","fom","nil","pel",4);
test1OpgaveListe[34] = new Test1Opg("vasle","kisme","kisle","vesde",4);
test1OpgaveListe[35] = new Test1Opg("kisjad","kasgul","kasg&aelig;d","kisgut",3);
test1OpgaveListe[36] = new Test1Opg("pors&aelig;gt","prosj&aelig;gt","prosg&aelig;t","pors&aelig;jt",2);
test1OpgaveListe[37] = new Test1Opg("&aelig;gsplosjon","esgplasjon","&aelig;gspalson","egsbulsjon",1);

// Test 1 funktioner

function StartTest1Timer() {
    test1Timer--;
    timerID = setTimeout("StartTest1Timer()", 1000)
    if (test1Timer==0) {
        if (timerID) {
            clearTimeout(timerID);
            timerID  = 0;
        }
        self.indhold.window.location.href = "vent.html";
    }
}

function Test1MoveOn() {
    if (runningEksempler) {
        self.indhold.window.location.href = "indhold1x.html";
    } else {
        if (test1OpgaveListe.length == opgaveNr+1) {
            opgaveNr = 0;
            if (timerID) {
                clearTimeout(timerID);
                timerID  = 0;
            }
            self.indhold.window.location.href = "vent.html";
        } else {
            opgaveNr++;
            self.indhold.window.location.href = "indhold1.html";
        }
    }
}

function Next1Example() {
    if (test1EksempelListe.length == opgaveNr+1) {
        opgaveNr = -1;
        runningEksempler = false;
        self.indhold.window.location.href = "tom.html";
    } else {
        opgaveNr++
        self.indhold.window.location.href = "indhold1.html";
    }
}

function Test1OnClick(choice) {
    if (!runningEksempler) {
        test1OpgaveListe[opgaveNr].pupil = choice;
    }
    Test1MoveOn();
}

function Test1Korrekte() {
    var korrekte = 0;
    for (i=0; i<test1OpgaveListe.length; i++) {
        if (test1OpgaveListe[i].answer == test1OpgaveListe[i].pupil) {
            korrekte++;
        }
    }
    return korrekte;
}

function Test1Ubesvarede() {
    var ubesvarede = 0;
    for (i=0; i<test1OpgaveListe.length; i++) {
        if (test1OpgaveListe[i].pupil == 0) {
            ubesvarede++;
        }
    }
    return ubesvarede;
}

function Resultater1() {
    var res = ",";
    for (i=0; i<test1OpgaveListe.length; i++) {
        if (test1OpgaveListe[i].pupil == 0) {  // time_out
            test1OpgaveListe[i].pupil = 9;
        }
        if (test1OpgaveListe[i].pupil == 5) {  // gul pil
            test1OpgaveListe[i].pupil = 9;
        }
        res = res + test1OpgaveListe[i].pupil + ",";
    }
    return res;
}
