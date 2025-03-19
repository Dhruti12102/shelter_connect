export const Role = {
    ADMIN: "admin",
    MANAGING_AGENT: "managing_agent",
    STAFF: "staff",
    TENANT: "tenant",
};

export const permissions = {
    VIEW_DASHBOARD: ["admin", "managing_agent", "staff"],
    MANAGE_USERS: ["admin"],
    MANAGE_AGENTS: ["admin", "managing_agent"],
    VIEW_TENANTS: ["admin", "managing_agent", "staff"],
    ACTIVATE_DEACTIVATE_TENANTS: ["admin", "managing_agent"],
};
