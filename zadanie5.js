var n = +prompt('Podaj liczbę całkowitą celem wyświetlenia trójkąta: ');
var star = '';
for(var a = 1; a < n; a++){
   for(b = 0; b < n - a; b++){
    star += ' ';
   }
   for(var c = 0; c < 2 * a - 1; c++){
       star +='*';
   }
   star += '\n';
}
alert(star);