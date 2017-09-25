//
//  Copyright 2007
//  Version: 1.0
//  User:    m tuver
//  Date:    Okt, 2007
//
// Pretest variable
var pretestTimer =30;
var pretest1 = 0;
var pretest2 = 0;
var pretest3 = 0;
var pretest4 = 0;


// Pretest funktioner

function PretestNext(page) {
    if (page != 5) {
        self.indhold.window.location.href = "pretest"+page+".html";
    } else {
        if (pretest1+pretest2+pretest3+pretest4 ==4) {
            self.indhold.window.location.href = "pretestvent.html";
        } else {
            self.indhold.window.location.href = "preteststop.html";
        }
    }
}

