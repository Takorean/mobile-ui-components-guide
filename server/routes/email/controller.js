const {OK, BAD_REQUEST} = require('../../config/statusCode').statusCode;

exports.predictEmail = async (req, res, next) => {
    try {
        res.status(OK).json({ 
            result: [
                {
                    index:0,
                    subject:'test1',
                    pred:2
                },
                {
                    index:1,
                    subject:'test2',
                    pred:1
                },
                {
                    index:2,
                    subject:'test3',
                    pred:3
                },
                {
                    index:3,
                    subject:'test4',
                    pred:2
                },
                {
                    index:4,
                    subject:'test5',
                    pred:3
                },
                {
                    index:5,
                    subject:'test1',
                    pred:4
                },
                {
                    index:6,
                    subject:'test1',
                    pred:1
                },
            ]
        });
    } catch (error) {
            res.status(BAD_REQUEST).json({
            message: "연동 실패!",
        });
    }
};