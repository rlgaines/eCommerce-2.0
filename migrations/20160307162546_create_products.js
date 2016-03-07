
exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', function(table){
  	table.increments();
  	table.string('name');
  	table.string('img_url');
  	table.string('description');
  	table.decimal('price');
  	table.integer('rating');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('products');

};
