export {}

export type Roles = "admin" | "user" | "guest" | "member" | "moderator";

declare global {
    interface CustomJwtSessionClaims {
        metadata: {
            role?: Roles;
        }
    }
}
