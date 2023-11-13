class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class

  def json_errors
    {}.tap do |error|
      errors.to_hash.map do |field, messages|
        key = field.to_s.camelize(:lower)
        value = messages.map(&:humanize).join(', ')

        error[key] = value
      end
    end
  end
end
