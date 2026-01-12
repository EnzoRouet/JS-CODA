// Partie 1

function genererÉlève() {
  let taille_minimum = 7;
  let taille_maximum = 10;
  let taille =
    Math.floor(Math.random() * (taille_maximum - taille_minimum + 1)) +
    taille_minimum;
  // On définit notre tab qui prendra nos objets
  let classe = [];
  const names = [
    "Alex",
    "Noa",
    "Lucas",
    "Maël",
    "Théo",
    "Nathan",
    "Léo",
    "Jules",
    "Hugo",
    "Ethan",
    "Emma",
    "Lina",
    "Chloé",
    "Inès",
    "Léa",
    "Mila",
    "Zoé",
    "Sarah",
    "Camille",
    "Jade",
  ];

  // On boucle pour crée le nombre d'étudiants qu'on veut
  for (let i = 0; i < taille; i++) {
    let indexName = Math.floor(Math.random() * names.length); // Pour récupérer l'index des prénoms en random
    let randomStudentName = names[indexName]; // On récupère le prénom qui équivaut

    // On définit notre étudiant qui sera redéfini pour chaque tour de boucle. On importe les notes en randomisant
    let student = {
      prenom: randomStudentName,
      notesFrancais: Math.floor(Math.random() * 20),
      notesMaths: Math.floor(Math.random() * 20),
      notesHistoire: Math.floor(Math.random() * 20),
      // Moyenne a 0 car incalculable dans la définition de student
      moyenne: 0,
    };

    // On calcule la moyenne de l'étudiant et lui attribut. On affiche après.
    moy = Math.round(
      (student.notesFrancais + student.notesHistoire + student.notesMaths) / 3
    );
    student.moyenne = moy;
    classe.push(student);
  }
  return classe;
}

// Partie 2

function afficherEleves(tab) {
  for (let i = 0; i < tab.length; i++) {
    console.log(tab[i].prenom + " - " + tab[i].moyenne);
  }
}

// Partie 3

function trouverMoyenneMin(tab, index) {
  let min = tab[index].moyenne;
  let indiceMin = index;
  for (let i = index; i < tab.length; i++) {
    if (min > tab[i].moyenne) {
      min = tab[i].moyenne;
      indiceMin = i;
    }
  }
  return indiceMin;
}

// Partie 4
function trouverMoyenneMax(tab, index) {
  let max = tab[index].moyenne;
  let indiceMax = index;
  for (let i = index; i < tab.length; i++) {
    if (max < tab[i].moyenne) {
      max = tab[i].moyenne;
      indiceMax = i;
    }
  }
  return indiceMax;
}

function afficherDonnee(tab) {
  let min = trouverMoyenneMin(tab, 0);
  let max = trouverMoyenneMax(tab, 0);
  console.log("Moyenne minimale : " + min);
  console.log("Moyenne maximale : " + max);
  console.log("Nombre d'élève : " + tab.length);
}

// Partie 5

function swap(tab, indexA, indexB) {
  [tab[indexA], tab[indexB]] = [tab[indexB], tab[indexA]];
}

// Partie 6

let compt1 = 0;
let changes = 0;

function triParSelection(tab) {
  for (let j = 0; j < tab.length - 1; j++) {
    let minIndex = trouverMoyenneMin(tab, j);
    for (let i = j + 1; i < tab.length; i++) {
      compt1++;

      if (tab[i].moyenne < tab[minIndex].moyenne) {
        changes++;
        minIndex = i;
      }
    }
    swap(tab, j, minIndex);
  }
  return tab;
}

// Partie 7

console.log("Premier appel de fonction");
classe = genererÉlève();
console.log(classe);

console.log("Deuxième appel de fonction");
afficherEleves(classe);

console.log("Troisième appel de fonction");
afficherDonnee(classe);

console.log("Appel du tri croissant");
classe = triParSelection(classe);
console.log(classe);

afficherEleves(classe);
console.log("Il y a eu : " + compt1 + " vérifications");
console.log("Il y a eu : " + changes + " changements");
