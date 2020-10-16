import { Router } from 'express';
import { getAllMembers } from '../controllers/members';
const router = Router();

router.get('/:organizationName/members', getAllMembers);

export = router;
