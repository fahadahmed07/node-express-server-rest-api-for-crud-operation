const express = require('express');
const app = express();


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})

app.use('/', require('./routes/index.js'));

// app.get('/', (req, res)=>{
//     console.log("Hello Get Methode");
// })

// app.post('/postDyDO', (req, res)=>{
//     console.log("Hello Post Methode");
// })

// app.get('/getFriends', (req, res)=>{
//     console.log("Hello Friends");
//     res.send({user: [], message: 'successful'});
// })

// app.post('/addFriend', (req, res)=>{
//     console.log("Hello Friends");
//     res.send({message: 'Friend Added'});
// })



// fetch('addFriend',{ method: 'post' }).then(res => res.json()).then(res => console.log(res));
// fetch('addFriend',{method: "POST",}).then(response => response.json()).then(result => console.log(result));


{/* 
1. Post Operation.
2. Delete Operation.
3. Update or Put Operation.
4. Get Operation.
5. Find Operation.
6. Merge Operation.
7. Process Operation.
8. Find by aditional specific search criteria Operation.
*/}
























