//dateetheure
var date = new Date();
 function writeDate(){
        document.getElementById("dateheure").innerHTML =(date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear());
        }
        window.onload=writeDate;

//slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
let i;
let slides = document.getElementsByClassName("mySlides");
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}
slides[slideIndex-1].style.display = "block";
setTimeout(showSlides, 2000); // Change image every 2 seconds
}
function showPropertyDetails(propertyType) {
    // Replace with actual logic to fetch property details from a database or API
    let propertyDetails = getPropertyDetails(propertyType); // Assume this function retrieves data

    // Display property details in the section
    let propertyDetailsSection = document.getElementById('detailsProp');
    if (detailsProp) {
        propertyDetailsSection.innerHTML = `
            <div class="description">
                <h2>${propertyDetails.address}</h2>
                <img src="${propertyDetails.image}" alt="${propertyDetails.address}">
                <p class="features">${propertyDetails.features}</p>
                <p class="desc">${propertyDetails.description}</p>
                <p class="price">$${propertyDetails.price}</p>
            </div>
            <button class="button" onclick="returnToThumbnails()">Retour</button>
        `;
        let propertyThumbnailsSection = document.getElementById('PropTumbnails');
        propertyThumbnailsSection.style.display = 'none';
    } else {
        propertyDetailsSection.innerHTML = '<p>No details found for this property.</p>';
    }
}

function returnToThumbnails() {
    // Show property thumbnails
    let propertyThumbnailsSection = document.getElementById('PropTumbnails');
    propertyThumbnailsSection.style.display = 'block';

    // Clear property details
    let propertyDetailsSection = document.getElementById('detailsProp');
    propertyDetailsSection.innerHTML = ''; // Clear the content
}

function getPropertyDetails(propertyType) {
    // Define an object with property details
    const propertyDetails = {
        'prop1': {
            address: 'Mont-Tremblant, Laurentides, 454 - 456, Rue Filion',
            image: 'image/prop1.jpg',
            features: '3 BEDS, 1 BATH',
            description: 'Single-family home for sale in Mont-Tremblant.',
            price: '219,000'
        },
        'prop2': {
            address: 'Gatineau, Outaouais, 657, Chemin du 6e-Rang',
            image: 'image/prop2.jpg',
            features: '3 BEDS, 1 BATH',
            description: 'Single-family home for sale in Gatineau.',
            price: '299,900'
        },
        'prop3': {
            address: 'Quebec City, Quebec, 1234 Rue Principale',
            image: 'image/prop3.jpg',
            features: '4 BEDS, 2 BATHS',
            description: 'Spacious family home in the heart of Quebec City.',
            price: '389,000'
        },
        'prop4': {
            address: 'Sherbrooke, Eastern Townships, 567 Rue Maple',
            image: 'image/prop4.jpg',
            features: '3 BEDS, 2 BATHS',
            description: 'Charming bungalow with modern amenities in Sherbrooke.',
            price: '269,500'
        },
        'prop5': {
            address: 'Laval, Laval region, 789 Rue Elm',
            image: 'image/prop5.jpg',
            features: '4 BEDS, 3 BATHS',
            description: 'Luxurious home with a large backyard in Laval.',
            price: '529,000'
        },
        'prop6': {
            address: 'Trois-Rivières, Mauricie, 1010 Rue des Roses',
            image: 'image/prop6.jpg',
            features: '3 BEDS, 1 BATH',
            description: 'Cozy cottage-style home near the river in Trois-Rivières.',
            price: '189,000'
        },
        'prop7': {
            address: 'Saint-Jérôme, Laurentides, 234 Chemin du Lac',
            image: 'image/prop7.jpg',
            features: '5 BEDS, 2 BATHS',
            description: 'Spacious family residence with lake views in Saint-Jérôme.',
            price: '449,900'
        },
        'prop8': {
            address: 'Drummondville, Centre-du-Québec, 456 Rue des Chênes',
            image: 'image/prop8.jpg',
            features: '4 BEDS, 2 BATHS',
            description: 'Modern home in a quiet neighborhood in Drummondville.',
            price: '319,000'
        },
        'prop9': {
            address: 'Rimouski, Bas-Saint-Laurent, 789 Rue des Mouettes',
            image: 'image/rimouski.jpg',
            features: '3 BEDS, 1 BATH',
            description: 'Stylish urban home with ocean views in Rimouski.',
            price: '279,000'
        },
        'prop10': {
            address: 'Saguenay, Saguenay-Lac-Saint-Jean, 876 Rue des Érables',
            image: 'image/saguenay.jpg',
            features: '4 BEDS, 3 BATHS',
            description: 'Elegant family home with mountain views in Saguenay.',
            price: '369,500'
        },
        'prop11': {
            address: 'Sainte-Thérèse, Laurentides, 543 Rue des Lilas',
            image: 'image/sainte_therese.jpg',
            features: '3 BEDS, 2 BATHS',
            description: 'Renovated townhouse with a garden in Sainte-Thérèse.',
            price: '289,900'
        },
        'prop12': {
            address: 'Granby, Montérégie, 987 Rue Principale',
            image: 'image/granby.jpg',
            features: '3 BEDS, 1 BATH',
            description: 'Quaint cottage-style home in the heart of Granby.',
            price: '239,000'
        }
    
    };

    // Return the property details based on propertyType
    return propertyDetails[propertyType] || null;
}

//formulaire
confirmer(formulaire)
function confirmer(formulaire){
    var nom= formulaire.lname.value;
    var prenom= formulaire.fname.value;
    var email= formulaire.eemail.value
    var adresse= formulaire.adresse.value;
    var datenaissance= formulaire.ndate.value;
    var message =   'Nom: ' + nom + '\n' +
                    'Prenom: ' + prenom + '\n' +
                    'Email: ' + email + '\n' +
                    'Adresse: ' + adresse + '\n' +
                    'Date de naissance: ' + datenaissance + '\n\n' +
                    'Confirmer Client enregistré';
    return confirm(message)}
//emprunt
function calculer(pret){
    var montant=parseFloat(pret.montant.value);
    var taux=parseFloat(pret.taux.value)/100;
    var annee=pret.annee.value;
    var paye_mensuel = trouve_paiement(montant, taux / 12, annee * 12)

   alert("Montant de l'emprunt :\t$" + montant.toFixed(2) + "\n" +
    "Taux d'intérêt annuel :\t" + (taux * 100).toFixed(2) + "%\n" +
    "Amortissement :\t\t" + annee + " années\n\n" +
    "Paiement mensuel :\t$" + paye_mensuel.toFixed(2));
  
        
}

function trouve_paiement(PR, IN, PE) {
    var PAY = (PR * IN) / (1 - Math.pow(1 + IN, -PE));
    return PAY;
}