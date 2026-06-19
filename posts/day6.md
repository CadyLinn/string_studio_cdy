## RAG — 檢索增強生成

![RAG Notes 1](images/S__50610188_0.jpg)

### 什麼是 RAG？

**RAG（Retrieval-Augmented Generation，檢索增強生成）** 是一種結合外部知識庫與大型語言模型（LLM）的 AI 架構。

核心概念：在生成回答前，先從外部文件中檢索相關資訊，再交由 LLM 生成精確的回答。

### 簡化流程

```
使用者提問
    ↓
[檢索] 將問題轉為數學向量，在向量資料庫搜尋最相關的知識片段
    ↓
[增強] 將搜尋到的參考資料與原始問題結合成更豐富的提示（Prompt）
    ↓
[生成] AI 根據這些參考資料，生成回覆
```

### 運作原理

![RAG Notes 2](images/S__50610190_0.jpg)

1. **檢索（Retrieve）**：將問題轉為數學向量，在向量資料庫搜尋最相關的知識片段
2. **增強（Augment）**：將搜尋到的參考資料與原始問題結合成更豐富的 Prompt
3. **生成（Generate）**：AI 根據這些參考資料，生成回覆

### 為什麼需要 RAG？

- 消除 AI 幻覺（hallucination），提供有依據的回答
- 知識可以即時更新，不需重新訓練模型
- 只需更新資料庫，就能讓 AI 獲得最新資訊
- 保護敏感數據隱私，企業可以讓 AI 讀取內部有限機密資料
- 提供引用來源

### 知識圖譜與 GraphRAG

- **知識圖譜**：結構化的知識表示方式
- **GraphRAG**：RAG 結合知識圖譜，讓檢索更精準

### 傳統 LLM vs RAG

| | 傳統 LLM | RAG |
|---|---|---|
| 知識來源 | 訓練資料（可能過時） | 即時檢索外部資料 |
| 準確性 | 可能產生幻覺 | 有依據的回答 |
| 更新方式 | 重新訓練模型 | 更新資料庫即可 |

```python
# RAG simplified concept
def rag_pipeline(question, knowledge_base):
    # Step 1: Retrieve
    relevant_docs = retrieve(question, knowledge_base)

    # Step 2: Augment
    prompt = f"Based on: {relevant_docs}\nAnswer: {question}"

    # Step 3: Generate
    answer = llm.generate(prompt)
    return answer
```

<!-- EN -->

## RAG — Retrieval-Augmented Generation

![RAG Notes 1](images/S__50610188_0.jpg)

### What is RAG?

**RAG (Retrieval-Augmented Generation)** is an AI architecture that combines external knowledge bases with Large Language Models (LLMs).

Core idea: before generating an answer, first retrieve relevant information from external documents, then let the LLM generate a precise response.

### Simplified Flow

```
User asks a question
    ↓
[Retrieve] Convert question to math vectors, search vector DB for relevant knowledge
    ↓
[Augment] Combine retrieved references with original question into a richer Prompt
    ↓
[Generate] AI generates response based on these references
```

### How It Works

![RAG Notes 2](images/S__50610190_0.jpg)

1. **Retrieve**: Convert the question into a mathematical vector and search the vector database for the most relevant knowledge fragments
2. **Augment**: Combine the retrieved references with the original question into a richer Prompt
3. **Generate**: AI generates a response based on these references

### Why Do We Need RAG?

- Eliminates AI hallucinations by providing evidence-based answers
- Knowledge can be updated in real-time without retraining the model
- Just update the database to give AI the latest information
- Protects sensitive data privacy — companies can let AI access limited internal data
- Provides citation sources

### Knowledge Graphs and GraphRAG

- **Knowledge Graph**: A structured way of representing knowledge
- **GraphRAG**: RAG combined with knowledge graphs for more precise retrieval

### Traditional LLM vs RAG

| | Traditional LLM | RAG |
|---|---|---|
| Knowledge Source | Training data (may be outdated) | Real-time external retrieval |
| Accuracy | May hallucinate | Evidence-based answers |
| Update Method | Retrain the model | Just update the database |

```python
# RAG simplified concept
def rag_pipeline(question, knowledge_base):
    # Step 1: Retrieve
    relevant_docs = retrieve(question, knowledge_base)

    # Step 2: Augment
    prompt = f"Based on: {relevant_docs}\nAnswer: {question}"

    # Step 3: Generate
    answer = llm.generate(prompt)
    return answer
```
