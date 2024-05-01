const express = require('express');
const ExpressError = require('./expressError')
const mathFunctions = require('./mathFunctions')

const app = express()
app.use(express.json());

function toArr(nums){
    numArr = [];
    nums = nums.split(',')
    nums.forEach((val) => {
        if (isNaN(Number(val))) {
            numArr.unshift(Number(val));
        } else {
            numArr.push(Number(val));
        }
    })
    return numArr; 
}

app.get('/mean', (req, res, next) => {
    try {
        if (!req.query.nums) {
            throw new ExpressError('Please input at least 1 number!', 400);
        }
        let nums = req.query.nums;
        numArr = toArr(nums);
        if (isNaN(numArr[0])) {
            throw new ExpressError('Please input numbers only!', 400);
        }
        const average = mathFunctions.findMean(numArr)
        return res.json(`Average: ${average}`);
    } catch (err) {
        return next(err);
    }
})

app.get('/median', (req, res, next) => {
    try {
        if (!req.query.nums) {
            throw new ExpressError('Please input at least 1 number!', 400);
        } 
        let nums = req.query.nums;
        numArr = toArr(nums);
        if (isNaN(numArr[0])) {
            throw new ExpressError('Please input numbers only!', 400);
        }
        const median = mathFunctions.findMedian(numArr);
        return res.json(`Median: ${median}`);
    } catch (err) {
        return next(err);
    }
})

app.get('/mode', (req, res, next) => {
    try {
        if (!req.query.nums) {
            throw new ExpressError('Please input at least 1 number!', 400);
        }
        let nums = req.query.nums;
        numArr = toArr(nums);
        if (isNaN(numArr[0])) {
            throw new ExpressError('Please input numbers only!', 400);
        }
        const mode = mathFunctions.findMode(numArr);
        return res.json(`Mode: ${mode}`);
    } catch (err) {
        return next(err);
    }
})

app.use((err, req, res, next) => {
    let status = err.status
    let message = err.message;
    return res.status(status).json({
        error: { message, status }
    })
})

app.listen(3000, () => {
    console.log('App on port 3000');
})