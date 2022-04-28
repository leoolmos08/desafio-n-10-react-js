const products = [
    {
      id: 1,
      name: "Hamburguesa Simple",
      stock: 100,
      price: 600,
      shortDescription: "Pan de papa, carne de 100gr, queso cheddar o tybo, toppings a elección y papas fritas",
      description: "Pan de papa, carne de 100gr, queso cheddar o tybo, toppings a elección y papas fritas. Agregale los toppings que mas te gusten!!",
      image: "../img/simple.jpeg",
      categoryId: "burgers",
      category: {
        name: "Hamburguesas",
        id: 1
      },
    },
    {
      id: 2,
      name: "Hamburguesa Doble",
      stock: 100,
      price: 680,
      shortDescription: "Pan de papa, doble carne de 100gr, queso cheddar o tybo, toppings a elección y papas fritas",
      description: "Pan de papa, doble carne de 100gr, queso cheddar o tybo, toppings a elección y papas fritas. Agregale los toppings que mas te gusten!!",
      image: "../img/doble.jpeg",
      categoryId: "burgers",
      category: {
        name: "Hamburguesas",
        id: 1
      },
    },
    {
      id: 3,
      name: "Hamburguesa Triple",
      stock: 100,
      price: 750,
      shortDescription: "Pan de papa, triple carne de 100gr, queso cheddar o tybo, toppings a elección y papas fritas",
      description: "Pan de papa, triple carne de 100gr, queso cheddar o tybo, toppings a elección y papas fritas. Agregale los toppings que mas te gusten!!",
      image: "../img/triple.jpeg",
      categoryId: "burgers",
      category: {
        name: "Hamburguesas",
        id: 1
      },
    },
    {
      id: 4,
      name: "Hamburguesa Cuádruple",
      stock: 100,
      price: 820,
      shortDescription: "Pan de papa, cuádruple carne de 100gr, queso cheddar o tybo, toppings a elección y papas fritas",
      description: "Pan de papa, cuádruple carne de 100gr, queso cheddar o tybo, toppings a elección y papas fritas. Agregale los toppings que mas te gusten!!",
      image: "../img/cuadruple.jpeg",
      categoryId: "burgers",
      category: {
        name: "Hamburguesas",
        id: 1
      },
    },
    {
      id:5,
      name: "Hamburguesa Especial",
      stock: 15,
      price: 780,
      shortDescription: "Pan de papa, carne de 100gr, queso cheddar o tybo, vacío desmenuzado y papas fritas",
      description: "Pan de papa, carne de 100gr, queso cheddar o tybo, vacío desmenuzado y papas fritas. Agregale los toppings que mas te gusten!!",
      image: "../img/especial.jpeg",
      categoryId: "burgers",
      category: {
        name: "Hamburguesas",
        id: 1
      },
    },
    {
      id: 6,
      name: "Hamburguesa Veggie",
      stock: 100,
      price: 550,
      shortDescription: "Pan de papa, medallón veggie, queso cheddar o tybo, toppings a elección y papas fritas",
      description: "Pan de papa, medallón veggie, queso cheddar o tybo, toppings a elección y papas fritas. Agregale los toppings que mas te gusten!!",
      image: "../img/veggie.jpeg",
      categoryId: "burgers",
      category: {
        name: "Hamburguesas",
        id: 1
      },
    },
    {
      id: 7,
      name: "Papas Grandes",
      stock: 100,
      price: 350,
      shortDescription: "Porción grande de papas fritas",
      description: "Pan de papa, carne de 100gr, queso cheddar o tybo, toppings a elección y papas fritas. Agregale los toppings que mas te gusten!!",
      image: "../img/papas.jpg",
      categoryId: "extras",
      category: {
        name: "Papas",
        id: 2
      },
    },
    {
      id: 8,
      name: "Papas con cheddar y bacon",
      stock: 100,
      price: 450,
      shortDescription: "Porción grande de papas fritas con quso cheddar fundido, bacon y cebolla de verdeo",
      description: "Pan de papa, carne de 100gr, queso cheddar o tybo, toppings a elección y papas fritas. Agregale los toppings que mas te gusten!!",
      image: "../img/papascheddar.png",
      categoryId: "extras",
      category: {
        name: "Papas",
        id: 2
      },
    },
    {
      id: 9,
      name: "Agua Villavicencio 500ml",
      stock: 100,
      price: 150,
      shortDescription: "Agua Villavicencio 500ml",
      description: "Agua Villavicencio 500ml",
      image: [
        "https://jumboargentina.vtexassets.com/arquivos/ids/620311/Agua-Villavicencio-Pet-Sin-Gas-500-Ml-1-239939.jpg?v=637466226580170000"
      ],
      categoryId: "bebidas",
      category: {
        name: "Bebidas",
        id: 3
      },
    },
    {
      id: 10,
      name: "Coca Cola 500ml",
      stock: 100,
      price: 150,
      shortDescription: "Coca Cola 500ml",
      description: "Coca Cola 500ml",
      image: [
        "https://jumboargentina.vtexassets.com/arquivos/ids/673039/Gaseosa-Coca-cola-Sabor-Original-500-Ml-1-3513.jpg?v=637709781999770000"
      ],
      categoryId:"bebidas",
      category: {
        name: "Bebidas",
        id: 3
      },
    },
    /*{
      id: 11,
      name: "Aquarius Pera 500ml",
      stock: 100,
      price: 150,
      shortDescription: "Aquarius Pera 500ml",
      description: "Aquarius Pera 500ml",
      image: [
        "https://jumboargentina.vteximg.com.br/arquivos/ids/640775-750-750/Agua-Saborizada-Aquarius-Pera-500-Ml-1-469205.jpg?v=637556947692970000"
      ],
      categoryId: "bebidas",
      category: {
        name: "Bebidas",
        id: 3
      },
    },
    {
      id: 12,
      name: "Cerveza Budweiser 410ml",
      stock: 100,
      price: 250,
      shortDescription: "Cerveza Budweiser 410ml",
      description: "Cerveza Budweiser 410ml",
      image: [
        "https://carrefourar.vtexassets.com/arquivos/ids/211124/7792798004652_02.jpg?v=637660129317830000"
      ],
      categoryId: "bebidas",
      category: {
        name: "Bebidas",
        id: 3
      },
    }*/
]

module.exports = {
  products,
}