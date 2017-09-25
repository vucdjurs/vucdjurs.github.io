//
//  Copyright 2006
//  Version: 1.1
//  User:    m tuver
//  Date:    Jan 4, 2006
//  Redigeret jhc august 13
//
// Test3 variable
var test3Timer =300;   // Test skift automatisk efter 5 min

function Test3Eks(ord1,ord2,ord3,ord4,lyd1,lyd2,correct) {
    this.ord1 = ord1;
    this.ord2 = ord2;
    this.ord3 = ord3;
    this.ord4 = ord4;
    this.lyd1 = lyd1;
    this.lyd2 = lyd2;
    this.correct = correct;
}

function Test3Opg(ord1,ord2,ord3,ord4,answer,pupil) {
    this.ord1 = ord1;
    this.ord2 = ord2;
    this.ord3 = ord3;
    this.ord4 = ord4;
    this.answer = answer;
    this.pupil = 0;
}

test3EksempelListe = new Array();
test3EksempelListe[0] = new Test3Eks("san","syb","l&aelig;l","syf","","3_x1.mp3",1);
test3EksempelListe[1] = new Test3Eks("tyfd","f&aelig;sd","kruf","f&oslash;se","3_x2a.mp3","3_x2b.mp3",2);
test3EksempelListe[2] = new Test3Eks("sg&oslash;","sg&aring;","sg&aelig;","sd&aring;","3_x3a.mp3","3_x3b.mp3",4);

test3OpgaveListe = new Array();
test3OpgaveListe[0] = new Test3Opg("&oslash;t","&aelig;p","ub","or",4);
test3OpgaveListe[1] = new Test3Opg("h&aelig;f","h&aelig;n","gyf","g&aring;b",2);
test3OpgaveListe[2] = new Test3Opg("n&aelig;t","nif","nyl","nos",1);
test3OpgaveListe[3] = new Test3Opg("sty","spi","sgy","sn&aring;",3);
test3OpgaveListe[4] = new Test3Opg("vim","lan","num","uns",2);
test3OpgaveListe[5] = new Test3Opg("fajl","fjal","f&aelig;lk","fajk",1);
test3OpgaveListe[6] = new Test3Opg("k&aring;lm","k&aring;sd","kols","kons",2);
test3OpgaveListe[7] = new Test3Opg("s&aelig;n","tunk","s&aelig;lm","tilk",1);
test3OpgaveListe[8] = new Test3Opg("sgib","slin","sont","ins",1);
test3OpgaveListe[9] = new Test3Opg("plaks","plasg","pilsg","pulsk",2);
test3OpgaveListe[10] = new Test3Opg("h&aelig;lk","j&aelig;lm","jelk","jalm",2);
test3OpgaveListe[11] = new Test3Opg("stuf","sniv","flil","sald",4);
test3OpgaveListe[12] = new Test3Opg("sygem","sykel","cykil","cykub",2);
test3OpgaveListe[13] = new Test3Opg("v&oslash;gge","d&oslash;bbe","dagge","vikke",2);
test3OpgaveListe[14] = new Test3Opg("d&oslash;gti","dagti","dakti","dugti",1);
test3OpgaveListe[15] = new Test3Opg("h&aelig;ffe","hymme","h&aring;gge","haffe",3);
test3OpgaveListe[16] = new Test3Opg("g&aelig;mme","gymme","m&aelig;mme","fommer",1);
test3OpgaveListe[17] = new Test3Opg("biff&aelig;d","bill&aelig;d","billaf","bamm&aelig;d",2);
test3OpgaveListe[18] = new Test3Opg("gleng","k&aelig;lmd","kelmd","kl&aelig;md",4);
test3OpgaveListe[19] = new Test3Opg("sbrit","sbryt","sg&aelig;t","br&aring;t",1);
test3OpgaveListe[20] = new Test3Opg("fr&aring;gd","fl&oslash;md","fr&oslash;ms","froms",1);
test3OpgaveListe[21] = new Test3Opg("buf","buv","b&aring;f","b&aring;n",4);
test3OpgaveListe[22] = new Test3Opg("vilne","vulge","valbe","velme",3);
test3OpgaveListe[23] = new Test3Opg("stratgis","tisksedrat","sdrategisg","sdratgisk",3);
test3OpgaveListe[24] = new Test3Opg("pogge","progge","porge","pr&aelig;gge",4);
test3OpgaveListe[25] = new Test3Opg("sargel","songel","sdirgel","sirgel",4);
test3OpgaveListe[26] = new Test3Opg("fraf&aelig;d","sabr&aelig;d","sarf&aelig;d","sdaf&aelig;d",4);
test3OpgaveListe[27] = new Test3Opg("tunaj","tenja","tajn","tanij",3);
test3OpgaveListe[28] = new Test3Opg("sorliks","sorniks","t&aelig;gnisg","talnisg",3);
test3OpgaveListe[29] = new Test3Opg("efel","&aelig;fle","efler","&aelig;fder",4);
test3OpgaveListe[30] = new Test3Opg("uv&aelig;r","uv&aelig;l","uvin","uvelk",1);
test3OpgaveListe[31] = new Test3Opg("tegger","tyffer","tammer","t&oslash;ller",1);
test3OpgaveListe[32] = new Test3Opg("k&aring;nsd","kinsd","mansd","donsd",1);
test3OpgaveListe[33] = new Test3Opg("tul","fom","nil","pel",4);
test3OpgaveListe[34] = new Test3Opg("vasle","kisme","kisle","vesde",4);
test3OpgaveListe[35] = new Test3Opg("kisjad","kasgul","kasg&aelig;d","kisgut",3);
test3OpgaveListe[36] = new Test3Opg("pors&aelig;gt","prosj&aelig;gt","prosg&aelig;t","pors&aelig;jt",2);
test3OpgaveListe[37] = new Test3Opg("&aelig;gsplosjon","esgplasjon","&aelig;gspalson","egsbulsjon",1);

// Test 3 funktioner

function StartTest3Timer() {
    test3Timer--;
    timerID = setTimeout("StartTest3Timer()", 1000)
    if (test3Timer==0) {
        if (timerID) {
            clearTimeout(timerID);
            timerID  = 0;
        }
        self.indhold.window.location.href = "vent.html";
    }
}

function Test3MoveOn() {
    if (runningEksempler) {
        self.indhold.window.location.href = "indhold3x.html";
    } else {
        if (test3OpgaveListe.length == opgaveNr+1) {
            opgaveNr = 0;
            if (timerID) {
                clearTimeout(timerID);
                timerID  = 0;
            }
            self.indhold.window.location.href = "vent.html";
        } else {
            opgaveNr++;
            self.indhold.window.location.href = "indhold3.html";
        }
    }
}

function Next3Example() {
    if (test3EksempelListe.length == opgaveNr+1) {
        opgaveNr = -1;
        runningEksempler = false;
        self.indhold.window.location.href = "tom.html";
    } else {
        opgaveNr++
        self.indhold.window.location.href = "indhold3.html";
    }
}

function Test3OnClick(choice) {
    if (!runningEksempler) {
        test3OpgaveListe[opgaveNr].pupil = choice;
    }
    Test3MoveOn();
}

function Test3Korrekte() {
    var korrekte = 0;
    for (i=0; i<test3OpgaveListe.length; i++) {
        if (test3OpgaveListe[i].answer == test3OpgaveListe[i].pupil) {
            korrekte++;
        }
    }
    return korrekte;
}

function Test3Ubesvarede() {
    var ubesvarede = 0;
    for (i=0; i<test3OpgaveListe.length; i++) {
        if (test3OpgaveListe[i].pupil == 0) {
            ubesvarede++;
        }
    }
    return ubesvarede;
}

function Resultater3() {
    var res = ",";
    for (i=0; i<test3OpgaveListe.length; i++) {
        if (test3OpgaveListe[i].pupil == 0) {  // time_out
            test3OpgaveListe[i].pupil = 9;
        }
        if (test3OpgaveListe[i].pupil == 5) {  // gul pil
            test3OpgaveListe[i].pupil = 9;
        }
        res = res + test3OpgaveListe[i].pupil + ",";
    }
    return res;
}
