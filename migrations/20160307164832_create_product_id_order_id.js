
exports.up = function(knex, Promise) {
	  return knex.schema.createTable('product_id_order_id'), function(table){

    table.integer('order_id').references('id').inTable('orders');
    table.integer('pruduct_id').references('id').inTable('products');
    table.integer('quantity');
}

};

exports.down = function(knex, Promise) {
      return knex.schema.dropTable('product_id_order_id');

};
