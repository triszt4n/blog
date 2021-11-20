---
layout: db
date: 2021-11-08 23:04:08
title: 'Adatb - 5. gyakorlat'
lead: 'Az elemi műveletcsoport: a tranzakció világa adatbázisokban'
tags: ['adatb', 'tranzakció', 'ACID']
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

[Hivatalos jegyzet/könyv](https://db.bme.hu/~gajdos/Adatbazisok2019.pdf): 10. fejezet ismerendő a gyakorlatra.

-->

# Feladatsor

## Feladatok

[Forrás](https://www.db.bme.hu/adatbazisok/files/tranzakciokezeles2019.pdf).

###### 1. feladat

Legális-e a táblázat által mutatott ütemezés? Ha nem, mit kellene javítani rajta, hogy azzá váljon?

|     | T1       | T2      | T3       |
| --- | -------- | ------- | -------- |
| 1   |          |         | RLOCK B  |
| 2   |          |         | READ B   |
| 3   |          | WLOCK B |          |
| 4   |          |         | RLOCK A  |
| 5   | RLOCK A  |         |          |
| 6   |          | WRITE B |          |
| 7   |          |         | READ A   |
| 8   | READ A   |         |          |
| 9   | UNLOCK A |         |          |
| 10  |          |         | UNLOCK B |
| 11  |          |         | UNLOCK A |

###### 2. feladat

Ellenőrizd, hogy a táblázaton látható ütemezés legális-e! Rajzold meg a sorosíthatósági gráfot, döntsd el, hogy sorosítható-e az ütemezés! Ha igen, adj egy soros ekvivalenst, ha nem, mutasd meg, miért nem! Hogyan nézne ki a gráf, ha egyszerű zármodellt használnánk?

|     | T1       | T2       | T3       | T4       |
| --- | -------- | -------- | -------- | -------- |
| 1   |          | RLOCK F  |          |          |
| 2   | RLOCK A  |          |          |          |
| 3   |          |          | RLOCK D  |          |
| 4   |          |          | UNLOCK D |          |
| 5   | UNLOCK A |          |          |          |
| 6   |          |          | WLOCK B  |          |
| 7   | RLOCK D  |          |          |          |
| 8   |          |          |          | RLOCK A  |
| 9   | WLOCK E  |          |          |          |
| 10  |          |          |          | UNLOCK A |
| 11  |          |          | UNLOCK B |          |
| 12  |          |          |          | WLOCK A  |
| 13  | UNLOCK D |          |          |          |
| 14  | RLOCK C  |          |          |          |
| 15  |          |          |          | UNLOCK A |
| 16  |          | UNLOCK F |          |          |
| 17  |          |          | WLOCK A  |          |
| 18  |          | WLOCK B  |          |          |
| 19  | UNLOCK E |          |          |          |
| 20  | UNLOCK C |          |          |          |
| 21  |          |          |          | RLOCK D  |
| 22  |          |          |          | UNLOCK D |
| 23  |          |          | WLOCK C  |          |
| 24  |          |          | UNLOCK C |          |
| 25  |          | WLOCK D  |          |          |
| 26  |          |          | UNLOCK A |          |
| 27  |          | RLOCK E  |          |          |
| 28  |          | UNLOCK E |          |          |
| 29  |          |          |          | RLOCK E  |
| 30  |          | UNLOCK B |          |          |
| 31  | RLOCK F  |          |          |          |
| 32  |          | UNLOCK D |          |          |
| 33  | UNLOCK F |          |          |          |
| 34  |          |          |          | UNLOCK E |

###### 3. feladat

Legális-e a táblázat szerinti ütemezés? A tranzakciók követik-e a 2PL-t? Hol van az alábbi tranzakciók zárpontja? Mi egy soros ekvivalens ütemezés?

|     | T1       | T2       | T3       |
| --- | -------- | -------- | -------- |
| 1   | LOCK A   |          |          |
| 2   |          | LOCK B   |          |
| 3   |          |          | LOCK C   |
| 4   |          |          | LOCK D   |
| 5   | LOCK E   |          |          |
| 6   | UNLOCK A |          |          |
| 7   |          |          | UNLOCK D |
| 8   |          | LOCK A   |          |
| 9   |          | LOCK D   |          |
| 10  | UNLOCK E |          |          |
| 11  |          | UNLOCK B |          |
| 12  |          |          | UNLOCK C |
| 13  |          | UNLOCK A |          |
| 14  |          | UNLOCK D |          |

###### 4. feladat

Időbélyeges tranzakciókezelést használunk R/W modellben. Jegyezd fel az alábbi sorozat minden művelete után az R(A), R(B), W(A), W(B) értékeit, ha kezdetben mindegyik 0. Mely tranzakciók abortálnak? ri és wi a Ti tranzakció olvasás (r) és írás műveleteit (w) jelöli, és t(Ti) = i.

r1(A), r2(B), r1(B), w3(B), r2(B), w4(A), r4(B), w1(A), w3(B)

###### 5. feladat

Oldd meg a 4. feladatot verziókezeléssel kiegészítve! Most mi történik?

###### 6. feladat

Egy rendszerleállás után a napló vége a táblázat szerinti bejegyzéseket tartalmazza. Melyek a redo helyreállítás lépései? Mi lesz a helyreállítás után A, B és C értéke?

| bejegyzések  |
| ------------ |
| checkpoint   |
| (T1, begin)  |
| (T2, begin)  |
| (T2, A, 20)  |
| (T2, B, 10)  |
| (T1, A, 2)   |
| (T3, begin)  |
| (T1, C, 5)   |
| (T1, commit) |
| (T3, C, 6)   |
| (T3, commit) |

## Házi feladat

Amire órán nem volt idő.

Ha találtok számotokra tetsző feladatot a könyvben, megoldjátok, elküldhetitek nekem a megoldásotokat, hogy rápillantsak, jónak tűnik-e. Ide emailezz: [piller.trisztan@db.bme.hu](mailto:piller.trisztan@db.bme.hu) No stress.
