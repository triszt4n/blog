---
layout: dbpost
date: 2021-08-03 16:52:41
title: 'Adatb - 1. gyakorlat'
lead: 'Előadás anyagának ismétlése és extra feladatmagyarázatok'
tags: ['adatb', 'ERD']
comment: false
featuredImage: null
---

<style>
  .caption {
    text-align: center;
    margin-bottom: 2rem;
    margin-top: -0.75rem;
    font-style: italic;
  }
</style>

# Tartalomjegyzék

```toc
# This code block gets replaced with the TOC
exclude: Tartalomjegyzék
```

# Miről volt szó előadáson? - elméleti összefoglaló

[Hivatalos jegyzet/könyv](https://db.bme.hu/~gajdos/Adatbazisok2019.pdf): 1. és 4. fejezet ismerendő a gyakorlatra.

## Adat (egy kicsi mese)

Az _adatbázis_ = **adat** + bázis, ebből főleg az adattal foglalkoztatok eddig, és hogy azt hogy logikus rendezni. A bázis része már az, amikor az adatot meghonosítjuk, annak struktúrát és akár matematikai keretet adunk. Nem fontos, nézzük mi fontos:

> Adat > Információ > Tudás > Hatalom. Ismerős lehet a felsorolás, igaz?

Az adat ugyebár - józan ésszel - az egy: ✨ _dolog_ ✨, ami önmagában nem értelmes, csak _valami_ a világból. A mi feladatunk ezeket az adatokat úgy tárolni és úgy kapcsolatba hozni más adatokkal _(lásd később [DBMS](#dbms))_, hogy az később minden fejlesztő számára _először_: értelmezhető legyen (információ), _aztán_: könnyen kontextusba helyezhető legyen (tudás). A fenti felsorolás értelmet nyert.

## DBMS

DBMS = DataBase Management System. Ez az a szoftveres és (sokszor, nem mindig) hardveres rendszer, amelyben az adatokat okosba' tároljuk:

- Lehessen **sok adatot** tárolni
- Lehessen **sokféle struktúrában** tárolni
- Lehessen **jó sokáig** (hosszú életcikluson át) tárolni

Ha már szoftveresen tároljuk az adatot, akkor lehessen:

- Adatot és struktúrát: írni + olvasni + módosítani + törölni (**CRUD**: create, read, update, delete)
- **Több felhasználó** is tudja használni a rendszert és **több feladattal** is tudjon foglalkozni a rendszer (lásd később a _Tranzakciók (könyv 10. fejezet)_ témát)

![dbms](/db/post1/dbms.png)

<div class="caption">DBMS: jelenleg csak az ábra sötétkék egységeivel foglalkozunk</div>

Fenti képen is látható, amikor a tervező készen áll - és helyesnek tartja - [ER diagramját](#erd), akkor azt sémaleírásba foglalja a DBMS által használt _DDL_ nyelven (Data Definition Language, pl.: SQL).

### DB menedzser feladatkörei

Az úgy tök okés, hogy a _Lekérdezés feldolgozó_ megküldi a DB menedzser felé a hiperszuper optimális kiértékelési tervet - ami ugye igazából egy elemi szinten leírt utasítássorozat -, az még egyáltalán nem biztos, hogy azt a DB menedzsernek muszáj csak úgy parancs-értettem módra elfogadni és kikotorni/betenni a fizikai adatbázisból a szükséges adatokat, amiket kértek. A következőkre muszáj még figyelnie a DB menedzsernek:

- **Adatbiztonság**: az adat érték, muszáj vigyázni arra, nehogy elvesszen
- **Adatvédelem**: jogosultságköröket kezel, nehogy rossz kezekbe kerülhessen az adat
- **Szinkronitás**: mivel akár többen is küldhetnek kérést egyszerre, illetve akár térben elosztott is lehet a fizikai adatbázis, muszáj arra figyelni, hogy a kérések megfelelő szinkronitás mellett futhassanak be és kerüljenek kiszolgálásra, nehogy ütközés vagy egyéb legyen. (lásd később _Tranzakciók (könyv 10. fejezet)_)
- **Integritás**: magyarul ellentmondásmentesség. Meg kell vizsgálni, hogy...
  - ...a **formai ellenőrzés**en átmegy-e
  - ...a kérés hatására megmarad-e a **referenciális integritás** (amikor egymással kapcsolatban vannak a dolgok)
  - ...a kérés hatására megmarad-e a **strukturális integritás** (azaz a kényszerek pl.: ne legyen üres valami tulajdonság)

### DBMS modellrétegei

Amikor egy DBMS működéséről beszélünk úgy általában, érdemesebb annak modelljét egy rétegmodellel ábrázolni az egyszerűség kedvéért:

- Nézetek (+ külső séma)
- Logikai adatbázis (+ séma)
- Fizikai adatbázis

## ERD

ERD = Entity-Relation Diagram, azaz entitás-kapcsolat diagram - adatmodellezési nyelv. Illetve csak majdnem. Ugyanis tudjuk, hogy egy **jó adatmodell két dologból áll**:

- Formális jelölőrendszer (adatokra, kapcsolatukra) ✅
- Műveleteket definiál az adatokon ❌

Az ER diagramnak a _műveletek_ a gyengesége. Az igazi adatmodellek: hálós, hierarchikus, obj. orientált és a relációs. Ezek közül a legfontosabbal (és egyben a legelterjedtebbel), a _relációssal_ fogtok majd később megismekedni jó sokáig _(könyv: 5., 6., 9. fejezetek)_.

### Jelölőrendszere

![](/db/post1/erd.png)

- **Kulcs**: az a tulajdonsághalmaz(ok), amely **egyértelműen** azonosítani képes egy entitást. Pl.: a TAJ szám mivel minden személy számára egyedi, jól használható kulcsként önmagában. Aláhúzással jelöljük.

#### Kapcsolatok lehetséges formái

- **Aritás**: A kapcsolat hány egyedhalmaz közé húzható
  - Mi a 2 egyedhalmaz között húzható kapcsolatokkal foglalkozunk, aminek neve is van: bináris kapcsolat
- **Kardinalitás / Funkcionalitás**: Bináris kapcsolatban használt jellemző, megadja hogy az **egyik egyedhalmaz 1 db egyede** hány a másik egyedhalmazbelivel kapcsolható össze, és hogy a **másik egyedhalmaz 1 db egyede** hány az előző egyedhalmazbelivel kapcsolható össze.
  - 1:1 (Személy --- Személyi igazolvány)
  - 1:N (Személy --- Egyéni mobil előfizetés)
  - N:M (Személy --- Lakás)
  - **Ne felejtsük,** hogy mindig az "1-es" irányába nézzen a nyíl a kapcsolatok rajzolásakor!

### Extended ERD

#### "is-a" kapcsolat - öröklődés

#TODO

#### Gyenge entitás

#TODO

# Minek tanulunk adatbázisokat?

> Nyugodtan ugord át ezt a fejezetet, nem tartalmaz szükséges tudást, csupán lelki fröccsöt.

Az ismeretek elsajátításával rájössz, hogy te lehetsz...

- az a fejlesztő, aki a világ - megrendelő által kért - **entitásait**, azok **tulajdonságait** és az entitások közti **kapcsolatokat** okosan\* tervezed meg és azáltal építesz adatbázisokat.
- az a fejlesztő, aki - a DBMS segítségével - ezeket az adatokat lekéri, és információként kínálja fel mondjuk egy weboldalon.
- az a mérnök, aki új funkcionalitásokat tud beletenni a DBMS-be, okosíthatja az optimalizációt, újíthatja az lekérések és sémadefiníciók nyelvét.
- az a mérnök, aki új algoritmusokkal oldja meg a rekordok begyűjtését, új fizikai adatstruktúrákkal rukkolhat elő a fizikai állományok rendezésére.

> *Az, hogy hogy lehet *okosan* tervezni adatbázisokat, később, az *Relációs lekérdezések optimalizációja (könyv: 6. fejezet)* és *Relációs sématervezés normalizálással (könyv: 9. fejezet)\* témájú előadásokon találkozhatsz.

# Feladatsor

## Feladatok

[Forrás](https://www.db.bme.hu/adatbazisok/files/er_feladatok.pdf).

1. Filmeket, azok rendezőit, színészeit, forgatókönyvíróit kívánjuk tárolni. A filmekről tároljuk a **hosszukat**, a **megjelenésük dátumát**, a megtekintésükhöz ajánlott **minimális életkort** és a **címüket**. A `cím egyértelműen azonosítja` a filmet. Rendezőkről, színészekről és forgatókönyvírókról tároljuk a **nevüket**, **címüket**, **személyi számukat** és **telefonszámukat**. A `személyi szám egyértelműen azonosít minden személyt`.
   - a) Tervezze meg a feladatnak megfelelő ER diagramot!
   - b) Az ER diagramban tárolni szeretnénk, hogy az egyes színészek _mely filmekben mely szereplőt_ játsszák. Ennek megfelelően bővítse a diagramot!
   - c) A filmekről tárolni szeretnénk, hogy krimi esetén _ki(k) játsszák az áldozato(ka)t_, természetfilmeknél pedig azt, hogy milyen ország(ok)ban forgatták őket.
1. Iskolákat, azokon belüli _osztályokat_ valamint _tanárokat_ és _diákokat_ tartunk nyilván. Az iskolákról tároljuk a **nevüket**, **címüket**, **igazgatóik** kilétét. Az osztályokról tároljuk **létszámukat**, **nevüket**, **osztályfőnökük** valamint **tanulóik** kilétét. A tanárokról tároljuk, hogy **melyik osztályokat tanítják**, **mit tanítanak**. Minden emberről továbbá tároljuk a **személyes adatokat** (név, lakcím, szem_szám, születési időpont)
   - a) Tervezze meg az ER diagramot, válassza meg a kulcsokat!
   - b) Az ER diagramban tároljuk a munkaviszonyok, hallgatói jogviszonyok kezdetét is.
1. Egy lízing-szerződés kapcsán a kereskedő átadja a kocsit az ügyfélnek, a kocsit a bank fizeti ki a kereskedőnek és az ügyfél pedig a banknak törleszt. Milyen módokon lehet ábrázolni ER diagrammal? Melyiknek mi az előnye és a hátránya?

## Megoldások

#TODO kommentezhető <\!\-\- \-\-\> -vel

# Extra gondolatok

> **Adatbázisok érdekességei:** Ebben a tárgyban az előadásokon és gyakorlatokon az adatbázisok logikai részével, illetve a fizikai részével ismerkedhettek meg, illetve a laborokon pedig egy enterprise környezetben is használt konkrét szoftveres-hardveres rendszerrel ismerkedhettek meg: az OracleDB-vel. Aki érdeklődik, esetleg a _Relációs adatbázisok_ előadás után nézzen utána a PostgreSQL, MySQL (ezek open source-ok) vagy MSSQL nevű RDBMS-eket (Relational DBMS), tarthatnak érdekességeket.

> **Jótanács:** Ne feledjétek, nem a tantárgy nehéz, maximum sok az akadály, amivel meg kell küzdeni. Ha megfelelő prioritást adtok a tantárgynak, bőven kellemes csalódást fog hozni a jegy, amit elértek (a küzdelem viszont nyeh, fáj, tudom). Érdemes lehet gyakorlat előtt elolvasod a könyv előadáshoz tartozó részét (azért nem kell bemagolni, elég 1 olvasás), és labor előtt pedig ugyanezt mégegyszer megtenni (laborra nem kell a gyakorlat anyaga). A laborfeladatokat otthon is be tudod fejezni, ha a laboron nem sikerül időben, a labor általában hosszadalmas, de tanulságos (és az SQL-ezés már közel szakmai, szóval az jó buli), azonban mindig figyelj a határidőkre!

> **Rólam:** Az itt olvasható elméléti összefoglalók inkább a megértésre íródtak, kevésbé az alaposság jegyében, inkább a konyhanyelvet alkalmazva. Érdemes lehet - ismételten mondva - a könyvet azért jól átbogarászni egy vizsga előtt, de természetesen amit itt olvastok, elfogadom a vizsgán is. **U.i.: ha esetleg hibát véltek felfedezni akárhol, bátran szóljatok rám gyakorlaton, vagy kiáltsatok rám email címemen: [piller.trisztan@simonyi.bme.hu](mailto:piller.trisztan@simonyi.bme.hu).**
