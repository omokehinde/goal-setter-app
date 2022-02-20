const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModel');

// @desc Get Goals
// @route Get /api/goals
// @access Private
const getGoals = asyncHandler(async (req,res)=>{
    const goals = await Goal.find();
    res.status(200).json(goals);
});

// @desc Set Goal
// @route Set /api/goals/:id
// @access Private
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error('Add text');
    }
    const goal = await Goal.create({
        text: req.body.text
    });
    res.status(200).json(goal);
});

// @desc Update Goal
// @route Update /api/goals/:id
// @access Private
const updateGoal =  asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
        res.status(400);
        throw new Error('Goal not found');
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, 
        {new: true});
    res.status(201).json(updatedGoal);
});

// @desc Delete Goal
// @route Set /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
        res.status(400);
        throw new Error('Goal not found');
    }
    // const deleteGoal = await Goal.findByIdAndDelete(req.params.id);
    // res.status(200).json({message:`${goal.text} Goal was deleted.`});
    await goal.remove();
    res.status(200).json({id: req.params.id});
});

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
};