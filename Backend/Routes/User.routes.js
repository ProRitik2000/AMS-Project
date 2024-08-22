import express from 'express';
import { create ,deleteAll,deleteOne,getAll,getOne,update, updateAll} from '../Controller/User.Controller.js';



const route=express.Router();

route.post("/create",create);
route.get("/getAll",getAll);
route.get("/getone/:id",getOne);
route.patch("/update/:id",update);
route.put("/updateAll",updateAll)
route.delete("/deleteOne/:id",deleteOne);
route.delete("/deleteAll",deleteAll);

export default route;