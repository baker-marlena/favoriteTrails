
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', (table) =>{
    table.increments('id').primary();
    table.text('email');
    table.text('password');
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    table.boolean('is_active').defaultTo(true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
