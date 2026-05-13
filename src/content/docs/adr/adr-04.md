---
title: "ADR-04: Admin-Mediated Data Ingestion"
description: "Decision to use internal administrators for processing external authority requests"
---

- Status: Active

In the context of
- receiving frequent legislative updates and change notices from external bodies like the National Tax Authority,
- and maintaining a high-quality, structured Vector Database for the RAG process.

facing the need for
- minimizing the technical burden on external authorities,
- and ensuring that only validated, correctly formatted data enters the system's knowledge base.

we decided for
- an architecture where external authorities only provide raw data/notices, which are then manually or semi-automatically processed and recorded by internal Ask Zamunda Administrators.

achieving
- zero requirement for external partners to learn or integrate with our internal system schemas,
- and improved data integrity through human validation before the Vector Database update.

accepting that
- an internal administrative team must be maintained, and the data update process is not fully automated from source to database.