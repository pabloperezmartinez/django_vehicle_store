from django.shortcuts import render, redirect, get_object_or_404
from .models import Vehicle
from .forms import VehicleForm

def vehicle_list(request):
    vehicles = Vehicle.objects.all()
    print("Listando vehículos...")
    return render(request, 'vehicle_list.html', {'vehicle_list': vehicles})

def vehicle_detail(request, vehicle_id):
    vehicle = get_object_or_404(Vehicle, id=vehicle_id)
    print("Mostrando detalles del vehículo...")
    return render(request, 'vehicle_detail.html', {'vehicle': vehicle, 'has_image': vehicle.image is not None})

def add_vehicle(request):
    if request.method == 'POST':
        form = VehicleForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            print("Vehículo agregado correctamente. Redirigiendo a la lista de vehículos...")
            return redirect('vehicle_list')  # Redirigir al usuario a la lista de vehículos después de agregar uno
        else:
            print("Formulario inválido. Errores:", form.errors)
    else:
        form = VehicleForm()
    print("Mostrando formulario para agregar vehículo...")
    return render(request, 'add_vehicle.html', {'form': form})

def edit_vehicle(request, vehicle_id):
    vehicle = get_object_or_404(Vehicle, id=vehicle_id)
    if request.method == 'POST':
        form = VehicleForm(request.POST, request.FILES, instance=vehicle)
        if form.is_valid():
            form.save()
            print("Formulario válido. Redirigiendo...")
            return redirect('vehicle_list')
        else:
            print("Formulario inválido. Errores:", form.errors)
    else:
        form = VehicleForm(instance=vehicle)
    print("Mostrando formulario para editar vehículo...")
    return render(request, 'edit_vehicle.html', {'form': form})

def delete_vehicle(request, vehicle_id):
    vehicle = Vehicle.objects.get(id=vehicle_id)
    vehicle.delete()
    print("Vehículo eliminado correctamente. Redirigiendo a la lista de vehículos...")
    return redirect('vehicle_list')