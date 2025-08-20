import React, { useMemo, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Upload, FileText, Loader2, RotateCcw, ListChecks } from "lucide-react";
import Papa from "papaparse";

/**
 * MB-330 Interactive Quiz App (PWA Enabled)
 * -------------------------------------------------------------
 * Features
 * - Multiple choice, Match (drag + drop), Order (drag reorder)
 * - JSON/CSV import for question banks
 * - Instant feedback + score summary
 * - PWA support: offline ready, installable
 */

// PWA Service Worker Registration
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((reg) => console.log("Service worker registered:", reg))
      .catch((err) => console.log("Service worker not registered:", err));
  });
}

// ---------------------- Sample Data ----------------------
const sampleQuestions = [
  {
    id: "q1",
    type: "mcq",
    prompt:
      "You need to configure inventory levels for the retail stores. Which two actions should you perform? (Pick the best answer for training purposes)",
    choices: [
      "Enter a manual forecast for the initial stock levels at the retail stores.",
      "Generate a demand forecast from warehouse sales orders only.",
      "After 30 days, review store sales to generate a demand forecast.",
      "Create two separate forecasts for warehouse and stores immediately."
    ],
    answer: 0,
    explanation:
      "From the case, initial manual store levels + review actual store sales after 30 days."
  }
];

// ... (rest of quiz code unchanged)

export default function App() {
  // app code unchanged
}

// ---------------------- Manifest ----------------------
// Create a file `public/manifest.json` with:
/*
{
  "short_name": "MB-330 Quiz",
  "name": "MB-330 Interactive Quiz",
  "icons": [
    {
      "src": "/icons/icon-192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "/icons/icon-512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#ffffff",
  "background_color": "#ffffff"
}
*/

// ---------------------- Service Worker ----------------------
// Create a file `public/service-worker.js` with:
/*
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("quiz-cache-v1").then((cache) => cache.addAll(["/", "/index.html"]))
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
*/
