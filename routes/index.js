var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
const models = require('../models');

let stamuraiApi = require('../controllers/stamuraiApi');
var multer  = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/assets/uploads/user_img')
  },
  filename: function (req, file, cb) {
    var path = require('path');
    var ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + Date.now()+ext);
  }
})
var air_noise_upload = multer({ storage: storage });

const checkUserSession=(req, res, next)=>{
    if(req.session.userData){
        next();
    }else{
        res.redirect('/');
    }
}
const checkToken=(req, res, next)=>{
    var token = req.headers['authorization'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "gEGO1ZGxdAvwwPN7Ce6NstfHUEwBtVEbXPz",async function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    console.log('decod',decoded);
    await models.stamurai_user.findOne({where:{id: decoded.id}}).then(async (data)=>{
      req.user_data = data;
    });
    //req.me.user_id = decoded;
    next();
    //res.status(200).send(decoded);
  });
}
/* Vivre API*/

router.get('/', stamuraiApi.loginPage);
router.put('/doLogin', stamuraiApi.doLogin);
//router.put('/verifyUser/:phone', stamuraiApi.verifyUser);
router.put('/doLogout', stamuraiApi.doLogout);
router.get('/adminProfile', checkUserSession, stamuraiApi.adminProfile);
router.put('/editAdmin', checkUserSession, stamuraiApi.editAdmin);
router.get('/createUserPage', checkUserSession, checkUserSession, stamuraiApi.createUserPage);
router.post('/createUser', checkUserSession, checkToken, stamuraiApi.createUser);

router.get('/createTaskPage', checkUserSession, stamuraiApi.createTaskPage);
router.post('/createTask', checkUserSession, checkToken, stamuraiApi.createTask);
router.post('/assignReviewer', checkUserSession, checkToken, stamuraiApi.assignReviewer);
router.put('/changeTaskStatus',checkUserSession, checkToken, stamuraiApi.changeTaskStatus);
router.get('/userList', checkUserSession, stamuraiApi.userList);
router.get('/taskList', checkUserSession, stamuraiApi.taskList);


module.exports = router;
