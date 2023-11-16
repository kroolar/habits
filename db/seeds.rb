# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

habits = [
  {
    name: 'Daily Exercise',
    icon: 'fitness_center',
    color: '#b45309',
    description: 'Incorporating regular physical activity into your routine can improve both physical and mental health.',
    kind: 'good'
  },
  {
    name: 'Healthy Eating',
    icon: 'restaurant',
    color: '#047857',
    description: 'Adopting a balanced and nutritious diet provides the fuel your body needs for optimal functioning.',
    kind: 'good'
  },
  {
    name: 'Adequate Sleep',
    icon: 'hotel',
    color: '#0f766e',
    description: 'Getting enough quality sleep is crucial for overall health, cognitive function, and emotional well-being.',
    kind: 'good'
  },
  {
    name: 'Mindfulness and Meditation',
    icon: 'self_improvement',
    color: '#0e7490',
    description: 'Practicing mindfulness or meditation can help reduce stress, increase self-awareness, and improve focus.',
    kind: 'good'
  },
  {
    name: 'Reading Regularly',
    icon: 'book',
    color: '#0369a1',
    description: "Cultivating a habit of reading, whether it's books, articles, or other content, enhances knowledge and stimulates the mind.",
    kind: 'good'
  },
  {
    name: 'Procrastination',
    icon: 'weekend',
    color: '#be123c',
    description: 'Delaying tasks and responsibilities can lead to increased stress, missed opportunities, and a decline in overall productivity.',
    kind: 'bad'
  },
  {
    name: 'Excessive Screen Time',
    icon: 'smartphone',
    color: '#be185d',
    description: "Spending too much time on screens, whether it's on social media, video games, or other digital activities, can negatively impact physical health, sleep quality, and social interactions.",
    kind: 'bad'
  },
  {
    name: 'Unhealthy Eating Habits',
    icon: 'local_pizza',
    color: '#a21caf',
    description: 'Consuming excessive amounts of processed foods, sugary snacks, and high-fat meals can contribute to health problems such as obesity, cardiovascular issues, and energy crashes.',
    kind: 'bad'
  },
  {
    name: 'Negative Self-Talk',
    icon: 'psychology',
    color: '#7e22ce',
    description: 'Constantly engaging in self-critical or negative thoughts can harm self-esteem and contribute to anxiety and depression.',
    kind: 'bad'
  },
  {
    name: 'Lack of Regular Exercise',
    icon: 'run_circle',
    color: '#4338ca',
    description: 'A sedentary lifestyle can lead to various health issues, including weight gain, weakened muscles and bones, and a higher risk of chronic diseases.',
    kind: 'bad'
  }
]

habits.shuffle.each { |habit| Habit.create(habit) }

Habit.all.each do |habit|
  6.times do |time|
    next if time.zero?

    Stat.create(
      habit_id: habit.id,
      date: DateTime.now - time.days,
      status: ['skipped', 'completed', 'not_completed'].sample
    )
  end
end