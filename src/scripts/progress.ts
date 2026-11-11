export const PROGRESS_KEY = "tahan:progress:v1";

export interface ProgressState {
  version: 1;
  trained: string[];
}

function emptyState(): ProgressState {
  return { version: 1, trained: [] };
}

function uniqueStrings(values: unknown[]): string[] {
  return [
    ...new Set(
      values.filter(
        (value): value is string =>
          typeof value === "string" && value.trim().length > 0,
      ),
    ),
  ];
}

export function readProgress(): ProgressState {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (!raw) return emptyState();

    const parsed: unknown = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return { version: 1, trained: uniqueStrings(parsed) };
    }

    if (
      parsed &&
      typeof parsed === "object" &&
      "trained" in parsed &&
      Array.isArray((parsed as { trained: unknown[] }).trained)
    ) {
      return {
        version: 1,
        trained: uniqueStrings((parsed as { trained: unknown[] }).trained),
      };
    }

    return emptyState();
  } catch {
    return emptyState();
  }
}

function writeProgress(state: ProgressState): boolean {
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(state));
    return true;
  } catch {
    return false;
  }
}

export function isTrained(slug: string): boolean {
  return readProgress().trained.includes(slug);
}

export function toggleTrained(slug: string): ProgressState | null {
  const current = readProgress();
  const trained = current.trained.includes(slug)
    ? current.trained.filter((item) => item !== slug)
    : [...current.trained, slug];
  const next: ProgressState = { version: 1, trained };

  if (!writeProgress(next)) return null;

  window.dispatchEvent(
    new CustomEvent<ProgressState>("tahan:progress-change", { detail: next }),
  );
  return next;
}

export function countTrained(slugs: string[]): number {
  const trained = new Set(readProgress().trained);
  return slugs.filter((slug) => trained.has(slug)).length;
}
