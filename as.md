# Architekturális stílus
A projekthez választott architekturális stílusok:
- Service-Based architecture.
- Event-Driven architecture.

## Miért Service-Based architecture?
### Illeszkedés
Az Ask Zamunda architekturális karakterisztikáihoz (Skálázhatóság/Elasztikusság, Alacsony késleltetés, Biztonság, Helyesség/hitelesség, Költséghatékonyság)
leginkább a SBA illik:
- A szolgáltatás két elkülönülő egységre bontható: chat és közigazgatási adminisztrátori felület és beágyazott vektortér.
- A nyelvi modellek tesztelhetőségét könnyebbé teszi, ezáltal jobb pontosságot eredményezve.
### Kompromisszumok
- Önmagában nem lenne elég reszponzív.

## Miért Event-Driven architecture?
### Illeszkedés
Annak érdekében, hogy a chat szolgáltatás kellően rugalmas és skálázható legyen, az EDA megfelelő választás:
- Csúcsidőben is rendkívül jó reszponzivitást biztosít.
- Új dokumentum feltöltésekor azonnal frissül az összes alrendszer.
### Kompromisszumok
- Hibrid modell miatt bonyolultabb a rendszer felépítése.
