import { sql, type SQL } from "drizzle-orm";
import { bigint, bigserial, integer, pgTable, text, timestamp, type AnyPgColumn } from "drizzle-orm/pg-core";

export const lower = (column: AnyPgColumn): SQL => {
  return sql`LOWER(${column})`;
};