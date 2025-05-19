# 🧠 Day 18 Quiz – React Context

**Score:** 5 / 5 ✅

---

### 1. What does `createContext()` return in React?

**Your Answer:** B) A provider component and a context object  
**✅ Correct!**

---

### 2. What is the purpose of the `PlayerProvider` component?

**Your Answer:** C) It wraps children components and provides them access to shared state and actions  
**✅ Correct!**

---

### 3. Which hook must be used inside custom hooks like `usePlayerContext()` to access the context?

**Your Answer:** C) `useContext()`  
**✅ Correct!**

---

### 4. True or False:

If you forget to wrap your app in `<PlayerProvider>`, calling `usePlayerContext()` will still work fine.  
**Your Answer:** False  
**✅ Correct!**

---

### 5. Why might you create a custom hook like `usePlayerContext()` instead of calling `useContext(PlayerContext)` directly?

**Your Answer:** C) It keeps code cleaner and allows you to encapsulate access logic  
**✅ Correct!**
