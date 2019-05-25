const express = require("express")
const courses = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')
var VerifyToken = require('../libs/auth');

const Course = require("../models/CourseDetail")
courses.use(cors())

process.env.SECRET_KEY = 'secret'

/* courses.use(function(req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if(token){
        verifyJWTToken(token)
        .then((decodedToken) =>
        {
        req.user = decodedToken.data
        next()
        })
        .catch((err) =>
        {
        res.status(400)
            .json({message: "Invalid auth token provided."})
        })



        /* jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {       
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });       
            } else {
                req.decoded = decoded;         
                next();
            }
        }); 
    }else {
        return res.status(403).send({ 
            success: false, 
            message: 'No token provided.' 
        });
    }
}) */

courses.post('/save', VerifyToken, (req, res) => {
    const today = new Date()
    
    const courseData = {
        CourseName: req.body.CourseName,
        CourseDescription: req.body.CourseDescription,
       /*  CourseType: req.body.CourseType,
        CourseOwnerID: req.body.CourseOwnerID,
        Project: req.body.Project,
        Division: req.body.Division,
        Function: req.body.Function,
        CreatedDate: req.body.CreatedDate,
        LastUpdatedDate: today,
        IsActive: req.body.IsActive */
    }

    Course.create(courseData)
    .then(user => {
        res.json('Course successfully saved')
    })
    .catch(err => {
        res.send('error: ' + err)
    })

    

    /* User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
            if (!user) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash
                    User.create(userData)
                        .then(user => {
                            res.json({ status: user.email + ' registered' })
                        })
                        .catch(err => {
                            res.send('error: ' + err)
                        })
                })
            } else {
                res.json({ error: "User already exists" })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        }) */
})

/* users.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    res.send(token)
                }
            } else {
                res.status(400).json({ error: 'User does not exist' })
            }
        })
        .catch(err => {
            res.status(400).json({ error: err })
        })
}) */

module.exports = courses