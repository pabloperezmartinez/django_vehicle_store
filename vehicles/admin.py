from django.contrib import admin
from .models import Vehicle

class VehicleAdmin(admin.ModelAdmin):
    list_display = ['name', 'brand', 'model', 'year', 'price', 'image']  # Asegúrate de incluir 'image' aquí

admin.site.register(Vehicle, VehicleAdmin)