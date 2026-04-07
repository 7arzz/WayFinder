import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  Plus,
  Map,
  CheckCircle2,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import AddRoadmap from "./components/AddRoadmap";
import RoadmapCard from "./components/RoadmapCard";
import ThemeToggle from "./components/ThemeToggle";
import { initialTemplates } from "./data/roadmapTemplates";
import "./App.css";

function CircularProgress({ value, size = 36, stroke = 3 }) {
  const r = (size - stroke * 2) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;

  return (
    <svg width={size} height={size} className="circular-progress">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="var(--surface-border-strong)"
        strokeWidth={stroke}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="var(--accent-primary)"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={offset}
        style={{
          transition: "stroke-dashoffset 0.8s cubic-bezier(0.4,0,0.2,1)",
        }}
      />
    </svg>
  );
}

function App() {
  const [roadmaps, setRoadmaps] = useState(() => {
    const saved = localStorage.getItem("roadmap-v3");
    return saved ? JSON.parse(saved) : initialTemplates;
  });

  useEffect(() => {
    localStorage.setItem("roadmap-v3", JSON.stringify(roadmaps));
  }, [roadmaps]);

  const addRoadmap = (title) => {
    const newRoadmap = {
      id: Date.now().toString(),
      title,
      steps: [],
      createdAt: Date.now(),
    };
    setRoadmaps([newRoadmap, ...roadmaps]);
  };

  const deleteRoadmap = (id) => {
    if (window.confirm("Delete this roadmap?")) {
      setRoadmaps(roadmaps.filter((r) => r.id !== id));
    }
  };

  const editRoadmap = (id, newTitle) => {
    setRoadmaps(
      roadmaps.map((r) => (r.id === id ? { ...r, title: newTitle } : r)),
    );
  };

  const addStep = (roadmapId, stepText) => {
    setRoadmaps(
      roadmaps.map((r) => {
        if (r.id !== roadmapId) return r;
        return {
          ...r,
          steps: [
            ...r.steps,
            { id: Date.now().toString(), text: stepText, done: false },
          ],
        };
      }),
    );
  };

  const toggleStep = (roadmapId, stepId) => {
    setRoadmaps(
      roadmaps.map((r) => {
        if (r.id !== roadmapId) return r;
        return {
          ...r,
          steps: r.steps.map((s) =>
            s.id === stepId ? { ...s, done: !s.done } : s,
          ),
        };
      }),
    );
  };

  const deleteStep = (roadmapId, stepId) => {
    setRoadmaps(
      roadmaps.map((r) => {
        if (r.id !== roadmapId) return r;
        return { ...r, steps: r.steps.filter((s) => s.id !== stepId) };
      }),
    );
  };

  const reorderStep = (roadmapId, fromIdx, toIdx) => {
    setRoadmaps(
      roadmaps.map((r) => {
        if (r.id !== roadmapId) return r;
        const steps = [...r.steps];
        const [moved] = steps.splice(fromIdx, 1);
        steps.splice(toIdx, 0, moved);
        return { ...r, steps };
      }),
    );
  };

  const stats = useMemo(() => {
    let totalSteps = 0,
      completedSteps = 0;
    roadmaps.forEach((r) => {
      totalSteps += r.steps.length;
      completedSteps += r.steps.filter((s) => s.done).length;
    });
    return {
      activeRoadmaps: roadmaps.length,
      progress:
        totalSteps === 0 ? 0 : Math.round((completedSteps / totalSteps) * 100),
      doneGoals: completedSteps,
      totalSteps,
    };
  }, [roadmaps]);

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="top-nav glass">
        <div className="nav-brand">
          <Compass className="brand-icon" size={24} />
          <span className="brand-text">WayFinder</span>
        </div>
        <div className="nav-right">
          <div className="nav-stats-pill">
            <div className="nav-stat">
              <Map size={11} />
              <strong>{stats.activeRoadmaps}</strong> maps
            </div>
            <div className="nav-divider" />
            <div className="nav-stat">
              <CheckCircle2 size={11} />
              <strong>{stats.doneGoals}</strong> done
            </div>
            <div className="nav-divider" />
            <div className="nav-stat">
              <TrendingUp size={11} />
              <strong>{stats.progress}%</strong>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </nav>

      {/* Header */}
      <header className="app-header">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="header-eyebrow">
            <Sparkles size={10} />
            Your Learning OS
          </div>
          <h1>Design Your Destiny</h1>
          <p className="header-subtitle">
            Map every milestone. Track every win. Orchestrate your journey with
            clarity.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="dashboard-stats"
        >
          <div className="stat-box glass glass-hover">
            <div className="stat-icon-wrap">
              <Map size={17} />
            </div>
            <div className="stat-info">
              <span className="stat-value">{stats.activeRoadmaps}</span>
              <span className="stat-label">Active Maps</span>
            </div>
          </div>

          <div className="stat-box glass glass-hover">
            <div className="stat-icon-wrap success">
              <CheckCircle2 size={17} />
            </div>
            <div className="stat-info">
              <span className="stat-value">{stats.doneGoals}</span>
              <span className="stat-label">Steps Done</span>
            </div>
          </div>

          <div className="stat-box glass glass-hover">
            <div className="circular-progress-wrap">
              <CircularProgress value={stats.progress} />
              <div className="stat-info">
                <span className="stat-value">{stats.progress}%</span>
                <span className="stat-label">Total Progress</span>
              </div>
            </div>
          </div>

          <div className="stat-box glass glass-hover">
            <div
              className="stat-icon-wrap"
              style={{
                background: "hsla(200,80%,50%,0.1)",
                color: "var(--accent-tertiary)",
              }}
            >
              <TrendingUp size={17} />
            </div>
            <div className="stat-info">
              <span className="stat-value">{stats.totalSteps}</span>
              <span className="stat-label">Total Steps</span>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Main content */}
      <main>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          <AddRoadmap onAdd={addRoadmap} />
        </motion.div>

        {/* Roadmap list header */}
        {roadmaps.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="roadmap-list-header"
          >
            <span className="section-label">Your Roadmaps</span>
            <span className="roadmap-count-badge">
              {roadmaps.length} {roadmaps.length === 1 ? "map" : "maps"}
            </span>
          </motion.div>
        )}

        <div className="roadmap-list">
          <AnimatePresence mode="popLayout">
            {roadmaps.map((roadmap, idx) => (
              <motion.div
                key={roadmap.id}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{
                  opacity: 0,
                  scale: 0.94,
                  transition: { duration: 0.2 },
                }}
                transition={{
                  delay: idx * 0.04,
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <RoadmapCard
                  roadmap={roadmap}
                  index={idx}
                  total={roadmaps.length}
                  onDeleteRoadmap={deleteRoadmap}
                  onEditRoadmap={editRoadmap}
                  onAddStep={addStep}
                  onToggleStep={toggleStep}
                  onDeleteStep={deleteStep}
                  onReorderStep={reorderStep}
                />
              </motion.div>
            ))}
          </AnimatePresence>

          {roadmaps.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="empty-state glass"
            >
              <Compass size={44} className="empty-icon" />
              <h3>No roadmaps yet</h3>
              <p>
                Create your first roadmap above to start mapping your learning
                journey.
              </p>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
