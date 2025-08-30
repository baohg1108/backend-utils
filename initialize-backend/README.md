# INITIALIZE BACKEND FROM ZERO

### 📌 Introduction

Tài liệu này hướng dẫn cách khởi tạo một dự án Backend với Node.js + Express từ con số 0.
Mục tiêu: giúp bạn nắm được các bước cơ bản để có một dự án chạy được và có cấu trúc gọn gàng.

---

### ⚙️ Installed

##### Step 1: Khởi tạo thư mục dự án

```bash
mkdir my-project
cd my-project
code .
```

##### Step 2: Khởi tạo cấu hình dự án

- Tạo nhanh với cấu hình mặc định:

```bash
npm init -y
```

hoặc khởi tạo thủ công, nhập các thông tin (name, version, ...)

```bash
npm init
```

👉 Sau khi tạo xong bạn sẽ có file **_package.json_**

Tiếp theo cài đặ các dependency cơ bản

```bash
npm install
```

##### Step 3: Cài đặt các thư viện cần thiết

- Dependencies (production):

```bash
npm install express
```

- Dependencies (dev)

```bash
npm install --save-dev nodemon
```

👉 Có thể bổ sung thêm:

- **dotenv**(quản lý biến môi trường)
- **morgan**(log request)

##### Step 4: Tạo cấu trúc thư mục

```bash
mkdir src
cd src
mkdir config controllers middlewares utils models providers routes
```

##### Step 5: Tạo file **server.js**

```bash
import express from "express";
import "dotenv/config";

const app = express();
const PORT =  3000;
const HOST = "localhost";

app.get("/", (req, res) => {
  res.send("🚀 Backend initialized successfully!");
});

app.listen(PORT, HOST, () => {
  console.log(`✅ Server running at http://${HOST}:${PORT}`);
});
```

##### Step 6: Cấu hình **package.json**

```bash
"scripts": {
  "start": "node src/server.js",
  "dev": "nodemon src/server.js"
}
```

##### Step 7: Chạy thử server

```bash
npm run dev
```

Kết quả **Server running at http://localhost:3000**
