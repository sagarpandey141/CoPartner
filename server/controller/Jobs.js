const User = require("../Models/User");
const Job = require("../Models/Job")

exports.getSavedJobs = async (req, res) => {
    try {

        console.log("job controller")
        const { _id } = req.body;
        console.log("type",typeof(_id))

        console.log("_id", _id)

        const savedJobs = await Job.find({})
        // const savedJobs = await Job.findOne({ _id });

        console.log("savedJobs", savedJobs)

        if (!savedJobs) {
            return res.status(404).json({
                success: false,
                message: "No Saved Jobs found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Saved Jobs found successfully",
            savedJobs: savedJobs 
        });

    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};
