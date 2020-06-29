const favorites = [];
let id = 1;

module.exports = {
    getFavoritePhoto: (req, res) => {
        res.status(200).send(favorites)
    },

    chooseFavorite: (req, res) => {
        const{photo} = req.body;

        photo.id = id;
        id++

        favorites.push(photo);
        res.status(200).send(favorites);
    },

    editTitle: (req, res) => {
        const {id} = req.params;
        const {title} = req.body;
        console.log(title);
        console.log(req.body)

        const index = favorites.findIndex(e => e.id ===+id);
        favorites[index].title = title;
        res.status(200).send(favorites);
    },

    deleteFavoritePhoto: (req, res) => {
        const {id} = req.params;

        const index = favorites.findIndex(e => e.id ===+id);
        favorites.splice(index, 1);
        res.status(200).send(favorites)
    }
}