---
layout: db
date: 2021-10-16 18:12:56
title: 'Adatb - 3. gyakorlat'
lead: 'A DBMS fizikai részének adatszervezése, működése'
tags: ['adatb', 'adatszerkezetek', 'algoritmusok']
comment: false
featuredImage: null
---

# Tartalomjegyzék

```toc
# This code block gets replaced with the TOC
exclude: Tartalomjegyzék
to-heading: 5
```

# Tisztázásképpen...

> Az ismertetők olvasásakor gyakran ütközhettek olyan paragrafusokba, mint ez a paragrafus is (balról behúzott, szegélyezett és szürkén íródott). Ezek megjegyzések, fun factek, ismeretterjesztő bekezdések. Nem kötelező elolvasni, sem a bennük említett dolgokat megtanulni - kivéve ha amúgy is szó volt róla előadáson. Csupán a tudás mélyítéséért, kiegészítésként, avagy extraként szolgálnak, ami fenntarthatja érdeklődéseteket.

> Az adatb posztok elméléti összefoglalói inkább az ismeretek ismétlésére íródtak, kevésbé az alaposság jegyében, inkább konyhanyelvet alkalmazva. Érdemes lehet jegyzeteinket és/vagy a könyvet jól átbogarászni egy vizsga előtt.

> **U.i.: ha esetleg hibát véltek felfedezni akárhol, bátran szóljatok rám gyakorlaton, vagy kiáltsatok rám email címemen: [piller.trisztan@db.bme.hu](mailto:piller.trisztan@db.bme.hu).** Köszi.

Az előző óra végén pár sorkalkulus sajnos lemaradt, illetve nem volt idő az oszlopkalkulusok tisztázására, így azok levezetési útmutatóját feltöltöttem az előző poszt [Megoldások paragráfusa](/db/2021-08-05-adatb-2-gyakorlat/#megoldások-új) alá.

# Elméleti összefoglaló

[Hivatalos jegyzet/könyv](https://db.bme.hu/~gajdos/Adatbazisok2019.pdf): 3. fejezet ismerendő a gyakorlatra.

Előző alkalommal [megismerkedtünk azzal, milyen nyelveken tudunk lekérést intézni az adatbázisok felé](/db/2021-08-05-adatb-2-gyakorlat/#elméleti-összefoglaló). A parancsaink megérkeznek a Lekérdezés feldolgozóba, majd a DB menedzser sok okoskodás után (amit még később ismerünk csak meg) leadja a _"rendelést"_ a fizikai adatbázisunk fájl menedzserének.

Ekkor egy kritikus részéhez érünk [DBMS](/db/2021-08-03-adatb-1-gyakorlat/#dbms)-nek: ugyanis a fizikai adatbázisunk fizikai szervezésétől fog függeni leginkább a lekérésünk visszatérésének gyorsasága. Amilyen adatstruktúrákat és algoritmusokat itt alkalmazunk, az fogja leginkább meghatározni azt, mennyi ideig tart egy átlagos lekérés.

## Blokkok

Az adatbázisokban kevés CPU-igényes és kevés memória-igényes feladatunk van. Sokkal inkább I/O-igényes feladataink vannak. Tehát mivel Számítógéparchitektúrák tárgyból már megismerhettetétek, hogy a hardveres világban amikor egy szoftver I/O műveletet hajt végre - azaz a merevlemezen olvas/ír -, akkor a hardveren történő **1 blokkművelet** átlagos ideje számít, a többi idő elenyésző.

Éppen ezért leszünk mi is kíváncsiak a blokkműveletek számára, amikor az adatbázisunk fizikai adatszervezését tervezzük. Nézzük is meg, hogy mi van egy blokkban:

![blokkok](/db/post3/blokkok.png)

Röviden ami nekünk fontos ebből:

- **Blokk** az alapvető műveleti egység: Lekérdezéskor blokkokat fogunk beolvasni a memóriába és onnan visszaírni a lemezre.
- 1-1 blokkban több **rekord** is lesz - azaz a relációink egyes sorai.

Néhány fontosabb jelölés és számolás:

![jelek](/db/post3/jelek.png)

## Blokkok szervezése

> Amit ezen a gyakorlaton ismerhettek meg - adatszervezési modellek, azokra kitalált algoritmusok - két későbbi 4. féléves tárgyatok fogja még részletesebben bemutatni: Algoritmuselmélet és Operációs rendszerek. Szóval no worries, ha valaki kevésnek tartaná az itt megismert dolgok halmazát, ő még később több ismeretre fog szert tenni adatszerkezetekkel és algoritmusaikkal kapcsolatosan. Mi csupán a leggyakoribb adatszerkezeteket és azok egyszerűbb működési algoritmusait fogjuk tárgyalni.

![WIP](/db/WIP.png)

<!--

### Heap

Nyeh.

### Indexek

#### Ritka index

LEIRÁS

##### B\*-fa

A ritka index alfaja. Több szintű ritka index igazából, de azt okosan kialakítva:

- Asd
- Fgh

#### Sűrű index

#### Vegyesfelvágott

SŰRŰ + B\*FÁK előnye!!! KÉTKULCSOS KERESÉS PL. FELADAT A KÖNYV HÁTULJÁBAN???

### Vödrös hash

-->

# Feladatsor

## Feladatok

[Forrás](https://www.db.bme.hu/adatbazisok/files/fiz_kiadando_feladatok_2019.pdf).

###### 1. Egy 1000 rekordból álló állományt ritka index szervezéssel tárolunk. A rekordhossz 850 bájt, egy blokk kapacitása (a fejrészt nem számítva) 4000 bájt. A kulcs 50 bájtos, egy mutatóhoz 18 bájt kell.

- a) Hány rekord fér el egy blokkban?
- b) Hány blokkot foglal el az indexstruktúra és mennyit a teljes állomány?
- c) Melyik szinten, melyik blokkokban és blokkok között követeljük meg a rendezettséget?
- d) Mennyi ideig tart legfeljebb egy rekord tartalmának kiolvasása, ha feltételezzük, hogy az index struktúra már
  benne van az operatív tárban? (egy blokkművelet ideje 5 ms)
- e) Mennyi ideig tart legfeljebb egy rekord tartalmának kiolvasása, ha az index struktúra nem fér el az operatív
  tárban? (egy blokkművelet ideje 5 ms)

###### 2. Egy 7 vödörrel rendelkező hash tábla leképező függvénye h(k) = k mod B. A következő rekordok érkeznek, amelyeket szeretnénk eltárolni: 56, 91, 27, 19, 36, 52, 79.

- a) Feltételezve, hogy egy rekord egy blokknyi méretű, mennyi az átlagos rekordelérési idő?
- b) Tetszőleges másik hash függvényeket választva mennyi az elméletileg elérhető legjobb és legrosszabb
  véletlenszerű rekordelérési idő ugyanekkora elemszámnál?

###### 3. Vödrös hash szervezéssel tárolunk egy állományt, amelyben a rekordok száma 15000. Egy rekord hossza 120 bájt, egy blokkba 4000 bájt fér el, egy kulcs hossza 25 bájt, egy mutatóé 8 bájt. A szervezést 10 vödörrel oldjuk meg. (Feltételezhetjük, hogy a hash függvény egyenletesen osztja el a kulcsokat.)

- a) Mekkora az átlagos vödörméret?
- b) Mekkora lemezterület szükséges a teljes struktúra tárolásához (valódi méret, illetve felhasznált tárterület)?
- c) Mennyi az átlagos rekordelérési idő, ha a blokkelérési idő 5 ms? (A keresés során a vödör-katalógust a
  memóriában tároljuk.)
- d) Mekkora legyen a vödrök minimális száma, ha a keresés során átlagosan 5 blokkelérési idő alatt akarjuk
  megtalálni a keresett rekordot?

###### 4. Egy állományt kétféle szervezéssel tudunk tárolni: sűrű index, majd erre épített egyszintes ritka index vagy pedig hash algoritmussal. Az állományon néha intervallumkeresést is meg kell valósítani. Melyik szervezési módszert válasszuk? Adjon értelmes alsó becslést a szükséges blokkok számára az alábbi feltételek mellett:

- az állomány 3 000 000 rekordból áll
- egy rekord hossza 300 bájt
- egy blokk mérete 4000 bájt
- a kulcshossz 45 bájt
- egy mutató hossza 5 bájt

###### 5. Egy 10 000 000 rekordból álló állományt szeretnénk B\*-fa szervezéssel tárolni. A rekordhossz 850 bájt, egy blokk kapacitása (a fejrészt nem számítva) 4000 bájt. A kulcs 50 bájtos, egy mutató tárolásához 18 bájt kell. Legalább hány blokkra van szükség? Mennyi az átlagos rekordelérési idő, ha a memóriában egy blokk fér el? (Egy blokk elérésének ideje 5 ms.)

## Házi feladat

Amire órán nem volt idő. Érdemes ZH előtt a tankönyv hátuljában lévő feladatokat, legtöbbjük elég jól felkészít a ZH-ban előkerülő dolgokra. Valamint érdemes a sűrű + ritka index kombinációk előnyein és hátrányain komolyan elgondolkodni (több keresési kulcs alapján történő keresés, okos adatszervezés).

Ha találtok számotokra tetsző feladatot a könyvben, megoldjátok, elküldhetitek nekem a megoldásotokat, hogy rápillantsak, jónak tűnik-e. Ide emailezz: [piller.trisztan@db.bme.hu](mailto:piller.trisztan@db.bme.hu) No stress.
