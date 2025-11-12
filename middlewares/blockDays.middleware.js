
export function createBlockDays(days = [5, 6], startHour = 12, endHour = 22) {
  /**
     * Blocks the server on specific days and hours.
     *Default: Friday from 12:00  until sabbat at 22:00 
     * @param {import("express").Request} req request data
     * @param {import("express").Response} res response data
     * @param {import("express").NextFunction} next function to move to the next middleware
     */
     const blockMiddleware =(req, res, next) => {
    const now = req.currentDate 
    const day = now.getDay();
    const hour = now.getHours();

    
    const weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Sabbat'];

       
    if((day === days[0] && hour >= startHour) || (day === days[1] && hour < endHour) )
      
      {
        return res.status(500).json({  message: `Server is not working from ${weekDays[days[0]]} ${startHour}:00 to ${weekDays[days[1]]} ${endHour}:00`,
});
    }
    next();
  };
  return blockMiddleware;
}
