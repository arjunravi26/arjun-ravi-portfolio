---
title: Fine-Tuning LLaMA with QLoRA
summary: Adapting LLaMA for a domain task using a curated dialogue dataset, NF4 quantization and QLoRA on a single T4 GPU, then comparing the adapter against the base model.
category: Fine-tuning
technologies:
  - LLaMA
  - QLoRA
  - NF4
  - PEFT
  - TRL
  - Hugging Face
  - T4 GPU
  - FastAPI
  - Docker
featured: true
order: 4
period: Jul 2024 — Aug 2025
confidential: false
metrics:
  - label: Training data
    value: 10,000+
    note: Domain dialogue samples, quality-filtered and deduplicated
  - label: Adapter setup
    value: r=8, α=16
    note: QLoRA with NF4 quantization under T4 GPU memory constraints
  - label: LoRA targets
    value: Attention + FFN
    note: Extended after attention-only gave diminishing returns
---

## The problem

Adapt a LLaMA model to a specific domain with only a T4 GPU, which rules out full fine-tuning. The questions were what data to train on, how to fit the training in memory, and how to tell whether the adapter was really better than the base model.

## Data first

I built the dataset from public Hugging Face dialogue sources, with quality filtering and deduplication, ending with more than 10,000 samples. Comparing runs showed that the composition of the dataset changed perplexity more than tuning the LoRA rank did, so most of the effort went into the data.

## Training setup

QLoRA with NF4 quantization, gradient accumulation to fit the batch within T4 memory, and adapters with rank 8 and alpha 16. After attention-only adaptation (`q_proj`, `k_proj`, `v_proj`, `o_proj`) showed diminishing returns, I extended LoRA to the feed-forward projections (`gate_proj`, `up_proj`, `down_proj`).

## Evaluation and delivery

I compared the fine-tuned and base models with perplexity and with manual review of the answers. The adapters were published to the Hugging Face Hub and served through a Dockerized FastAPI service.

## What I took from it

The result depends on the dataset, the choice of target modules, the memory limit and how it is evaluated, more than on any single hyperparameter. Perplexity alone is also a narrow measure, which is why I read the outputs as well.
