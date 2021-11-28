---
layout: db
date: 2021-11-08 23:08:32
title: 'Adatb - 6. gyakorlat'
lead: 'Normalizálás, azaz a jól tervezett relációs sémák'
tags: ['adatb', 'normalizálás', 'elsőrendű logika']
comment: true
featuredImage: null
---

# Tartalomjegyzék

```toc
# This code block gets replaced with the TOC
exclude: Tartalomjegyzék
to-heading: 4
```

<!--

# Tisztázásképpen...

> Az ismertetők olvasásakor gyakran ütközhettek olyan paragrafusokba, mint ez a paragrafus is (balról behúzott, szegélyezett és szürkén íródott). Ezek megjegyzések, fun factek, ismeretterjesztő bekezdések. Nem kötelező elolvasni, sem a bennük említett dolgokat megtanulni - kivéve ha amúgy is szó volt róla előadáson. Csupán a tudás mélyítéséért, kiegészítésként, avagy extraként szolgálnak, ami fenntarthatja érdeklődéseteket.

> Az adatb posztok elméléti összefoglalói inkább az ismeretek ismétlésére íródtak, kevésbé az alaposság jegyében, inkább konyhanyelvet alkalmazva. Érdemes lehet jegyzeteinket és/vagy a könyvet jól átbogarászni egy vizsga előtt.

> **U.i.: ha esetleg hibát véltek felfedezni akárhol, bátran szóljatok rám gyakorlaton, vagy kiáltsatok rám email címemen: [piller.trisztan@db.bme.hu](mailto:piller.trisztan@db.bme.hu).** Köszi.

# Elméleti összefoglaló

[Hivatalos jegyzet/könyv](https://db.bme.hu/~gajdos/Adatbazisok2019.pdf): 9. fejezet ismerendő a gyakorlatra.

-->

# Feladatsor

## Feladatok

[Forrás](https://www.db.bme.hu/adatbazisok/files/normalizalas.pdf).

A Malulukai Műszaki Egyetemen a teremfoglalásokat egy kockás füzetben vezetik. A füzet egy részletét az alábbi táblázatban láthatjuk. Újabb foglalás felvételénél egy korábbi, ugyanarra a teremre vonatkozó foglaláshoz lapoznak vissza, és onnan másolják le az adatokat. A füzeteket egy évre visszamenőleg őrzik meg.

| oktató     | kezdet              | vége                | tárgykód | terem | kapacitás | zárt-e | ak.mentes-e | épület | cím              | porta |
| ---------- | ------------------- | ------------------- | -------- | ----- | --------- | ------ | ----------- | ------ | ---------------- | ----- |
| Bal Béla   | 2017. 10. 12. 8:15  | 2017. 10. 17. 10:00 | ML12     | 12    | 36        | N      | I           | V2     | Duduhaha utca 5. | V2    |
| Jobb Géza  | 2017. 10. 12. 10:15 | 2017. 10. 17. 12:00 | ML34     | 12    | 36        | N      | I           | V2     | Duduhaha utca 5. | V2    |
| Alma Anna  | 2017. 10. 12. 12:15 | 2017. 10. 17. 18:00 |          | 24    | 20        | N      | I           | V2     | Duduhaha utca 5. | V2    |
| Körte Máté | 2017. 10. 12. 12:15 | 2017. 10. 17. 16:00 | ML38     | 38    | 150       | I      | I           | St     | Maluluka utca 3. | E     |

- (O) a foglaló oktató
- (K) foglalás kezdete
- (V) foglalás vége
- (T) tárgykód (csak óra esetén)
- (S) terem száma
- (F) terem kapacitása (hány fős)
- (Z) zárt terem-e
- (A) akadálymentesen megközelíthető terem-e
- (É) az épület azonosító betűjele, melyben a terem található
- (C) az épület címe
- (P) az épület portájának helye

###### 1. feladat: Gondoljuk meg, hogy ebben a rendszerben jelentkezhet-e

- A. beszúrási anomália
- B. módosítási anomália
- C. törlési anomália.

###### 2. feladat:

A bonyolult adminisztráció megszüntetése végett az egyetem egy egyszerű számítógépes foglalórendszerre kíván áttérni. Ennek megtervezéséhez specifikálták, hogy az épületeket a betűjelük azonosítja, a termeket azonban csak a számuk és az épület betűjele együttesen. Minden épületnek egyetlen portája van, ami lehet másik épületben is.

Modellezzük ER-diagrammal a problémát. Törekedjünk az átlátható diagramra, ne bonyolítsuk el a konzisztencia növelése érdekében.

###### 3. feladat: Állapítsuk meg a füzet rovataiban tárolt adatok, mint attribútumok közötti funkcionális függőségeket

- A. Milyen függőségeket tudunk megállapítani a már ismert specifikációs részletek alapján?
- B. Milyen további kérdéseket kell tisztázni, hogy a függéshalmaz egyértelműen megállapítható legyen?

###### 4. feladat: Vizsgáljuk meg az alábbiakat az F függéshalmaz mellett

A Malulukai Egyetemi Foglalórendszer Konzorcium mérnökei a megrendelővel történő egyeztetések során tisztázták, hogy minden épülethez egyetlen címet kell tárolni, akkor is, ha több bejárat van, továbbá minden épület címe különböző. Egy épületen belül lehetnek zárt és nem zárt termek is. Az adatokat kiegészítették a foglalásokat egyedileg azonosító foglalás id (I) attribútummal, majd a feladatot a következő függéshalmazzal modellezték:

F = {É→CP, C→ÉP, ÉS→FZAC, I→OKTVSÉ}

- A. Keressünk a példaként megadott részletben olyan eseti funkcionális függőséget, mely nem érdemi funkcionális függőség.
- B. Van-e olyan érdemi függőség, mely eseti függőségként nem áll fenn?
- C. Keressünk tranzitív függést a függéshalmazban. Figyeljük meg az okozott redundanciát.
- D. Levezethetők-e a függéshalmazból az alábbi függések? Melyek igazak az alábbi függések közül?
  - i. ÉA→P
  - ii. I→Z
  - iii. ÉS→O
  - iv. S→Z

###### 5. feladat: Készítsünk sémafelbontást az ER diagram alapján

- A. Írjuk fel az egyes részsémákhoz tartozó vetített függéshalmazokat.
- B. Keressük meg a sémák összes kulcsát, és állapítsuk meg, melyek az elsődleges és melyek a másodlagos attribútumok.
- C. Állapítsuk meg a kapott részsémák normálformáját.

## Házi feladat

Amire órán nem volt idő.

Ha találtok számotokra tetsző feladatot a könyvben, megoldjátok, elküldhetitek nekem a megoldásotokat, hogy rápillantsak, jónak tűnik-e. Ide emailezz: [piller.trisztan@db.bme.hu](mailto:piller.trisztan@db.bme.hu) No stress.
