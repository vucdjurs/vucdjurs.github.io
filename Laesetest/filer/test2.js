//
//  Copyright 2006
//  Version: 1.1
//  User:    m tuver
//  Date:    Jan 4, 2006
//  Rettet: jhc august 2006
//
// Test2 variable
var test2Timer =10;   // Test skift automatisk efter 5 min

function Test2Eks(pic1,pic2,pic3,pic4,lyd1,lyd2,correct) {
    this.pic1 = pic1;
    this.pic2 = pic2;
    this.pic3 = pic3;
    this.pic4 = pic4;
    this.lyd1  = lyd1;
    this.lyd2  = lyd2;
    this.correct = correct;
}

function Test2Opg(pic1,pic2,pic3,pic4,lyd,answer,pupil) {
    this.pic1 = pic1;
    this.pic2 = pic2;
    this.pic3 = pic3;
    this.pic4 = pic4;
    this.lyd  = lyd;
    this.answer = answer;
    this.pupil = 0;
}


test2EksempelListe = new Array();
test2EksempelListe[0] = new Test2Eks("2_x1_1.jpg","2_x1_2.jpg","2_x1_3.jpg","2_x1_4.gif","","2_x1.mp3",5);
test2EksempelListe[1] = new Test2Eks("2_x2_1.jpg","2_x2_2.jpg","2_x2_3.jpg","2_x2_4.jpg","2_x2a.mp3","2_x2b.mp3",1);

test2OpgaveListe = new Array();
test2OpgaveListe[0] = new Test2Opg("2_1_1.jpg","2_1_2.jpg","2_1_3.jpg","2_1_4.jpg","2_1.mp3",2);
test2OpgaveListe[1] = new Test2Opg("2_2_1.jpg","2_2_2.jpg","2_2_3.jpg","2_2_4.jpg","2_2.mp3",3);
test2OpgaveListe[2] = new Test2Opg("2_3_1.jpg","2_3_2.jpg","2_3_3.jpg","2_3_4.jpg","2_3.mp3",1);
test2OpgaveListe[3] = new Test2Opg("2_4_1.jpg","2_4_2.jpg","2_4_3.jpg","2_4_4.jpg","2_4.mp3",4);
test2OpgaveListe[4] = new Test2Opg("2_5_1.jpg","2_5_2.jpg","2_5_3.jpg","2_5_4.jpg","2_5.mp3",1);
test2OpgaveListe[5] = new Test2Opg("2_6_1.jpg","2_6_2.jpg","2_6_3.jpg","2_6_4.jpg","2_6.mp3",2);
test2OpgaveListe[6] = new Test2Opg("2_7_1.jpg","2_7_2.jpg","2_7_3.jpg","2_7_4.jpg","2_7.mp3",4);
test2OpgaveListe[7] = new Test2Opg("2_8_1.jpg","2_8_2.jpg","2_8_3.jpg","2_8_4.jpg","2_8.mp3",3);
test2OpgaveListe[8] = new Test2Opg("2_9_1.jpg","2_9_2.jpg","2_9_3.jpg","2_9_4.jpg","2_9.mp3",3);
test2OpgaveListe[9] = new Test2Opg("2_10_1.jpg","2_10_2.jpg","2_10_3.jpg","2_10_4.jpg","2_10.mp3",2);
test2OpgaveListe[10] = new Test2Opg("2_11_1.jpg","2_11_2.jpg","2_11_3.jpg","2_11_4.jpg","2_11.mp3",4);
test2OpgaveListe[11] = new Test2Opg("2_12_1.jpg","2_12_2.jpg","2_12_3.jpg","2_12_4.jpg","2_12.mp3",1);
test2OpgaveListe[12] = new Test2Opg("2_13_1.jpg","2_13_2.jpg","2_13_3.jpg","2_13_4.jpg","2_13.mp3",4);
test2OpgaveListe[13] = new Test2Opg("2_14_1.jpg","2_14_2.jpg","2_14_3.jpg","2_14_4.jpg","2_14.mp3",2);
test2OpgaveListe[14] = new Test2Opg("2_15_1.jpg","2_15_2.jpg","2_15_3.jpg","2_15_4.jpg","2_15.mp3",1);
test2OpgaveListe[15] = new Test2Opg("2_16_1.jpg","2_16_2.jpg","2_16_3.jpg","2_16_4.jpg","2_16.mp3",3);
test2OpgaveListe[16] = new Test2Opg("2_17_1.jpg","2_17_2.jpg","2_17_3.jpg","2_17_4.jpg","2_17.mp3",1);
test2OpgaveListe[17] = new Test2Opg("2_18_1.jpg","2_18_2.jpg","2_18_3.jpg","2_18_4.jpg","2_18.mp3",3);
test2OpgaveListe[18] = new Test2Opg("2_19_1.jpg","2_19_2.jpg","2_19_3.jpg","2_19_4.jpg","2_19.mp3",4);
test2OpgaveListe[19] = new Test2Opg("2_20_1.jpg","2_20_2.jpg","2_20_3.jpg","2_20_4.jpg","2_20.mp3",2);
test2OpgaveListe[20] = new Test2Opg("2_21_1.jpg","2_21_2.jpg","2_21_3.jpg","2_21_4.jpg","2_21.mp3",3);
test2OpgaveListe[21] = new Test2Opg("2_22_1.jpg","2_22_2.jpg","2_22_3.jpg","2_22_4.jpg","2_22.mp3",4);
test2OpgaveListe[22] = new Test2Opg("2_23_1.jpg","2_23_2.jpg","2_23_3.jpg","2_23_4.jpg","2_23.mp3",2);
test2OpgaveListe[23] = new Test2Opg("2_24_1.jpg","2_24_2.jpg","2_24_3.jpg","2_24_4.jpg","2_24.mp3",1);
test2OpgaveListe[24] = new Test2Opg("2_25_1.jpg","2_25_2.jpg","2_25_3.jpg","2_25_4.jpg","2_25.mp3",2);
test2OpgaveListe[25] = new Test2Opg("2_26_1.jpg","2_26_2.jpg","2_26_3.jpg","2_26_4.jpg","2_26.mp3",4);
test2OpgaveListe[26] = new Test2Opg("2_27_1.jpg","2_27_2.jpg","2_27_3.jpg","2_27_4.jpg","2_27.mp3",3);
test2OpgaveListe[27] = new Test2Opg("2_28_1.jpg","2_28_2.jpg","2_28_3.jpg","2_28_4.jpg","2_28.mp3",1);
test2OpgaveListe[28] = new Test2Opg("2_29_1.jpg","2_29_2.jpg","2_29_3.jpg","2_29_4.jpg","2_29.mp3",4);
test2OpgaveListe[29] = new Test2Opg("2_30_1.jpg","2_30_2.jpg","2_30_3.jpg","2_30_4.jpg","2_30.mp3",3);
test2OpgaveListe[30] = new Test2Opg("2_31_1.jpg","2_31_2.jpg","2_31_3.jpg","2_31_4.jpg","2_31.mp3",2);
test2OpgaveListe[31] = new Test2Opg("2_32_1.jpg","2_32_2.jpg","2_32_3.jpg","2_32_4.jpg","2_32.mp3",1);
test2OpgaveListe[32] = new Test2Opg("2_33_1.jpg","2_33_2.jpg","2_33_3.jpg","2_33_4.jpg","2_33.mp3",3);
test2OpgaveListe[33] = new Test2Opg("2_34_1.jpg","2_34_2.jpg","2_34_3.jpg","2_34_4.jpg","2_34.mp3",2);
test2OpgaveListe[34] = new Test2Opg("2_35_1.jpg","2_35_2.jpg","2_35_3.jpg","2_35_4.jpg","2_35.mp3",4);
test2OpgaveListe[35] = new Test2Opg("2_36_1.jpg","2_36_2.jpg","2_36_3.jpg","2_36_4.jpg","2_36.mp3",1);
test2OpgaveListe[36] = new Test2Opg("2_37_1.jpg","2_37_2.jpg","2_37_3.jpg","2_37_4.jpg","2_37.mp3",2);

// Test 2 funktioner

function StartTest2Timer() {
    test2Timer--;
    timerID = setTimeout("StartTest2Timer()", 1200)
    if (test2Timer==0) {
        if (timerID) {
            clearTimeout(timerID);
            timerID  = 0;
        }
        Test2MoveOn();
    }
}

function Test2MoveOn() {
    if (runningEksempler) {
        self.indhold.window.location.href = "indhold2x.html";
    } else {
        if (test2OpgaveListe.length == opgaveNr+1) {
            opgaveNr = 0;
            if (timerID) {
                clearTimeout(timerID);
                timerID  = 0;
            }
            self.indhold.window.location.href = "vent.html";
        } else {
            opgaveNr++;
            self.indhold.window.location.href = "indhold2.html";
        }
    }

}
function Next2Example() {
    if (test2EksempelListe.length == opgaveNr+1) {
        opgaveNr = -1;
        runningEksempler = false;
        self.indhold.window.location.href = "tom.html";
    } else {
        opgaveNr++
        self.indhold.window.location.href = "indhold2.html";
    }
}


function Test2OnClick(choice) {
    if (!runningEksempler) {
        test2OpgaveListe[opgaveNr].pupil = choice;
        if (timerID) {
            clearTimeout(timerID);
            timerID  = 0;
        }
    }
    Test2MoveOn();
}

function Test2Korrekte() {
    var korrekte = 0;
    for (i=0; i<test2OpgaveListe.length; i++) {
        if (test2OpgaveListe[i].answer == test2OpgaveListe[i].pupil) {
            korrekte++;
        }
    }
    return korrekte;
}

function Test2Ubesvarede() {
    var ubesvarede = 0;
    for (i=0; i<test2OpgaveListe.length; i++) {
        if (test2OpgaveListe[i].pupil == 0) {
            ubesvarede++;
        }
    }
    return ubesvarede;
}

function Resultater2() {
    var res = "";
    for (i=0; i<test2OpgaveListe.length; i++) {
        if (test2OpgaveListe[i].pupil == 0) {  // time_out
            test2OpgaveListe[i].pupil = 9;
        }
        if (test2OpgaveListe[i].pupil == 5) {  // gul pil
            test2OpgaveListe[i].pupil = 9;
        }
        res = res + test2OpgaveListe[i].pupil + ",";
    }    return res;
}

