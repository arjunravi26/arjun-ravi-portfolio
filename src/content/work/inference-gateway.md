---
title: Self-Hosted LLM Inference Service
summary: A production self-hosted Qwen3-14B service on one GPU, with an API layer for admission control, scheduling, streaming and cancellation under concurrent workloads.
category: Model deployment & serving
technologies:
  - Qwen3-14B AWQ
  - vLLM
  - NVIDIA L4
  - AWS EC2
  - FastAPI
  - asyncio
  - Docker
featured: true
order: 1
period: Nov 2025 — Jul 2026
confidential: false
metrics:
  - label: Aggregate decode throughput
    value: 150 tok/s
    note: 10+ concurrent requests; about 5.4× a single stream
  - label: Peak prefill throughput
    value: ~2,025 tok/s
    note: Peak input-token throughput during benchmarking
  - label: Daily request volume
    value: 10,000+
    note: Requests handled per day by the service
---

## The problem

The goal was to run Qwen3-14B (AWQ) on one NVIDIA L4 with 24 GB of memory, behind an API other services could call. With concurrent users and prompts of very different sizes, a single oversized request or an abandoned one could waste GPU capacity or crash the model server.

## What I built

A Dockerized vLLM server on AWS EC2 with an OpenAI-compatible API, continuous batching and prefix caching. A FastAPI service in front handled API-key authentication, health checks, streaming and backpressure, alongside request admission, scheduling and cancellation:

- **Admission control:** requests larger than the model or GPU could handle are rejected before they reach vLLM, which removed the out-of-memory crashes.
- **Fair scheduling:** a token-budget-aware scheduler mixes small and large requests (roughly 5k to 20k tokens) without starving either.
- **Cancellation:** if a client disconnects or times out, queued work is dropped and running generation is stopped, so the GPU is not busy for nobody.

The service exposed operational metrics for queue depth, wait time, time to first token, latency and failures, making it possible to distinguish model-serving problems from issues in the request path.

## Results

With 10+ concurrent requests the service reached about 150 aggregate decode tokens per second, around 5.4 times a single stream. Peak prefill throughput reached about 2,025 input tokens per second, and peak KV-cache utilization was approximately 87%. The service handled more than 10,000 requests per day. Aggregate decode throughput is total throughput across requests, not the speed of one request, and results depend on the model, GPU and prompt lengths.

## What I took from it

Serving performance depends on the whole system around the model: limits on what comes in, how work is queued, what happens when clients leave, and being able to see what is going on. The model server is one part of that.
