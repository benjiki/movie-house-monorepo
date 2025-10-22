import express, { Router } from "express";
import { Request, Response } from "express";
import { authenticateJWT, authorizeRoles } from "@repo/auth-lib";
import * as movieController from "../controller/movie.controller";
const router: Router = express.Router();
import { validateRequest } from "../middleware/validateRequest";
import * as validation from "../validations/movies.validations";
// interface AuthenticatedRequest extends Request {
//   user?: { id: number; role: string };
// }

// router.post(
//   "/movie-category-create",
//   authenticateJWT,
//   authorizeRoles("Admin"),
//   (req: AuthenticatedRequest, res: Response) => {
//     res.json({ message: "Access granted for admin", user: req.user });
//   }
// );

router.post(
  "/movie-category-create",
  authenticateJWT,
  authorizeRoles("Admin"),
  validateRequest(validation.movieCategoryVaidationSchema),
  movieController.CreateMovieCategory
);

export default router;
