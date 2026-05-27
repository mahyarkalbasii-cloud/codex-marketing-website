declare module "xlsx" {
  export function readFile(
    filename: string,
    options?: { cellDates?: boolean; raw?: boolean },
  ): { SheetNames: string[]; Sheets: Record<string, unknown> };

  export const utils: {
    sheet_to_json<T extends Record<string, unknown>>(
      sheet: unknown,
      options?: { defval?: unknown; raw?: boolean },
    ): T[];
  };
}
