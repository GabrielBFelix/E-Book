const express = require('express');
const app = express();


app.get('/' , (req, resp, next) => {
    return resp.status(200).json({
        status : 'success',
        data : {
            message: 'Hello world'
        }
    })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT , () => `Running on port : ${PORT`);