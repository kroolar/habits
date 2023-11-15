module Api
  class StatsController < ApplicationController
    # def index
    #   render json: Habit.all.as_json(methods: :stats_json)
    # end

    def create
      stat = Stat.find_or_initialize_by(
        date: Date.today,
        habit_id: params[:stat][:habit_id]
      )
      # binding.pry
      stat.status = params[:stat][:status]

      if stat.save
        render(json: :ok)
      else
        render json: { errors: habit.json_errors }
      end
    end

    # def update
      
    # end

    # def show
    #   habit = Habit.find(params[:id])

    #   render json: habit
    # end

    def destroy
      habit = Habit.find(params[:id])
      habit.destroy

      render json: :ok
    end

    private

    def permitted_params
      params.require(:stat).permit(
        :status,
        :habit_id,
        :date
      )
    end
  end
end
