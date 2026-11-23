---
title: Insight AI — Private Document Intelligence Workspace
summary: A multi-user document workspace designed for private deployments, with tenant-isolated indexing, embedding-based retrieval, hybrid search, reranking and source-grounded answers.
category: RAG & document intelligence
technologies:
  - Python
  - FastAPI
  - Qdrant
  - SentenceTransformers
  - Dense embeddings
  - BM25
  - Cross-encoder reranking
  - PostgreSQL
  - Ollama / Groq
featured: true
order: 2
period: Jul 2024 — Aug 2025
confidential: false
metrics:
  - label: Average response latency
    value: 18 → 6 sec
    note: After embedding caching, chunking and retrieval improvements
  - label: Retrieval approach
    value: Hybrid
    note: Embedding search + BM25 + reranking + final document selection
  - label: Data access
    value: Tenant-isolated
    note: JWT authentication and user-scoped retrieval
---

## The problem

Insight AI is a multi-user workspace for searching, extracting, analyzing and comparing information across PDF documents. Answers need to be grounded in source material, and each user's documents must remain isolated from other users' retrieval results.

The project was designed with private deployment in mind. It supports local model generation through Ollama; an external Groq provider is also available as an optional configuration.

## What I built

I built the application around FastAPI, PostgreSQL and Qdrant, with JWT authentication and tenant isolation across API endpoints and document retrieval. The document pipeline includes PDF extraction, structure-aware chunking, embedding generation and indexing.

The retrieval flow combines multiple embedding configurations where required with dense vector search and BM25 keyword retrieval. Retrieved passages are reranked with a cross-encoder, followed by a custom final-document selection step to narrow the evidence passed to generation. Responses include citations so users can trace answers back to source documents.

## Private deployment and data boundaries

The application supports local inference through Ollama. The provider-agnostic integration layer also supports Groq as an optional external API route. JWT authentication and tenant-scoped retrieval enforce document ownership at the application and retrieval layers.

## Backend workflow

PDF ingestion is handled separately from the online retrieval and generation path. A PostgreSQL-backed job queue coordinates background work with job leasing, lock-token validation, heartbeat renewal and bounded retries. This keeps long-running document processing away from interactive query handling.

## Performance and evaluation

Average response latency was reduced from 18 seconds to 6 seconds through embedding caching, improved chunking and vector-retrieval optimizations. Prometheus metrics, RAGAS and custom evaluation were used to examine retrieval quality, pipeline performance and reliability.

## What I learned

A useful RAG system depends on the whole retrieval path: document structure, chunking, embeddings, indexing, keyword matching, reranking, final evidence selection and access control. The generation model matters, but it cannot compensate for weak retrieval or unclear data boundaries.
