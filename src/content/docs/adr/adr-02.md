---
title: "ADR-02: Serverless működés"
description: "Felhőalapú infrastruktúra választásának indoklása."
---


- Státusz: Aktív

**Abban a kontextusban, hogy**
- teljes rendszerre vonatkozóan

**szembesülve azzal, hogy**
- egyenetlen terhelés kezelésének szükségessége, miközben a költséghatékonyság alapkövetelmény

**amellett döntöttünk, hogy**
- serverless felhőalapú infrastruktúra alkalmazása, ahol a két szolgáltatás egymástól függetlenül, csak tényleges igény esetén fut.

**elvetve azt, hogy**
- saját infrastruktúra kiépítése, ami magas beruházási költéggel jár és kevésbé skálázható.
- folyamatosan futó felhős szolgáltatás, ami akkor is kötségeket jelent, amikor a rendszer nincs használva

**elérve ezzel azt, hogy**
- költségek és energiafelhasználás jelentősen csökkenthető, 
- csúcsidőben automatikus kapacitásbővítés,
- a két szolgáltatás egymástól függetlenül skálázódik igény szerint.

**elfogadva azt a hátrányt, hogy**
- a rendszer üresjárat utáni indításával késleltetés léphet fel,
- a felhőszolgáltatótól való függőség kockázata jelen van.


