/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var div = document.getElementById("glowny");

div.innerHTML = "<H1>OKOKOK</H1>"

// pierwsza wersja lepsza !!
/*
var obj = {
    imie: "wojtek",
    nazwisko: "golebiewski",
    getinfo: function()
    {
        return this.imie + " - " + this.nazwisko
    },
    toString: function()
    {
        return this.nazwisko + " - " + this.imie
    }
};
*/
// druga wersja
/*
var obj = new Object({
    imie: "wojtekk",
    nazwisko: "golebiewski",
    getinfo: function()
    {
        return this.imie + " - " + this.nazwisko
    },
    toString: function()
    {
        return this.nazwisko + " - " + this.imie
    }       
        
        
});
*/

// funkcja konstrukcyjna
//
//function osoba(name, surrname)
//{
//    this.name = name;
//    this.surrname = surrname;
//    this.toString = function()
//    {
//        return this.name + " - " + this.newValue;
//    }
//}
//
//var wojo = new osoba("Woojo", "Golebiewksi");
//var mirka = new osoba("Mirka", "Golebiewska");
//
//osoba.prototype.newValue = 123;
//
//div.innerHTML += wojo + "<br/>" + mirka


// tablice

var tablica1 = [];
tablica1.push("sdf")
tablica1.push("dsf")
div.innerHTML += tablica1[tablica1.length-1]

//tablica assocjacyjne

var tablica2 = [];
tablica2["imie"] = "Wojciech";

div.innerHTML += tablica2["imie"];

var listazestrony = document.getElementById("lista");

var LiArray = listazestrony.getElementsByTagName("li");

div.innerHTML += "<br/>"+LiArray[1].innerHTML;