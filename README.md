# React workshop

#### Step 0:
Klona repot:

```
$ git clone git@github.com:tjoskar/react-workshop.git
```

Installera alla beroenden

```
$ npm install
```

Starta appen för att se att allt fungerar som det ska.

```
$ npm start
```

[http://localhost:4444/](http://localhost:4444/)

#### Step 1:

Du borde nu se ett inputfällt, en knapp och lite text. Nice! 🙌

Om du nu öppnar upp my-component.tsx i din editor kommer du se att det finns fyra komponenter. En som har hand om inputfältet, en som har hand om knappen, en som skriver ut en text och en fjärde komponent som knyter alltsamman.

Dessvärre fungerar det inte att skriva något i inputfältet 😔

- Se till att användaren kan skriva text i inputfältet
- Skriv ut texten som finns i inputfältet i stället för texten "some text"
- Updatera texten som skrivs ut på sidan när användaren klickar på knappen. Dvs. texten ska inte uppdateras kontinuerligt utan enbart när användaren klickar på knappen.


#### Step 2:

Klicka på fliken för att söka efter en tv serie (Search). Här borde det vara ett inputfället men istället är det bara en dum text. Implementera komponenten `SearchField` så att vi kan söka efter serier.

#### Step 3:

Om man nu söker efter en tv serie men inte får någon träff så är sidan bara vit. Det är ingen bra användareupplevelse. Se till att texten ”inget resultat” visas om man inte får någon match.

#### Step 4:

Lägg till en laddningstext när vi inväntar svar från backend. Dvs. precis innan du skickar iväg sökförfrågan till backend så ska en ny komponent visas som visar texten "Laddar", denna text ska sedan försvinna när vi får ett svar från backend.

#### Step 5:

När man klickar på en serie i sök resultatet så läggs den till i användarens bevakningslista. Dock så ligger den kvar i sökresultatet. Det är nu din uppgift att ta bort de serier som redan är tillagda ifrån sökresultatet.

#### Step 6:

Man bör undvika att göra ajax anrop i en komponent, lägg ut det som en sidoeffekt istället. (se show.epic.ts som referens). Har du ingen aning om hur du ska gå tillväga? Kolla in [denna fil](https://github.com/tjoskar/react-fp-workshop/blob/solution/src/store/search/search.epic.ts).

#### Step 7:

Skriv tester

#### Step 8:

Surprise me 🦄 (Kanske använda mobx istället för redux)

#### Step 9:

Hjälp en vän
