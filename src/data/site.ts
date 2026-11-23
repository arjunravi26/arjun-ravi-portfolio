export const site = {
  name: 'Arjun Ravi',
  role: 'AI Engineer',
  specialization: 'LLM inference · Self-hosted models · RAG · Fine-tuning',
  location: 'India · Remote',
  email: 'arjunravi726@gmail.com',
  headline: 'AI Engineer building production AI applications with open-weight models.',
  intro:
    "I deploy open-weight models in production and build the services around them: model serving, RAG, document intelligence and fine-tuning, backed by APIs and asynchronous workflows.",
  introSecond:
    "I'm especially interested in self-hosted models and local RAG for private systems, where teams control their infrastructure and sensitive data. I design around the requirements, balancing quality, latency, throughput, reliability and cost.",
  // intro:
  // "I deploy open-weight models in production and build the services around them: model serving, RAG, document intelligence and fine-tuning, backed by APIs, asynchronous workflows and databases.",
  // introSecond:
  // "I'm especially interested in self-hosted models and local RAG for private systems, where teams control their infrastructure and how sensitive data is handled. I design around the requirements, balancing quality, latency, throughput, reliability and cost.",
  metaDescription:
    'Arjun Ravi is an AI Engineer with experience deploying open-weight models, building self-hosted AI applications, RAG systems, document intelligence, fine-tuning and backend services.',
  availability: 'Open to AI Engineer and Inference Engineer opportunities',
  github: 'https://github.com/arjunravi26',
  medium: 'https://medium.com/@arjunravi726',
  linkedin: 'https://www.linkedin.com/in/arjun-ravi-60215330b/',
  leetcode: 'https://leetcode.com/u/arjunravi726/',
};

export const proofPoints = [
  {
    value: '95%',
    unit: '',
    label: 'Document extraction',
    note: '11+ fields on a 50-document held-out set. Processing time reduced from 48s to 30s; PDF parsing was ~3× faster with three workers.',
  },
  {
    value: '150',
    unit: 'tok/s',
    label: 'Model serving',
    note: 'Aggregate decode with 10+ concurrent requests on one NVIDIA L4; peak prefill ~2,025 input tok/s and 10,000+ requests served per day.',
  },
  {
    value: '18 → 6',
    unit: 'sec',
    label: 'RAG application',
    note: 'Average response time in Insight AI after embedding caching, chunking and retrieval improvements.',
  },
];

export const principles = [
  {
    title: 'Start with the problem, not the model.',
    detail: 'Before choosing a model or framework, get clear on who needs the system, what outcome matters, what data can be used, and the limits around time, scale and cost. Those constraints help clarify what matters most—quality, speed, reliability or cost—and where trade-offs are acceptable.',
  },
  {
    title: 'Know what good looks like before building.',
    detail: 'Agree on how success will be judged early. Use examples that reflect real work, including awkward inputs and cases likely to fail. Keep a separate set of examples for evaluation, then use it to judge each change—not just the few outputs that look impressive.',
  },
  {
    title: 'Build only what earns its place.',
    detail: 'Choose the simplest design that meets the need. Not every step needs a model, and not every task needs to happen in real time. Sometimes the better improvement is to simplify the input, ask the model to produce less, or remove work altogether—not add another service or a bigger GPU. Keep data, model placement and access aligned with privacy and expected scale.',
  },
  {
    title: 'Design for the day things go wrong.',
    detail: 'Models can stall, background work can fail, the same request can arrive twice and connections can drop. The important part is keeping one failure from spreading: recovery should be predictable, and one weak component should not bring down the whole workflow.',
  },
  {
    title: 'Measure, learn and improve with evidence.',
    detail: 'Look at the whole journey, not just whether a service responds. Test under realistic conditions, watch output quality as well as speed, and compare each change with what came before. When something breaks, trace it to the cause before changing things. New tools earn their place only when they make the system meaningfully better without weakening what already works.',
  },
];

export const timeline = [
  {
    period: 'Nov 2025 — Jul 2026',
    role: 'AI Engineer',
    organization: 'Kyurius Tech Studios',
    description:
      'Worked on two production AI systems: a self-hosted LLM serving service and an insurance document-extraction pipeline. The work covered model deployment, APIs, data processing, evaluation, failure handling and monitoring.',
  },
  {
    period: 'Jul 2024 — Aug 2025',
    role: 'ML Engineering Trainee',
    organization: 'Brototype',
    description:
      'Built Insight AI, a multi-user document workspace using RAG and background ingestion, and worked on LLaMA domain adaptation with QLoRA.',
  },
  {
    period: 'Jan 2024 — Feb 2024',
    role: 'Data Science Intern',
    organization: 'ICT Academy of Kerala',
    description:
      'Built and deployed a message spam classifier using pretrained Word2Vec embeddings and a tuned Support Vector Classifier.',
  },
];

export const education = {
  qualification: 'Bachelor of Computer Applications (BCA)',
  institution: 'Mahatma Gandhi University',
  period: '2021 — 2024',
  detail:
    'Coursework included data structures and algorithms, operating systems, computer networks, Linux, mathematics, and programming in C, C++, Java, and Python.',
};

export const skillGroups = [
  {
    label: 'Model deployment & inference',
    items: 'vLLM, Ollama, Hugging Face, Attention and attention variants, KV-cache optimization, quantization, prefix caching, continuous batching, PagedAttention, runtime optimization, RoPE/Yarn',
  },
  {
    label: 'RAG & document intelligence',
    items: 'Qdrant, Pinecone, SentenceTransformers, embedding models, chunking, indexing, dense retrieval, BM25, hybrid search, cross-encoder reranking, RAGAS, PyMuPDF, Tesseract OCR, OpenCV, PaddleOCR',
  },
  {
    label: 'Fine-tuning & model adaptation',
    items: 'PEFT, TRL, QLoRA, Unsloth, NF4, dataset curation',
  },
  {
    label: 'Machine learning & deep learning',
    items: 'PyTorch, scikit-learn, ONNX, XGBoost, LightGBM, NumPy, Pandas, spaCy, Transformers and Vision Transformers',
  },
  {
    label: 'Backend & infrastructure',
    items: 'Python, SQL, C/C++, FastAPI, PostgreSQL, SQLite, Docker, AWS, GCP, Git, Async System, Event Driven Architecture,  multiprocessing',
  },
];
