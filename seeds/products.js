
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('table_name').del(),

    // Inserts seed entries
    knex('products').insert({
      name: 'Tatted Cat Sweater',
      img_url: 'cat_gray_halloween.jpg',
      description: 'awesome',
      price: 34.99,
      rating:4
    }),
    knex('products').insert({
      name: 'Blue Christmas Sweater',
      img_url: 'kitten_blue.jpg',
      description: 'awesome',
      price: 34.99,
      rating:4
    }),
    knex('products').insert({
      name: 'Tatted Cat Sweater',
      img_url: 'cat_gray_halloween.jpg',
      description: 'awesome',
      price: 34.99,
      rating:4
    }),
    knex('products').insert({
      name: 'Tatted Cat Sweater',
      img_url: 'cat_gray_halloween.jpg',
      description: 'awesome',
      price: 34.99,
      rating:4
    }),
    knex('products').insert({
      name: 'Tatted Cat Sweater',
      img_url: 'cat_gray_halloween.jpg',
      description: 'awesome',
      price: 34.99,
      rating:4
    }),
    knex('products').insert({
      name: 'Tatted Cat Sweater',
      img_url: 'cat_gray_halloween.jpg',
      description: 'awesome',
      price: 34.99,
      rating:4
    }),
    knex('products').insert({
      name: 'Tatted Cat Sweater',
      img_url: 'cat_gray_halloween.jpg',
      description: 'awesome',
      price: 34.99,
      rating:4
    }),
    knex('products').insert({
      name: 'Tatted Cat Sweater',
      img_url: 'cat_gray_halloween.jpg',
      description: 'awesome',
      price: 34.99,
      rating:4
    }),
    knex('products').insert({
      name: 'Tatted Cat Sweater',
      img_url: 'cat_gray_halloween.jpg',
      description: 'awesome',
      price: 34.99,
      rating:4
    }),
    knex('products').insert({
      name: 'Tatted Cat Sweater',
      img_url: 'cat_gray_halloween.jpg',
      description: 'awesome',
      price: 34.99,
      rating:4
    })

  );
};
