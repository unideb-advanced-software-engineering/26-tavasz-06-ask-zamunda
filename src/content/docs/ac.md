---
title: "Architekturális karakterisztikák"
description: "Az azonosított architekturális karakterisztikák."
---

# Architekturális karakterisztikák

## Elasztikusság

**Mit jelent?**
- https://quality.arc42.org/qualities/elasticity

**Miért fontos?**
- A rendszer terhelése előreláthatóan nagyon egyenetlen lesz. Újabb törvények bejelentésekor, vagy adóbevallási időszakban sokkal nagyobb terhelésre számítunk, amihez a rendszernek automatikusan tudnia kell alkalmazkodni.

## Alacsony késleltetés

**Mit jelent?**
- https://quality.arc42.org/qualities/latency

**Miért fontos?**
- Zamunda egyes részein korlátozott internetkapcsolattal, alacsony sávszélességgel és ebből adódóan magasabb késleltetéssel kell számolni. A rendszer tervezésénél figyelembe kell venni, hogy még a korlátozottabb körülmények között is a lehető legalacsonyabb késleltetés legyen elérhető.

## Biztonság

**Mit jelent?**
- https://quality.arc42.org/qualities/security

**Miért fontos?**
- A rendszer használata közben a felhasználók kérdéseikben személyes adatokat is megoszthatnak, amelyek kezelésére kiemelt figyelmet kell fordítani. Emellett fel kell készülni a hagyományos és kimondottan az LLM rendszerekre jellemző fenyegetésekre, lehetséges támadásokra.

## Helyesség

**Mit jelent?**
- https://quality.arc42.org/qualities/correctness

**Miért fontos?**
- A rendszer különböző jogszabályokra vonatkozó kérdésekről ad tájékoztatást, ahol a helytelen válaszok problémás következményekkel járhatnak. A nagy nyelvi modellek hajlamosak a hallucinációra, ezért a hiteles válaszok érdekében a rendszer által adott válaszokat vissza kell tudni vezetni a forrásukra.

## Költséghatékonyság

**Mit jelent?**
- https://quality.arc42.org/qualities/affordability

**Miért fontos?**
- Az ország pénzügyi takarékossági céljait figyelembvéve a rendszer tervezésénél a költséghatékonyság fontos szempontnak számít.
