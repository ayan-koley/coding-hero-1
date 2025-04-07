# 🔐 Password Strength Checker – Approach

This document outlines the approach used to validate the strength of a password in both **Java** and **JavaScript**. The goal is to determine whether a password is `"Strong"` or `"Weak"` based on certain character rules.

---

## ✅ Criteria for a Strong Password

- Minimum length of **8 characters**
- Contains **at least one uppercase** letter
- Contains **at least one lowercase** letter
- Contains **at least one digit**
- Contains **at least one special symbol** (`!@#$%^&*`)

---

## ☕ Java Approach

We use **two techniques** to detect character types:

### 1. ASCII-Based Check (Manual)
- Check each character’s ASCII range:
  - `'A'`–`'Z'` for uppercase (`'A'` `-` `'Z'` ASCII CODE `65` `-` `90`)
  - `'a'`–`'z'` for lowercase (`'a'` `-` `'z'` ASCII CODE `97` `-` `122`)
  - `'0'`–`'9'` for digits (`'0'` `-` `'9'` ASCII CODE `48` `-` `57`)
  - Match special symbols manually

### 2. Java Built-in Character Methods
- Use `Character.isUpperCase(ch)`
- Use `Character.isLowerCase(ch)`
- Use `Character.isDigit(ch)`
- Use `!Character.isLetterOrDigit(ch)` for special characters

> ✅ If all required flags (`upper`, `lower`, `digit`, `special`) are `true` → return `"Strong"`  
> ❌ Otherwise → return `"Weak"`

---

## 🌐 JavaScript Approach

JavaScript offers a concise and readable way using **Regular Expressions (Regex)**.

### Regex Patterns Used:

- `/[A-Z]/` → Uppercase
- `/[a-z]/` → Lowercase
- `/[0-9]/` → Digit
- `/[!@#$%^&*]/` → Special symbols

We iterate through the password and check each condition using `.test(ch)`.  
If the password length is less than 8, we immediately return `"Weak"`.

> ✅ If all flags are `true` → return `"Strong"`  
> ❌ Otherwise → return `"Weak"`
