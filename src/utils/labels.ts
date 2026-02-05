import type { LabelItem } from '@/types/account';

export function parseLabels(input: string): LabelItem[] {
  if (!input.trim()) return [];

  return input
    .split(';')
    .map((label) => label.trim())
    .filter((label) => label.length > 0)
    .map((label) => ({ text: label }));
}

export function formatLabels(labels: LabelItem[]): string {
  return labels.map((label) => label.text).join('; ');
}
