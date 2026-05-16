---
title: "ADR-03: Central Identity Agent"
description: "Central Identity Agent bevezetésének indoklása"
---


- Státusz: Aktív

**Abban a kontextusban, hogy**
- zamundai állampolgárok és vállalkozások személyes adatainak kezelése,
- LLM modellek integrációja, amelyek nem dolgozhatnak fel személyes azonosításra alkalmas adatokat.

**szembesülve azzal, hogy**
- szigorú GDPR szabályoknak való megfelelés,
- valamint egységes hitelesítési réteg szükségessége a különböző felületek között (Vendég, Regisztrált és Adminisztrátori szerepkörök).

**amellett döntöttünk, hogy**
- Central Identity Agent bevezetése, amely biztonságos átjáróként működik a felhasználók és a rendszer többi eleme között.

**elvetve azt, hogy**
- Elosztott hitelesítés: minden szolgáltatás saját maga kezeli a felhasználói identitást.
- LLM hozzáférés felhasználói adatokhoz: a személyes adatok szűrés nélkül kerülnének a felhőalapú LLM-ekhez, ami GDPR szempontból elfogadhatatlan.

**elérve ezzel azt, hogy**
- a személyes identitás teljes leválasztása az LLM RAG folyamattól,
- központi munkamenet kezelés,
- minden LLM-nek szánt prompt szűrésre kerül, mielőtt elhagyná a rendszert.

**elfogadva azt a hátrányt, hogy**
- megnövekedett architekturális komplexitás,
- a hitelesítés egy extra lépéssel lassítja a kérések kiszolgálását.

