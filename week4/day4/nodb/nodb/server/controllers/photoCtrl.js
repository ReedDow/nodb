const axios = require('axios');

module.exports = {
    getPhoto: (req, res) => {

        const photoArr = [];

        const rand = Math.ceil(Math.random() * photoArr.length)

        axios.get(`./src/Components/data/${rand}`)
        .then(res => {
            photoArr.push(res.data);
            res.status(200).send(photoArr)
        })

        .catch(err => res.status(500).send(err))
    }
}