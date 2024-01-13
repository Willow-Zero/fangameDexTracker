dexJSONURL="dex.json"

newtable="<table><tr>"

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const game = urlParams.get('game');
const type = urlParams.get('type');
const level = urlParams.get('level');
inc = 0;
fullDexURL = "JSONDEX_" + game + "_" + type + "_" + level + ".json"
fullDexURL = "JSONDEX_Uranium_Living_Regional.json"
$.getJSON(fullDexURL, function(Data){
//console.log(Data);
$.getJSON(dexJSONURL, function(dex){
 // console.log(dex);
 newtable += "<tr><td colspan=6> 0-30 </tr>"
  for (var element in Data){
		inc += 1;
    i = String(inc).padStart(3, '0');
    newtable += "<td";
    if (dex[i]){
      newtable +=' style="background-color:yellow"> ';}
    else{
      newtable +=">";}
    newtable += i + " - " + Data[i]["Name"] + "<br><img src="+i+"_"+Data[i]["Name"]+".png>" + "<br><img src=" + Data[i]["Type"]["Primary"] + ".png>";
    if (Data[i]["Type"]["Secondary"]){
    	newtable += "<img src=" + Data[i]["Type"]["Secondary"] + ".png>";
    }
    newtable += "<br>" +Data[i]["Obtaining"];
    if (Data[i]["Evolutions"]["1"]){
    	newtable += "<br> Evolutions:<br>" + Data[i]["Evolutions"]["1"];
    }
     if (Data[i]["Preevoluitons"]["1"]){
    	newtable += "<br> Preevolutions:<br>" + Data[i]["Preevoluitons"]["1"];
    }
    newtable += "</td>";
    if (i%6==0){
      newtable+="</tr><tr>"}
    if (i%30 == 0){
      newtable += "</tr><tr><td colspan=6> " + i + "-" + (i+30) + "</tr><tr>"}
    
  }
  document.getElementById("dex").innerHTML = newtable;
  })})
