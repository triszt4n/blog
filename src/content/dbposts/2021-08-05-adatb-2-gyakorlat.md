---
layout: dbpost
date: 2021-08-05 19:51:11
title: 'Adatb - 2. gyakorlat'
lead: 'Relációk algebrája, valamint sor- és oszlopkalkulusa'
tags: ['adatb', 'relaciok', 'matek']
comment: false
featuredImage: null
---

# Tartalomjegyzék

```toc
# This code block gets replaced with the TOC
exclude: Tartalomjegyzék
```

# Tisztázásképpen...

> Az ismertetők olvasásakor gyakran ütközhettek olyan paragrafusokba, mint ez a paragrafus is (balról behúzott, szegélyezett és szürkén íródott). Ezek megjegyzések, fun factek, ismeretterjesztő bekezdések. Nem kötelező elolvasni, sem a bennük említett dolgokat megtanulni - kivéve ha amúgy is szó volt róla előadáson. Csupán a tudás mélyítéséért, kiegészítésként, avagy extraként szolgálnak, ami fenntarthatja érdeklődéseteket.

> Az adatb posztok elméléti összefoglalói inkább az ismeretek ismétlésére íródtak, kevésbé az alaposság jegyében, inkább konyhanyelvet alkalmazva. Érdemes lehet jegyzeteinket és/vagy a könyvet jól átbogarászni egy vizsga előtt.

> **U.i.: ha esetleg hibát véltek felfedezni akárhol, bátran szóljatok rám gyakorlaton, vagy kiáltsatok rám email címemen: [piller.trisztan@simonyi.bme.hu](mailto:piller.trisztan@simonyi.bme.hu).** Köszi.

# Elméleti összefoglaló

[Hivatalos jegyzet/könyv](https://db.bme.hu/~gajdos/Adatbazisok2019.pdf): 1. és 4. fejezet ismerendő a gyakorlatra.

Építsünk az előző heti gyakorlat [elméleti összefoglalójára](/dbpost/2021-08-03-adatb-1-gyakorlat/#miről-volt-szó-előadáson---elméleti-összefoglaló). Eddig ugyebár idézőjeles "adatmodellként" csak az ER modellel ismerkedhettünk meg, de - mint tudjuk - mivel _nem lehet műveleteket végezni rajtuk_, nem a legjobb ötlet ezekből adatbázis rendszereket készíteni. Hiszen - ahogy egy [DBMS](/dbpost/2021-08-03-adatb-1-gyakorlat/#dbms)-től elvárható - szeretnénk tudni az adatokon és struktúrákon műveleteket végezni: írni + olvasni + módosítani + törölni (CRUD).

A következőkben megismerkedünk a **relációs adatmodellel**, és 3 matematikai paradigmával, amikkel műveleteket tudunk definiálni rajtuk: **relációs algebra** vs. **sorkalkulus** vs. **oszlopkalkulus**. _(ajánlott rövidítések: **"relalg"**, **"sorkalk"**, **"oszkalk"**)_

## Relációk

#TODO

## Műveletek relációkkal

#TODO

### Deklaratív vs. Imperatív programozás

#TODO

### Relációs algebra

#TODO

### Sorkalkulus

#TODO

### Oszlopkalkulus

#TODO

## Kitekintés

> A megismert **3 matematikai paradigma** segítségével szoktak DBMS tervezők **lekérdező nyelveket** definiálni az adatbázisok szoftveres világában. Ezen lekérdező nyelvek segítségével tud a programozó egyértelmű lekéréseket írni, amit majd a **Lekérdezés feldolgozó** fog értelmezni és abból az eredményt visszaadni.

> Egy ilyen ismert lekérdezési nyelv az **SQL**, amelyről már az [előző posztban](/dbpost/2021-08-03-adatb-1-gyakorlat/#sql) is egy keveset írtam. Az SQL egy tipikus **deklaratív programozási nyelv** - ötvözi az sorkalkulust és (nagyobb részt) az oszlopkalkulust. Ezt majd saját magatok is tapasztaljátok a laborokon. Általában a relációs DBMS-ek az SQL-t használják lekérdezési nyelvükként, azonban legtöbbjük saját **dialektust** talál ki a saját DBMS-ének kiszolgálására - a dialektus itt értelmezhető akár úgy, mint ahogy a természetes nyelvek körében szoktuk értelmezni: **nyelvváltozat**, kicsit személyre szabva a DBMS különleges funkcióinak ellátására.

> Ilyen dialektus a **[PLSQL](https://www.techonthenet.com/oracle/index.php)** is, amelyet az **Oracle** talált ki a saját DBMS-éhez is - amellyel kicsit majd a laborokon is meg fogtok tudni ismerkedni, nem túl részletekbe menően. Ennek a dialektusnak a lényege, hogy az SQL meglévő tudásához hozzáadja a **"procedúrák", azaz eljárások** lehetőségét is. Ezáltal a PLSQL nemcsak deklaratív programozási lehetőségekkel szolgál, hanem **imperatívakkal** is.

# Feladatsor

## Feladatok

[Forrás](https://www.db.bme.hu/adatbazisok/files/relacios-lekerdezesek-handout.pdf).

1. A lenti lekéréseket fogalmazzuk meg **relációalgebra** segítségével! _(ajánlott röv.: **"relalg"**)_
1. A lenti lekéréseket fogalmazzuk meg **sorkalkulus** segítségével!
1. A lenti lekéréseket fogalmazzuk meg **oszlopkalkulus** segítségével!

Adottak alábbi lekérésigények:

- a) Melyek az államilag nem támogatott egyetemek?
- b) Kik azok a hallgatók, akiknek nincs hallgatói jogviszonyuk államilag támogatott egyetemmel? (Feltételezzük, hogy egy hallgató egyetlen felsőoktatási intézmény diákja.)
- c) Melyek azok a szakok, amelyeket legalább két egyetemen oktatnak?
- d) Melyek azok a szakok, amiket csak egy-egy egyetemen oktatnak?
- e) Melyik a legrégebben alapított és támogatott egyetem?

Adatok:

<div style="display: flex; flex-wrap: wrap; justify-content: space-between;">

<div style="margin: 0.5rem;">

| név           | egyetem | szak         | kezdés éve |
| ------------- | ------- | ------------ | ---------: |
| Kiss Aladár   | BME     | informatikus |       2011 |
| Nagy Béla     | BME     | gépész       |       2007 |
| Olaf Gergő    | CEU     | menedzsment  |       2009 |
| Cenk Mariann  | Pázmány | informatikus |       2004 |
| Takács Márton | BGE     | menedzsment  |       2010 |
| Rác Kata      | ELTE    | tanár        |       2011 |

</div>
<div style="margin: 0.5rem;">

| egyetem | alapítás éve |
| ------- | -----------: |
| SZTE    |         1581 |
| ELTE    |         1635 |
| Pázmány |         1635 |
| BGE     |         1857 |
| BME     |         1782 |

</div>
<div style="margin: 0.5rem;">

| név           |     város |
| ------------- | --------: |
| Kiss Aladár   |  Budapest |
| Nagy Béla     |      Győr |
| Olaf Gergő    |   Pozsony |
| Cenk Mariann  |      Tata |
| Takács Márton |  Kiskőrös |
| Rác Kata      | Keszthely |
| Tóth Ödön     |  Budapest |

</div>
</div>

## Házi feladat

Amire órán nem volt idő + nem kötelező jelleggel, csupán mert ZH-szagú feladat: [Könyv](https://db.bme.hu/~gajdos/Adatbazisok2019.pdf), 217. oldal, 4. feladat

Ha találtok egyéb feladatot a könyvben, megoldjátok, elküldhetitek nekem a megoldásotokat, hogy rápillantsak, jónak tűnik-e. Ide emailezz: [piller.trisztan@simonyi.bme.hu](mailto:piller.trisztan@simonyi.bme.hu) No stress.

## Megoldások

#TODO kommentezhető <\!\-\- \-\-\> -vel

Házi feladat megoldása: [Könyv](https://db.bme.hu/~gajdos/Adatbazisok2019.pdf), 233. oldal
