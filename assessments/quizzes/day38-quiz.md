# 🧠 Day 38 Quiz – Add Player + Context + Mobile Sync

**Score:** 3 / 5

---

### Questions & Answers

**1. Why do we convert `points` to a number before sending it to the backend?**  
❌ **Your Answer:** A  
✅ **Correct Answer:** B – SQLite expects numeric types, not strings.

**2. Why does calling `usePlayerContext()` throw an error if it's outside the `PlayerProvider`?**  
✅ **Your Answer:** C  
**Explanation:** The context value is `undefined` unless wrapped in the provider.

**3. What is the purpose of passing `players` through the context value?**  
❌ **Your Answer:** A  
✅ **Correct Answer:** C – So components can display the player list.

**4. What component is required to make `createNativeStackNavigator` work?**  
✅ **Your Answer:** B  
**Explanation:** `NavigationContainer` is required as the root of the navigation tree.

**5. Which React Native component is best for rendering a dynamic list of items?**  
✅ **Your Answer:** D  
**Explanation:** `FlatList` is optimized for rendering lists efficiently.

---
