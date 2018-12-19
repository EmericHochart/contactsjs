/* 
Activité : gestion des contacts
*/
// Création de l'objet Contact
Contact= {
	// Initialisation
	// Chaque contact a un prénom et un nom
	init:function(prenom,nom){
		this.prenom=prenom;
		this.nom=nom;
	},
	// Description
	// On retourne la description du contact à savoir son prénom et son nom
	decrire:function(){
		let description="Nom : "+this.nom+", Prénom : "+this.prenom;
		return description;
	}
};
//Insérer initialement les deux contacts
let contact1=Object.create(Contact);
contact1.init("Carole","Lévisse");
let contact2=Object.create(Contact);
contact2.init("Mélodie","Nelsonne");

//Création du tableau de contacts
//On créé un tableau vide
let contacts=[];
// On ajoute les deux contacts créés initialement
contacts.push(contact1);
contacts.push(contact2);

//Création de la fonction ajouter un contact
function ajouterNouveauContact(){
	// On invite l'utilisateur à saisir le nom et le prénom
	let nomNouveauContact=prompt("Entrez le nom du nouveau contact :");
	let prenomNouveauContact=prompt("Entrez le prénom du nouveau contact :");
	// On crée un objet contact et on l'initialise 
	let contactNouveau=Object.create(Contact);
	contactNouveau.init(prenomNouveauContact,nomNouveauContact);
	// On ajotue cet objet au tableau
	contacts.push(contactNouveau);
	// On affiche un message indiquant que l'ajout a bien été pris en compte
	console.log("\nLe nouveau contact "+prenomNouveauContact+" "+nomNouveauContact+" a été ajouté");
};
/*
Création du Menu
1.Lister les contacts
2.Ajouter un contact
0.Quitter 
*/
console.log("Bienvenue dans le gestionnaire des contacts !");
// Initialisation de la condition
let condition=true;
// Boucle du menu
while(condition){
	// Affichage du menu
	console.log("\n1 : Lister les contacts");
	console.log("2 : Ajouter un contact");
	console.log("0 : Quitter");
	// On demande à l'utilisateur de choisir une option
	option=prompt("Choisissez une option :");
	if (option==="0"){
		// Le choix 0 permet de quitter le programme
		condition=false;
		console.log("\nAu revoir !");
	}
	else if (option==="1"){
		// Le choix 1 permet d'afficher les contacts de la liste
		console.log("\nVoici la liste de tous vos contacts :");
		// On affiche les éléments du tableau
		contacts.forEach(function (contact) 
			{    
				console.log(contact.decrire());
			}
		);
	}
	else if (option==="2"){
		// Le choix 2 permet d'ajouter un contact à la liste
		ajouterNouveauContact();
	}
	else {
		// Un autre choix indique de saisir un choix valide
		console.log("\nMerci de choisir une option valide !");
	};
};