# 🧠 Day 33 Quiz – Node to FastAPI Integration

### 1. What HTTP status code does your Node backend return if the FastAPI server returns a non-OK response?
**Your Answer:** C  
**Correct Answer:** C  
✅ Node returns 500 when the request to FastAPI fails at the network or processing level.

---

### 2. Why do we check `content-type` in the response headers before calling `.json()` on a response?
**Your Answer:** B  
**Correct Answer:** B  
✅ Ensures that it's safe to parse the response as JSON (avoids crashes or parsing errors).

---

### 3. What is the benefit of structuring the `/cluster` logic as a controller in MVC?
**Your Answer:** C  
**Correct Answer:** C  
✅ Maintains clear separation of concerns and keeps routing clean.

---

### 4. What would happen if you posted a players array with only names and points to FastAPI?
**Your Answer:** C  
**Correct Answer:** C  
✅ FastAPI will throw a validation error (422) for missing required fields.

---

### 5. What is the correct way to trigger a FastAPI POST request from Node using `node-fetch`?
**Your Answer:** C  
**Correct Answer:** C  
✅ Correct syntax for sending a POST request with a JSON body.

---

**Final Score: 5/5 ✅**
