const {OK, BAD_REQUEST} = require('../../config/statusCode').statusCode;

const data = [
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

exports.predictEmail = async (req, res, next) => {
    // for(let i = 0; data.length; i++){
    //     console.log(data[i]);
    // }
    // for (let i = 0; data.length; i++){
    //     if(data[i].pred == 1) {
    //         data[i].pred = '개인'
    //     } if (data[i].pred == 2) {
    //         data[i].pred = '광고'
    //     } if (data[i].pred == 3) {
    //         data[i].pred = '알림'
    //     } if (data[i].pred == 4) {
    //         data[i].pred = '뉴스레터'
    //     }
    // }
    console.log("결과=",data[0]);
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