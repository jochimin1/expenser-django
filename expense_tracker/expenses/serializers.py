from rest_framework import serializers

from .models import Categoria, Subcategoria, Gasto


class CategoriaSerializer(serializers.ModelSerializer):
    """ Serializador para el modelo Categoria """
    class Meta:
        """ Clase Meta """
        model = Categoria
        fields = '__all__'


class SubcategoriaSerializer(serializers.ModelSerializer):
    """ Serializador para el modelo Subcategoria """
    class Meta:
        """ Clase Meta """
        model = Subcategoria
        fields = ['nombre', 'categoria']
        


class GastoSerializer(serializers.ModelSerializer):
    """ Serializador para el modelo Gasto """

    # obtener el nombre de la categoria desde el modelo Subcategoria
    categoria = serializers.CharField(source='subcategoria.categoria.nombre', read_only=True)
    class Meta:

        """ Clase Meta"""
        model = Gasto
        # fields = '__all__'
        fields = ['categoria','fecha', 'monto', 'descripcion','metodo_pago','tags']
        