exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('suburb').del()
    .then(function () {
      // Inserts seed entries
      return knex('suburb').insert([
        { id: 1, name: 'Brooklyn', neighbours: [] },
        { id: 2, name: 'Hataitai', neighbours: [] },
        { id: 3, name: 'Island bay', neighbours: [] }
      ])
    })
}