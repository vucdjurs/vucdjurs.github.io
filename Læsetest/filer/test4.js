//
//  Copyright 2006
//  Version: 1.0
//  User:    m tuver
//  Date:    Jan 4, 2006
//
//
// Test4 variable
var test4Timer =60;   // Test skift automatisk efter 1 min

function Test4Eks(lyd1,lyd2,correct) {
    this.lyd1  = lyd1;
    this.lyd2  = lyd2;
    this.correct = correct;
}

function Test4Opg(lyd,word1,word2,pupil) {
    this.lyd = lyd;
    this.word1 = word1;
    this.word2 = word2;
    this.pupil = pupil;
}

test4EksempelListe = new Array();
test4EksempelListe[0] = new Test4Eks("4_x1.mp3");


test4OpgaveListe = new Array();
test4OpgaveListe[0] = new Test4Opg("4_1.mp3","","sent");
test4OpgaveListe[1] = new Test4Opg("4_2.mp3","","isglat");
test4OpgaveListe[2] = new Test4Opg("4_3.mp3","","k\xF8rte");
test4OpgaveListe[3] = new Test4Opg("4_4.mp3","","lys");
test4OpgaveListe[4] = new Test4Opg("4_5.mp3","","lastbil");
test4OpgaveListe[5] = new Test4Opg("4_6.mp3","","");
test4OpgaveListe[6] = new Test4Opg("4_7.mp3","","pr\xF8ve");
test4OpgaveListe[7] = new Test4Opg("4_8.mp3","","");
test4OpgaveListe[8] = new Test4Opg("4_9.mp3","","gled");
test4OpgaveListe[9] = new Test4Opg("4_10.mp3","","asfalten");
test4OpgaveListe[10] = new Test4Opg("4_11.mp3","","v\xE6k");
test4OpgaveListe[11] = new Test4Opg("4_12.mp3","","n\xE6ste");
test4OpgaveListe[12] = new Test4Opg("4_13.mp3","","husker");
test4OpgaveListe[13] = new Test4Opg("4_14.mp3","","");
test4OpgaveListe[14] = new Test4Opg("4_15.mp3","stod","talte");
test4OpgaveListe[15] = new Test4Opg("4_16.mp3","","n\xE6seblod");
test4OpgaveListe[16] = new Test4Opg("4_17.mp3","","");
test4OpgaveListe[17] = new Test4Opg("4_18.mp3","","ben");
test4OpgaveListe[18] = new Test4Opg("4_19.mp3","","");
test4OpgaveListe[19] = new Test4Opg("4_20.mp3","","hospital");
test4OpgaveListe[20] = new Test4Opg("4_21.mp3","","skadestuen");
test4OpgaveListe[21] = new Test4Opg("4_22.mp3","","brud");
test4OpgaveListe[22] = new Test4Opg("4_23.mp3","","m\xE5ned");
test4OpgaveListe[23] = new Test4Opg("4_24.mp3","","");
test4OpgaveListe[24] = new Test4Opg("4_25.mp3","","problem");

// Test 4 funktioner

function StartTest4Timer() {
    test4Timer--;
    timerID = setTimeout("StartTest4Timer()", 1000)
    if (test4Timer==0) {
        if (timerID) {
            clearTimeout(timerID);
            timerID  = 0;
        }
        Test4MoveOn();
    }
}

function Test4MoveOn() {
    if (runningEksempler) {
        Next4Example();
    } else {
        if (test4OpgaveListe.length == opgaveNr+1) {
            opgaveNr = 0;
            self.indhold.window.location.href = "vent.html";
        } else {
            opgaveNr++;
            self.indhold.window.location.href = "indhold4.html";
        }
    }
}

function Next4Example() {
    if (test4EksempelListe.length == opgaveNr+1) {
        opgaveNr = -1;
        runningEksempler = false;
        self.indhold.window.location.href = "tom.html";
    } else {
        opgaveNr++
        self.indhold.window.location.href = "indhold4.html";
    }
}

function Test4OnClick(choice) {
    if (!runningEksempler) {
        test4OpgaveListe[opgaveNr].pupil = choice;
        if (timerID) {
            clearTimeout(timerID);
            timerID  = 0;
        }
    }
    Test4MoveOn();
}

function Test4Korrekte() {
    var korrekte = 0;
    for (i=0; i<test4OpgaveListe.length; i++) {
        if (Sammenlign(test4OpgaveListe[i].word1,test4OpgaveListe[i].pupil)) korrekte++;
        if (Sammenlign(test4OpgaveListe[i].word2,test4OpgaveListe[i].pupil)) korrekte++;
    }
    return korrekte;
}

function Test4Ubesvarede() {
    var ubesvarede = 0;
    for (i=0; i<test4OpgaveListe.length; i++) {
        if (test4OpgaveListe[i].pupil == '') {
            ubesvarede++;
        }
    }
    return ubesvarede;
}

function Sammenlign(o,s) {
    if (o != "") {
        var ft = "^" + o +"\\W|\\W"+o+"\\W|\\W"+o+"$|^"+o+"$";
        var r = new RegExp(ft,'i');
        var m = r.exec(s);
        if (m != null) {
            return true;
        } else return false;
    }
}

function Resultater4() {
    var res = "";
    for (var i=0; i<test4OpgaveListe.length; i++) {
        if (test4OpgaveListe[i].word1 != "") {
			if (test4OpgaveListe[i].pupil != "") {
				if (Sammenlign(test4OpgaveListe[i].word1,test4OpgaveListe[i].pupil)) {
					res = res + "1,";		// korrekt
				} else res = res + "2,";	// forkert
            } else res = res + "9,";		// tomt svar
        }
        if (test4OpgaveListe[i].word2 != "") {
			if (test4OpgaveListe[i].pupil != "") {
				if (Sammenlign(test4OpgaveListe[i].word2,test4OpgaveListe[i].pupil)) {
					res = res + "1,";		// korrekt
				} else res = res + "2,";	// forkert
            } else res = res + "9,";		// tomt svar
        }
    }
    return res;
}


