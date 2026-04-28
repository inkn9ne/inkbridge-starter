export function StarterBanner() {
  return (
    <section className="border-y bg-muted/30 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary">
            <svg viewBox="0 0 48 48" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true">
              <rect x="11" y="19" width="26" height="20" rx="1.5" fill="white" />
              <path d="M24 8L40 22H8L24 8Z" fill="white" />
              <path d="M24 25C24 25 19.5 28.5 19.5 32C19.5 34.5 21.5 36.5 24 36.5C26.5 36.5 28.5 34.5 28.5 32C28.5 28.5 24 25 24 25Z" fill="var(--primary)" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-foreground">Next.js starter template</p>
            <p className="text-sm text-muted-foreground">Pre-configured with Tailwind, Storybook, and Inkbridge — ready to clone.</p>
          </div>
        </div>
        <a
          href="https://github.com/inkn9ne/inkbridge-starter"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm hover:bg-muted transition-colors shrink-0"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          Clone on GitHub
        </a>
      </div>
    </section>
  );
}
