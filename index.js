var mdpInitial = document.getElementById('champ_mdp');
var codeFinale = document.getElementById('codeFinal');
var validButton = document.getElementById('Codez');

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n",
	"o","p","q","r","s","t","u","v","w","x","y","z"];
validButton.addEventListener('click', function () {
var decalage = parseInt(document.getElementById('champ_nbr').value);
	console.log(decalage);
	var mdpConstruct = [];
	var arrayString = mdpInitial.value.split('');
	for (var i = 0; i < arrayString.length; i++) {
		if (alphabet.indexOf(arrayString[i])+decalage >= alphabet.length) {
			var retourVal = alphabet.indexOf(arrayString[i])+decalage - alphabet.length;
			mdpConstruct.push(alphabet[retourVal]);
		}else if (alphabet.indexOf(arrayString[i]) == -1) {
			mdpConstruct.push(arrayString[i]);
		}else{
			var j = alphabet.indexOf(arrayString[i])+decalage;
			mdpConstruct.push(alphabet[j]);
		}
	}
	console.log(mdpConstruct.join(""));
	codeFinal.innerHTML = mdpConstruct.join("");
});