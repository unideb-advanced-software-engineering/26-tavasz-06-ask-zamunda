---
title: "ADR-03: Central Identity Agent for Data Privacy"
description: "The reason for implementing a Central Identity Agent"
---

- Status: Active

In the context of
- handling sensitive personal data of citizens and corporate entities,
- and the integration of Large Language Models (LLM) which should not process PII (Personally Identifiable Information).

facing the need for
- strict GDPR compliance and data encapsulation,
- and a unified authentication layer across different frontends (Guest, Registered, Admin).

we decided for
- implementing a Central Identity Agent to act as a secure gateway between users and the core system.

achieving
- full decoupling of personal identity from the AI-driven RAG (Retrieval-Augmented Generation) process,
- and centralized session management with secure token exchange.

accepting that
- increased architectural complexity and an additional network hop for authentication requests.
