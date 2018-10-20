/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var div = document.getElementById("glowny");

div.innerHTML = "<H1>OKOKOK</H1>"

var obj = {
    imie: "wojtek",
    nazwisko: "golebiewski",
    getinfo: function()
    {
        return this.imie + " - " + this.nazwisko
    }
};

div.innerHTML += obj.getinfo()
