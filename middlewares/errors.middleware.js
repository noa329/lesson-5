/**
 * error handling middleware
 * @param {{ status?: number, message?: string }} err error data
 * @param {import("express").Request} req request data
 * @param {import("express").Response} res response data
 * @param {import("express").NextFunction} next function to move to the next middleware
 */
export const errorHandler = (err, req, res, next) => {
    const {status=500}=err;
    const { message = 'Server Error!' } = err;

    res.status(status).json({ error: { message: message } });
};

/**
 * Middleware for handling unknown routes (404)
 * Returns a JSON response when the requested path does not exist
 * 
 * @param {import("express").Request} req request data
 * @param {import("express").Response} res response data
 * @param {import("express").NextFunction} next function to move to the next middleware
 */
export const notFoundHandler = (req, res, next) => {
  res.status(404).json({ error: 'Route not found',path: req.originalUrl });
};
