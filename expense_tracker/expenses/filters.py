import django_filters
from .models import Gasto

# class GastoFilter(django_filters.FilterSet):
#     """ Filtro para el modelo Gasto """
#     class Meta:
#         """ Clase Meta """
#         model = Gasto
#         fields = {
#             'subcategoria__nombre': ['exact'],
#             'fecha': ['exact', 'year__gt'],
#             'monto': ['exact', 'gt', 'lt'],
#         }

class GastoFilter(django_filters.FilterSet):
    """ Filtro personalizado para el modelo Gasto """
    fecha_inicio = django_filters.DateFilter(field_name="fecha", lookup_expr='gte') # gte: greater than or equal
    fecha_fin = django_filters.DateFilter(field_name="fecha", lookup_expr='lte') # lte: less than or equal
    monto = django_filters.NumberFilter(field_name="monto", lookup_expr='exact', LookupError="Error") # exact: equal

    class Meta:
        """ Clase Meta """
        model = Gasto
        fields = ['fecha_inicio', 'fecha_fin', 'monto']