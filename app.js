const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());
const adminRouter = require('./router/admin.router');
const playerRouter = require("./router/player.router");
const teamRouter = require('./router/team.router');
const organiserRouter = require('./router/organiser.router');
const tournamentRouter = require('./router/tournament.router');
const mongoose = require('mongoose');
mongoose.connect(  "mongodb+srv://lucky:1234@cluster1.bvxkm.mongodb.net/Pratispardha?retryWrites=true&w=majority")
    .then(() => {
        app.use('/admin', adminRouter);
        app.use('/team', teamRouter);
        app.use('/organiser', organiserRouter);
        app.use('/tournament', tournamentRouter);
        app.use(playerRouter);
        app.listen(process.env.PORT || 3000, () => {
            console.log("Server Is Running")
            console.log("successfully connected to database....")
        })
    }).catch(err => {
        console.log(err);
    })

    //.........................SHELU DATABASE COnnectivity.........mongodb+srv://root:root@cluster0.gffjq.mongodb.net/pratisparda?retryWrites=true&w=majority
    