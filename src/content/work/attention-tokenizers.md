---
title: Attention Architecture & Tokenizer Internals
summary: From-scratch PyTorch implementations of attention variants and BPE tokenizers to understand the memory and inference trade-offs behind transformer systems.
category: Building to understand
technologies:
  - PyTorch
  - Python
  - Attention mechanisms
  - BPE tokenization
featured: false
order: 5
period: Apr 2026
confidential: false
repository: "https://github.com/arjunravi26/llm-implementation"
metrics: []
---

## Why build these from scratch?

Attention variants are often presented as model-architecture choices. In inference systems, those choices have practical consequences for key-value cache growth, memory footprint, and the amount of work performed during generation. I implemented the mechanisms directly to make those trade-offs easier to reason about.

## What I implemented

The project includes five attention variants in PyTorch:

- Single-head attention
- Multi-head attention (MHA)
- Multi-query attention (MQA)
- Grouped-query attention (GQA)
- Sliding-window attention (SWA)

I also implemented byte-pair encoding (BPE) and byte-level BPE tokenizers from first principles.

## What I wanted to understand

The focus was not to recreate a production transformer library. It was to study how architecture changes affect memory usage, KV-cache growth, and inference latency—and how those differences inform VRAM budgeting and serving-cost decisions.

## Next step

Adding reproducible benchmarks with controlled sequence lengths, batch sizes and hardware. Until then, this project documents the implementations and the reasoning, not measured comparisons.
