---
title: "RAG technológia és vektordatázis"
description: "RAG technológia és vektordatázis használatának indoklása"
---

- Státusz: Aktív

**Abban a kontextusban, hogy**
- a rendszernek tízezres nagyságrendű jogi dokumentumból kell pontos, hivatkozott válaszokat adnia,
- a dokumentumállomány naponta százas nagyságrendű új dokumentummal bővül,
- az LLM önmagában nem rendelkezik naprakész zamundai jogszabályi tudással és hallucinációra hajlamos.

**szembesülve azzal, hogy**
- az LLM válaszainak kizárólag hiteles, ellenőrzött forrásból kell származnia,
- a keresésnek alacsony késleltetésűnek kell lennie,
- a rendszernek kezelnie kell a dokumentumok verzióit és hatálybalépési dátumait.

**amellett döntöttünk, hogy**
- Retrieval-Augmented Generation (RAG) pipeline alkalmazása, amelyben a felhasználói kérdés alapján a rendszer releváns dokumentumrészleteket keres a vektordatázisban, majd ezeket adja át kontextusként az LLM-nek.

**elvetve azt, hogy**
- RAG nélküli LLM válaszadás: a nagy nyelvi modellek nem rendelkeznek naprakész jogszabály információkkal és nem tudnak hivatkozni konkrét forrásokra. Ez pontatlan válaszokhoz és hallucinációhoz vezetne.
- Hagyományos kulcsszavas keresés: ezzel a megoldással az összefüggések megtalálására nem lenne lehetőség.

**elérve ezzel azt, hogy**
- az LLM válaszai kizárólag ellenőrzött, hiteles forrásból származnak,
- minden válasz pontos forráshivatkozással rendelkezik,
- a válaszokban megjelenik, ha egy hivatkozott szabályozás nemrégiben módosult,
- a szemantikus keresés nyelvfüggetlen és az adott kontextusra vonatkozó találatokat ad.

**elfogadva azt a hátrányt, hogy**
- a vektordatázis és az embedding pipeline üzemeltetése többlet költséget jelent,
- a szemantikus keresés paramétereinek finomhangolása folyamatos karbantartást igényel,
- a rendszer válaszainak minősége függ az embedding modell minőségétől.
