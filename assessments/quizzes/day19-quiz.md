# 🧠 Day 19 Quiz – Pagination & Loading States

**Date:** May 19, 2025  
**Score:** 4 / 5 ✅

---

### Questions & Answers

**1. What does this expression compute in the pagination logic?**

```js
const indexOfFirstItem = (currentPage * itemsPerPage) - itemsPerPage;
```

- **Your Answer:** C. The index where slicing the player array should begin  
- ✅ **Correct**

---

**2. In the context of React, why is `useEffect` used for fetching data?**

- **Your Answer:** A. It makes the component re-render when data is fetched  
- ❌ **Correct Answer:** C. It ensures the fetch logic only runs once (or on specific changes)

---

**3. What happens when the `loading` state is `true`?**

- **Your Answer:** B. The UI shows a message like “Loading players…” and hides the player list  
- ✅ **Correct**

---

**4. How is the `error` state triggered in your current app setup?**

- **Your Answer:** B. When `fetch("/api/players")` fails due to a bad response or network issue  
- ✅ **Correct**

---

**5. In your context provider, what does the `.finally()` block in `useEffect` ensure?**

- **Your Answer:** D. It always sets `loading` to `false` no matter the fetch result  
- ✅ **Correct**
