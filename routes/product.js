import { Router } from "express";
import { getAll ,getSpecific ,create ,update, deleteProduct} from "../contollers/Product.contoller.js";
const router = Router();


router.post('/',create)

router.get('/',getAll)

router.get('/:id',getSpecific)

router.patch('/:id',update)

router.delete('/:id',deleteProduct)


export default router