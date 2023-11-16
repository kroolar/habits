class Habit < ApplicationRecord
  alias_attribute :type, :kind

  validates :name, :icon, :color, :kind, presence: true
  validates :name, length: { in: (3..32) }
  validates :kind, inclusion: { in: %w[bad good] }

  has_many :stats

  def stats_json
    stats.map(&:react_json)
  end

  def today_stat
    stats.find_by(date: Date.today)&.react_json
  end

  def streak
    number = 0

    stats.reverse.each do |stat|
      if stat.status == 'completed'
        number += 1
      elsif stat.status == 'skipped'
        next
      else
        return number
      end
    end

    number
  end
end
