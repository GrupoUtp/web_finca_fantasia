const { Router} = require("express");
const controladorInversion = require("../controllers/controladorInversion");

const router = Router();

router.get("/comentarios", controladorInversion.comentar_get);
router.post("/crear-comentario", controladorInversion.comentar_post);
router.delete("/comentario/:id", controladorInversion.comentar_delete);

module.exports = router;