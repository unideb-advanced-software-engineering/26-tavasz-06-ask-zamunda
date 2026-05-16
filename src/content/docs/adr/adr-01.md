---
title: "ADR-01: Hibrid Architektúra"
description: "A választott architekturális stílusok leírása."
---

- Státusz: Aktív

**Abban a kontextusban, hogy**
- az egész rendszer tervezését tekintve 

**szembesülve azzal, hogy**
- a két alrendszerben eltérő architekturális karakterisztikákat kell megvalósítani

**amellett döntöttünk, hogy**
- hibrid architektúrát alkalmazunk, kombinálva az SBA és EDA stílusokat, ahol a rendszer két jól elkülönített szolgáltatásra bontható: az állampolgárok és vállalkozások számára nyújtott chat szolgáltatásra, valamint a hivatalok és adminisztrátorok dokumentumkezelő szolgáltatására.

**elvetve azt, hogy**
- Egyedül EDA használata: a chat alrendszer alacsony késleltetésű, szinkron kommunikációt igényel a streaming válaszokhoz, amelyre az EDA önmagában nem alkalmas.
- Egyedül SBA használata: önmagában nem alkalmas a dokumentumok tömeges, aszinkron feldolgozására.
- Microservices: túl nagy komplexitást jelentene egy olyan rendszerben, ami mindössze két szolgáltatásra bontható.

**elérve ezzel azt, hogy**
- minden alrendszer a saját igényeihez illeszkedő architektúrát kap,
- a chat szolgáltatás önállóan skálázható csúcsidőben,
- az LLM és a RAG működése önállóan tesztelhető.

**elfogadva azt a hátrányt, hogy**
- két architekturális stílus több döntést eredményez,
- magasabb tervezési és üzemeltetési komplexitással jár,
- az aszinkron folyamatok nehezebben nyomonkövethetőek.

