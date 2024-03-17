import { PrismaClient } from "@prisma/client";

declare global {
  var prismadb: PrismaClient | undefined;
}

const client = globalThis.prismadb || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prismadb = client;

export default client;

// ----- IF ENABLED THEN NEED TO BE ALSO UNLOCKED A FILE GLOBAL.D.TS -----
// import { PrismaClient } from "@prisma/client";
// const client = global.prismadb || new PrismaClient();
// if (process.env.NODE_ENV === "production") global.prismadb = client;
// export default client;
