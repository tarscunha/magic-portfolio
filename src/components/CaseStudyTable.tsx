import React from "react";
import { Card } from "@once-ui-system/core";
import styles from "./CaseStudyTable.module.scss";

export interface CaseStudyTableProps {
  columns: string[];
  rows: Array<Record<string, React.ReactNode>>;
}

export function CaseStudyTable({ columns, rows }: CaseStudyTableProps) {
  if (!columns || !rows) {
    return null;
  }
  return (
    <Card className={styles.tableCard} padding="0" radius="l" style={{ overflow: "hidden" }}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {columns.map((col) => (
                <td key={col}>{row[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
