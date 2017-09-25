function tid(nummer){
    var curHour = Sltid.getHours()
    var curMin = Sltid.getMinutes()
    var curSec = ''
    var curTime = ((curHour < 10) ? "0" : "") + curHour + ":" + ((curMin < 10) ? "0" : "") + curMin + ""  + ((curSec < 10) ? "" : "") 
    Testtid  = 'besvaret ' + dd2 +". " + TMonth[mm2] + " " + yy2 + " klokken " + curTime
    afleveret[nummer] =  Testtid 
}

function skiftopg(){//alert('skiftopg');   alert(Aktuelopgave);alert(Antalopgaver);

    set[Aktuelopgave] = 1;
    if (Aktuelopgave  < Antalopgaver) {
        Aktuelopgave = Aktuelopgave +1;
        navn = Filnavne[Aktuelopgave];//alert(navn);
        parent.rapport.focus ();
        parent.hovedramme.document.location.href = "";
        parent.hovedramme.document.location.href = navn;
    }
    else{
        danrapport();
    }    
}

function vurderopg(denneform){
    if (Korrektsvar[Aktuelopgave].length >0 ){ // opgaven skal vurderes
        //Find først opgavetypen
        MultichoiceEnkelt()
    }    
    skiftopg();
}

function tid(nummer){
    var curHour = Sltid.getHours()
    var curMin = Sltid.getMinutes()
    var curSec = ''
    var curTime = ((curHour < 10) ? "0" : "") + curHour + ":" + ((curMin < 10) ? "0" : "") + curMin + ""  + ((curSec < 10) ? "" : "") 
    Testtid  = 'besvaret ' + dd2 +". " + TMonth[mm2] + " " + yy2 + " klokken " + curTime
    afleveret[nummer] =  Testtid 
}


function MultichoiceEnkelt(){
    Point=0;
    Rigtigt=Korrektsvar[Aktuelopgave];
    svaret =parent.hovedramme.svaret;
    for(i=0;i<svaret.length;i++){
        Refnavn = "id" +i; 
        if (svaret[i]){
            if(Rigtigt==i){ // svaret og rigtigt
                Point = 1;
                tekst ="<img height=14 src='../userfiles/Image/korrektsvar.gif' width=14>&nbsp;<img src='../userfiles/Image/kryds_2.gif' width='14' height='14' alt=''/>&nbsp;"
                
            }
            else { //svaret men forkert
                tekst ="<img height=14 src='../userfiles/Image/forkertsvar.gif' width=14>&nbsp;<img src='../userfiles/Image/kryds_2.gif' width='14' height='14' alt=''/>&nbsp;"
            }
            //parent.hovedramme.document.all[Refnavn].innerHTML = tekst;
			parent.hovedramme.document.getElementById(Refnavn).innerHTML = tekst;
        }
        else { //der er ikke sat kryds - udskift kun hvis det var den korrekte
            if(Rigtigt==i){
                tekst ="<img height=14 src='../userfiles/Image/korrektsvar.gif' width=14>&nbsp;<img src='../userfiles/Image/ramme_2.gif' width='14' height='14' alt=''/>&nbsp;"
                //parent.hovedramme.document.all[Refnavn].innerHTML = tekst;
				parent.hovedramme.document.getElementById(Refnavn).innerHTML = tekst;
            }
			else {//ellers udskift med blank så det stadig ser pænt ud
                tekst ="<img height=14 src='../userfiles/Image/blank.gif' width=14>&nbsp;<img src='../userfiles/Image/ramme_2.gif' width='14' height='14' alt=''/>&nbsp;"
				//parent.hovedramme.document.all[Refnavn].innerHTML = tekst;
                parent.hovedramme.document.getElementById(Refnavn).innerHTML = tekst;
            }
        }    
    }
    Point = Math.round(Point*1000/1)/10;
    set[Aktuelopgave] = 1;
    tid(Aktuelopgave);
    opgaveformulering = parent.hovedramme.document.getElementById("opgaveindhold").innerHTML;
    Points[Aktuelopgave] = Point;
    Svartekst[Aktuelopgave] = opgaveformulering;  
    AfgivetSvar[Aktuelopgave] =   svaret; 
}

function ReplaceStuff(Token, Replacement, InString){
	var i = InString.indexOf(Token);
	var FirstBit = '';
	var LastBit = '';
	while (i>-1){
		FirstBit = InString.substring(0, i);
		LastBit = InString.substring(i + Token.length, InString.length);	
		InString = FirstBit + Replacement + LastBit;
		i = InString.indexOf(Token);
	}
	return InString;
}  

function danrapport(){
    var fs = top.document.getElementById("OUTERFRAME");
    fs.rows = "*,0";
  var tekst;
    Vegtet = new Array();
    samletscore =0
    muligscore = 0;
    for (i=1;i<=Antalopgaver;i++){
        muligscore = muligscore + Vegt[i]
    } 
    for (i=1;i<=Antalopgaver;i++){
        Vegtet[i] =Math.round(Points[i]*10*Vegt[i]/muligscore)/10
        samletscore = samletscore + Vegtet[i]
    }           

    samletscore = Math.round(samletscore)
    tekst = "<html><head>";
	tekst = tekst + '<style>';
	tekst = tekst + 'body,p,td';
	tekst = tekst + '{';
	tekst = tekst + '	background-color:#ffffff;';
	tekst = tekst + '	font-family:Verdana, Arial, Helvetica, Sans-Serif;';
	tekst = tekst + '	font-size: 12px;';
	tekst = tekst + '	line-height:24px;';	
	tekst = tekst + '}';	
	tekst = tekst + '	.sidefod';
	tekst = tekst + '{';
	tekst = tekst + '	background-color: #d4eeee; ';
	tekst = tekst + '	height:20px;';
	tekst = tekst + '	color:#000000;';
	tekst = tekst + '	text-align:right;';
	tekst = tekst + '	vertical-align:middle;';
	tekst = tekst + '}';
	tekst = tekst + '';
	tekst = tekst + '.sidefod_vent';
	tekst = tekst + '{';
	tekst = tekst + '	background-color: #d4eeee; ';
	tekst = tekst + '	font-weight: normal;';
	tekst = tekst + '	font-size: 10px;';
	tekst = tekst + '	color:#000000;';
	tekst = tekst + '	text-align:right;';
	tekst = tekst + '	vertical-align:middle;';
	tekst = tekst + '	padding-right:5px;';
	tekst = tekst + '}';
	tekst = tekst + '';
	tekst = tekst + '.sidefod_img';
	tekst = tekst + '{';
	tekst = tekst + '	background-color: #d4eeee; ';
	tekst = tekst + '	height:20px;';
	tekst = tekst + '	padding-left:7px;';
	tekst = tekst + '	text-align:left;';
	tekst = tekst + '}';

tekst = tekst + '@media print {';
tekst = tekst + '  .EjUdprintes{visibility:hidden}';
tekst = tekst + '}';


	tekst = tekst + '</style>';
//    tekst = tekst +"<title>" + Elevnavn + "&nbsp;&nbsp;&nbsp;&nbsp;Klasse:" + Klasse + "&nbsp;&nbsp;&nbsp;&nbsp;Skole:" + Skole + "</title>"
//    tekst = tekst +"<title>" + Elevnavn + "&nbsp;&nbsp;&nbsp;&nbsp;CPR-nummer:" + cprnummer + "&nbsp;&nbsp;&nbsp;&nbsp;CPR-nummer:" + cprnummer + "</title>"
    tekst = tekst +"<title>Navn: " + Elevnavn + " CPR-nummer: " + cprnummer +  " Institution:" + Skole + "</title>"
    
    
    tekst = tekst + "<link  href='../css/testopgave.css' type='text/css' rel='stylesheet' media='print'>"
    tekst = tekst + "<style>.button {BORDER-RIGHT: #6f92a8 1px solid; BORDER-TOP: #6f92a8 1px solid; FONT-SIZE: 10pt; MARGIN: 0px; BORDER-LEFT: #6f92a8 1px solid; COLOR: #6f92a8; BORDER-BOTTOM: #6f92a8 1px solid; FONT-FAMILY: sans-serif, Verdana, Arial}</style>"


/*
  <tr height="10" >
    <td class="leftmarginwidth" width="27" height="39">&nbsp;</td>
    <td width="200" valign="top" height="39" align="right">CPR-nummer:</td>
    <td align="left" height="39" valign="top">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span id="klassevalg"><input type="text" id="cprnummer" name="cprnummer" size="42"></span></td>
  <td align="right">&nbsp;</td>
  <td align="right">&nbsp;</td>
  <td class="luft">&nbsp;</td>
	</tr>
*/

    tekst = tekst + "</head><body>"
//tekst = tekst + "<table style='BACKGROUND-COLOR: #80a0bf' cellspacing=0 cellpadding=0 width=100% border=0><tr height=20><td style='FONT-SIZE: 11pt; COLOR: #ffffff; FONT-FAMILY: verdana' align=center><b>Resultat af testen</b></td></tr></table>"
//#d4eeee
/*
tekst = tekst + '<table cellspacing=0 cellpadding=0 width="100%" border=0>'
tekst = tekst + '<tr>'
tekst = tekst + '  <td colspan="6" class="sidefod">'
tekst = tekst + '    <table border="0" width="100%" cellspacing="0" cellpadding="0">'
tekst = tekst + '    <tr>'
tekst = tekst + '      <td class="sidefod_img">© 2007 @ventures® </td>'
tekst = tekst + '      <td class="sidefod_vent"><font color="#ffffff">&nbsp;<b>Resultat af testen</b></font></td>'
tekst = tekst + '    </tr>'
tekst = tekst + '    </table>'
tekst = tekst + '  </td>'
tekst = tekst + '</tr>'
tekst = tekst + '</table>'
*/	
	tekst = tekst + '<table border=0 width=100%>'
    tekst = tekst + '<tr height="10"><td class="leftmarginwidth" width="27" height="39">&nbsp;</td><td colspan="3"><h3>Resultat af ' + Testnavn +'</h3></td></tr>'
    tekst = tekst + '<tr><td colspan="3"><img src="../userfiles/Image/blank.gif" height="8px" width="1px" border="0" alt="" /></td><td>&nbsp;</td><td width="250px">&nbsp;</td></tr>';

	tekst = tekst + '<tr height="10"><td class="leftmarginwidth" width="27" height="39">&nbsp;</td><td valign="top" height="39" align="left"><b>Test: </b>' + Testnavn +'</td><td class="EjUdprintes"><b><input id=afslut class=button type=button disabled  value=Afslut onclick=parent.close();></b></td><td>&nbsp;</td></tr>'
//    tekst = tekst + "<tr><td><b>Resultat: </b>" + samletscore + "%</td><td ><center><b><input id=print class=button type=button   value=Udskriv onclick=parent.rapport.focus();parent.rapport.print();afslut.disabled=false;></b></center></td></tr>"
    tekst = tekst + '<tr height="10"><td class="leftmarginwidth" width="27" height="39">&nbsp;</td><td valign=""top"" height="39" align="left"><b>Navn: </b>' + Elevnavn + '</td><td class="EjUdprintes"><b><input id=print class=button type=button value=Udskriv onclick=parent.rapport.focus();parent.rapport.print();afslut.disabled=false;></b></td><td>&nbsp;</td></tr>'
//    tekst = tekst + "<tr><td><b>Klasse: </b>" + Klasse + "</td><td></td></tr>"
    tekst = tekst + '<tr height="10"><td class="leftmarginwidth" width="27" height="39">&nbsp;</td><td valign="top" height="39" align="left"><b>CPR-nummer: </b>' + cprnummer + '</td><td>&nbsp;</td><td>&nbsp;</td></tr>'
    tekst = tekst + '<tr height="10"><td class="leftmarginwidth" width="27" height="39">&nbsp;</td><td valign="top" height="39" align="left"><b>Testinstitution: </b>' + Skole + '</td><td>&nbsp;</td><td>&nbsp;</td></tr>'//<center><b><input id=detaljeknap class=button type=button value=\'Vis detaljer\' onclick=document.getElementById(\'detaljer\').style.display=\'inline\';></b></center></td></tr>'
//    var curHour = Sltid.getHours()
//    var curMin = Sltid.getMinutes()
//    var curSec = ''
//    var curTime = ((curHour < 10) ? "0" : "") + curHour + ":" + ((curMin < 10) ? "0" : "") + curMin + ""  + ((curSec < 10) ? "" : "") 
    Testtid  = dd2 +". " + TMonth[mm2] + " " + yy2 //+ " klokken " + curTime
    tekst = tekst + '<tr height="10"><td class="leftmarginwidth" width="27" height="39">&nbsp;</td><td valign="top" height="39" align="left"><b>Dato: </b>' + Testtid + '</td><td>&nbsp;</td><td>&nbsp;</td></tr>'
	//tekst = tekst + '</table><br/><br/>'    

    //gennemløb hver kategori
    //tekst = tekst + "<table style='BACKGROUND-COLOR: #ffffff' width=100% border=1><tr>"
    tekst = tekst + '<tr><td colspan="3"><img src="../userfiles/Image/blank.gif" height="8px" width="1px" border="0" alt="" /></td><td>&nbsp;</td></tr>';
	tekst = tekst + "<tr><td class='leftmarginwidth' width='27' height='39'>&nbsp;</td>"
	tekst = tekst + "<td><b>&nbsp;&nbsp;Deltest</b></td>"
	tekst = tekst + "<td><b>&nbsp;&nbsp;Antal rigtige svar</b></td><td>&nbsp;</td></tr>"
	//<td ><b>Vægt af kategori</b></td><td  colspan=2><b>&nbsp;&nbsp;Vægtet bedømmelse</b></td></tr>"    
    for (p=1;p<Gruppenavne.length;p++){
        //Find ud af hvilken vægt kategorien har
        samletscorekat =0
        muligscorekat = 0;
		point=0
        katnumre = Gruppenumre[p].split(",");
        for (i=0;i<katnumre.length;i++){
            muligscorekat = muligscorekat + Vegt[katnumre[i*1]*1];
            //alert(Vegt[katnumre[i*1]*1]);
        }
        for (i=0;i<katnumre.length;i++){
            Vegtetkat =Math.round(Points[katnumre[i*1]*1]*10*Vegt[katnumre[i*1]*1]/muligscorekat)/10
            samletscorekat = samletscorekat + Vegtetkat
		    point = point + Points[katnumre[i*1]]
        }           
        samletscorekat = Math.round(samletscorekat);
        vegt_i_test    = Math.round(muligscorekat*100/muligscore);

                Bredde1 = Math.round(samletscorekat*2);
                Bredde2 = Math.round(vegt_i_test*2) - Bredde1
                Bredde3 = 200 - Bredde1 -Bredde2
                tekst = tekst + "<tr><td class='leftmarginwidth' width='27' height='39'>&nbsp;</td><td>&nbsp;"  + Gruppenavne[p] + "</td>"
                //tekst = tekst + "<td >" + "" + "</td>"
                //tekst = tekst + "<td>" + vegt_i_test + "%</td>"
                //tekst = tekst + "<td >&nbsp;&nbsp;" + samletscorekat + "%</td>"
				tekst = tekst + "<td>&nbsp;&nbsp;" + (point/100) + " ud af " + muligscorekat + "</td><td>&nbsp;</td></tr>"
                //tekst = tekst + "<td width=210><img height=20 src=../userfiles/Image/1.gif width=" + Bredde1 + "><img height=20 src=../userfiles/Image/2.gif width=" + Bredde2 +"><img height=20 src=../userfiles/Image/3.gif width=" + Bredde3 + "></td></tr>"
 
    }
    Bredde1 = Math.round(samletscore*2);
    Bredde3 = 200 - Bredde1;
/*
    tekst = tekst + "<tr><td>&nbsp;</td>"
    tekst = tekst + "<td colspan=2 >hele testen:</td>"
    tekst = tekst + "<td >&nbsp;&nbsp;" + samletscore + "%</td>"
    tekst = tekst + "<td width=210><img height=20 src=../userfiles/Image/1.gif width=" + Bredde1 +"><img height=20 src=../userfiles/Image/4.gif width=" + Bredde3 + "></td></tr>"
*/
tekst = tekst + '<tr><td colspan="3"><img src="../userfiles/Image/blank.gif" height="8px" width="1px" border="0" alt="" /></td><td>&nbsp;</td></tr>';
//tekst = tekst + '<tr><td colspan="3"><img src="../userfiles/Image/blank.gif" height="8px" width="1px" border="0" alt="" /></td><td>&nbsp;</td></tr>';
tekst = tekst + '<tr><td class="leftmarginwidth" width="27" height="39">&nbsp;</td><td colspan="3">Denne test er udviklet for Undervisningsministeriet af @ventures og Matematiske aktiviteter I/S.</td></tr>';
tekst = tekst + '<tr><td colspan="3"><img src="../userfiles/Image/blank.gif" height="8px" width="1px" border="0" alt="" /></td><td>&nbsp;</td></tr>';

tekst = tekst + '<tr><td class="leftmarginwidth" width="27" height="39">&nbsp;</td><td colspan="3"><img src="../userfiles/Image/logoer.gif" height="94px" width="447px" alt="" /></td></tr>';

/*
tekst = tekst + '<tr><td colspan="3"><img src="../userfiles/Image/blank.gif" height="8px" width="1px" border="0" alt="" /></td></tr><tr>';
tekst = tekst + '  <td colspan="3" class="sidefod">';
tekst = tekst + '    <table border="0" width="100%" cellspacing="0" cellpadding="0">';
tekst = tekst + '    <tr>' ;
tekst = tekst + '      <td class="sidefod_img">© 2007 @ventures® </td>';
tekst = tekst + '      <td class="sidefod_vent"><font color=""#ffffff"">&nbsp;</font></td>';
tekst = tekst + '    </tr>';
tekst = tekst + '    </table>';
tekst = tekst + '  </td>';
*/
//tekst = tekst + '  <td class="luft">&nbsp;</td>';
tekst = tekst + '</tr>';


    tekst = tekst + "</table><br/><br/><br/>";




    //gennemløb alle spg
/*
    tekst = tekst + "<table style='BACKGROUND-COLOR: #eeeeee' width=100% border=0><tr><td  width=210><b>&nbsp;&nbsp;Opgave</b></td><td ><b>Point</b></td><td ><b>Vægt</b></td><td  colspan=2><b>&nbsp;&nbsp;Vægtet bedømmelse</b></td></tr>"    
    for (i=1;i<=Antalopgaver;i++){
        if(Vegt[i]>0){
            Bredde1 = Math.round(Vegtet[i]*2);
            Bredde2 = Math.round(Vegt[i]*2) - Bredde1
            Bredde3 = 200 - Bredde1 -Bredde2
            tekst = tekst + "<tr><td>&nbsp;s" + i + ":&nbsp;" + opgnavne[i] + "</td>"
            tekst = tekst + "<td >" + Points[i] + "</td>"
            tekst = tekst + "<td>" + Vegt[i] + "</td>"
            tekst = tekst + "<td >&nbsp;&nbsp;" + Vegtet[i] + "%</td>"
            tekst = tekst + "<td width=210><img height=20 src=../userfiles/Image/1.gif width=" + Bredde1 + "><img height=20 src=../userfiles/Image/2.gif width=" + Bredde2 +"><img height=20 src=../userfiles/Image/3.gif width=" + Bredde3 + "></td></tr>"
        }
    }   
        Bredde1 = Math.round(samletscore*2);
        Bredde3 = 200 - Bredde1
    tekst = tekst + "<tr><td>&nbsp;</td>"
    tekst = tekst + "<td colspan=2 >hele testen:</td>"
    tekst = tekst + "<td >&nbsp;&nbsp;" + samletscore + "%</td>"
    tekst = tekst + "<td width=210><img height=20 src=../userfiles/Image/1.gif width=" + Bredde1 +"><img height=20 src=../userfiles/Image/4.gif width=" + Bredde3 + "></td></tr>"
    tekst = tekst + "</table><br/><br/><br/>"
    tekst = tekst + "<div id='detaljer' style='display:none'>"
    for (i=1;i<=Antalopgaver;i++){
        if(Vegt[i]>0){
            tekst = tekst + "<br><table style='BACKGROUND-COLOR: #80a0bf' cellspacing=0 cellpadding=0 width=100% border=0><tr width=100%>"
            tekst = tekst + "<td style='FONT-SIZE: 11pt; COLOR: #ffffff; FONT-FAMILY: verdana' align=left><small><b>s" + i + " : " + opgnavne[i] + "</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "
            tekst = tekst +  "</small></td><td style='FONT-SIZE: 11pt; COLOR: #ffffff; FONT-FAMILY: verdana' align=right><small><b>" + Points[i] + "%</b>&nbsp;&nbsp;</small></td><td align='left' bgcolor='ffffff' width=210>"
            Bredde1 = Math.round(Points[i]*2);
            Bredde3 = 200 - Bredde1
            tekst = tekst + "<img height=20 src=../userfiles/Image/1.gif width=" + Bredde1 + "><img height=20 src=../userfiles/Image/4.gif width=" + Bredde3 + "></td></tr></table>"
            tekst = tekst + Svartekst[i]
        }
    }
    tekst = tekst + "</div>"
    tekst = tekst + "</body></html>"
    tekst = tekst + "<script language=javascript>\nfunction afkryds(nr,nr){};\nfunction skiftfarve(nr){};"
    tekst = tekst + "function Svar(i){};function Change (i,j){};function Change2 (i,j){};function hide(i){};function vurderopg(i){};<\/script>" 
        
    Sltid = new Date();
    secsLeft = (Sltid.getTime() - Sttid.getTime()) / (60 * 1000 );
    secsRound = Math.round(secsLeft);
    secsRemain = secsLeft - secsRound;
    secsRemain = (secsRemain < 0) ? secsRemain = 60 - ((secsRound - secsLeft) * 60) : secsRemain = (secsLeft - secsRound) * 60;
    Sekunder = Math.round(secsRemain);
    minLeft = ((Sltid.getTime() - Sttid.getTime()) / (60 * 60 * 1000));
    minRound = Math.round(minLeft);
    minRemain = minLeft - minRound;
    minRemain = (minRemain < 0) ? minRemain = 60 - ((minRound - minLeft)  * 60) : minRemain = ((minLeft - minRound) * 60);
    Minutter = Math.round(minRemain - 0.495);
    hoursLeft = ((Sltid.getTime() - Sttid.getTime()) / (24 * 60 * 60 * 1000));
    hoursRound = Math.round(hoursLeft);
    hoursRemain = hoursLeft - hoursRound;
    hoursRemain = (hoursRemain < 0) ? hoursRemain = 24 - ((hoursRound - hoursLeft)  * 24) : hoursRemain = ((hoursLeft - hoursRound) * 24);
    Timer = Math.round(hoursRemain - 0.5);
    if (Minutter < 10 ) {Minutter = "0"+Minutter}
    if (Sekunder < 10 ) {Sekunder = "0"+Sekunder}
    Forbrugttid = Timer + ":" + Minutter + ":" + Sekunder
    tidnu = new Date();
    mm2 = tidnu.getMonth();
    dd2 = tidnu.getDate();
    yy2 = tidnu.getYear();
    var curHour = tidnu.getHours()
    var curMin = tidnu.getMinutes()
    var curSec = ''
    var curTime = ((curHour < 10) ? "0" : "") + curHour + ":" + ((curMin < 10) ? "0" : "") + curMin     
    tidspunkt = yy2 + "-" + mm2 + "-" + dd2 + " " + curTime    
	*/
    document.open()
    document.write(tekst)
    document.close()
    //parent.hovedramme.document.location.href = "";
    //parent.hovedramme.document.location.href = "../0101/udskriv.htm";  //alert('Bl\345b\346rgr\370d');
    //alert("Husk at du først må afslutte testen når resultatet er udskrevet!"); 
	alert("Husk at du f\370rst m\345 afslutte testen n\345r resultatet er udskrevet!"); 
       
    //parent.rapport.focus()

}
