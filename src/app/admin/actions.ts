"use server";
import { db } from '@/db';
import { subscriptionsTable } from '@/db/schema';
import { count, sql, asc, and, or, eq, isNull } from "drizzle-orm";

export async function getSubscriptionsCount() {
    const data = await db.select({count: count()}).from(subscriptionsTable);
    return data[0].count;
}


export async function getSubscriptionBreakdown() {
    const breakdown = await db.select({
        plan: subscriptionsTable.plan,
        total: sql<number>`count(*)`,
    }).from(subscriptionsTable)
    .where(and(
        or(
            eq(subscriptionsTable.plan, "basic"),
            eq(subscriptionsTable.plan, "premium"),
            eq(subscriptionsTable.plan, "free"),
        ),
        isNull(subscriptionsTable.endDate)
    ))
    .groupBy(subscriptionsTable.plan)

    return breakdown;
}
