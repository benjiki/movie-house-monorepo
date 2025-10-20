import express from "express";
import passport from "passport";
import { configurePassport } from "./passport/jwt.strategy";

const app = express();

configurePassport(passport);
app.use(passport.initialize());
