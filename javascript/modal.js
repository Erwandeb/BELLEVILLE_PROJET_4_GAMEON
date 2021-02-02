function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close")


/*---- Fonction permettant d'ouvrir et de fermer la fenetre modale-----*/

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// Click to leave
closeBtn.addEventListener("click" , closeModal);

// Close modal form
function closeModal () {
  modalbg.style.display="none"
}





/*----------------------- GESTION  DU FORMULAIRE -------------------------*/

// Variables 
const form = document.getElementById("formulaire");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const eMail = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const submit = document.querySelector('.btn-submit');
const inputs = document.getElementsByTagName('input');
let firstnameRegExp = new RegExp ('[0-9]');
let lastnameRegExp = new RegExp ('[0-9]');

// Variables champs d'erreurs
const errorFirstName = document.querySelector(".errorFirstName");
const errorLastName = document.querySelector(".errorLastName");
const erroreMail = document.querySelector(".erroremail");
const errorBirthdate = document.querySelector(".errorbirthdate");
const errorQuantity = document.querySelector(".errorquantity");
const checkIcon = document.querySelector(".checkbox-input");
const errorCity = document.querySelector(".errorcity");
const errorConditionUser = document.querySelector(".errorconditionuser");
let erreur = 0;




// validation au moment du clique sur "SUBMIT"
form.addEventListener('submit', validate);
 


// fonction valider le formulaire 
function validate(e) {
  

  // Vérification du champ PRENOM
  if(firstName.value.trim() === ""){
    errorFirstName.innerHTML = "Vous devez écrire votre prénom.";
    erreur ++;
    return false;
  } else if (firstnameRegExp.test(firstName.value)){
    errorFirstName.innerHTML = "Votre prénom ne doit pas comporter des chiffres ou des symboles.";
    erreur ++;
    return false;
  }
  else {
    errorFirstName.remove();
    erreur = 0;
  }

  // Vérification du champ NOM
  if(lastName.value.trim() ===""){
    errorLastName.innerHTML = "Vous devez écrire votre nom.";
    erreur ++;
  } else if (lastnameRegExp.test(lastName.value)){
    errorLastName.innerHTML = "Votre nom ne doit pas comporter des chiffres ou des symboles.";
    erreur ++;
    return false;
  }
    else {
    errorLastName.remove();
    erreur = 0;
  }
  
  // Vérification du champ EMAIL
  if(eMail.value.trim() ===""){
    erroreMail.innerHTML = "Vous devez écrire votre e-mail.";
    erreur ++;
    return false;
  } else if (eMail.value.trim() === emailIsValid){
    erroreMail.innerHTML = "L'e-mail saisi est incorrect.";
    return false;
  }else{
    erroreMail.remove();
    erreur = 0;
  }

  // Vérification du champ ANNIVERSAIRE
  if(birthDate.value.trim() ===""){
    errorBirthdate.innerHTML = "Vous devez renseigner votre date d'anniversaire.";
    erreur ++;
    return false;
  }else{
    errorBirthdate.remove();
    erreur = 0;
  }

  // Vérification du champ NOMBRE EVENEMENT
  if(quantity.value.trim() ===""){
    errorQuantity.innerHTML = "Vous devez préciser à combien d'évènement auquel vous avez participé.";
    erreur ++;
    return false;
  }else{
    errorQuantity.remove();
    erreur = 0;
    }

  // Vérification du champ CHOIX DE VILLES
  if(getRadioButton(form.elements["location"]) == undefined){
    errorCity.innerHTML = "Vous devez préciser dans quelle ville etait ces évènements.";
    erreur ++;
    return false;
  }else{
    errorCity.remove();
    erreur = 0;
  }

  // Vérification du champ CONDITION UTILISATION
  const conditionUser = document.getElementById('checkbox1');
  let conditionsUserValue = conditionUser.checked;

  if (conditionsUserValue === false ){
    errorConditionUser.innerHTML = "Vous devez accepter les conditions utilisateur"
    erreur ++;
    e.preventDefault();
    return false;
  } else{
    conditionsUserValue = true; 
    errorConditionUser.remove();
    erreur = 0;
    
  }

  // FIN de fonction avec affichage du message de validation
  if (erreur >= 1){
   alert('no')
  }else{
    alert("Ce formulaire est bien envoyé ! ");
    closeModal();
    removeData();
  }
  
};




/*---- fonction qui compose la partie validate-----*/

// Fonction de vérification des emails
  function emailIsValid (email) {
    return /\S+@\S+\.\S+/.test(email)
  }


  // Fonction de vérification des boutons radios
 function getRadioButton(radioBouton){
   let choix;

   for (let radio of radioBouton){
     if (radio.checked){
       choix = radio.value;
     }
   }
   return choix;
 }


function removeData() {
  firstName.value ="";
  lastName.value="";
  eMail.value="";
  birthDate.value="";
  quantity.value="";
  conditionUser.checked="";
}