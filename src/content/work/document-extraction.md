---
title: Intelligent Document Extraction for Insurance Workflows
summary: A locally hosted model-based extraction pipeline for variable digital and scanned insurance documents, combining PDF parsing, OCR fallback, parallel processing and structured-output validation.
category: Document Classification & Extraction
technologies:
  - Qwen3-14B
  - PyMuPDF
  - OpenCV
  - Tesseract OCR
  - FastAPI
  - Python multiprocessing
featured: true
order: 3
period: Nov 2025 — Jul 2026
confidential: true
metrics:
  - label: Field-level accuracy
    value: 95%
    note: 11+ fields; 50-document held-out set
  - label: End-to-end processing time
    value: 48s → 30s
    note: Reduced through output and pipeline optimizations
  - label: PDF parsing speed
    value: ~3×
    note: Three worker processes; under 4s median parsing/OCR for a 10-page PDF
---

## The problem

Insurance documents arrive in different layouts and formats. Some PDFs contain extractable text; others are scanned pages where information has to be recovered through OCR. The goal was to turn these documents into consistent structured data that downstream services could validate and use.

The client is intentionally not identified here. Examples and internal document formats are not reproduced in this public case study.

## What I built

I developed a document-extraction service around a locally hosted Qwen3-14B model. The ingestion pipeline used two paths:

- **Digital PDFs:** PyMuPDF extracted text page by page.
- **Scanned PDFs:** when extractable text was unavailable, OpenCV-based contour and table/row detection with Tesseract OCR provided the fallback.

Both paths passed through text cleaning and post-processing before model-based extraction and validation. The service exposed the pipeline through FastAPI.

## Improving processing time

The work focused on the full processing path rather than model generation alone:

- **Parallel parsing:** page processing was distributed across three worker processes, making the parsing/OCR stage approximately three times faster. Median parsing/OCR time was under four seconds for a 10-page PDF.
- **Smaller structured output:** repeated keys and information that could be derived in code were kept out of the model response, reducing unnecessary generated tokens.
- **Cleaner input and measured batching:** preprocessing reduced avoidable input tokens, while batching was tuned against observed queue wait and processing time.

Across the optimized workflow, the reported processing time decreased from 48 seconds to 30 seconds. This is separate from the approximately 3× improvement in the parsing/OCR stage.

## Accuracy and validation

The pipeline achieved 95% field-level accuracy across 11+ structured fields, measured on a held-out set of 50 documents. A prompt regression suite compared more than ten version-controlled candidates using per-class precision and recall; the selected prompt improved overall accuracy by ten percentage points over the baseline.

A multi-stage validation pipeline checked JSON schema integrity, mandatory fields, key consistency, category-count consistency and malformed outputs before data moved downstream.

## What I learned

Document extraction is a system problem. Input quality, parsing, OCR, concurrency, prompt design, output length and validation all affect the result. Optimizing only the model prompt would have left important bottlenecks elsewhere in the pipeline.
