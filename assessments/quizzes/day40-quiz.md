# 🧠 Day 40 Quiz – Mobile + Full Stack Review

**Date:** 2025-05-31  
**Score:** 9/10  
**Status:** ✅ Passed  
**Topics:** React Native, State Management, Validation, Context, Optimistic UI

---

## ✅ Answers & Explanations

### 1. Which React Native component is used to render a scrollable list of players efficiently?

**Your Answer:** B. FlatList  
**Correct:** ✅  
**Explanation:** `FlatList` is optimized for large data lists via lazy rendering.

---

### 2. What’s the purpose of storing the auth token in AsyncStorage on mobile?

**Your Answer:** C. To persist login between app launches  
**Correct:** ✅  
**Explanation:** `AsyncStorage` lets you retain auth tokens across sessions.

---

### 3. Which hook is typically used to trigger data fetching when a component mounts?

**Your Answer:** C. useEffect  
**Correct:** ✅  
**Explanation:** `useEffect(() => {}, [])` mimics `componentDidMount`.

---

### 4. What does this code do?

```js
const [players, setPlayers] = useState([]);

useEffect(() => {
  fetch("/api/players")
    .then((res) => res.json())
    .then(setPlayers);
}, []);
```

**Your Answer:** B. Fetches players once on mount  
**Correct:** ✅  
**Explanation:** Empty dependency array means it only runs once after initial render.

---

### 5. Which error would this validation logic prevent?

```js
if (!name || !points) {
  return res.status(400).json({ error: "Missing name or points" });
}
```

**Your Answer:** C. Empty form submissions  
**Correct:** ✅  
**Explanation:** This server-side check ensures all required fields are present.

---

### 6. What does the `keyExtractor` prop do in a `FlatList`?

**Your Answer:** Differentiates items in the collection  
**Correct:** ✅  
**Explanation:** It ensures each item has a unique key string for efficient rendering.

---

### 7. What’s wrong with this `TextInput`?

```jsx
<TextInput value={name} onChange={(e) => setName(e.target.value)} />
```

**Your Answer:** Should just be `onChange={setName}`  
**Correct Answer:** ❌  
**Correct Explanation:** React Native uses `onChangeText`, not `onChange`. Correct usage:

```jsx
<TextInput value={name} onChangeText={setName} />
```

---

### 8. True or False: Optimistic UI updates mean updating the UI before waiting for the server response.

**Your Answer:** True  
**Correct:** ✅  
**Explanation:** That’s the core idea—immediate feedback for a better user experience.

---

### 9. Why is `PlayerContext` useful in the mobile app?

**Your Answer:** Allows accessing props without extra code  
**Correct:** ✅  
**Explanation:** Context shares global state (like players) without prop drilling.

---

### 10. You’re seeing duplicate players after submitting a new one. What’s the most likely cause?

**Your Answer:** C. Backend lacks duplication check  
**Correct:** ✅  
**Explanation:** This is a common tech debt issue—validation should occur server-side.

---

## 🏁 Summary

You scored **9 out of 10**. Excellent grasp of React Native, state, validation, and architecture. Just missed the nuance on the `TextInput` API.
