/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema
    .createTable('wines', (table) => {
      table.increments('id').primary();
      table.string('wine').notNullable();
      table.string('winery');
      table.float('rating').notNullable().defaultTo(0);
      table.integer('reviews').notNullable().defaultTo(0);
      table.string('location');
      table.string('image');
      table.string('type').notNullable();
      table.text('pairing');
      table.boolean('favourite').defaultTo(false);
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('wines');
};

