# Research Assistant using Spring AI

This Research Assistant is a minimal, AI-powered research assistant designed to perform two high-value tasks: **summarization** and **intelligent suggestion**. It allows users to input raw text or queries and receive concise summaries along with relevant, context-aware suggestions to guide further exploration.

## 📦 Technologies

- `Spring AI`
- `Gemini API`
- `Vite`
- `Java (Spring Boot)`
- `Javascript`
- `Tailwind CSS`

## 🎯 Features

ResearchAssist focuses on doing a few things exceptionally well:

- **Summarization Engine**: Transform long-form content into concise, structured summaries without losing key meaning

- **Contextual Suggestions**: Generate relevant next steps such as related topics, follow-up questions, or areas to explore

## 👨‍🎓 The Process

This project began as a simple idea: "What if healthcare felt more human?" I spent many late nights sketching wireframes and imagining how technology could connect patients and doctors.

The journey started with research; I spoke with doctors, patients, and healthcare workers to grasp their real challenges. Then I faced technical hurdles: creating a voice interface that feels natural, developing a backend that securely manages sensitive medical data, and designing a mobile app that operates as smoothly as the web version.

## 🏗️ How I Built It

Building WellNest was like conducting an orchestra; every piece needed to work in harmony:

### Phase 1: Backend Foundation (Spring Boot)
A lightweight and secure backend handles request processing and rate limiting. The architecture is modular, ensuring AI-related logic remains isolated and extensible.

### Phase 2: AI Integration (Spring AI + Gemini API)
This is the core functional layer.

#### Summarization Flow:
- Input text is processed through structured prompts
- The Gemini API generates a concise, context-preserving summary

#### Suggestion Flow:
- The same input (or its summary) is analyzed
- The system generates:
  - Related topics
  - Follow-up questions
  - Suggested directions for deeper research

Spring AI orchestrates prompt management and response handling, ensuring consistency and clarity.

### Phase 3: Frontend (Vite)
The frontend is intentionally minimal:
- Input field for text or query
- Output sections for:
  - Summary
  - Suggestions

Built with Vite for speed and responsiveness, the UI prioritizes clarity over feature bloat.

### Phase 4: Deployment
- Frontend deployed on Vercel/Netlify
- Backend deployed as a Spring Boot service
- Gemini API securely integrated via environment variables

## 🏫 What I Learned Along the Way

This project taught me many important lessons:

- **Spring Boot (Java)**: Narrowing the scope to summarization and suggestion enabled a clean, modular backend architecture, improving maintainability and overall usability
- **Spring AI + Gemini API**: Leveraging Spring AI for prompt orchestration with the Gemini API emphasized how precise prompt engineering directly affects summary quality and suggestion relevance
- **Spring Boot (Service Layer Architecture)**: Separating summarization and suggestion into distinct service layers improved scalability, debugging, and extensibility
- **Spring Boot + Vite (Performance Optimization)**: Optimizing end-to-end latency across the Spring Boot backend and Vite frontend ensured fast, responsive interactions essential for AI-driven workflows

### Overall Growth:

Each part of this project helped me understand more about building apps, managing complex information, and improving user experience. It was more than just making a tool. It was about solving problems, learning new things, and improving my skills for future work.

## 🔧 How It Could Be Improved

- **Streaming Responses**: Real-time summary generation
- **Custom Summary Modes**: Bullet points, abstract, or detailed breakdowns
- **Domain-Specific Suggestions**: Tailored outputs for technical, academic, or general content
- **File Input Support**: Upload PDFs or documents directly
- **History Tracking**: Save and revisit previous summaries

## 🪧 Running the Project

To run the project in your local environment, follow these steps:

1. Clone the repository
2. Start backend:
   ```bash
   ./mvnw spring-boot:run
   ```
3. Start frontend:
   ```bash
   npm install
   npm run dev
   ```
4. Open `http://localhost:5173`

## 🎥 Video

https://github.com/user-attachments/assets/204c5fca-0cad-49b2-9edd-dd9b46d4720a

## 📍 Preview

[Visit website](https://researchassistantjs.vercel.app/)
