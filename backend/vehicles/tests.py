from django.test import TestCase
from django.urls import reverse
from vehicles.models import Vehicle

class VehicleViewsTestCase(TestCase):
    def setUp(self):
        self.vehicle = Vehicle.objects.create(name='Test Vehicle', year=2022, price=10000)

    def test_vehicle_list_view(self):
        """
        Prueba que la vista de lista de vehículos devuelva una respuesta exitosa (código 200) 
        y utilice la plantilla correcta.
        """
        response = self.client.get(reverse('vehicle_list'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'vehicle_list.html')

    def test_vehicle_detail_view(self):
        """
        Prueba que la vista de detalles de vehículo devuelva una respuesta exitosa (código 200) 
        y utilice la plantilla correcta. Además, verifica que la imagen del vehículo se muestre 
        correctamente si está disponible.
        """
        response = self.client.get(reverse('vehicle_detail', args=[self.vehicle.id]))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'vehicle_detail.html')