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
| 1    | Muss                |  Funktional    | Als ein Benutzer möchte ich, dass ich auf Flächen drücken kann, um sie mit X oder O zu markieren. |
| 2    |  Muss               |  Funktional    | Als ein Benutzer möchte ich, dass die Website immer danach sucht, ob ich gewonnen, verloren oder unentschieden gespielt habe, damit ich das Spiel beenden kann und ich den Gegner schlagen kann. |
|3|kann|Rand|Als Benutzer möchte ich, dass ich auf einen Restart Knopf drücken kann, damit ich nicht die ganze Seite neustarten muss, sondern mit einem schnellen Klicken das Spiel schnell neustarten kann.|
|4|Muss|Funktional|Als Benutzer möchte ich, dass man nicht auf einen schon gedrückten Feld klicken kann, damit man nicht schummeln kann.|
|5|Muss|||


### 1.3 Testfälle

| TC-№ | Ausgangslage | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  | Spiel hat gestartet             | Linksklick (auf ein leeres Feld)        | X oder O                  |
| 2.1  |  Spiel hat schon angefangen            | Linksklick (auf ein leeres Feld)        |  "X hat gewonnen", "O hat gewonnen", Unentschieden!                 |
|3.1|Spiel ist fertig und man will ein neues Spiel starten|Linksklick (Auf den Neustart Knopf)|Leeres TicTacToe Feld|
|4.1|Ein Feld wurde schon gedrückt und man will auf das gleiche Feld drücken|linksklick auf das Feld| nichts passiert|


### 1.4 Diagramme

✍️Fügen Sie hier ein Use Case-Diagramm mit mindestens 3 Anwendungsfällen ein; und eine Skizze davon, wie Ihre Netzseite aussehen sollte.

## 2 Planen

| AP-№ | Frist | Zuständig | Beschreibung | geplante Zeit |
| ---- | ----- | --------- | ------------ | ------------- |
| 1.A  |       |           |              |               |
| ...  |       |           |              |               |

Total: 

✍️ Die Nummer hat das Format `N.m`, wobei `N` die Nummer der User Story ist, auf die sich das Arbeitspaket bezieht, und `m` von `A` an nach oben buchstabiert. Beispiel: Das dritte Arbeitspaket, das die zweite User Story betrifft, hat also die Nummer `2.C`.

✍️ Ein Arbeitspaket sollte etwa 45' für eine Person in Anspruch nehmen. Die totale Anzahl Arbeitspakete sollte etwa Folgendem entsprechen: `Anzahl R-Sitzungen` ╳ `Anzahl Gruppenmitglieder` ╳ `4`. Wenn Sie also zu dritt an einem Projekt arbeiten, für welches zwei R-Sitzungen geplant sind, sollten Sie auf `2` ╳ `3` ╳`4` = `24` Arbeitspakete kommen. Sollten Sie merken, dass Sie hier nicht genügend Arbeitspakte haben, denken Sie sich weitere "Kann"-User Stories für Kapitel 1.2 aus.

## 3 Entscheiden

✍️ Dokumentieren Sie hier Ihre Entscheidungen und Annahmen, die Sie im Bezug auf Ihre User Stories und die Implementierung getroffen haben.

## 4 Realisieren

| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
| 1.A  |       |           |               |                   |
| ...  |       |           |               |                   |

✍️ Tragen Sie jedes Mal, wenn Sie ein Arbeitspaket abschließen, hier ein, wie lang Sie effektiv dafür hatten.

## 5 Kontrollieren

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |       |          |        |
| ...  |       |          |        |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.

## 6 Auswerten

✍️ Fügen Sie hier eine Verknüpfung zu Ihrem Lern-Bericht ein.
