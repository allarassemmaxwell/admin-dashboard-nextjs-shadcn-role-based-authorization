"use server";
import { db } from '@/db';
import { subscriptionsTable } from '@/db/schema';
import { count, sql, asc, and, or, eq, isNull } from "drizzle-orm";

export async function getSubscriptionsCount() {
    const data = await db.select({count: count()}).from(subscriptionsTable);
    return data[0].count;
}