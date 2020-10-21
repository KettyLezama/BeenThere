require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) { |n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
    first_name { 'John' }
    last_name { 'Doe' }
    sequence(:username) { |n| "user#{n}" }
  end

end
