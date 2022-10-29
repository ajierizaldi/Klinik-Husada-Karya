const jwt = require('jsonwebtoken')

const checkToken = (req, res, next) => {
    let token = req.headers.authorization;

    if (!token) {
        return res.status(403).json({
            success: false,
            error: 403,
            message: "Token is required",
            data: null,
        });
    }

    if (token.toLowerCase().startWith("bearer")) {
        token = token.slice("bearer".length).trim();
    }

    try {
        const jwtPayLoad = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        if (!jwtPayLoad) {
            return res.status(403).json({
                success: false,
                error: 403,
                message: "Invalid token",
                data: null
            });
        }

        res.locale.user = jwtPayLoad;

        next();
    } catch (error) {
        return res.status(403).json({
            success: false,
            error: 403,
            message: "Invalid token",
            data: null,
        });
    }
}

module.exports = checkToken;