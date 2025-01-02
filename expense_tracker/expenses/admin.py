from django.contrib import admin

# Register your models here.

from .models import Categoria, Subcategoria, Gasto

admin.site.register(Categoria)
admin.site.register(Subcategoria)
admin.site.register(Gasto)
admin.site.site_header = 'Administración de Gastos'
admin.site.site_title = 'Administración de Gastos'
admin.site.index_title = 'Administración de Gastos'
# admin.site.register(Gasto)
