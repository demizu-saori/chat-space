FactoryBot.define do
  factory :message do
    content { Faker::Lorem.sentence }
    image { File.open("#{Rails.root}/public/hoge.png")}
    user
    group
  end
end
