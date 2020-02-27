import { Router} from 'express';
import { SingIn, SingUp,getUsers } from '../controllers/user.controller';
 
const router = Router();

router.post('/signup',SingUp);
router.post('/signin',SingIn);
router.get('/users',getUsers);


export default router;
