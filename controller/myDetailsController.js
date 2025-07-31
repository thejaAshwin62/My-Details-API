import { StatusCodes } from "http-status-codes";
import { getMyDetails } from "../models/myDetailsModel.js";

export const getMyDetailsController = async (req, res) => {
  try {
    const myDetails = await getMyDetails();
    res.status(StatusCodes.OK).json(myDetails);
  } catch (error) {
    console.error("Error fetching my details:", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "An error occurred while fetching my details.",
      error: error.message,
    });
  }
};
