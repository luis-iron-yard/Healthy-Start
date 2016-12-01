class NutritionsController < ApplicationController
    def index
        @nutrition = Nutrition.all
    end
end
