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

function osoba(name, surrname)
{
    this.name = name;
    this.surrname = surrname;
    this.toString = function()
    {
        return this.name + " - " + this.surrname;
    }
}

var wojo = new osoba("Woojo", "Golebiewksi")
div.innerHTML += wojo
