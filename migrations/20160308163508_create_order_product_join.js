
exports.up = function(knex, Promise) {
  return knex.schema.createTable('order_product_join', function(table){
  	table.integer('customer_id').references('id').inTable('customers');
    table.integer('product_id').references('id').inTable('products');
    table.integer('quantity');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('order_product_join');

};
