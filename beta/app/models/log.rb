# == Schema Information
#
# Table name: logs
#
#  id                     :integer          not null, primary key
#  date                   :date             not null
#  active_calories        :integer
#  passive_calories       :integer
#  burned_calories        :integer
#  consumed_calories      :integer
#  net_calories           :integer
#  net_pounds             :float
#  actual_weight          :float
#  total_distance_miles   :float            default(0.0)
#  total_exercise_minutes :integer          default(0)
#  seven_minute           :integer          default(0)
#  is_sugar               :boolean          default(FALSE)
#  is_fast                :boolean          default(FALSE)
#  is_sick                :boolean          default(FALSE)
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#

class Log < ApplicationRecord
    validates :date, presence: true
end
