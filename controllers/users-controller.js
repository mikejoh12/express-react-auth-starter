const getAccountInfo = async (req, res) => {
    res.status(200).json({
        msg: 'Top Secret Account Info! req.user:',
        user: req.user
    });
}

module.exports = { getAccountInfo }