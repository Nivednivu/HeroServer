
import completes from '../model/grievanceModel.js';
import nodemailer from 'nodemailer';

const createGrievance = async (req, res) => {
  const { name, email,phone, description } = req.body; 

  try {
    const grievance = new completes({ name, email,phone, description });
    await grievance.save();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL, 
        pass: process.env.PASSWORD 
      }
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.Too, // Superhero's email or admin's email
      subject: 'New Grievance Submitted',
      html: `
        <h1>New Grievance Submitted</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Description:</strong> ${description}</p>
      `
    };

    // Send email
    const response = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', response);

    // Respond to the client
    res.status(201).json({ message: 'Grievance submitted and email sent successfully', grievance });

  } catch (error) {
    console.error('Error submitting grievance or sending email: ', error);
    res.status(500).json({ message: 'Error submitting grievance or sending email', error });
  }
};



const getAllGrievances = async (req, res) => {
  try {
    const grievances = await completes.find();
    res.status(200).json(grievances);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching grievances', error });
  }    
};

const deleteGrievance = async (req, res) => {

  const {pid} = req.params
  try {
    const removeDetails = await completes.findByIdAndDelete({_id:pid})
    res.status(200).json(removeDetails)
  } catch (error) {
    res.status(200).json(error)
  }

};
export {createGrievance,getAllGrievances,deleteGrievance}  


