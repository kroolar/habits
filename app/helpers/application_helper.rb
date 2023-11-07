module ApplicationHelper
  def react(name, props = {})
    component_name = name.to_s.camelize(:lower)

    tag.div('', class: "js-react-#{component_name}", data: { props: })
  end
end
