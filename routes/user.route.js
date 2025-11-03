import { Router } from "express";
import {sign_in,sign_up} from './controllers/user.controller.js'

const router = Router();

router.post('/sign-up',sign_in);

router.post('/sign-in', sign_up) ;