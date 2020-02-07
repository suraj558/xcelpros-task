const express = require('express')
const router = express.Router()

const { authenticateUser } = require('../app/middlewares/authentication')

const booksController = require('../app/controllers/booksControllers')
const categoriesController = require('../app/controllers/categoryController')
const usersController = require('../app/controllers/UsersController')
const assignmentControllers=require('../app/controllers/assignmentControllers')
const attendanceControllers=require('../app/controllers/attendanceControllers')
const facultyControllers=require('../app/controllers/facultyControllers')
const invoiceControllers= require('../app/controllers/invoiceControllers')
const payslipControllers= require('../app/controllers/payslipControllers')
const studmarksControllers= require('../app/controllers/stud-marksControllers')
const studentsControllers= require('../app/controllers/studentsController')

router.post('/users/register', usersController.register)
router.post('/users/login', usersController.login)
router.get('/users/account', authenticateUser, usersController.account)
router.delete('/users/logout', authenticateUser, usersController.logout)

//ROUTES TO TEST DATA INSERTION AND RETREIVAL
router.post('/marks', studmarksControllers.create)
router.post('/faculty', facultyControllers.create)
router.get('/faculty',facultyControllers.list)
router.post('/students',studentsControllers.create)
router.get('/students',studentsControllers.list)
router.post('/books',booksController.create)
router.get('/books',booksController.list)
router.post('/categories',categoriesController.create)
router.get('/categories',categoriesController.list)
router.get('/marks',studmarksControllers.list)


router.get('/admin/students', authenticateUser,studentsControllers.list)
router.get('/admin/student_fee_details', authenticateUser, studentsControllers.list)
router.get('/admin/faculty', authenticateUser, facultyControllers.list)
//router.get('/admin/faculty/:id', authenticateUser, facultyControllers.show)
router.get('/admin/hod', authenticateUser, facultyControllers.list)
//router.get('/admin/hod/:id', authenticateUser, facultyControllers.show)
router.get('/admin/empsalary', authenticateUser, facultyControllers.list)
//router.get('/admin/empsalary/:id', authenticateUser, facultyControllers.show)

router.get('/hod/students', authenticateUser, studentsControllers.list)
//router.get('/hod/students/:id', authenticateUser, studentsControllers.show)
router.get('/hod/faculty', authenticateUser, facultyControllers.list)
//router.get('/hod/faculty/:id', authenticateUser, facultyControllers.show)
router.get('/hod/attendance', authenticateUser, attendanceControllers.list)
//router.get('/hod/attendance/:id', authenticateUser, attendanceControllers.show)
router.get('/hod/marks', authenticateUser, studmarksControllers.list)
//router.get('/hod/marks/:id', authenticateUser, studmarksControllers.show)

router.get('/principal/students', authenticateUser, studentsControllers.list)
//router.get('/principal/students/:id', authenticateUser, studentsControllers.show)
router.get('/principal/faculty', authenticateUser, facultyControllers.list)
//router.get('/principal/faculty/:id', authenticateUser, facultyControllers.show)
router.get('/principal/hod', authenticateUser, facultyControllers.list)
//router.get('/principal/hod/:id', authenticateUser, facultyControllers.show)


router.get('/faculty/students', authenticateUser, studentsControllers.list)
//router.get('/faculty/students/:id', authenticateUser, studentsControllers.show)
router.get('/faculty/assignments', authenticateUser, assignmentControllers.list)
//router.get('/faculty/assignments/:id', authenticateUser, assignmentControllers.show)
router.post('/faculty/assignments', assignmentControllers.create)
router.get('/faculty/library',authenticateUser,booksController.list)
router.get('/faculty/attendance',authenticateUser,attendanceControllers.list)
//router.get('/faculty/attendance/:id', authenticateUser, attendanceControllers.show)
router.post('/faculty/attendance',attendanceControllers.create)


router.get('/accountant/faculty',authenticateUser,facultyControllers.list)
router.get('/accountant/students',authenticateUser,studentsControllers.list)
router.post('/accountant/invoice',invoiceControllers.create)
router.get('/accountant/invoice',authenticateUser,invoiceControllers.list)
//router.get('/accountant/invoice/:id', authenticateUser, invoiceControllers.show)
router.post('/accountant/payslip',payslipControllers.create)
router.get('/accountant/payslip',authenticateUser,payslipControllers.list)
//router.get('/accountant/payslip/:id', authenticateUser, payslipControllers.show)


module.exports = router
