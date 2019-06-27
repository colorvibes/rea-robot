var messages = {
        welcome: "Welcome to REA robot! enter \"PLACE X, Y, NORTH | SOUTH | EAST | WEST\" command to place the robot on the table",
        initialPrompt: "Please enter \"PLACE X, Y, NORTH | SOUTH | EAST | WEST \" command to place the toy robot in the table.",
        invalidDirections: "Sorry! you are passing an invalid direction with the \"PLACE\" command, please add either NORTH | SOUTH | EAST | WEST direction with the \"PLACE\" command",
        invalidCoordinates: "Sorry! you are passing invalid co-ordinates with the \"PLACE\" command, please pass cordinates as INTEGER values",
        edgeLocation: "Oops! you are placing the robot at the edge of the table and it will fall. Choose a better co-ordinate",
        robotPosition: "REA Robot\'s position is at: ",
        noPlaceInvoked: "Sorry! you should atleast place once the robot in the table to execute the \"REPORT\" command; run \"PLACE X, Y, NORTH | SOUTH | EAST | WEST \" command inorder to place the robot",
  };

module.exports = messages;