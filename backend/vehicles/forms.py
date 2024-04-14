from django import forms
from .models import Vehicle

class VehicleForm(forms.ModelForm):
    class Meta:
        model = Vehicle
        fields = ['name', 'brand', 'model', 'year', 'price', 'image']  # Agregar el campo de marca y hacer los campos de imagen y marca opcionales

    def __init__(self, *args, **kwargs):
        super(VehicleForm, self).__init__(*args, **kwargs)
        # Configura los campos de imagen y marca como opcionales
        self.fields['image'].required = False
        self.fields['brand'].required = False