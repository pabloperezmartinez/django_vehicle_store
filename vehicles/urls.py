# urls.py de la aplicación
from django.urls import path
from .views import vehicle_list, vehicle_detail, add_vehicle, edit_vehicle, delete_vehicle

urlpatterns = [
    path('', vehicle_list, name='vehicle_list'),  # Lista de vehículos
    path('<int:vehicle_id>/', vehicle_detail, name='vehicle_detail'),  # Detalle de vehículo
    path('add/', add_vehicle, name='add_vehicle'),  # Agregar vehículo
    path('edit/<int:vehicle_id>/', edit_vehicle, name='edit_vehicle'),  # Editar vehículo
    path('delete/<int:vehicle_id>/', delete_vehicle, name='delete_vehicle'),  # Eliminar vehículo
]