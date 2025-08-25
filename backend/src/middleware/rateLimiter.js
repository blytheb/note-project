import ratelimit from "../config/upstash.js";


const rateLimiter = async(req,res,next) => {
    
    try {
        const {sucess} = await ratelimit.limit("my-limit-key")

        if(!sucess){
            return res.status(429).json({
                message: "too many request, please try again later",
            });
        }

        next()
    } catch (error) {
        console.log("rate limit error", error)
        next(error);
    }
};

export default rateLimiter;