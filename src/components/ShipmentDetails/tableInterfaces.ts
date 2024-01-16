export interface Column {
  id: "Branch" | "Date" | "Time" | "Details";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

export interface Data {
  Branch: string;
  Date: string;
  Time: string;
  Details: string;
}
