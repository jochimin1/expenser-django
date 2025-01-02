from django.db import models

# Create your models here.

# class Expense(models.Model):
#     CATEGORY_CHOICES = [
#         ('transporte', 'Transporte'),
#         ('comida', 'Comida'),
#         ('desayuno', 'Desayuno'),
#         ('cena', 'Cena'),
#         ('snacks', 'Snacks'),
#         ('educacion', 'Educación'),
#         ('salud', 'Salud'),
#         ('ropa', 'Ropa'),
#         ('luz electrica', 'Luz eléctrica'),
#         ('suscripciones', 'Suscripciones'),
#         ('salidas', 'Salidas'),
#         ('mantenimiento motor', 'Mantenimiento Motor'),
#         ('glp', 'GLP'),
#         ('', ''),
#         ('', ''),
#         ('', ''),
#         ('', ''),
#     ]

class Categoria(models.Model):
    """ Modelo para las categorías de gastos """
    nombre = models.CharField(max_length=100, unique=True)

    def __str__(self):
        """ Método para representar el objeto como una cadena """
        return self.nombre

class Subcategoria(models.Model):
    """ Modelo para las subcategorías de gastos """
    nombre = models.CharField(max_length=100)
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE, related_name='subcategorias')

    def __str__(self):
        return f"{self.nombre} ({self.categoria.nombre})"

class Gasto(models.Model):
        """ Modelo para los gastos """
        
        METODOS_DE_PAGO = [
        ('Efectivo', 'Efectivo'),
        ('TC_BHD', 'Tarjeta Crédito BHD'),
        ('TC_BSC', 'Tarjeta Crédito BSC'),
        ('TC_BANRESERVAS', 'Tarjeta Crédito Banreservas'),
    ]
        subcategoria = models.ForeignKey(Subcategoria, on_delete=models.CASCADE, related_name='gastos')
        monto = models.DecimalField(max_digits=10, decimal_places=2)
        descripcion = models.TextField(blank=True, null=True)
        fecha = models.DateField(auto_now_add=True)
        
        # Campo para seleccionar el método de pago
        metodo_pago = models.CharField(
        max_length=20,
        choices=METODOS_DE_PAGO,
        default='Efectivo'
        )
        
        tags = models.JSONField(default=dict, blank=True)  # Campo para almacenar etiquetas adicionales


        def __str__(self):
            return f"{self.fecha} - {self.subcategoria.nombre}: {self.monto} pesos"