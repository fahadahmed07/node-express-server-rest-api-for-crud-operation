const Joi = require('joi') // It is used for validation
const express = require('express');
const router = express.Router();

router.use(express.json())

// Demo Users
const users = [
    { id: 1, name: 'Fahad Ahmed' },
    { id: 2, name: 'Kashif Sulaiman' },
    { id: 3, name: 'Hassan Mehmood' },
]

// Get All Users
router.get('/all-users', (req, res) => {
    res.send(users);
})

// Get Query Parameter e.g: /all-users/:id/?sortBy=id
// router.get('/all-users/:name/:id', (req, res)=>{
//     // Query parameter
//     res.send(req.query);
// })

// Get Specific User
router.get('/all-users/:id', (req, res) => {
    // Look up the user
    const user = users.find(value => value.id === parseInt(req.params.id));
    // If not existing, return 404
    user ? res.send(user) : res.status(404).send('The user with the given ID was not found.');
})

// Add new user
router.post('/all-users', (req, res) => {
    // Validate
    const { error } = validateUser(req.body);
    // If invalid, return 404 - Bad request
    if (error) return res.status(404).send(error.details[0].message);

    // Create new user
    const user = {
        id: users.length + 1,
        name: req.body.name,
    }
    users.push(user);
    // Return the updated users
    res.send(users);
})

// Update User
router.put('/all-users/:id', (req, res) => {
    // Look up the user
    const user = users.find(value => value.id === parseInt(req.params.id));
    // If not existing, return 404
    user ? res.send(user) : res.status(404).send('The user with the given ID was not found.')

    // Validate
    const { error } = validateUser(req.body);
    // If invalid, return 404 - Bad request
    if (error) return res.status(404).send(error.details[0].message);

    // Update user
    user.name = req.body.name;
    // Return the updated users
    res.send(users)
})

router.delete('/all-users/:id', (req, res) => {
    // Look up the user
    const user = users.find(value => value.id === parseInt(req.params.id));
    // If not existing, return 404
    user ? res.send(user) : res.status(404).send('The user with the given ID was not found.')

    // Delete
    const index = users.indexOf(user);
    users.splice(index, 1);

    // Return the remain users
    res.send(users);
})

// Validate user by Joi
function validateUser(user) {
    const schema = {
        name: Joi.string().min(3).required()
    }
    return Joi.validate(user, schema);
}

module.exports = router