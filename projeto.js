// ola =true;
// ola2 = true;
// function compareTrue(comp1, comp2) {
// 	if((comp1 === true)&& (comp2===true)){
// 		console.log("true");
// 	}else{
// 		console.log("false");
// 	}
//   }


// 	compareTrue(ola,ola2);


// function calcArea(base,height) {
//   result = (base * height)/2;
// 	console.log(result);
// }

// calcArea(5,2);

// Desafio 3
// function splitSentence(string) {
//   divisor = string.split(' ');
// 	return divisor;
// }

// splitSentence("foguete");


// Desafio 4
// function concatName(string) {
// 	let virgula =',';
//   let primeira = string[0];
// 	let ultima   = string[(string.length-1)];
// 	let result = ultima+virgula+primeira;
// 	console.log(result);
// }

// let string =['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];

// concatName(string);

// function footballPoints(wins,ties) {
// 	wins*=3;
// 	ties*=1;
//   let result = wins+ties;
// 	console.log(result);
// }
// footballPoints(14,8);

// function highestCount(n) {
// 	let vezes =0;
// 	let maior= n[0];
//   for (let i of n) {
// 		if (i > maior) {
// 	  	maior = i;
// 		}
// 	}

// 	for (let i of n) {
// 		if (i === maior) {
// 		vezes+= 1;
// 		}
// 	}
// 	console.log(vezes);
// }

// let n = [9, 1, 2, 3, 9, 5, 7];
// highestCount(n);


// function catAndMouse(mouse, cat1, cat2) {
// 	let positionCatOne =  Math.abs(mouse - cat1);
// 	let positionCatTwo  = Math.abs(mouse - cat2);

// 	if (positionCatOne < positionCatTwo) {
// 		console.log("cat1",positionCatOne);
// 	}else if(positionCatOne > positionCatTwo){
// 		console.log("cat2",positionCatTwo);
// 	}else{
// 		console.log("os gatos trombam e o rato foge");
// 	}
// }

// catAndMouse(5,3,7)


// function catAndMouse(mouse, cat1, cat2) {
//   let positionCatOne = Math.abs(mouse - cat1);
//   let positionCatTwo = Math.abs(mouse - cat2);

//   if (positionCatOne < positionCatTwo) {
//     return positionCatOne;
//   } else if(positionCatOne > positionCatTwo) {
//     return positionCatTwo;
//   } return "os gatos trombam e o rato foge";


// //  }

// // function fizzBuzz(n) {
// // 	let result=[];
// // 	for (const index of n) {
// // 		if (index % 3 === 0 && index % 5 === 0) {
// // 		result.push('fizzBuzz');
// // 		} else if (index % 3 === 0) {
// // 			result.push('fizz');
// // 		}else if(index % 5 === 0){
// // 			result.push('buzz');
// // 		}else{
// // 			result.push('bug!');
// // 		}
// // 	}
// // 	console.log(result);
// // }

// // let n = [2, 15, 7, 9, 45] ;
// fizzBuzz(n);


// function encode(str) {
// 	let result = '';
// 	result = str.replace(/a/g,'1');
// 	result = result.replace(/e/g,'2');
// 	result = result.replace(/i/g,'3');
// 	result = result.replace(/o/g,'4');
// 	result = result.replace(/u/g,'5');
// 	console.log(result);
// }



// function decode(str) {
// 	let result = '';
// 	result = str.replace(/1/g,'a');
// 	result = result.replace(/2/g,'e');
// 	result = result.replace(/3/g,'i');
// 	result = result.replace(/4/g,'o');
// 	result = result.replace(/5/g,'u');
// 	console.log(result);
// }

// decode("h3 th2r2!");
// encode("hi there!");

function techList(lista, name) {
	let result = [];
	for (let index = 0; index < lista.length; index += 1) {
		let objeto = {
			tech: "",
			name: name,
		}
		objeto.tech = lista[index];
		result.push(objeto);
	}

	if (result.length > 0) {
		result.sort(function(a,b){  //Através do sort o resultado vai obedecer o padrão de ordenação estabelecido dentro da função.
			if(a.tech < b.tech){      // O método sorte faz uma verificação entre os elementos como se fosse um for e faz a comparação
				return false;                     
			}else{
				return true;
			}
		}); 
		console.log(result);
	} else {
		console.log('Vazio!');
	} 
}




let lista = [];
let nome = "daniel";

techList(lista, nome);