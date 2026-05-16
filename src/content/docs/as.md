---
title: "Architekturális stílus"
description: "A választott architekturális stílusok leírása."
---


A projekthez választott architekturális stílusok:

- **Service-Based Architecture (SBA)**
- **Event-Driven Architecture (EDA)**

## Miért két stílus?

Az Ask Zamunda rendszer két, egymástól jól elkülöníthető alrendszerből áll, melyeknek eltérő architekturális karakterisztikái és ASR-jei vannak:

- **Chat alrendszer**: Az állampolgárok és vállalkozások kérdéseit feldolgozó párbeszédalapú felület, amely LLM segítségével válaszol a zamundai törvényekkel, rendeletekkel kapcsolatos megkeresésekre.
- **Dokumentumkezelő és tudásbázis alrendszer**: A jogszabályok és szabályozási dokumentumok tárolásáért, vektorizálásáért és naprakészen tartásáért felelős alrendszer, ahol napi szinten akár százas nagyságrendű új dokumentum érkezhet.

A két alrendszer eltérő természete miatt a hibrid megközelítés szükségszerű. Ennek ára a magasabb tervezési komplexitás és a nehezebb hibakereshetőség. Viszont kihasználva a stílusok adta jó tulajdonságokat egyszerre költséghatékonyabb megoldás is lehet.

## Miért Service-Based Architecture?

### Illeszkedés

Az Ask Zamunda architekturális karakterisztikáihoz (Elasztikusság, Alacsony késleltetés, Biztonság, Helyesség, Költséghatékonyság) leginkább az SBA illik, mivel:

- **Logikai szétválasztás**: A rendszer két jól körülhatárolt szolgáltatásra bontható: az állampolgárok és vállalkozások számára nyújtott chat szolgáltatásra, valamint a hivatalok és adminisztrátorok számára nyújtott dokumentumkezelő szolgáltatásra. A két szolgáltatás a Vector Database-ben találkozik, amelybe a dokumentumkezelő karbantart, a chat oldal pedig olvas belőle.
- **Tesztelhetőség**: Az LLM-integráció és a RAG-pipeline (Retrieval-Augmented Generation) önállóan tesztelhető, ami elengedhetetlen a **Helyesség** karakterisztika teljesítéséhez. Hamis vagy félrevezető jogi válaszok kockázatát csak alapos, izolált teszteléssel lehet kezelni.
- **Biztonság**: A két szolgáltatás különválasztásával elérhető, hogy célzott biztonsági stratégiát alkalmazzunk: a chat szolgáltatásban a beérkező rosszindulatú üzenetek tartalmi szűrésére kell megfelelő védelmi stratégiát fejleszteni, míg az adminisztratív szolgáltatásnál a hozzáférés-ellenőrzésre és a rendelkezésre állásra.
- **Költséghatékonyság**: Az SBA lehetővé teszi, hogy csak a szükséges komponenseket skálázzuk csúcsidőben (pl. az LLM-hívásokat végző chat szolgáltatást), ne az egész rendszert.
- **Karbantarthatóság**: Új dokumentumtípusok vagy LLM-modellek bevezetésekor az érintett szolgáltatás önállóan fejleszthető és telepíthető.
- **Human-in-the-loop dokumentumkezelés**: A külső hatóságok (pl. Nemzeti Adóhatóság) az anyagokat a Government Admin felhasználóknak juttatják el, akik formai validálás után töltik fel az Admin Frontenden keresztül. Ezzel a külső szervek onboarding terhe csökken, az emberi ellenőrzés pedig tovább erősíti a **Helyesség** karakterisztikát.

### Kompromisszumok

- Önmagában az SBA nem lenne elegendően reszponzív a dokumentumok tömeges feldolgozásához, ezért szükséges az EDA-val való kombinálás.
- A human-in-the-loop feltöltési folyamat lassabb a teljesen automatizált megoldásnál, azonban ezt a megbízhatóság és az egyszerűbb onboarding indokolja.
- A hálózatbeli kommunikáció késleltetést okozhat, amit az **Alacsony késleltetés** karakterisztika érdekében gondosan kell kezelni.

## Miért Event-Driven Architecture?

### Illeszkedés

Az EDA a dokumentumkezelő és tudásbázis alrendszer számára ideális választás, mivel:

- **Elasztikusság csúcsidőben**: Az Ask Zamunda akár 10 millió állampolgárt szolgál ki, és a terhelés egyenetlen. Adóbevallási időszakban vagy új törvény kihirdetésekor az EDA lehetővé teszi, hogy a rendszer automatikusan alkalmazkodjon a megnövekedett igényhez.
- **Valós idejű dokumentumfrissítés**: A naponta százával érkező új dokumentumok feldolgozásához az EDA aszinkron pipeline-t biztosít. Egy Admin által ellenőrzött dokumentum azonnal eseményt generál, amely párhuzamosan elindítja a vektorizálást és az indexelést, minimalizálva az időablakot, amíg elavult jogszabályra alapuló válasz születhet.
- **Streaming válaszok támogatása**: A követelmények között szereplő streaming (token-by-token) válaszadás természetes módon illeszkedik az EDA aszinkron kommunikációs modelljéhez.
- **Laza csatolás**: Új feldolgozók könnyen csatlakoztathatók az eseményfolyamhoz anélkül, hogy meglévő komponenseket kellene módosítani.
- **Ellenállóképesség**: Ha egy feldolgozó átmenetileg nem elérhető, az esemény az üzenetsorban vár, így a dokumentumfeldolgozás nem veszik el, csak késleltetve teljesül.

### Kompromisszumok

- A hibrid SBA+EDA modell bonyolultabb rendszerfelépítést és mélyebb üzemeltetési tudást igényel, ami hosszú távon releváns szempont.
- Az aszinkron feldolgozás nehezíti a hibakeresést és a nyomkövetést.
- Az eseményvezérelt rendszerek tesztelése összetettebb, mint a szinkron hívások tesztelése.
- Az üzenetsor-kezelő rendszer üzemeltetése magasabb infrastruktúra-költséggel jár, azonban ez az **Alacsony késleltetés** és **Elasztikusság** karakterisztikák szempontjából indokolt befektetés.