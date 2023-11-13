module Api
  class HabitsController < ApplicationController
    def index
      render json: Habit.all
    end

    def create
      habit = Habit.new(permitted_params)

      if habit.save
        render(json: :ok)
      else
        render json: { errors: habit.json_errors }
      end
    end

    def show
      habit = Habit.find(params[:id])

      render json: habit
    end

    def destroy
      habit = Habit.find(params[:id])
      habit.destroy

      render json: :ok
    end

    private

    def permitted_params
      params.require(:habit).permit(
        :name,
        :icon,
        :description,
        :color,
        :kind
      )
    end
  end
end
