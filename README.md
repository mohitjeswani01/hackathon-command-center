# Hackathon Command Center 

### Orchestrate by Instinct.

![Hero Banner](https://placehold.co/1200x400/18181b/ffffff?text=Hackathon+Command+Center)  
*(Add your Hero GIF/Screenshot here)*

**Hackathon Command Center** is a **Generative UI** dashboard powered by AI, designed to transform how hackathon events are managed. It abandons static admin panels for a dynamic, conversation-driven interface that adapts in real-time to the user's role and the event's lifecycle.

Built with **Next.js**, **Framer Motion**, and **Tailwind CSS**, it features a premium "Linear-style" aesthetic and a powerful AI assistant that acts as the central nervous system of the event.

---

## ✨ Features

### 🧠 Generative UI Engine
The interface isn't static. It morphs based on context.
- **Dynamic Widgets**: Components like `JudgingQueue`, `Timeline`, and `ProjectStatusCard` appear and update strictly when relevant.
- **Context-Aware Layouts**: The dashboard restructures itself depending on whether you are an Organizer, Judge, or Participant.

### 🎭 Role-Based Experience
One platform, three distinct realities.
- **👑 Organizer Mode**: The "God View". Control event phases, monitor timelines, and oversee the entire pipeline.
- **⚖️ Judge Mode**: Focused and distraction-free. View the judging queue, review projects, and submit scores without clutter.
- **👤 Participant Mode**: Friendly and supportive. Check project status, view countdowns, and get AI guidance.

### 💬 AI Command Interface
Forget clicking through menus. Just ask.
- *"Change phase to Judging"* (Organizer only)
- *"What is the status of CodeStorm?"* (Smart Lookup)
- *"Show me the project timeline"*

### 🎨 Premium Aesthetic
- **Visual Polish**: Glassmorphism, subtle gradients, and smooth Framer Motion animations.
- **Responsive & Resizable**: Fully draggable sidebar for a customizable workspace.

---

## 🚀 The Experience

### 1. For Organizers
*Command and Control.*
As an organizer, you hold the keys. Use the AI to advance the hackathon from **Registration** -> **Submission** -> **Judging** -> **Results**.
> *"Change phase to Submission"*  
> *"Advance to Results"*

![Organizer Dashboard](https://placehold.co/800x450/e4e4e7/52525b?text=Organizer+View)  
*(Add Organizer UI Screenshot here)*

### 2. For Judges
*Review with Focus.*
When the phase hits **Judging**, your dashboard automatically highlights the `JudgingQueue`. You see what matters: submissions pending review.
> *"Show me pending submissions"*

![Judge Dashboard](https://placehold.co/800x450/e4e4e7/52525b?text=Judge+View)  
*(Add Judge UI Screenshot here)*

### 3. For Participants
*Stay Informed.*
No more guessing. Participants can ask the AI about their specific status. The system supports both **Solo** and **Team** entries intelligntly.
> *"I am Mohit, is my project reviewed?"*  
> *"What is the status of team DataDrifters?"*

![Participant Dashboard](https://placehold.co/800x450/e4e4e7/52525b?text=Participant+View)  
*(Add Participant UI Screenshot here)*

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **State Management**: Zustand
- **AI/LLM Integration**: Custom Generative UI Hooks (`useTambo`)
- **Icons**: Lucide React

---

## 🏗️ Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/hackathon-command-center.git
   cd hackathon-command-center
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to stand on the bridge of your new Command Center.

---

## 🔮 Future Roadmap

- [ ] Real-time WebSocket updates for multi-user sync.
- [ ] Integration with Devpost/GitHub APIs.
- [ ] Voice Command support.

---

**Orchestrate by Instinct.**  
*Built for the future of hackathons.*
