## 日更挑戰 Day 5 — 每日啃一點原文 CS & Coding 教科書

### 【Ch1-1】Turing Model（圖靈模型）續篇

今天讀到電腦科學最重要的起點之一 —— 圖靈模型（Turing Model）。

Alan Turing 在 1937 年提出了一個大膽的想法：如果把計算過程拆解成一系列明確的規則，那麼理論上只需要一台通用機器，就能完成所有可計算的問題。

這個概念後來發展成著名的「圖靈機（Turing Machine）」，也奠定了現代電腦的理論基礎。

### Programmable Data Processor（可程式化資料處理器）

最有趣的是，書中將電腦描述成一個單純的資料處理器（Data Processor）。

![Programmable Data Processor](images/S__50610191_0.jpg)

同一組資料，套用不同的程式，就能得到完全不同的結果。

### 例如輸入：3、12、8、22

![Same Program Different Data](images/S__50610192_0.jpg)

**排序程式（Sort）** → 3、8、12、22

**加總程式（Add）** → 45

**找最小值程式（Find Smallest）** → 3

![Same Data Different Programs](images/S__50610193_0.jpg)

### 重要觀念

從這個例子可以發現：

資料本身沒有改變，真正決定結果的是「程式規則」。

這也讓我重新理解電腦的本質：

> 電腦並不是在思考，而是在依照程式規則處理資料。

不論是搜尋引擎、導航系統，甚至是 AI，本質上都可以被視為：

**Input → Process → Output**

圖靈最大的貢獻，不只是發明一台理論上的機器，而是首次用數學方法定義了什麼是「計算」，也開啟了現代 Computer Science 的發展。

```python
data = [3, 12, 8, 22]

# Same data, different programs, different results
print(f"Sort:          {sorted(data)}")       # [3, 8, 12, 22]
print(f"Add:           {sum(data)}")           # 45
print(f"Find Smallest: {min(data)}")           # 3
print(f"Find Largest:  {max(data)}")           # 22
```

#TuringMachine #ComputerScience #DataProcessing #CSDailyChallenge #每日啃一點原文cs

<!-- EN -->

## Daily Challenge Day 5 — Reading CS & Coding Textbooks Every Day

### [Ch1-1] Turing Model — Continued

Today I read about one of the most important starting points of computer science — the Turing Model.

Alan Turing proposed a bold idea in 1937: if you break down the computing process into a series of clear rules, then theoretically you only need one universal machine to solve all computable problems.

This concept later developed into the famous "Turing Machine" and laid the theoretical foundation for modern computers.

### Programmable Data Processor

The most interesting part is that the book describes a computer as a simple Data Processor.

![Programmable Data Processor](images/S__50610191_0.jpg)

The same set of data, with different programs applied, can produce completely different results.

### For example, input: 3, 12, 8, 22

![Same Program Different Data](images/S__50610192_0.jpg)

**Sort program** → 3, 8, 12, 22

**Add program** → 45

**Find Smallest program** → 3

![Same Data Different Programs](images/S__50610193_0.jpg)

### Key Insight

From this example, we can see:

The data itself doesn't change — what truly determines the result is the "program rules."

This gave me a new understanding of what computers really are:

> Computers don't think — they process data according to program rules.

Whether it's search engines, navigation systems, or even AI, they can all essentially be viewed as:

**Input → Process → Output**

Turing's greatest contribution wasn't just inventing a theoretical machine, but being the first to mathematically define what "computation" means, opening the door to the development of modern Computer Science.

```python
data = [3, 12, 8, 22]

# Same data, different programs, different results
print(f"Sort:          {sorted(data)}")       # [3, 8, 12, 22]
print(f"Add:           {sum(data)}")           # 45
print(f"Find Smallest: {min(data)}")           # 3
print(f"Find Largest:  {max(data)}")           # 22
```

#TuringMachine #ComputerScience #DataProcessing #CSDailyChallenge
