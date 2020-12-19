const { API_TOKEN } = require('./config')
const logger = require('./logger')

const validate = (req, res, next) => {
    const auth = req.get('Authorization')
    logger.error(`Unauthorized request`)

    if(!auth || auth.split(' ')[1] !== API_TOKEN){
        return res.status(401).json({ error: 'Unauthorized request'})
    }

    next()
}

module.exports = validate