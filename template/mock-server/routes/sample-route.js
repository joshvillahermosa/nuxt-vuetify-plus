const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', (req, res) => {

  /**
   * Example of setting a error message
   */
  // res.status(400).json({message: 'Nope'})

  res.status(200).json({message: 'Yo'})
})

module.exports = router
