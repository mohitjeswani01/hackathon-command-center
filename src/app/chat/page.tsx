"use client";

import { useState, useEffect } from "react";

import { MessageThreadFull } from "@/components/tambo/message-thread-full";
import { useMcpServers } from "@/components/tambo/mcp-config-modal";
import { components, tools } from "@/lib/tambo";
import { TamboProvider } from "@tambo-ai/react";
import AppHeader from "@/components/shell/AppHeader";
import GenerativeRoot from "@/components/generative/GenerativeRoot";



/**
 * Home page component that renders the Tambo chat interface.
 *
 * @remarks
 * The `NEXT_PUBLIC_TAMBO_URL` environment variable specifies the URL of the Tambo server.
 * You do not need to set it if you are using the default Tambo server.
 * It is only required if you are running the API server locally.
 *
 * @see {@link https://github.com/tambo-ai/tambo/blob/main/CONTRIBUTING.md} for instructions on running the API server locally.
 */
export default function Home() {
  // Load MCP server configurations
  const mcpServers = useMcpServers();

  // Resize logic
  const [sidebarWidth, setSidebarWidth] = useState(400);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const newWidth = window.innerWidth - e.clientX;
      // Constraints
      if (newWidth > 300 && newWidth < 800) {
        setSidebarWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.body.style.cursor = 'default';
      document.body.style.userSelect = 'auto';
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
      // Add specific class to iframe iframes if needed for pointer events, but simplified for now
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);


  return (
    <TamboProvider
      apiKey={process.env.NEXT_PUBLIC_TAMBO_API_KEY!}
      components={components}
      tools={tools}
      tamboUrl={process.env.NEXT_PUBLIC_TAMBO_URL}
      mcpServers={mcpServers}
    >
      <div className="flex flex-col h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-zinc-900 selection:text-white">
        <AppHeader />

        <div className="flex flex-1 overflow-hidden">
          {/* Main Dashboard Area (Left) */}
          <main className="flex-1 overflow-y-auto p-8 relative">
            <div className="max-w-5xl mx-auto space-y-8">
              <GenerativeRoot />
            </div>

            {/* Ambient background decoration */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-50 grainy-bg" />
          </main>

          {/* Draggable Handle */}
          <div
            className="w-1 bg-zinc-200 hover:bg-zinc-400 cursor-col-resize transition-colors z-30 flex items-center justify-center group active:bg-blue-500"
            onMouseDown={() => setIsDragging(true)}
          >
            <div className="h-4 w-1 bg-zinc-400 rounded-full group-hover:h-8 transition-all" />
          </div>

          {/* Chat Sidebar (Right) */}
          <aside
            style={{ width: sidebarWidth }}
            className="border-l border-zinc-200 bg-white shadow-sm flex flex-col z-20 shrink-0"
          >
            <div className="p-4 border-b border-zinc-100 bg-white flex justify-between items-center">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                AI Assistant
              </h2>
              <span className="text-[10px] text-zinc-300">
                {Math.round(sidebarWidth)}px
              </span>
            </div>
            <MessageThreadFull />
          </aside>
        </div>
      </div>
    </TamboProvider>
  );
}
