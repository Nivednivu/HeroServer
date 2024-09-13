import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import 'dotenv/config'
import userRoutes from "./Routes/userRoutes.js";
import adminRoutes from "./Routes/adminRoutes.js";
import Crouter from "./Routes/grievanceRoutes.js";
// import sendMail from './sendEmail.js'

// app config
const app = express()
const port = 4000

app.use(express.json())
app.use(cors())

  
// db connection
connectDB();

app.use('/users',userRoutes); 
app.use('/admins',adminRoutes)
app.use('/grievances',Crouter)       
    
  
 

// app.post('/send-email', async (req, res) => {
//     try {
//       await sendMail();
//       res.status(200).send('Email sent successfully');
//     } catch (error) {
//       console.error('Error:', error);
//       res.status(500).send('Failed to send email');
//     }
//   });



 
app.get("/",(req,res)=>{
    res.send("server connected") 
})
 
app.listen(port,()=>{
    console.log(`server started on ${port}`);
    
})                