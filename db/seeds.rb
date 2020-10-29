# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

test_user = User.create(email: 'jsmith@gmail.com', password: 'password', first_name: 'John', last_name: 'Smith', username: 'jsmith123', location: 'Boston, MA', bio: 'I love photography and I am cool.')

Photo.create(user: test_user, name: 'Paris Vacation', location: 'Eiffel Tower, Paris, France', camera: 'iPhone 11 Pro', url: 'www.my-picture.com', shared: true, date: 'April 20th, 2015', description: 'Glorious.')

Photo.create(user: test_user, name: 'Paris Vacation', location: 'Notre Dame, Paris, France', camera: 'iPhone 11 Pro', url: 'www.my-picture.com', shared: false, date: 'April 20th, 2015', description: 'Wonderful.')