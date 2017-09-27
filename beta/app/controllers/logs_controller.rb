class LogsController < ApplicationController
    def index
      logs = Log.order(date: 'asc')
      render json: {logs: logs}
    end
    
    def create
      @log = Log.new(params[:log].permit(:date, :active_calories, :consumed_calories, :is_fast, :is_sick, :actual_weight, :total_distance_miles, :total_exercise_minutes, :is_sugar, :seven_minute))
  
      if @log.active_calories && @log.consumed_calories
        @log.passive_calories = 2100
        @log.burned_calories = @log.active_calories + @log.passive_calories
        @log.net_calories = @log.consumed_calories - @log.burned_calories
        @log.net_pounds = @log.net_calories / 3500.0
      end
  
      if @log.save
        render json: @log
      else
        render json: {errors: @log.errors}
      end
    end
    
    def update
      @log = Log.find(params[:id])
      @log.assign_attributes(params[:log].permit(:date, :active_calories, :consumed_calories, :is_fast, :is_sick, :actual_weight, :total_distance_miles, :total_exercise_minutes, :is_sugar, :seven_minute))
  
      if @log.active_calories && @log.consumed_calories
        @log.passive_calories = 2100
        @log.burned_calories = @log.active_calories + @log.passive_calories
        @log.net_calories = @log.consumed_calories - @log.burned_calories
        @log.net_pounds = @log.net_calories / 3500.0
      end
  
      if @log.save
        redirect_to logs_path
      else
        render :form
      end
    end
  end
  