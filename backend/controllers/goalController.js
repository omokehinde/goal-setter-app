const asyncHandler = require('express-async-handler');

// @desc Get Goals
// @route Get /api/goals
// @access Private
const getGoals = asyncHandler(async (req,res)=>{
    res.status(200).json({message:'Get Goals'});
});

// @desc Set Goal
// @route Set /api/goals/:id
// @access Private
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error('Add text');
    }
    res.status(200).json({message:'Set Goals'});
});

// @desc Update Goal
// @route Update /api/goals/:id
// @access Private
const updateGoal =  asyncHandler(async (req, res) => {
    res.status(201).json({message:`Update Goal ${req.params.id}`})
});

// @desc Delete Goal
// @route Set /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message:`Deleted Goal ${req.params.id}`})
});

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
};