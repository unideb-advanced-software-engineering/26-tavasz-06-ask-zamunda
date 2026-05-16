---
title: "Architekturálisan szignifikáns követelmények"
description: "Az Ask Zamunda ASR-einek felsorolása és indoklása."
---

# Architekturálisan szignifikáns követelmények

## 1. Teljesítmény és Hálózati Optimalizáció

### REQ-1: Valós idejű válaszadás és stabilitás

A rendszer válaszideje (Time to First Token) maximum 1,5 másodperc, a teljes válaszidő legfeljebb 4-5 másodperc lehet. Ezt a zamundai hálózatokhoz optimalizált Server-Sent Events (SSE) protokollal kell megvalósítani, amely biztosítja a streaming élményt és tolerálja a vidéki régiók magas késleltetését.

### REQ-2: Kliensoldali lábnyom

A webes és mobil felületek minimalizált méretű Single Page Application (SPA) keretrendszerre épüljenek a gyors betöltődés érdekében, alkalmazkodva a korlátozott sávszélességű területekhez.

---

## 2. Költséghatékonyság és Klímabarát Működés

### REQ-3: Erőforrás-takarékos skálázás

A felhőalapú architektúrának Serverless technológiát és automatikus skálázást kell használnia. Terhelési csúcsok (pl. adóbevallás) idején biztosítja a kapacitást, üresjáratban viszont a fogyasztást és a költségeket nullára (Scale-to-Zero) kell csökkentenie.

### REQ-4: Energiahatékony inferencia és gyorsítótár

Hibrid LLM architektúrát kell alkalmazni költséghatékony, kvantált nyílt forráskódú vagy dedikált, alacsony költségű modellekkel. A gyakori kérdések megválaszolását egy szemantikus gyorsítótárból kell kiszolgálni, elkerülve a felesleges API hívásokat és csökkentve az ökológiai lábnyomot.

---

## 3. Adatfeldolgozás, Adminisztráció és Megbízhatóság

### REQ-5: Aszinkron RAG csővezeték

A jogszabályok napi szintű, százas nagyságrendű feltöltését üzenetsor-alapú aszinkron architektúrával kell a vektoradatbázisba beágyazni (embedding). Az LLM kizárólag ebből a hiteles forrásból dolgozhat a hallucináció minimalizálása végett.

### REQ-5/b: Human-in-the-loop dokumentumvalidáció

A külső hatóságoktól (pl. Nemzeti Adóhatóság) érkező dokumentumok nem kerülnek automatikusan a rendszerbe. A Government Admin felhasználók az Admin Frontenden keresztül validálják és töltik fel az anyagokat. Ez biztosítja a tudásbázis tartalmának minőségellenőrzését, és csökkenti a külső szervek onboarding terhét.

### REQ-6: Hivatkozások és időbeliség

A válaszoknak kötelezően tartalmazniuk kell a pontos forráshivatkozást. A metaadatként tárolt verziók és hatálybalépési dátumok alapján az újonnan módosult szabályozásokat vizuálisan ki kell emelni.

### REQ-7: Eszkalációs interfész

Igény vagy sikertelen válaszadás esetén a beszélgetési kontextust veszteségmentesen, valós időben át kell adni a külső emberi ügyfélszolgálati rendszernek.

---

## 4. Biztonság és Jogosultságkezelés

### REQ-8: Szerepkör alapú, adatminimalizált hozzáférés

Szigorú szeparáció szükséges az alábbiak szerint:

| Szerepkör | Hozzáférés |
|-----------|------------|
| **Vendég** | Rate-limiting (max 10 kérdés/óra), anonim elérés korlátozott tudásbázissal. A rendszer nem rendelkezik személyes adattal. |
| **Regisztrált** | Állami azonosítás (KAÜ) utáni elérés, korlátlan beszélgetés és előzménymentés. A rendszer kizárólag token szinten azonosít; személyes adatokat nem lát és nem tárol, hacsak a polgár meg nem adja azokat. |
| **Adminisztrátor** | Kizárólag belső kormányzati hálózatból (VPN) elérhető hozzáférés a jogszabályok jóváhagyásához. |

### REQ-9: Explicit védelem és anonimizáció

Dedikált biztonsági szűrőréteg szükséges a rosszindulatú kérések blokkolására. Az LLM-ek felé küldött promptokból automatizált pipeline segítségével el kell távolítani a felhasználó által esetlegesen bevitt személyes adatokat (PII) a felhőbe küldés előtt.