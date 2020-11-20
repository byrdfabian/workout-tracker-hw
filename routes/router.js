const router = require("express").Router();
let db = require("../models/workouts");

router.post("/api/workouts", ({body}, res) => {
    db.create(body)
    .then(dbExercise => {
        res.json(dbExercise);
    })
    .catch(err => {
        res.status(400).json(err);
    })
})

router.get("/api/workouts", (req, res) => {
    db.find({})
    .sort({date: -1})
    .then(dbExercise => {
        res.json(dbExercise);
    })
    .catch(err => {
        res.status(400).json(err);
    })
})


router.put("/api/workouts/:id", (req, res) => {
    const exerciseId = req.params.id
    const exerciseObj = req.body
    db.findByIdAndUpdate({ _id: exerciseId }, { $push: { exercises: exerciseObj } })
        .then(dbExercise => {
            res.json(dbExercise);
        })
        .catch(error => {
            res.status(400).json(error);
        });
    console.log("id", exerciseId)
    console.log("obj", exerciseObj)
});

router.get("/api/workouts/range", (req, res) => {
    db.find({})
    .sort({date: -1})
    .then(dbExercise => {
        res.json(dbExercise);
    })
    .catch(err => {
        res.status(400).json(err);
    })
})

module.exports = router;
