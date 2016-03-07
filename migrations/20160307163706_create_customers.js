
exports.up = function(knex, Promise) {
  return knex.schema.createTable('customers', function(table){
  	table.increments();
  	table.string('first_name');
  	table.string('last_name');
  	 table.text('email');
  	table.text('address');
  	table.integer('credit_card_number');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('customers');

};