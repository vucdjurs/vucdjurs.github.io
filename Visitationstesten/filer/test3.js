//
//  Copyright 2006
//  Version: 1.1
//  User:    m tuver
//  Date:    Jan 4, 2006
//  Rettet: jhc august 2006
//
// Test3 variable
var Test3Timer =10;   // Test skift automatisk efter 5 min

function Test3Eks(pic1,pic2,pic3,pic4,lyd1,lyd2,correct) {
    this.pic1 = pic1;
    this.pic2 = pic2;
    this.pic3 = pic3;
    this.pic4 = pic4;
    this.lyd1  = lyd1;
    this.lyd2  = lyd2;
    this.correct = correct;
}

function Test3Opg(pic1,pic2,pic3,pic4,lyd,answer,pupil) {
    this.pic1 = pic1;
    this.pic2 = pic2;
    this.pic3 = pic3;
    this.pic4 = pic4;
    this.lyd  = lyd;
    this.answer = answer;
    this.pupil = 0;
}


test3EksempelListe = new Array();
test3EksempelListe[0] = new Test3Eks("3_x1_1.jpg","3_x1_2.jpg","3_x1_3.gif","3_x1_4.jpg","","3_x1.mp3",5);
test3EksempelListe[1] = new Test3Eks("3_x2_1.jpg","3_x2_2.jpg","3_x2_3.jpg","3_x2_4.jpg","3_x2a.mp3","3_x2b.mp3",2);

test3OpgaveListe = new Array();
test3OpgaveListe[0] = new Test3Opg("3_1_1.jpg","3_1_2.jpg","3_1_3.jpg","3_1_4.jpg","3_1.mp3",3);
test3OpgaveListe[1] = new Test3Opg("3_2_1.jpg","3_2_2.jpg","3_2_3.jpg","3_2_4.jpg","3_2.mp3",3);
test3OpgaveListe[2] = new Test3Opg("3_3_1.jpg","3_3_2.jpg","3_3_3.jpg","3_3_4.jpg","3_3.mp3",2);
test3OpgaveListe[3] = new Test3Opg("3_4_1.jpg","3_4_2.jpg","3_4_3.jpg","3_4_4.jpg","3_4.mp3",3);
test3OpgaveListe[4] = new Test3Opg("3_5_1.jpg","3_5_2.jpg","3_5_3.jpg","3_5_4.jpg","3_5.mp3",2);
test3OpgaveListe[5] = new Test3Opg("3_6_1.jpg","3_6_2.jpg","3_6_3.jpg","3_6_4.jpg","3_6.mp3",2);
test3OpgaveListe[6] = new Test3Opg("3_7_1.jpg","3_7_2.jpg","3_7_3.jpg","3_7_4.jpg","3_7.mp3",4);
test3OpgaveListe[7] = new Test3Opg("3_8_1.jpg","3_8_2.jpg","3_8_3.jpg","3_8_4.jpg","3_8.mp3",1);
test3OpgaveListe[8] = new Test3Opg("3_9_1.jpg","3_9_2.jpg","3_9_3.jpg","3_9_4.jpg","3_9.mp3",4);
test3OpgaveListe[9] = new Test3Opg("3_10_1.jpg","3_10_2.jpg","3_10_3.jpg","3_10_4.jpg","3_10.mp3",1);
test3OpgaveListe[10] = new Test3Opg("3_11_1.jpg","3_11_2.jpg","3_11_3.jpg","3_11_4.jpg","3_11.mp3",3);
test3OpgaveListe[11] = new Test3Opg("3_12_1.jpg","3_12_2.jpg","3_12_3.jpg","3_12_4.jpg","3_12.mp3",4);
test3OpgaveListe[12] = new Test3Opg("3_13_1.jpg","3_13_2.jpg","3_13_3.jpg","3_13_4.jpg","3_13.mp3",3);
test3OpgaveListe[13] = new Test3Opg("3_14_1.jpg","3_14_2.jpg","3_14_3.jpg","3_14_4.jpg","3_14.mp3",4);
test3OpgaveListe[14] = new Test3Opg("3_15_1.jpg","3_15_2.jpg","3_15_3.jpg","3_15_4.jpg","3_15.mp3",1);
test3OpgaveListe[15] = new Test3Opg("3_16_1.jpg","3_16_2.jpg","3_16_3.jpg","3_16_4.jpg","3_16.mp3",2);
test3OpgaveListe[16] = new Test3Opg("3_17_1.jpg","3_17_2.jpg","3_17_3.jpg","3_17_4.jpg","3_17.mp3",4);
test3OpgaveListe[17] = new Test3Opg("3_19_1.jpg","3_19_2.jpg","3_19_3.jpg","3_19_4.jpg","3_19.mp3",3);
test3OpgaveListe[18] = new Test3Opg("3_20_1.jpg","3_20_2.jpg","3_20_3.jpg","3_20_4.jpg","3_20.mp3",1);
test3OpgaveListe[19] = new Test3Opg("3_21_1.jpg","3_21_2.jpg","3_21_3.jpg","3_21_4.jpg","3_21.mp3",3);
test3OpgaveListe[20] = new Test3Opg("3_22_1.jpg","3_22_2.jpg","3_22_3.jpg","3_22_4.jpg","3_22.mp3",2);
test3OpgaveListe[21] = new Test3Opg("3_23_1.jpg","3_23_2.jpg","3_23_3.jpg","3_23_4.jpg","3_23.mp3",4);
test3OpgaveListe[22] = new Test3Opg("3_24_1.jpg","3_24_2.jpg","3_24_3.jpg","3_24_4.jpg","3_24.mp3",2);
test3OpgaveListe[23] = new Test3Opg("3_25_1.jpg","3_25_2.jpg","3_25_3.jpg","3_25_4.jpg","3_25.mp3",3);
test3OpgaveListe[24] = new Test3Opg("3_26_1.jpg","3_26_2.jpg","3_26_3.jpg","3_26_4.jpg","3_26.mp3",2);
test3OpgaveListe[25] = new Test3Opg("3_27_1.jpg","3_27_2.jpg","3_27_3.jpg","3_27_4.jpg","3_27.mp3",2);
test3OpgaveListe[26] = new Test3Opg("3_29_1.jpg","3_29_2.jpg","3_29_3.jpg","3_29_4.jpg","3_29.mp3",3);
test3OpgaveListe[27] = new Test3Opg("3_30_1.jpg","3_30_2.jpg","3_30_3.jpg","3_30_4.jpg","3_30.mp3",3);
test3OpgaveListe[28] = new Test3Opg("3_31_1.jpg","3_31_2.jpg","3_31_3.jpg","3_31_4.jpg","3_31.mp3",1);
test3OpgaveListe[29] = new Test3Opg("3_32_1.jpg","3_32_2.jpg","3_32_3.jpg","3_32_4.jpg","3_32.mp3",2);
test3OpgaveListe[30] = new Test3Opg("3_33_1.jpg","3_33_2.jpg","3_33_3.jpg","3_33_4.jpg","3_33.mp3",3);
test3OpgaveListe[31] = new Test3Opg("3_34_1.jpg","3_34_2.jpg","3_34_3.jpg","3_34_4.jpg","3_34.mp3",2);
test3OpgaveListe[32] = new Test3Opg("3_35_1.jpg","3_35_2.jpg","3_35_3.jpg","3_35_4.jpg","3_35.mp3",4);
test3OpgaveListe[33] = new Test3Opg("3_36_1.jpg","3_36_2.jpg","3_36_3.jpg","3_36_4.jpg","3_36.mp3",3);
test3OpgaveListe[34] = new Test3Opg("3_37_1.jpg","3_37_2.jpg","3_37_3.jpg","3_37_4.jpg","3_37.mp3",3);
test3OpgaveListe[35] = new Test3Opg("3_39_1.jpg","3_39_2.jpg","3_39_3.jpg","3_39_4.jpg","3_39.mp3",1);
test3OpgaveListe[36] = new Test3Opg("3_40_1.jpg","3_40_2.jpg","3_40_3.jpg","3_40_4.jpg","3_40.mp3",3);
test3OpgaveListe[37] = new Test3Opg("3_41_1.jpg","3_41_2.jpg","3_41_3.jpg","3_41_4.jpg","3_41.mp3",2);
test3OpgaveListe[38] = new Test3Opg("3_43_1.jpg","3_43_2.jpg","3_43_3.jpg","3_43_4.jpg","3_43.mp3",2);
test3OpgaveListe[39] = new Test3Opg("3_44_1.jpg","3_44_2.jpg","3_44_3.jpg","3_44_4.jpg","3_44.mp3",1);

// Test 3 funktioner

function StartTest3Timer() {
    test3Timer--;
    timerID = setTimeout("StartTest3Timer()", 1200)
    if (test3Timer==0) {
        if (timerID) {
            clearTimeout(timerID);
            timerID  = 0;
        }
        Test3MoveOn();
    }
}

function Test3MoveOn() {
    if (runningEksempler) {
        self.indhold.window.location.href = "indhold3x.html";
    } else {
        if (test3OpgaveListe.length == opgaveNr+1) {
            opgaveNr = 0;
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
        if (timerID) {
            clearTimeout(timerID);
            timerID  = 0;
        }
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
    var res = "";
    for (i=0; i<test3OpgaveListe.length; i++) {
        if (test3OpgaveListe[i].pupil == 0) {  // time_out
            test3OpgaveListe[i].pupil = 9;
        }
        if (test3OpgaveListe[i].pupil == 5) {  // gul pil
            test3OpgaveListe[i].pupil = 9;
        }
        res = res + test3OpgaveListe[i].pupil + ",";
    }    return res;
}

