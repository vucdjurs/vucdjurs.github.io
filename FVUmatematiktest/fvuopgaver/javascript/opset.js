ns4 = (document.layers)? true:false
ns6 = (!document.all &&  document.getElementById)? true:false
ie4 = ( document.all && !document.getElementById)? true:false
ie5 = ( document.all &&  document.getElementById)? true:false
var message="Højreklik er ikke tilladt!";
    //Sørg for at genvejstaster bl.a. F5 ikke virker
    if (navigator.appName=="Netscape") {document.addEventListener("keypress",showDown,true);}
    document.onkeydown = showDown;

document.onreadystatechange = evt_ReadyStateChange;
function evt_ReadyStateChange()	{//alert('evt_ReadyStateChange');

    //Forhindre højreklik
    if (document.layers){
        document.captureEvents(Event.MOUSEDOWN);
        document.onmousedown=clickNS4;
    }
    else if (document.all&&!document.getElementById){
        document.onmousedown=clickIE4;
    }
    document.oncontextmenu=new Function("alert(message);return false")

    //Hent aktueltnummer og samlet antal fra rapportfil og dan ramme med nummerering
    try {
    Aktueltnummer = parent.rapport.Aktuelopgave
    IAltnummer = parent.rapport.Antalopgaver
    tekst = "FVU - side " + (Aktueltnummer-0+1) + " af " + (IAltnummer-0+1);
//    tekst = "FVU - side " + Aktueltnummer + " af " + IAltnummer;
    document.getElementById("opgnr").innerHTML = tekst;}
    catch(e) {}
    //Nu skal alle lydfiler erstattes med tilsvarende flashfiler
    var Collection = document.getElementsByTagName("img");//alert(Collection.length);
	for (i=Collection.length-1;i>=0;i--){//alert(i);alert(Collection.length);
		if (Collection[i].lang=='lyd'){
            StiTilLyd = Collection[i].alt;//alert(StiTilLyd);
            var fragment= document.createDocumentFragment();
            var block= document.createElement("span");
            block.id = "flashcontent" +i;
            //block.style.position ="relative"
            fragment.appendChild(block);
            var source= Collection[i];
            source.parentNode.replaceChild(fragment, source);
            var so = new SWFObject("../userfiles/Image/lyd.swf?lydURL="+StiTilLyd, "mymovie"+i, "29", "22", "7", "#ffffff");
            so.addVariable("movie", "../userfiles/Image/lyd.swf?lydURL="+StiTilLyd);
            //so.addVariable("align", "middle");
            so.write("flashcontent"+i);
		}	 	
	}
}

function clickIE4(){
    if (event.button==2){
        alert(message);
        return false;
    }
}

function clickNS4(e){
    if (document.layers||document.getElementById&&!document.all){
        if (e.which==2||e.which==3){
            alert(message);
            return false;
        }
    }
}

function show(id) {
   if (ns4) document.layers[id].visibility = "show"
   if (ns6) document.getElementById(id).style.visibility = "visible" 
   if (ie4) document.all[id].style.visibility = "visible"
   if (ie5) document.getElementById(id).style.visibility = "visible"
}

function hide(id) {
   if (ns4) document.layers[id].visibility = "hide"
   if (ns6) document.getElementById(id).style.visibility = "hidden"
   if (ie4) document.all[id].style.visibility = "hidden"
   if (ie5) document.getElementById(id).style.visibility = "hidden"
}

function showDown(evt) {
evt = (evt) ? evt : ((event) ? event : null);
if (evt) 
{


}
switch (evt.keyCode)	{
	case 8 : // 'Backspace'
		if (!evt.srcElement.isContentEditable)
		{//cancelKey(evt);
		
		}
		break;	
	case 66 : // 'B'
		if (evt.ctrlKey) // Ctrl-B		
			{cancelKey(evt);}
	case 69 : // 'E'
		if (evt.ctrlKey) // Ctrl-E	Søg	
			{cancelKey(evt);}
		break;

	case 70 : // 'F'
		if (evt.ctrlKey) // Ctrl-F	Find	
			{cancelKey(evt);}
		break;

	case 72 : // 'H'
		if (evt.ctrlKey) // Ctrl-H	history	
			{cancelKey(evt);}
		break;
	case 73 : // 'I'
		if (evt.ctrlKey) // Ctrl-I	åben favorites	
			{cancelKey(evt);}
		break;
	case 76 : // 'L'
		if (evt.ctrlKey) // Ctrl-L	Vindue-dialog	
			{cancelKey(evt);}
		break;
	case 78 : // 'N'
		if (evt.ctrlKey) // Ctrl-N	Nyt Vindue	
			{cancelKey(evt);}
		break;

	case 79 : // 'O'
		if (evt.ctrlKey) // Ctrl-o	Vindue-dialog	
			{cancelKey(evt);}
		break;
	case 80 : // 'P'
		if (evt.ctrlKey) // Ctrl-P	Print	
			{cancelKey(evt);}
		break;
	case 82 : // 'R'
		if (evt.ctrlKey) // Ctrl-P	Refresh	
			{cancelKey(evt);}
		break;
	case 87 : // 'W'
		if (evt.ctrlKey) // Ctrl-W	Luk Vindue
			{cancelKey(evt);}
		break;

	case 112 : // 'F1'
		break;
	case 114 : // 'F3' Åben Søg
		cancelKey(evt);
		break;
	case 116 : // 'F5'
		cancelKey(evt);
		break;
	case 117 : // 'F6' marker adresselinie
		cancelKey(evt);
		break;
	case 122 : // 'F11' fuldskærm
		cancelKey(evt);
		break;

}

}

function cancelKey(evt) {
    if (evt.preventDefault) {
        evt.preventDefault();
        return false;
    }
    else {
        evt.keyCode = 0;
        evt.returnValue = false;
    }
}

/**
 * SWFObject v1.4.4: Flash Player detection and embed - http://blog.deconcept.com/swfobject/
 *
 * SWFObject is (c) 2006 Geoff Stearns and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * **SWFObject is the SWF embed script formerly known as FlashObject. The name was changed for
 *   legal reasons.
 */
if(typeof deconcept=="undefined"){var deconcept=new Object();}
if(typeof deconcept.util=="undefined"){deconcept.util=new Object();}
if(typeof deconcept.SWFObjectUtil=="undefined"){deconcept.SWFObjectUtil=new Object();}
deconcept.SWFObject=function(_1,id,w,h,_5,c,_7,_8,_9,_a,_b){if(!document.getElementById){return;}
this.DETECT_KEY=_b?_b:"detectflash";
this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);
this.params=new Object();
this.variables=new Object();
this.attributes=new Array();
if(_1){this.setAttribute("swf",_1);}
if(id){this.setAttribute("id",id);}
if(w){this.setAttribute("width",w);}
if(h){this.setAttribute("height",h);}
if(_5){this.setAttribute("version",new deconcept.PlayerVersion(_5.toString().split(".")));}
this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion();
if(c){this.addParam("bgcolor",c);}
var q=_8?_8:"high";
this.addParam("quality",q);
this.setAttribute("useExpressInstall",_7);
this.setAttribute("doExpressInstall",false);
var _d=(_9)?_9:window.location;
this.setAttribute("xiRedirectUrl",_d);
this.setAttribute("redirectUrl","");
if(_a){this.setAttribute("redirectUrl",_a);}};
deconcept.SWFObject.prototype={setAttribute:function(_e,_f){
this.attributes[_e]=_f;
},getAttribute:function(_10){
return this.attributes[_10];
},addParam:function(_11,_12){
this.params[_11]=_12;
},getParams:function(){
return this.params;
},addVariable:function(_13,_14){
this.variables[_13]=_14;
},getVariable:function(_15){
return this.variables[_15];
},getVariables:function(){
return this.variables;
},getVariablePairs:function(){
var _16=new Array();
var key;
var _18=this.getVariables();
for(key in _18){_16.push(key+"="+_18[key]);}
return _16;},getSWFHTML:function(){var _19="";
if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){
if(this.getAttribute("doExpressInstall")){
this.addVariable("MMplayerType","PlugIn");}
_19="<embed type=\"application/x-shockwave-flash\" src=\""+this.getAttribute("swf")+"\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\"";
_19+=" id=\""+this.getAttribute("id")+"\" name=\""+this.getAttribute("id")+"\" ";
var _1a=this.getParams();
for(var key in _1a){_19+=[key]+"=\""+_1a[key]+"\" ";}
var _1c=this.getVariablePairs().join("&");
if(_1c.length>0){_19+="flashvars=\""+_1c+"\"";}_19+="/>";
}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");}
_19="<object id=\""+this.getAttribute("id")+"\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\">";
_19+="<param name=\"movie\" value=\""+this.getAttribute("swf")+"\" />";
var _1d=this.getParams();
for(var key in _1d){_19+="<param name=\""+key+"\" value=\""+_1d[key]+"\" />";}
var _1f=this.getVariablePairs().join("&");
if(_1f.length>0){_19+="<param name=\"flashvars\" value=\""+_1f+"\" />";}_19+="</object>";}
return _19;
},write:function(_20){
if(this.getAttribute("useExpressInstall")){
var _21=new deconcept.PlayerVersion([6,0,65]);
if(this.installedVer.versionIsValid(_21)&&!this.installedVer.versionIsValid(this.getAttribute("version"))){
this.setAttribute("doExpressInstall",true);
this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));
document.title=document.title.slice(0,47)+" - Flash Player Installation";
this.addVariable("MMdoctitle",document.title);}}
if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){
var n=(typeof _20=="string")?document.getElementById(_20):_20;
n.innerHTML=this.getSWFHTML();return true;
}else{if(this.getAttribute("redirectUrl")!=""){document.location.replace(this.getAttribute("redirectUrl"));}}
return false;}};
deconcept.SWFObjectUtil.getPlayerVersion=function(){
var _23=new deconcept.PlayerVersion([0,0,0]);
if(navigator.plugins&&navigator.mimeTypes.length){
var x=navigator.plugins["Shockwave Flash"];
if(x&&x.description){_23=new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));}
}else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}
catch(e){try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
_23=new deconcept.PlayerVersion([6,0,21]);axo.AllowScriptAccess="always";}
catch(e){if(_23.major==6){return _23;}}try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}
catch(e){}}if(axo!=null){_23=new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));}}
return _23;};
deconcept.PlayerVersion=function(_27){
this.major=_27[0]!=null?parseInt(_27[0]):0;
this.minor=_27[1]!=null?parseInt(_27[1]):0;
this.rev=_27[2]!=null?parseInt(_27[2]):0;
};
deconcept.PlayerVersion.prototype.versionIsValid=function(fv){
if(this.major<fv.major){return false;}
if(this.major>fv.major){return true;}
if(this.minor<fv.minor){return false;}
if(this.minor>fv.minor){return true;}
if(this.rev<fv.rev){
return false;
}return true;};
deconcept.util={getRequestParameter:function(_29){
var q=document.location.search||document.location.hash;
if(q){var _2b=q.substring(1).split("&");
for(var i=0;i<_2b.length;i++){
if(_2b[i].substring(0,_2b[i].indexOf("="))==_29){
return _2b[i].substring((_2b[i].indexOf("=")+1));}}}
return "";}};
deconcept.SWFObjectUtil.cleanupSWFs=function(){if(window.opera||!document.all){return;}
var _2d=document.getElementsByTagName("OBJECT");
for(var i=0;i<_2d.length;i++){_2d[i].style.display="none";for(var x in _2d[i]){
if(typeof _2d[i][x]=="function"){_2d[i][x]=function(){};}}}};
deconcept.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){};
__flash_savedUnloadHandler=function(){};
if(typeof window.onunload=="function"){
var _30=window.onunload;
window.onunload=function(){
deconcept.SWFObjectUtil.cleanupSWFs();_30();};
}else{window.onunload=deconcept.SWFObjectUtil.cleanupSWFs;}};
if(typeof window.onbeforeunload=="function"){
var oldBeforeUnload=window.onbeforeunload;
window.onbeforeunload=function(){
deconcept.SWFObjectUtil.prepUnload();
oldBeforeUnload();};
}else{window.onbeforeunload=deconcept.SWFObjectUtil.prepUnload;}
if(Array.prototype.push==null){
Array.prototype.push=function(_31){
this[this.length]=_31;
return this.length;};}
var getQueryParamValue=deconcept.util.getRequestParameter;
var FlashObject=deconcept.SWFObject;
var SWFObject=deconcept.SWFObject;