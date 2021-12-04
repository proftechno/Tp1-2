# MatriceLED - carte micro:bit en SIMULATION
La carte micro:bit possède une matriceLED
de 25 leds indépendantes.
On peut afficher du texte, des nombres, des images.

## EXO1: Afficher smiley pendant 1s puis un autre pendant 2s

Afficher un smiley souriant pendant 1s, puis
un smiley "pas souriant" pendant 2s.

1.Pour cela choisir le bloc "montrer l'icône" et choisir
le smiley qui sourit, puis glisser dessous un bloc
"pause" que vous mettrez à 1s.


2.Puis vous rajoutez un bloc "montrer l'icône" en 
choisissant cette fois un smiley qui ne sourit pas
et enfin en rajoutant dessous un bloc "pause"
que vous mettrez à 2s.

Il n'y a plus qu'à essayer avec le simulateur 
à gauche de l'écran !


```blocks
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.showIcon(IconNames.Sad)
    basic.pause(2000)
})
```


## EXO2: Afficher des Leds avec une condition

Si on appuie sur le bouton A.
Afficher la série de Leds à droite (en colonne) de la matrice
pendant 2s, puis la série de Leds à gauche (en colonne) pendant
2s. Et effacer l'écran.
VOUS POUVEZ GARDER LE PROGRAMME PRECEDENT EN RAJOUTANT LES blocks
DESSOUS.

1.Faire glisser un bloc du menu logique "Si ...vrai".
Remplacer le "vrai" en glissant dedans la condition "A appuyé"
pris dans le menu "Entrée".

2.Choisir un bloc "montrer leds", et le glisser sous
le bloc "Si...". Sélectionner l'affichage
en colonne de la série de leds à DROITE de la matriceLED.

3.Rajouter un bloc pause mis à 2s.

4.Rajouter un bloc "Montrer leds", changer l'affichage
pour la colonne à gauche cette fois. Rajouter une pause à 2s.
Et pour finir rajouter un bloc "effacer l'écran".


## Téléchargement de vos 2 premiers exercices.
TELECHARGER VOTRE PROGRAMME AVEC L'ICONE "Téléchargement".
LE RECUPERER DANS TELECHARGEMENT ET LE STOCKER DANS VOTRE SESSION.

Nous les utiliserons plus tard sur la carte, pour faire des essais 
hors simulation.
Une fois terminé le téléchargement, passer à l'exercice suivant !


```blocks
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
        basic.pause(2000)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    }
})

```



## EXO3: Faire clignoter des Leds avec une condition

POUR CET EXERCICE, IL FAUT EFFACER TOUS LES BLOCS PRECEDENTS !
AVANT, ASSURER VOUS BIEN D'AVOIR TELECHARGER LES PROGRAMMES
DES EXERCICES 1 et 2.


Lorsque le bouton poussoir B est pressé, faire clignoter
la chiffre 8 affiché avec les leds 8 fois, puis éteindre.




1.Dans le menu "Entrée", prendre le bloc
"Lorsque le bouton A est pressé". Remplacer le A par B.

2.Dans le menu "Boucle", faire glisser dessous un bloc
"Répéter..." changer le chiffre par un 8.

3.Choisir dans le menu "Base" le bloc Montrer nombre, le glisser
sous le bloc répéter 8 fois et changer le nombre par un 8.

4.Rajouter un bloc "pause" à 200ms, puis enfin un bloc
"Effacer l'écran".

5.Tester votre programme avec le simulateur.

6.Vous pouvez télécharger ce dernier programme dans 
votre session. On le testera plus tard sur la carte.


```blocks
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 8; index++) {
        basic.showNumber(8)
        basic.pause(200)
        basic.clearScreen()
    }
})
```
