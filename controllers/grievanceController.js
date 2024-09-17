
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

// update
const updateGrievanceStatus = async (req, res) => {
  const { pid } = req.params; // Get grievance ID from params
  const { status } = req.body; // Get the new status from the request body

  try {
    // Find the grievance by ID and update the status
    const updatedGrievance = await completes.findByIdAndUpdate(
      pid, 
      { status }, 
      { new: true } // Return the updated grievance
    );

    if (!updatedGrievance) {
      return res.status(404).json({ message: 'Grievance not found' });
    }

    // Respond with the updated grievance
    res.status(200).json({ message: 'Grievance status updated successfully', grievance: updatedGrievance });
  } catch (error) {
    console.error('Error updating grievance status: ', error);
    res.status(500).json({ message: 'Error updating grievance status', error });
  }
};

// overview

const getGrievancesOverview = async (req, res) => {
  try {
    // Fetch all grievances from the database
    const grievances = await completes.find(); // You can add filters or pagination if needed

    // Respond with the list of grievances
    res.status(200).json({
      message: 'Grievances fetched successfully',
      grievances: grievances
    });
  } catch (error) {
    console.error('Error fetching grievances: ', error);
    res.status(500).json({
      message: 'Error fetching grievances',
      error: error.message // Send only the error message for clarity
    });
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
export {createGrievance,getAllGrievances,deleteGrievance,updateGrievanceStatus,getGrievancesOverview}  


