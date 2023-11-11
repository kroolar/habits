class Habit < ApplicationRecord
  alias_attribute :type, :kind

  validates :name, :icon, :color, :kind, presence: true
  validates :name, length: { in: (3..32) }
  validates :kind, inclusion: { in: %w[bad good] }
end
