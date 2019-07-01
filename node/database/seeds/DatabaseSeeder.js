'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Product = use('App/Models/Product')
const Type = use('App/Models/Type')
const Size = use('App/Models/Size')
const ProductsTypes = use('App/Models/ProductsTypes')
const SizesType = use('App/Models/SizesType')

class DatabaseSeeder {
  async run () {
    let product = await Product.create({
      description: 'Pizzas',
      image: 'pizzas@1x.png'
    })

    let type = await Type.create({
      description: 'Portuguesa',
      image: 'Pizzas/1.png'
    })
    let arrTypes = [type.id]

    type = await Type.create({
      description: 'Calabresa',
      image: 'Pizzas/2.png'
    })
    arrTypes.push(type.id)

    type = await Type.create({
      description: 'Frango Frito',
      image: 'Pizzas/3.png'
    })
    arrTypes.push(type.id)

    type = await Type.create({
      description: 'Frango Catupiry',
      image: 'Pizzas/4.png'
    })
    arrTypes.push(type.id)

    type = await Type.create({
      description: 'Espanhola',
      image: 'Pizzas/5.png'
    })
    arrTypes.push(type.id)

    type = await Type.create({
      description: 'Mexicana',
      image: 'Pizzas/6.png'
    })
    arrTypes.push(type.id)

    arrTypes.map(async item => {
      await ProductsTypes.create({
        products_id: product.id,
        types_id: item
      })
    })

    let size = await Size.create({
      description: 'Pequena',
      image: 'Tamanhos/tamanho-p.png'
    })
    let arrSizes = [size.id]
    size = await Size.create({
      description: 'Média',
      image: 'Tamanhos/tamanho-m.png'
    })
    arrSizes.push(size.id)
    size = await Size.create({
      description: 'Grande',
      image: 'Tamanhos/tamanho-g.png'
    })
    arrSizes.push(size.id)
    size = await Size.create({
      description: 'Gigante',
      image: 'Tamanhos/tamanho-gg.png'
    })
    arrSizes.push(size.id)

    arrSizes.map(itemSizes => {
      arrTypes.map(async itemTypes => {
        await SizesType.create({
          sizes_id: itemSizes,
          types_id: itemTypes,
          price: 19.9
        })
      })
    })

    product = await Product.create({
      description: 'Calzones',
      image: 'calzones@1x.png'
    })
    arrTypes = []
    type = await Type.create({
      description: 'Requeijão',
      image: 'calzones@1x.png'
    })
    arrTypes.push(type.id)
    arrTypes.map(async item => {
      await ProductsTypes.create({
        products_id: product.id,
        types_id: item
      })
    })

    product = await Product.create({
      description: 'Bebidas Alcóolicas',
      image: 'bebidas-alcoolicas@1x.png'
    })
    arrTypes = []
    type = await Type.create({
      description: 'Cerveja',
      image: 'bebidas-alcoolicas@1x.png'
    })
    arrTypes.push(type.id)
    arrTypes.map(async item => {
      await ProductsTypes.create({
        products_id: product.id,
        types_id: item
      })
    })

    product = await Product.create({
      description: 'Bebidas',
      image: 'bebidas@1x.png'
    })
    arrTypes = []
    type = await Type.create({
      description: 'Coca Cola',
      image: 'bebidas@1x.png'
    })
    arrTypes.push(type.id)
    arrTypes.map(async item => {
      await ProductsTypes.create({
        products_id: product.id,
        types_id: item
      })
    })

    product = await Product.create({
      description: 'Masssas',
      image: 'massas@1x.png'
    })
    arrTypes = []
    type = await Type.create({
      description: 'Macarronada',
      image: 'massas@1x.png'
    })
    arrTypes.push(type.id)
    arrTypes.map(async item => {
      await ProductsTypes.create({
        products_id: product.id,
        types_id: item
      })
    })
  }
}

module.exports = DatabaseSeeder
