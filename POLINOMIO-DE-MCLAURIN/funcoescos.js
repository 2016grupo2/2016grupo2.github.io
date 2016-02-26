function fcos() {// resolve o cos(x)
ang = document.getElementById("angulo").value; //l� o �ngulo em graus
ang=Number(ang); //para garantir que � n�mero

//COSSENO EXATO
angr=(ang/180)*(Math.PI); //convers�o para radianos
cos=Math.cos(angr); //fun��es do javascript (todas t�m que vir com "Math.") que calcula o cosseno
document.getElementById("ecos").innerHTML = cos; //mostra o resultado na p�gina html

//POLIN�MIO DE MCLAURIN
n = document.getElementById("nvezes").value; //l� o n�mero de termos do polin�mio
n=Number(n); //para garantir que � n�mero
n=n-1; //para considerar o termo zero
m=0; //m � cada termo do polin�mio
for (i = 0; i <= n; i++) { //para i de 0 a n, somando 1 em 1)
m=m+((Math.pow(-1,i))*((Math.pow(angr,2*i))/(fatorial(2*i))));
}
document.getElementById("mcos").innerHTML = m; //mostra o valor final
erro=(cos-m)
document.getElementById("derro").innerHTML = erro.toPrecision(1); //mostra o erro com 1 algarismo significativo
}

function fatorial(num) { // fun��o fatorial de um n�mero
fat=1;
for (c = num; c >= 1; c--) {//para c de num a 1, subtraindo 1 em 1
fat=fat*c;
}
return fat
}