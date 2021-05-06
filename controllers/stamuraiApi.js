const models = require('../models');
const fs = require('fs');
const { Op } = require("sequelize");
const constants = require('../config/constants');
var jwt = require('jsonwebtoken');
const service = require('../services/commonService');
const { TextDecoder } = require('text-decoding');

module.exports = {

  // verifyUser: async (req, res, next)=>{
  //   console.log("params",req.body);
  //   await models.stamurai_user.findOne({where:{mobile: req.params.phone}}).then(async (data)=>{
  //     if(data){
  //       var token = jwt.sign({ id: data.id }, "gEGO1ZGxdAvwwPN7Ce6NstfHUEwBtVEbXPz", {
  //         expiresIn: 86400 // expires in 24 hours
  //       });

  //       res.json({status: true, message:"User Already Exist", userData: data, token: token});
  //     }else{
  //       res.json({status: false, message:"New User"}); 
  //     }
  //   });
  // },

  loginPage: async (req, res, next)=>{
    await models.stamurai_user.findOne({where:{user_role: 55}}).then(async(data)=>{
      if(!data){
        await models.stamurai_user.create({email:'admin@gmail.com',first_name:'Super',last_name:'admin',password:'3670747394',mobile:'1234567890',user_role:55,is_active:1});
      }
    })
    res.render('pages/login',{layout:false});
  },

  doLogin: async (req, res, next)=>{
    console.log("params",req.body);
    const stringHash = require("string-hash");
    let pass = stringHash(req.body.password);
    console.log("params",pass);

    let findUser = await models.stamurai_user.findOne({where: {[Op.or]: [{email: req.body.email.toLowerCase()}, {mobile: req.body.email}], password: pass, is_active: 1}}).then(async (data)=>{ 
      if(!data){
        res.json({status: false, message:"Failed"});
      }else{
          req.session.userData = data;
          console.log("data",req.session.userData);
          var token = jwt.sign({ id: data.id }, "gEGO1ZGxdAvwwPN7Ce6NstfHUEwBtVEbXPz", {
            expiresIn: 2592000 // expires in 30 Days
          });
          res.json({status: true, message:"Success", userData: data, auth: true, token: token});
      }
    })
  },

  doLogout:async (req, res, next)=>{
    req.session.destroy();
    req.user_id = null;
    res.json({status:true, message:"Success"});
  },

  createUserPage: async (req, res, next)=>{
    res.render('pages/addUser');
  },

  createUser:async (req, res ,next)=>{
		console.log('user params',req.body);
    const stringHash = require("string-hash");
		let pass = stringHash(req.body.password);
		var qry = await models.stamurai_user.create({email:req.body.user_email,first_name:req.body.first_name,last_name:req.body.last_name,password:pass,mobile:req.body.mobile,user_role:45,is_active:1}).then(async(data)=>{
      if(data){
       res.json({status:true,message:'success',userData:data}); 
      }else{
        res.json({status:false,message:'failed'});
      }

    });
  },

  adminProfile:async (req, res, next)=>{
    var query = await models.stamurai_user.findAll({where:{id:req.user_data.id}}).then(async(data)=>{
      if(data){
        console.log('user info',data);
        res.render('pages/admin-dashboard/profile',{userInfo:data[0]});
      }
    });
  },

  editAdmin:async (req, res, next)=>{
    var query = await models.stamurai_user.update({first_name:req.body.first_name.trim(),last_name:req.body.last_name.trim(),email:req.body.email.trim(),mobile:req.body.mobile.trim()},{where:{id:req.user_data.id}}).then(async(data)=>{
      if(data){
        res.json({status:true,message:'success'});
      }else{
        res.json({status:false,message:'failed'});
      }
    });
  },

  createTaskPage: async (req, res, next)=>{
    res.render('pages/addTask');
  },

  createTask: async (req, res, next)=>{

    if(!req.body.task_id){
      await models.stamurai_task.create({task_title: req.body.task_title, task_description: req.body.description, created_by: req.session.userData.id, due_date: req.body.due_date}).then((data)=>{
        if(data){
          res.json({status:true,message:'success'});
        }else{
          res.json({status:false,message:'failed'});
        }
      });
    }else{
      await models.stamurai_task.update({task_title: req.body.task_title, task_description: req.body.description, created_by: req.session.userData.id}, {where:{id: req.body.task_id}}).then((data)=>{
      if(data){
        res.json({status:true,message:'success'});
      }else{
        res.json({status:false,message:'failed'});
      }
    });
    }
  },

  assignReviewer: async (req, res, next)=>{
    try{
    await models.stamurai_reviewer.create({reviewer_id: req.body.reviewer_id, user_id: req.body.user_id}).then((data)=>{
      if(data){
        res.json({status:true,message:'success'});
      }else{
        res.json({status:false,message:'failed'});
      }
    });
    }catch(e){
      res.json({status: false});
    }
  },

  changeTaskStatus: async (req, res, next)=>{
    await models.stamurai_task_status.findOne({where:{reviewer_id: req.session.userData.id, task_id: req.body.task_id}}).then(async (data)=>{
      if(data){
        await models.stamurai_task_status.update({status: req.body.status}, {where:{reviewer_id: req.session.userData.id, task_id: req.body.task_id}});
      }else{
        await models.stamurai_task_status.create({reviewer_id: req.session.userData.id, task_id: req.body.task_id, status: req.body.status});
      }
      res.json({status:true,message:'success'});
    });
  },

  userList: async (req, res, next)=>{
    var where = ``;
    if(req.session.userData.user_role == 45){
      where = `WHERE su.id IN (SELECT user_id FROM stamurai_reviewers WHERE reviewer_id = ${req.session.userData.id})`;
    }
    await req.app.locals.sequelize.query(`SELECT su.id, su.first_name, su.last_name, su.email, su.mobile from stamurai_users su ${where}`).then(async(data)=>{

      if(data){
        await models.stamurai_user.findAll().then(async(data1)=>{
          res.render('pages/userList',{userList: data[0], reviewerList: data1, session: req.session.userData});
        })
      }else{
        res.render('pages/userList',{userList: []});
      }
    });
  },

  taskList: async (req, res, next)=>{

    var where = ``;
    if(req.session.userData.user_role==45){
      where = `WHERE st.created_by IN (SELECT user_id FROM stamurai_reviewers WHERE reviewer_id = ${req.session.userData.id}) OR st.created_by = ${req.session.userData.id}`;
    }

    await req.app.locals.sequelize.query(`SELECT st.id, st.task_title, st.task_description, st.due_date, su.first_name, (SELECT GROUP_CONCAT(first_name) FROM stamurai_users WHERE id IN (SELECT reviewer_id FROM stamurai_reviewers WHERE user_id = su.id)) AS reviewers, (SELECT status FROM stamurai_task_statuses WHERE reviewer_id = ${req.session.userData.id} AND task_id = st.id) AS status, (SELECT GROUP_CONCAT(first_name) FROM stamurai_users WHERE id IN (SELECT reviewer_id FROM stamurai_task_statuses WHERE task_id = st.id AND status=1)) AS done_by
      FROM stamurai_tasks st
      LEFT JOIN stamurai_users su ON su.id = st.created_by ${where}`).then((data)=>{
        if(data){
          res.render('pages/taskList',{taskList: data[0]});
        }else{
          res.render('pages/taskList',{taskList: []});
        }
      });
  }

}

