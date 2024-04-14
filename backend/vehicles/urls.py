# urls.py de la aplicación
from django.urls import include, path
from rest_framework.routers import DefaultRouter
from rest_framework.documentation import include_docs_urls
from vehicles.api import VehicleViewSet
from .views import vehicle_list, vehicle_detail, add_vehicle, edit_vehicle, delete_vehicle

router = DefaultRouter()
router.register(r'vehicles', VehicleViewSet)


urlpatterns = [
    path('', vehicle_list, name='vehicle_list'),  # Lista de vehículos
    path('<int:vehicle_id>/', vehicle_detail, name='vehicle_detail'),  # Detalle de vehículo
    path('add/', add_vehicle, name='add_vehicle'),  # Agregar vehículo
    path('edit/<int:vehicle_id>/', edit_vehicle, name='edit_vehicle'),  # Editar vehículo
    path('delete/<int:vehicle_id>/', delete_vehicle, name='delete_vehicle'),  # Eliminar vehículo
    path('api/', include(router.urls)),
    path('docs/', include_docs_urls(title='Vehicle Store API', public=True)),
]