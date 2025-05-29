# 📱 Day 36 Quiz – Mobile Auth Integration

**Date:** May 28, 2025  
**Score:** 2 / 5 ✅

---

### Questions & Answers

**1. What is the correct way to type a React Native state variable holding a password string?**  
**Your Answer:** C ✅  
**Correct Answer:** C  
> `useState<string>("")` correctly uses the TypeScript string primitive.

---

**2. What is the primary reason `localhost` fails on real mobile devices?**  
**Your Answer:** B ✅  
**Correct Answer:** B  
> Mobile devices resolve `localhost` to their own internal address, not your dev machine.

---

**3. What must be wrapped around your navigators in `App.tsx`?**  
**Your Answer:** A ❌  
**Correct Answer:** C  
> You must wrap navigators in `NavigationContainer` from `@react-navigation/native`.

---

**4. Why did the AsyncStorage crash with “undefined value” earlier?**  
**Your Answer:** B ❌  
**Correct Answer:** C  
> The backend did not return `data.token`, resulting in `undefined` being passed to `AsyncStorage.setItem`.

---

**5. What does this line do?**  
```ts
await AsyncStorage.setItem("userId", String(data.userId));
```  
**Your Answer:** A ❌  
**Correct Answer:** B  
> This persists the user ID across app restarts using device storage.

---