import { categoryController } from "@/controllers";
import {
  verifyAdminMiddleware,
  verifyAuthMiddleware,
  verifyCategoryNameMiddleware,
} from "@/middlewares";
import { Router } from "express";

const categoryRoutes = Router();

categoryRoutes.post(
  "",
  verifyAuthMiddleware,
  verifyAdminMiddleware,
  verifyCategoryNameMiddleware,
  categoryController.create,
);
categoryRoutes.get("", categoryController.read);

export default categoryRoutes;
