import { Services } from "@/services/services";

declare module "express-serve-static-core" {
  interface Request {
    services: Services;
  }
}
