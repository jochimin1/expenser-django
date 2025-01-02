# from django.shortcuts import render

# Create your views here.

# from django.shortcuts import render
# from django.http import HttpResponse
# from .models import Categoria, Subcategoria, Gasto

# def index(request):
#     categorias = Categoria.objects.all()
#     subcategorias = Subcategoria.objects.all()
#     gastos = Gasto.objects.all()
#     return render(request, 'expenses/index.html', {'categorias': categorias, 'subcategorias': subcategorias, 'gastos': gastos})


from rest_framework import viewsets
from rest_framework.generics import ListAPIView
from .serializers import CategoriaSerializer, SubcategoriaSerializer, GastoSerializer
from rest_framework.filters  import OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend

from .models import Categoria, Subcategoria, Gasto
from .serializers import GastoSerializer

class CategoriaViewSet(viewsets.ModelViewSet):
    """ Vista para el modelo Categoria """
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

class SubcategoriaViewSet(viewsets.ModelViewSet):
    """ Vista para el modelo Subcategoria """
    queryset = Subcategoria.objects.all()
    serializer_class = SubcategoriaSerializer

class GastoViewSet(viewsets.ModelViewSet):
    """ Lista de los gastos """
    queryset = Gasto.objects.all()
    serializer_class = GastoSerializer


class GastoListView(ListAPIView):
    """ Vista para listar los gastos """
    queryset = Gasto.objects.all()
    serializer_class = GastoSerializer
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['fecha']
    ordering_fields = ['fecha', 'monto', 'subcategoria','id','descripcion','tags','categoria']
    ordering = ['fecha']
