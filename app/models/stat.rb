class Stat < ApplicationRecord
  belongs_to :habit

  def completed?
    status == 'completed'
  end

  def skipped?
    status == 'skipped'
  end

  def react_json
    { icon:, color:, title:, status: }
  end

  def icon
    if skipped? then 'chevron_right'
    elsif completed? then 'done'
    else 'close'
    end
  end

  def color
    if skipped? then 'yellow-700'
    elsif completed? then 'green-700'
    else 'red-700'
    end
  end

  def title
    if skipped? then 'Skipped'
    elsif completed? then 'Completed'
    else 'Not Completed'
    end
  end
end
