function fcos() {// resolve o cos(x)
ang = document.getElementById("angulo").value; //lê o ângulo em graus
ang=Number(ang); //para garantir que é número

//COSSENO EXATO
angr=(ang/180)*(Math.PI); //conversão para radianos
cos=Math.cos(angr); //funções do javascript (todas têm que vir com "Math.") que calcula o cosseno
document.getElementById("ecos").innerHTML = cos; //mostra o resultado na página html

//POLINÔMIO DE MCLAURIN
n = document.getElementById("nvezes").value; //lê o número de termos do polinômio
n=Number(n); //para garantir que é número
n=n-1; //para considerar o termo zero
m=0; //m é cada termo do polinômio
for (i = 0; i <= n; i++) { //para i de 0 a n, somando 1 em 1)
m=m+((Math.pow(-1,i))*((Math.pow(angr,2*i))/(fatorial(2*i))));
}
document.getElementById("mcos").innerHTML = m; //mostra o valor final
erro=(cos-m)
document.getElementById("derro").innerHTML = erro.toPrecision(1); //mostra o erro com 1 algarismo significativo
}

function fatorial(num) { // função fatorial de um número
fat=1;
for (c = num; c >= 1; c--) {//para c de num a 1, subtraindo 1 em 1
fat=fat*c;
}
return fat
}