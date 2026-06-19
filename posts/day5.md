## 1.1.2 可程式化資料處理器（Programmable Data Processors）

![Programmable Data Processor](images/S__50610191_0.jpg)

### 從特定用途到通用用途

Turing Model 提供了一個更好的模型：**general-purpose computer（通用型電腦）**。

關鍵差異在於多了一個額外元素：**the program（程式）**。

- 程式 = 一組指令（set of instructions），告訴電腦要對資料做什麼
- 輸出資料取決於兩個因素的組合：**輸入資料** 和 **程式**

```
         Program
            ↓
Input data → [ Computer ] → Output data
```

### 相同程式，不同輸入資料

![Same Program Different Data](images/S__50610192_0.jpg)

使用 **Sort（排序）** 程式：
- 輸入 `3, 12, 8, 22` → 輸出 `3, 8, 12, 22`
- 輸入 `14, 6, 8, 12` → 輸出 `6, 8, 12, 14`

相同的程式邏輯，處理不同的資料，得到不同的結果。

### 相同資料，不同程式

![Same Data Different Programs](images/S__50610193_0.jpg)

對 `3, 12, 8, 22` 使用不同程式：
- **Sort** → `3, 8, 12, 22`
- **Add** → `45`
- **Find Smallest** → `3`

同樣的資料，不同的程式，完全不同的輸出！

## 重點

這就是通用型電腦的強大之處：只要更換程式，同一台電腦就能做完全不同的事。你的手機能打電話、拍照、玩遊戲、寫程式，都是因為這個原理。

```python
data = [3, 12, 8, 22]

# Same data, different programs
print(f"Sort:          {sorted(data)}")
print(f"Add:           {sum(data)}")
print(f"Find Smallest: {min(data)}")
print(f"Find Largest:  {max(data)}")
```

<!-- EN -->

## 1.1.2 Programmable Data Processors

![Programmable Data Processor](images/S__50610191_0.jpg)

### From Specific-Purpose to General-Purpose

The Turing Model provides a better model: the **general-purpose computer**.

The key difference is an extra element: **the program**.

- A program is a set of instructions that tells the computer what to do with the data
- Output data depends on the combination of two factors: **the input data** and **the program**

```
         Program
            ↓
Input data → [ Computer ] → Output data
```

### Same Program, Different Input Data

![Same Program Different Data](images/S__50610192_0.jpg)

Using a **Sort** program:
- Input `3, 12, 8, 22` → Output `3, 8, 12, 22`
- Input `14, 6, 8, 12` → Output `6, 8, 12, 14`

Same program logic, different data, different results.

### Same Data, Different Programs

![Same Data Different Programs](images/S__50610193_0.jpg)

Applying different programs to `3, 12, 8, 22`:
- **Sort** → `3, 8, 12, 22`
- **Add** → `45`
- **Find Smallest** → `3`

Same data, different programs, completely different outputs!

## Key Point

This is the power of general-purpose computers: by changing the program, the same computer can do completely different things. Your phone can make calls, take photos, play games, and write code — all because of this principle.

```python
data = [3, 12, 8, 22]

# Same data, different programs
print(f"Sort:          {sorted(data)}")
print(f"Add:           {sum(data)}")
print(f"Find Smallest: {min(data)}")
print(f"Find Largest:  {max(data)}")
```
