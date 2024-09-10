const express = require("express");
const userRoute=require('./Route/userRoute')
const app = express();
const PORT = 7001;
app.use(express.json())
app.listen(PORT, (err) => {
  if (err) console.log("Not Run" + err);
  else console.log("SERER RUN ON " + PORT);
});

app.use('/user',userRoute)

