# Generated by Django 5.1.4 on 2024-12-28 21:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('expenses', '0005_alter_gasto_tags'),
    ]

    operations = [
        migrations.AlterField(
            model_name='gasto',
            name='tags',
            field=models.JSONField(blank=True, default=dict),
        ),
    ]