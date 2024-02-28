# Projekt-Dokumentation

Mirhan Özden

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
|       | 0.0.1   | Demo-Projekt                                                 |
|       | 1.0.0   |Fertiges Projekt                                              |

## 1 Informieren

### 1.1 Ihr Projekt

In meinem Projekt geht es um eine Website über das Spiel TicTacToe.

Ich möchte mit diesem Projekt mein Defizit in JavaScript aufarbeiten, da wir im Modul 294 JavaScript nicht genügend angeschaut haben. Ich hoffe mir hierbei,
dass ich nach diesem Projekt, ich mit JavaScript besser umgehen kann. Auch möchte ich dieses Projekt benutzen um es meinen Kollegen die nichts mit Informatik am Hut haben zeigen und es mit ihnen spielen.

### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
|1|muss|Funktional|Als Benutzer möchte ich eine Webseite, wo ich das Spiel spielen kann.|
|2|Muss|Qualität|Als Benutzer möchte ich ein schönes TicTacToe Design haben, dort soll es die Farben ändern, wenn ich auf Knöpfe drücke.|
| 3    | Muss                |  Funktional    | Als ein Benutzer möchte ich, dass ich auf Flächen drücken kann, um sie mit X oder O zu markieren. |
| 4    |  Muss               |  Funktional    | Als ein Benutzer möchte ich, dass die Website immer danach sucht, ob ich gewonnen, verloren oder unentschieden gespielt habe, damit ich das Spiel beenden kann und ich den Gegner schlagen kann. |
|5|muss|Funktional|Als Benutzer möchte ich erfahren, wann ich mit jemandem unentschieden spiele, damit wir dann schnell ins nächste Spiel gehen können.|
|6|kann|Rand|Als Benutzer möchte ich, dass ich auf einen Restart Knopf drücken kann, damit ich nicht die ganze Seite neustarten muss, sondern mit einem schnellen Klicken das Spiel schnell neustarten kann.|
|7|Muss|Funktional|Als Benutzer möchte ich, dass man nicht auf einen schon gedrückten Feld klicken kann, damit man nicht schummeln kann.|



### 1.3 Testfälle

| TC-№ | Ausgangslage | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
|1.1|Webseite hat gestartet|Eingeben der URL und auf ENTER drücken| TicTacToe Layout|
|2.1|Website ist offen| Mit der Maus auf den Restartknopf drücken |Farbe vom Knopf ändert sich|
| 3.1  | Spiel hat gestartet             | Linksklick (auf ein leeres Feld)        | X oder O                  |
| 4.1  |  Spiel hat schon angefangen            | Linksklick (auf ein leeres Feld)        |  "X hat gewonnen", "0 hat gewonnen", Unentschieden!                 |
|5.1|Spiel ist am laufen|Linksklick auf ein Feld (ohne dass man gewinnt)|Es ist unentschieden!|
|6.1|Spiel ist fertig und man will ein neues Spiel starten|Linksklick (Auf den Neustart Knopf)|Leeres TicTacToe Feld|
|7.1|Ein Feld wurde schon gedrückt und man will auf das gleiche Feld drücken|linksklick auf das Feld| nichts passiert|


## 2 Planen

| AP-№ | Frist | Zuständig | Beschreibung | geplante Zeit |
| ---- | ----- | --------- | ------------ | ------------- |
| 1.A  |  24.01     | Mirhan Özden          |  Feld mit x und 0 markieren            |   135 minuten            |
| 2.A  |  24.01     | Mirhan Özden          |   Gewinner entscheiden           |  75 Minuten             |
|3.A|14.02|Mirhan Özden|Unentschieden entscheiden|90 minuten|
| 4.A  |  14.02     | Mirhan Özden          |              |               |
| 5.A  |       | Mirhan Özden          |              |               |
| 6.A  |       | Mirhan Özden          |              |               |



Total: 12 Lektionen 


## 3 Entscheiden

Ich habe mich für ein TicTacToe Spiel entschieden, welches man mit einem Partner spielen kann. Die erste Person beginnt als X und die zweite wird das 0. Wenn man schliesslich gewonnen, verloren oder unentschieden gespielt hat, hat man die Möglichkeit, das Spiel auf Knopfdruck neuzustarten.

## 4 Realisieren

| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
| 1.A  |       |  Mirhan Özden           |               |                   |
| 2.A  |       | Mirhan Özden          |               |                   |
| 3.A  |       | Mirhan Özden          |              |               |
| 4.A  |       | Mirhan Özden          |              |               |
| 5.A  |       | Mirhan Özden          |              |               |

✍️ Tragen Sie jedes Mal, wenn Sie ein Arbeitspaket abschließen, hier ein, wie lang Sie effektiv dafür hatten.

## 5 Kontrollieren

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |       |          |        |
| ...  |       |          |        |

Alle Tests sind erfolgreich.
