//
//  Copyright 2007
//  Version: 1.0
//  User:    m tuver
//  Date:    Okt 24, 2007

//
// Test1 variable

var test1Timer = 600;

function Test1Opg(answer,pupil) {
    this.answer = answer;
    this.pupil = 0;
}

var test1OpgaveListe = new Array();
test1OpgaveListe[1] = new Test1Opg(1,0);
test1OpgaveListe[2] = new Test1Opg(3,0);
test1OpgaveListe[3] = new Test1Opg(4,0);
test1OpgaveListe[4] = new Test1Opg(2,0);
test1OpgaveListe[5] = new Test1Opg(4,0);
test1OpgaveListe[6] = new Test1Opg(2,0);

test1OpgaveListe[7] = new Test1Opg(1,0);
test1OpgaveListe[8] = new Test1Opg(4,0);
test1OpgaveListe[9] = new Test1Opg(2,0);

test1OpgaveListe[10] = new Test1Opg(2,0);
test1OpgaveListe[11] = new Test1Opg(4,0);
test1OpgaveListe[12] = new Test1Opg(1,0);

test1OpgaveListe[13] = new Test1Opg(2,0);
test1OpgaveListe[14] = new Test1Opg(3,0);
test1OpgaveListe[15] = new Test1Opg(1,0);

test1OpgaveListe[16] = new Test1Opg(2,0);
test1OpgaveListe[17] = new Test1Opg(4,0);

test1OpgaveListe[18] = new Test1Opg(3,0);

test1OpgaveListe[19] = new Test1Opg(1,0);
test1OpgaveListe[20] = new Test1Opg(2,0);
test1OpgaveListe[21] = new Test1Opg(4,0);
test1OpgaveListe[22] = new Test1Opg(4,0);
test1OpgaveListe[23] = new Test1Opg(1,0);
test1OpgaveListe[24] = new Test1Opg(3,0);
test1OpgaveListe[25] = new Test1Opg(2,0);
test1OpgaveListe[26] = new Test1Opg(2,0);
test1OpgaveListe[27] = new Test1Opg(1,0);
test1OpgaveListe[28] = new Test1Opg(1,0);

test1OpgaveListe[29] = new Test1Opg(4,0);
test1OpgaveListe[30] = new Test1Opg(3,0);
test1OpgaveListe[31] = new Test1Opg(3,0);
test1OpgaveListe[32] = new Test1Opg(1,0);
test1OpgaveListe[33] = new Test1Opg(2,0);
test1OpgaveListe[34] = new Test1Opg(4,0);

test1OpgaveListe[35] = new Test1Opg(2,0);
test1OpgaveListe[36] = new Test1Opg(1,0);
test1OpgaveListe[37] = new Test1Opg(3,0);
test1OpgaveListe[38] = new Test1Opg(3,0);
test1OpgaveListe[39] = new Test1Opg(3,0);
test1OpgaveListe[40] = new Test1Opg(1,0);

test1OpgaveListe[41] = new Test1Opg(3,0);

// Test 1 funktioner

function StartTest1Timer() {
    test1Timer--;
    timerID = setTimeout("StartTest1Timer()", 1000)
    if (test1Timer==0) {
        if (timerID) {
            clearTimeout(timerID);
            timerID  = 0;
        }
        opgaveNr = 0;
        self.indhold.window.location.href = "vent.html";
    }
}


function Next1Example(page) {
    if (page != 4) {
        self.indhold.window.location.href = "del1x"+page+".html";
    } else {
        self.indhold.window.location.href = "tom.html";
    }
}

function Test1MoveOn(page) {
    if (page != 11) {
        self.indhold.window.location.href = "del1_"+page+".html";
    } else {
        if (timerID) {
            clearTimeout(timerID);
            timerID  = 0;
        }
        self.indhold.window.location.href = "vent.html";
    }
}

function Test1OnClick(choice) {
}

function Test1Korrekte() {
    var korrekte = 0;
    for (i=1; i<test1OpgaveListe.length; i++) {
        if (test1OpgaveListe[i].answer == test1OpgaveListe[i].pupil) {
            korrekte++;
        }
    }
    return korrekte;
}

function Test1Ubesvarede() {
    var ubesvarede = 0;
    for (i=1; i<test1OpgaveListe.length; i++) {
        if (test1OpgaveListe[i].pupil == 0) {
            ubesvarede++;
        }
    }
    return ubesvarede;
}

function Resultater1() {
    var res = ",";
    for (i=1; i<test1OpgaveListe.length; i++) {
        if (test1OpgaveListe[i].pupil == 0) {  // time_out eller gul pil
            test1OpgaveListe[i].pupil = 9;
        }  
        res = res + test1OpgaveListe[i].pupil + ",";
    }
    return res;
}
