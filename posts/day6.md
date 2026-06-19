## RAG（Retrieval-Augmented Generation，檢索增強生成）

當大型語言模型（LLM）越來越強大後，一個問題也逐漸浮現：

> AI 的知識其實停留在訓練資料的時間點。

如果企業有最新文件、內部規範、產品資訊或專業知識，模型本身其實不知道。

於是就誕生了：**RAG（Retrieval-Augmented Generation）**

![RAG Notes 1](images/S__50610188_0.jpg)

### RAG 是什麼？

RAG 可以理解成「外部知識庫 + 大型語言模型（LLM）」的 AI 架構。

與傳統 ChatGPT 類型模型不同的是：AI 在回答問題前，會先到指定的知識庫中搜尋相關資訊，再根據找到的內容生成答案。

因此回答不只依賴模型記憶，而是能參考最新且特定領域的資料。

### RAG 如何運作？

![RAG Notes 2](images/S__50610190_0.jpg)

整體流程可以簡化為：

```
知識文件（PDF、FAQ、文件檔）
         ↓
向量化（Embedding）
         ↓
建立向量資料庫（Vector Database）
         ↓
使用者提問
         ↓
檢索相關內容（Retrieval）
         ↓
LLM 生成答案（Generation）
```

例如：公司員工詢問「公司的請假規定是什麼？」RAG 不會直接依靠模型記憶回答，而是先搜尋公司的人資文件，找到相關規範後，再整理成自然語言回覆。

### 為什麼需要 RAG？

如果只使用傳統 LLM：
- 知識可能過時
- 無法存取企業內部資料
- 容易產生幻覺（Hallucination）
- 難以追溯資訊來源

RAG 的優勢：
- **即時取得最新資訊** — 不需要重新訓練模型，只要更新知識庫即可
- **降低 AI 幻覺** — 回答有實際文件作為依據，可信度更高
- **保護企業資料** — 企業可以指定 AI 只能存取授權文件，避免敏感資料外流
- **提供資訊來源** — 回答可以附上引用文件，方便使用者驗證內容

### RAG 的核心概念

可以把 RAG 想成：**先查資料，再回答問題。**

就像學生考試時：
- **一般 LLM**：憑記憶作答
- **RAG**：先翻課本找答案，再整理成自己的話回答

因此在企業 AI、客服系統、知識管理平台中，RAG 已經成為最常見的 AI 應用架構之一。

### 今天最大的收穫

以前以為 AI 的能力完全來自模型本身，但學到 RAG 後才發現：真正實用的企業 AI，往往不是讓模型變得更大，而是讓模型能夠找到正確的資料。

> AI 不一定要知道所有事情，只要能夠快速找到需要的知識即可。

而 RAG 的出現，正是讓大型語言模型從「會聊天」走向「真正能工作」的重要關鍵。

```python
# RAG simplified concept
def rag_pipeline(question, knowledge_base):
    # Step 1: Retrieve relevant documents
    relevant_docs = retrieve(question, knowledge_base)

    # Step 2: Augment the prompt
    prompt = f"Based on: {relevant_docs}\nAnswer: {question}"

    # Step 3: Generate response
    answer = llm.generate(prompt)
    return answer

# Like a student taking an exam:
# LLM alone = answering from memory
# RAG = looking up the textbook first, then answering
```

#ArtificialIntelligence #RAG #LLM #VectorDatabase #每日啃一點原文cs

<!-- EN -->

## RAG (Retrieval-Augmented Generation)

As Large Language Models (LLMs) become more powerful, a problem has emerged:

> AI's knowledge is actually frozen at the point of its training data.

If a company has the latest documents, internal policies, product information, or domain expertise, the model itself simply doesn't know about them.

This is why **RAG (Retrieval-Augmented Generation)** was born.

![RAG Notes 1](images/S__50610188_0.jpg)

### What is RAG?

RAG can be understood as an AI architecture combining "external knowledge bases + Large Language Models (LLMs)."

Unlike traditional ChatGPT-style models: before answering a question, the AI first searches a designated knowledge base for relevant information, then generates an answer based on what it finds.

So the answers don't rely solely on model memory — they can reference the latest, domain-specific data.

### How Does RAG Work?

![RAG Notes 2](images/S__50610190_0.jpg)

The overall process can be simplified as:

```
Knowledge documents (PDFs, FAQs, files)
         ↓
Vectorization (Embedding)
         ↓
Build Vector Database
         ↓
User asks a question
         ↓
Retrieve relevant content (Retrieval)
         ↓
LLM generates answer (Generation)
```

For example: An employee asks "What is the company's leave policy?" RAG doesn't rely on model memory — it first searches HR documents, finds the relevant policies, and then composes a natural language response.

### Why Do We Need RAG?

Using only traditional LLMs:
- Knowledge may be outdated
- Cannot access internal company data
- Prone to hallucination
- Hard to trace information sources

RAG advantages:
- **Real-time latest information** — No need to retrain models, just update the knowledge base
- **Reduced AI hallucination** — Answers backed by actual documents, more credible
- **Data protection** — Companies can limit AI to only access authorized documents
- **Source citation** — Answers can include document references for verification

### The Core Concept of RAG

Think of RAG as: **Look up the information first, then answer the question.**

Like a student taking an exam:
- **Regular LLM**: Answering from memory
- **RAG**: Looking up the textbook first, then answering in your own words

RAG has become one of the most common AI application architectures in enterprise AI, customer service systems, and knowledge management platforms.

### Biggest Takeaway Today

I used to think AI's capabilities came entirely from the model itself, but after learning about RAG, I realized: truly useful enterprise AI is often not about making models bigger, but about enabling models to find the right data.

> AI doesn't need to know everything — it just needs to quickly find the knowledge it needs.

RAG is the key that transforms LLMs from "good at chatting" to "actually able to work."

```python
# RAG simplified concept
def rag_pipeline(question, knowledge_base):
    # Step 1: Retrieve relevant documents
    relevant_docs = retrieve(question, knowledge_base)

    # Step 2: Augment the prompt
    prompt = f"Based on: {relevant_docs}\nAnswer: {question}"

    # Step 3: Generate response
    answer = llm.generate(prompt)
    return answer

# Like a student taking an exam:
# LLM alone = answering from memory
# RAG = looking up the textbook first, then answering
```

#ArtificialIntelligence #RAG #LLM #VectorDatabase #CSDailyChallenge
