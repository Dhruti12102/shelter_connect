import express from 'express';
import {
    registration,
    login,
    getuser,
    updateuser,
    deleteuser,
    getrsl,
    getstaff,
    deletestaff,
    updatestaff,
    getproperty,
    updateproperty,
    addproperty,
    addstaff,
    addTenant,
    getAllTenants,
    getTenantById,
    updateTenant,
    deleteTenant,
    addrsl,
    updatersl,
    deletersl
} from '../controllers/auth-controller.js';
import { authorizeRoles, roles } from '../middleware/Roles.js';

const router = express.Router();

router.post("/registration", registration);
router.post("/login", login);
router.get("/getuser", getuser);
router.put("/updateuser/:id", authorizeRoles(roles.ADMIN), updateuser);
router.delete("/deleteuser/:id", authorizeRoles(roles.ADMIN), deleteuser);
router.get("/getrsl", getrsl);
router.post("/addstaff", addstaff);
router.get("/getstaff", getstaff);
router.delete("/deletestaff/:id", authorizeRoles(roles.ADMIN, roles.MANAGING_AGENT), deletestaff);
router.put("/updatestaff/:id", authorizeRoles(roles.ADMIN, roles.MANAGING_AGENT), updatestaff);
router.get("/getproperty", getproperty);
router.put("/updateproperty/:id", authorizeRoles(roles.ADMIN, roles.MANAGING_AGENT), updateproperty);
router.post("/addproperty", authorizeRoles(roles.ADMIN, roles.MANAGING_AGENT), addproperty);
router.post("/addtenant", authorizeRoles(roles.STAFF, roles.MANAGING_AGENT), addTenant);
router.get("/getalltenant", getAllTenants);
router.get("/gettenantwithid/:id", getTenantById);
router.put("/updatetenant/:id", authorizeRoles(roles.STAFF, roles.MANAGING_AGENT), updateTenant);
router.delete("/deletetenant/:id", authorizeRoles(roles.STAFF, roles.MANAGING_AGENT), deleteTenant);
router.post("/addrsl", addrsl);
router.put("/updatersl/:id", updatersl);
router.delete("/deletersl/:id", deletersl);

export default router; // Use ES module export