---
title: "ADR-04: Admin által jóváhagyott dokumentumfeltöltés"
description: "Belső adminisztrátorok alkalmazásának indoklása a külső hatóságok dokumentumainak feldolgozásához."
---

- Státusz: Aktív

**Abban a kontextusban, hogy**
- külső hatóságoktól rendszeres jogszabályfrissítések és változásértesítők érkeznek,
- a RAG folyamat számára magas minőségű, strukturált tudásbázist kell fenntartani.

**szembesülve azzal, hogy**
- minimalizálni kell a külső hatóságokra háruló technikai terhet,
- kizárólag validált, megfelelően formázott dokumentumok kerülhetnek a tudásbázisba.

**amellett döntöttünk, hogy**
- olyan feltöltési folyamat alkalmazása, amelyben a külső hatóságok csak a nyers dokumentumokat juttatják el a rendszerbe,
- a formai és metaadat szintű validálást belső adminisztrátorok végzik, a vektorizálást ezt követően a rendszer automatikusan elvégzi,
- az adminisztrátorok felelnek az elavult dokumentumok frissítéséért és archiválásáért is.

**elvetve azt, hogy**
- Állami hatóságok közvetlen feltöltése a tudásbázisba: technikai integrációt és onboardingot igényelne minden állami szerv részéről.
- Teljesen automatizált feldolgozás: formai és metaadat szintű emberi ellenőrzés nélkül a rendszer nem tudná garantálni a tudásbázis konzisztenciáját.

**elérve ezzel azt, hogy**
- az állami hatóságok számára nincs szükség bonyolult onboarding tartására,
- formai és metaadat szintű ellenőrzés garantálja a tudásbázis konzisztenciáját,
- az elavult dokumentumok kezelése és archiválása kontrollált keretek között történik.

**elfogadva azt a hátrányt, hogy**
- belső adminisztrátori csapatot kell fenntartani,
- a dokumentumok megjelenése a tudásbázisban lassabb egy teljesen automatizált megoldásnál.