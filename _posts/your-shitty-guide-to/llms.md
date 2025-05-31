---
layout: post
title: Stats
tag: LLMs
category: posts
order: 1
pagestyle: base
pagestyle2: post
---

## RAG

LLMs might have knowledge gaps in their training process that you can augement through "retreival" augmented generation. You want to retrieve information from let's say a propreiatry database 

https://github.com/FullStackRetrieval-com/RetrievalTutorials/blob/main/tutorials/LevelsOfTextSplitting/5_Levels_Of_Text_Splitting.ipynb

https://github.com/langchain-ai/langchain/blob/master/cookbook/Multi_modal_RAG.ipynb

http://docs.llamaindex.ai/en/v0.10.17/api/llama_index.core.node_parser.HierarchicalNodeParser.html

https://www.reddit.com/r/LangChain/comments/1bijg75/why_is_everyone_using_ragas_for_rag_evaluation/

https://towardsdatascience.com/benchmarking-hallucination-detection-methods-in-rag-6a03c555f063/

https://huggingface.co/learn/cookbook/en/rag_evaluation


## Easy Questions - LLMs
What is a language model? How is it trained?
What are tokens in the context of LLMs?
Explain the difference between GPT and BERT.
What does "pretraining" and "fine-tuning" mean?
What is the role of positional encoding in transformers?
## Medium Questions - LLMs
How does instruction tuning differ from supervised fine-tuning?
What is in-context learning? How do LLMs achieve few-shot learning?
What are the limitations of LLMs in terms of hallucination?
Compare encoder-only, decoder-only, and encoder-decoder architectures.
How does LoRA (Low-Rank Adaptation) help in fine-tuning?
## Hard Questions - LLMs
What are the tradeoffs between parameter-efficient fine-tuning (e.g., LoRA) vs full fine-tuning?
How do LLMs model long-term dependencies and how is this changing with new architectures (e.g., Mamba, RWKV)?
Discuss the role of attention head pruning and quantization in model efficiency.
What are the bottlenecks in inference at scale and how are they solved (e.g., speculative decoding, MoE)?
## Latest Developments (as of mid-2025) - LLMs
OpenAI GPT-4.5 / GPT-5-like models: faster, better context retention.
Long-context transformers (e.g., Claude 3 with 200K+ context).
Mixture-of-Experts (MoE) resurgence for efficiency.
Speculative decoding & vLLM improving inference latency.

## Easy - RAG
What is Retrieval-Augmented Generation?
Why would you use RAG instead of a standard LLM?
What are the main components of a RAG pipeline?
How is a retriever different from a generator?
## Medium - RAG
How do dense and sparse retrieval methods differ?
What is hybrid search in a RAG setup?
How does vector similarity search work?
How do you mitigate hallucination in a RAG pipeline?
Explain how chunking affects retrieval quality.
## Hard - RAG
How do you design a feedback loop to refine the retriever over time in a RAG pipeline?
Explain vector index optimization and FAISS vs. newer options (e.g., Milvus, Weaviate).
How would you evaluate the effectiveness of a RAG system?
What techniques help with long-context document retrieval?
## Latest - RAG
RAG 2.0: more dynamic retrieval, tighter integration of generation and retrieval.
Retriever tuning via synthetic queries and feedback loops.
Semantic chunking using LLMs to improve document segmentation.

## Easy - Agentic AI
What is an AI agent?
How does an agent differ from a traditional chatbot?
What’s an example of a simple autonomous AI agent?
## Medium - Agentic AI
What is a planning and reasoning loop in an agent?
How do tools like LangChain or OpenAI Functions assist agentic behavior?
How would you handle tool selection dynamically in an agent?
What are memory modules in agent frameworks, and why are they important?
## Agentic AI
How do you avoid infinite loops or hallucinated tool usage in agentic AI?
Discuss the challenges in deploying autonomous agents in production.
How do agents maintain goal-state alignment over long task sequences?
How do you incorporate human-in-the-loop safely in agent workflows?
## Latest - Agentic AI
AutoGen, CrewAI, OpenAgents gaining traction.
Multi-agent collaboration: agents planning together (not just executing tasks).
Memory + tool-use integration as a new core capability.
OpenAI GPT Agents (function calling + planning + memory) being embedded into ChatGPT.

