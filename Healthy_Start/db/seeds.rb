# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'csv'

# csv_text = File.read(Rails.root.join('db', 'Nutri_Desc.csv'))
puts 'hey'
csv = CSV.foreach(Rails.root + 'db/Nutri_Desc.csv', headers: true, header_converters: :symbol)
puts csv.inspect
# csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  puts 'hey again'
  Nutrition.create!(
    nutrient: row[:nutrient],
    benefits: row[:description]
  )
  # puts "#{row.nutrient}, #{row.benefits} saved"
end
puts "There are now #{Nutrition.count} rows in the Nutrition table"

require 'csv'
puts 'hey'
csv = CSV.foreach(Rails.root + 'db/Foods.csv', headers: true, header_converters: :symbol)
puts csv.inspect
  csv.each do |row|
    puts 'hey again'
      nuts = Nutrition.find_by(nutrient: row[:nutrition])
      row[:foods].split(',').map(&:strip).each do |name|
        nuts.foods << Food.find_or_initialize_by(name: name)
    end
end
puts "There are now #{Food.count} rows in the Food table"
