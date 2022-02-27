const db = require('../database/models')
const Op = db.Sequelize.Op

const productsModel = {
  async getProductById(id){
    try {
      const product = await db.Products.findByPk(id)

      const productGenres = await db.ProductGenre.findAll({
        where: { product_id: id },
        include: ["genre", "product"]
      })

      const genreIDs = []
      const genreNames = []
      productGenres.forEach(item => {
        genreIDs.push(item.genre.id)
        genreNames.push(item.genre.name)
      })

      return {...product.dataValues, genreIDs, genreNames}
    } catch (error) {
      throw error
    }
  },
  async getAllProducts(){
    try {
      return await db.Products.findAll()
    } catch (error) {
      throw error
    }
  },
  async getGenresByProductID(id) {
    try {
      return await db.Products.findAll({
        where: {
          genre: {}
        },
        order: [
          [orderBy ?? "genre", orderHow ?? "ASC"]
        ],
        limit,
        offset
      })
    } catch (error) {
      throw error
    }
  },
  async getGenresAndProducts(){
    try {
      return await db.Products.findAll({
        where: {
        },
        order: [
        ],
        limit,
        offset
      })
    } catch (error) {
      throw error
    }
  }

}