
exports.up = function(knex, Promise) {
  return knex.schema.createTable('orders', function(table){
  	table.increments();
  	table.integer('customer_id').references('id').inTable('customers');
  	table.date('date');
  	table.decimal('price');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('orders');

};