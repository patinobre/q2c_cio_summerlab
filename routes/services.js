const express = require('express');
const router = express.Router();

// @route   GET api/services
// @desc    Get all users services
// @access  Private
router.get('/', (req,res) => {
    res.send('Get all services');
});

// @route   POST api/services
// @desc    Add new service
// @access  Private
router.post('/', (req,res) => {
    res.send('Add service');
});

// @route   PUT api/services/:id
// @desc    Update service
// @access  Private
router.put('/:id', (req,res) => {
    res.send('Update service');
});

// @route   DELETE api/services/:id
// @desc    Delete service
// @access  Private
router.delete('/:id', (req,res) => {
    res.send('Delete service');
});

module.exports = router;