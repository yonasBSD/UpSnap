# Generated by Django 4.0.2 on 2022-02-18 19:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('wol', '0004_remove_device_port_device_port'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='port',
            unique_together={('number', 'name')},
        ),
    ]