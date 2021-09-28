from django.db import models

# Create your models here.

class Device(models.Model):
    name = models.SlugField(default="Unknown", max_length=100)
    ip = models.GenericIPAddressField()
    mac = models.CharField(max_length=17)
    netmask = models.CharField(max_length=15, default="255.255.255.0", blank=False, null=False)
    scheduled_wake = models.DateTimeField(blank=True, null=True)

class Websocket(models.Model):
    visitors = models.PositiveSmallIntegerField(blank=False, null=False, default=0)

class Settings(models.Model):
    enable_notifications = models.BooleanField(default=True)
    enable_console_logging = models.BooleanField(default=False)
    sort_by = models.SlugField(default="name")
    scan_address = models.GenericIPAddressField(null=True, blank=True)
