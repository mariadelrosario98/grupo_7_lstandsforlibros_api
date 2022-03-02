const fs = require('fs')
const path = require('path');
const { products } = require("../../Database/models")

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

const controller = {
  async list(req, res){
    try{
      let libros = await 
    }
  }
}
