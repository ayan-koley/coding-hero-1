# 💰 Max Cash in K Time Period – Approach

This document outlines the approach used to calculate the **maximum cash** collected in a given **`k` time period** using the **Sliding Window** technique.

---

## ✅ Problem Statement

- Given an array of cash collected over time
- Goal is to find the **maximum total cash** within any **`k` consecutive time slots**

---

## 🔄 Sliding Window Approach

Instead of checking every possible `k`-length window with nested loops (**O(n * k)**),  
we use the **Sliding Window** technique for **O(n)** performance.

---

## ⚙️ Logic

1. Calculate sum of first `k` elements → `windowSum`
2. Set `maxSum = windowSum`
3. From index `k` to end of array:
   - Subtract `arr[i - 1]` (element sliding out)
   - Add `arr[i + k - 1]` (new element sliding in)
   - Update `maxSum` if `windowSum > maxSum`

---

# 🌟 Most Influential User – Approach

This document outlines the logic used to find the **most influential user** based on the **influence score array** in **JavaScript**.

---

## ✅ Problem Statement

- You are given an array `influenceScore[]`  
- Each element represents the number of **followers** of a user
- Goal is to return the **index** of the user with the **highest followers**

---

## 📌 Core Idea

We scan through the array once and track:

- The **maximum influence score** found so far
- The **index** of that score → `best_influence`

---

## 🌐 JavaScript Approach

### Logic Flow:

- Initialize:
  - `best_influence = 0`
  - `followers = influenceScore[0]`
- Traverse from index `1` to `n-1`
  - If `influenceScore[i] > followers`
    - Update `followers` and `best_influence`
- Return `best_influence`

---


# 🔄 Sort Items by Status – Approach

This document outlines the approach used to sort a list of items based on their **reusability** and **repair** status using **Java**.

---

## ✅ Problem Statement

- You are given a list of integers `items[]`
- Each integer represents an item
- Even numbers → `reusable`
- Odd numbers → `repair`
- Return a list with all **reusable items first**, then **repair items**, maintaining their relative order

---

## ☕ Java Approach

### 🔧 Logic:

- Create a result list `result`
- First pass:
  - Add all **even** items to result
- Second pass:
  - Add all **odd** items to result
