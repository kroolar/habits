class Habit < ApplicationRecord
  alias_attribute :kind, :type

  validates :name, :icon, :color, :kind, presence: true
  validates :name, in: (3..)
  validates :kind, inclusion: { in: %w[bad good] }
end
