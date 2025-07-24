# 🧠 AI Text Summarizer

A simple full-stack project to summarize text using AI. The project consists of:

- **Backend**: Node.js + Express API that handles summarization logic (uses `.env` for configuration)
- **Frontend**: Static HTML/CSS interface served via Nginx

---

## 🚀 Project Structure


---

## 📦 Prerequisites

Before running the project, ensure you have the following installed:

- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/install/)  
  (Usually comes with Docker Desktop)

---

## 🛠️ How to Run Locally (Step-by-Step)

### 1. Install Docker

- Download and install Docker from [docker.com](https://docs.docker.com/desktop/setup/install/windows-install/)
- Verify installation with:

```bash
docker --version
docker-compose --version
```

- Clone this repo
```bash
git clone https://github.com/your-username/ai-text-summarizer.git
cd ai-text-summarizer
```
- setup your .env 
- Build the docker container 

```bash
docker-compose up --build
```

- for starting the container
```bash
docker-compose up
```

- for stopping the container
```bash
docker-compose down
```
