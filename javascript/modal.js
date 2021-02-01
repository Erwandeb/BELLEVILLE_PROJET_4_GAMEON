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





/*---- fonction permettant la gestion du Formulaire-----*/

// Variables 
const form = document.getElementById("formulaire");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const eMail = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const submit = document.querySelector('.btn-submit');
const inputs = document.getElementsByTagName('input');
//const checkConditionsUser = document.querySelector(".checkbox2-label");
const loca = document.querySelector('checkbox-input');
const conditionUtilisateur = document.getElementById("checkbox1");

// Variables erreurs
const errorFirstName = document.querySelector(".errorFirstName");
const errorLastName = document.querySelector(".errorLastName");
const erroreMail = document.querySelector(".erroremail");
const errorBirthdate = document.querySelector(".errorbirthdate");
const errorQuantity = document.querySelector(".errorquantity");
const checkIcon = document.querySelector(".checkbox-input");
const errorCity = document.querySelector(".errorcity");
const errorConditionUser = document.querySelector(".errorconditionuser");




// validation au moment du clique sur "SUBMIT"
form.addEventListener('submit', validate);
 


// fonction pour valider le formulaire 
function validate() {
  
  // Prénom
  if(firstName.value.trim() === ""){
    errorFirstName.innerHTML = "Vous devez écrire votre prénom.";
    return false;
  } 
  else {
    errorFirstName.remove();
  }
  // Nom
  if(lastName.value.trim() ===""){
    errorLastName.innerHTML = "Vous devez écrire votre nom.";
    return false;
  }else {
    errorLastName.remove();
  }
  
  // E-mail
  if(eMail.value.trim() ===""){
    erroreMail.innerHTML = "Vous devez écrire votre e-mail.";
    return false;
  } else if (eMail.value.trim() === emailIsValid){
    erroreMail.innerHTML = "L'e-mail saisi est incorrect.";
    return false;
  }else{
    erroreMail.remove();
  }

  // Anniversaire
  if(birthDate.value.trim() ===""){
    errorBirthdate.innerHTML = "Vous devez renseigner votre date d'anniversaire.";
    return false;
  }else{
    errorBirthdate.remove();
  }

    // Nombre evenement
  if(quantity.value.trim() ===""){
    errorQuantity.innerHTML = "Vous devez préciser à combien d'évènement auquel vous avez participé.";
    return false;
  }else{
    errorQuantity.remove();
    }

    // Choix villes 
  if(getRadioButton(form.elements["location"]) == undefined){
    errorCity.innerHTML = "Vous devez préciser dans quelle ville etait ces évènements.";
    return false;
  }else{
    errorCity.remove();
  }

  // Conditions utilisation impérativement coché 
  if (getCheckBox(form.elements["checkbox-input"]).length == 0 ){
    errorConditionUser.innerHTML = "Vous devez accepter les conditions utilisateur"
    return false;
  }else{
    errorCity.remove();
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

   for (let radios of radioBouton){
     if (radios.checked){
       choix = radio.value;
     }
   }
   return choix;
 }

 // Fonction checkBox
function getCheckBox(checkBox) {
  let choix = [];
  for  (let caseACocher of checkBox){
    if (caseACocher.checked){
      choix.push(caseACocher.value)
    }
  }
  return choix;
}