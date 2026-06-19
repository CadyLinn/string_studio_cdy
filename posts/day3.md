## 1.1 圖靈模型（Turing Model）

![Turing Model Notes](images/S__50610185_0.jpg)

### Alan Turing 與通用計算裝置

**1937 年**，Alan Turing 首次描述了**通用計算裝置**（universal computational device）的概念。

他提出：所有的計算都可以由一種特殊的機器來執行，這種機器現在被稱為 **Turing Machine（圖靈機）**。

### 圖靈機的意義

- 是一種對計算的**數學描述**（mathematical description）
- 也是計算的**哲學定義**（philosophical definition of computation）
- Turing 將人在計算時的動作抽象化，建立了這個模型

### 重點

圖靈機不是一台實際的機器，而是一個理論模型。它告訴我們：什麼是「可計算的」，什麼是「不可計算的」。

> 任何現代電腦能做的事，理論上圖靈機都能做到。

```
Turing Machine (Conceptual Model):
┌─────────────────────────┐
│  Tape: ... | 0 | 1 | 1 | 0 | B | ...
│              ↑
│         Read/Write Head
│
│  State: q1
│  Rules: (q1, 0) → (q2, 1, R)
│         (q1, 1) → (q1, 0, L)
└─────────────────────────┘
```

<!-- EN -->

## 1.1 The Turing Model

![Turing Model Notes](images/S__50610185_0.jpg)

### Alan Turing and the Universal Computational Device

In **1937**, Alan Turing first described the idea of a **universal computational device**.

He proposed that all computation could be performed by a special kind of machine, now called a **Turing Machine**.

### Significance of the Turing Machine

- It is a **mathematical description** of such a machine
- It provides a **philosophical definition of computation**
- Turing based the model on the actions that people perform when involved in computation

### Key Point

The Turing Machine is not an actual physical machine — it is a theoretical model. It tells us what is "computable" and what is "not computable."

> Anything a modern computer can do, a Turing Machine can theoretically do as well.

```
Turing Machine (Conceptual Model):
┌─────────────────────────┐
│  Tape: ... | 0 | 1 | 1 | 0 | B | ...
│              ↑
│         Read/Write Head
│
│  State: q1
│  Rules: (q1, 0) → (q2, 1, R)
│         (q1, 1) → (q1, 0, L)
└─────────────────────────┘
```
