## 1.1.1 資料處理器（Data Processors）

![Data Processor](images/S__50610186_0.jpg)

### 電腦 = 資料處理器

我們可以把電腦定義為一個 **data processor（資料處理器）**：

```
Input data → [ Computer ] → Output data
```

這是最基本的計算模型：接收輸入資料，經過處理，產生輸出資料。

### 單一用途計算機

![Pocket Calculator](images/S__50610187_0.jpg)

- 小型口袋計算機也是一台電腦（字面意義上的 computer）
- 這個模型可以代表一台 **specific-purpose computer（特定用途電腦）** 或 processor
- 只能執行特定的運算，不能改變用途

### 生活中的例子

| 裝置 | 輸入 | 處理 | 輸出 |
|------|------|------|------|
| 計算機 | 數字 | 四則運算 | 答案 |
| 溫度計 | 溫度感測 | 數位轉換 | 顯示溫度 |
| 洗衣機 | 設定模式 | 執行洗衣流程 | 乾淨的衣服 |

## 心得

Data processor 是理解電腦最基本的方式：所有電腦做的事，都可以歸結為 **輸入 → 處理 → 輸出**。

```python
# Computer as a data processor
def computer(input_data, process):
    return process(input_data)

# Example: a calculator
def add(numbers):
    return sum(numbers)

result = computer([3, 12, 8, 22], add)
print(f"Output: {result}")  # Output: 45
```

<!-- EN -->

## 1.1.1 Data Processors

![Data Processor](images/S__50610186_0.jpg)

### Computer = Data Processor

We can define a computer as a **data processor**:

```
Input data → [ Computer ] → Output data
```

This is the most basic computation model: receive input data, process it, and produce output data.

### Single-Purpose Computing Machine

![Pocket Calculator](images/S__50610187_0.jpg)

- A pocket calculator is also a computer (in a literal sense)
- This model could represent a **specific-purpose computer** (or processor)
- It can only perform specific operations and cannot change its purpose

### Real-Life Examples

| Device | Input | Process | Output |
|--------|-------|---------|--------|
| Calculator | Numbers | Arithmetic | Answer |
| Thermometer | Temperature sensor | Digital conversion | Display temperature |
| Washing machine | Mode setting | Execute wash cycle | Clean clothes |

## Reflection

The data processor is the most basic way to understand a computer: everything a computer does can be reduced to **Input → Process → Output**.

```python
# Computer as a data processor
def computer(input_data, process):
    return process(input_data)

# Example: a calculator
def add(numbers):
    return sum(numbers)

result = computer([3, 12, 8, 22], add)
print(f"Output: {result}")  # Output: 45
```
