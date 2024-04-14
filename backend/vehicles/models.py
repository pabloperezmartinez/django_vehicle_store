from django.db import models

class Vehicle(models.Model):
    name = models.CharField(max_length=100)
    brand = models.CharField(max_length=100, null=True)  # Hacer el campo de marca opcional
    model = models.CharField(max_length=100, null=False)
    year = models.IntegerField(null=False)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='vehicle_images/', blank=True, null=True)  # Hacer el campo de imagen opcional
    
    def __str__(self):
        return self.name + ' ' + self.model