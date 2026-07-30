import React from "react";

export default function ThemeTestPage() {
  return (
    <main className="min-h-screen bg-background text-foreground p-6 md:p-16 lg:p-24 font-sans flex flex-col gap-12 transition-colors duration-300">

      {/* 1. HEADER SECTION (Testing global background and standard text) */}
      <header className="max-w-4xl space-y-4">
        <span className="text-primary font-bold tracking-wider uppercase text-sm">
          Design System Verification
        </span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Theme Playground
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Test your Soft Slate dark mode and Icy light mode here. If your globals.css is correct, you will see no pure white or pure black anywhere on this page.
        </p>
      </header>

      {/* 2. COMPONENT GRID (Testing Cards, Muted sections, and Buttons) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl">

        {/* Card A: The Standard Card */}
        <div className="bg-card text-card-foreground p-8 rounded-2xl shadow-sm border border-border flex flex-col gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Standard Card</h2>
            <p className="text-foreground opacity-90">
              Notice how this card contrasts subtly with the main background. The soft borders (`border-border`) frame it perfectly without looking harsh.
            </p>
          </div>

          {/* Button Tests */}
          <div className="flex flex-wrap gap-4 mt-auto pt-4">
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium shadow-md hover:opacity-90 transition-opacity flex-1 md:flex-none">
              Primary Action
            </button>
            <button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity flex-1 md:flex-none">
              Secondary
            </button>
          </div>
        </div>

        {/* Card B: The Muted Section */}
        <div className="bg-muted text-muted-foreground p-8 rounded-2xl flex flex-col gap-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Muted Container</h2>
            <p>
              This box uses the muted background (Icy Blue in light mode, Dark Slate in dark mode). It is incredibly soft and perfect for secondary information like sidebars or "Preparation Guidelines".
            </p>
          </div>

          {/* Badge/Tag Tests */}
          <div className="flex gap-3 flex-wrap mt-auto pt-4">
            <span className="bg-background text-foreground px-4 py-1.5 rounded-full text-sm font-semibold border border-border shadow-sm">
              Standard Badge
            </span>
            <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm">
              Active Badge
            </span>
          </div>
        </div>

      </div>

      {/* 3. TYPOGRAPHY & SELECTION TEST */}
      <section className="max-w-4xl border-t border-border pt-12 space-y-6">
        <h3 className="text-3xl font-bold text-foreground">Reading Experience</h3>
        <p className="text-foreground leading-relaxed text-lg">
          Try highlighting this text with your mouse. Because of your brilliant `::selection` CSS configuration, the highlight color should turn Royal Blue with crisp white text. Furthermore, notice how the `system-ui` font renders beautifully native on your device.
        </p>

        {/* Deep Contrast Test */}
        <div className="p-6 bg-background border-2 border-dashed border-primary/40 rounded-2xl flex items-center justify-center">
          <p className="text-center font-bold text-primary text-xl">
            Royal Blue stays vibrant in both Light and Dark modes!
          </p>
        </div>
      </section>

    </main>
  );
}