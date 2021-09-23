# Generated by Django 3.1.7 on 2021-09-23 10:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('flights', '0002_auto_20210915_1505'),
    ]

    operations = [
        migrations.CreateModel(
            name='Passenger',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first', models.CharField(max_length=64)),
                ('last', models.CharField(max_length=64)),
                ('fligts', models.ManyToManyField(blank=True, related_name='passenger', to='flights.Flight')),
            ],
        ),
    ]