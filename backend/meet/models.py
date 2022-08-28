from django.db import models

class User(models.Model):
    name = models.CharField(max_length=20)
    start_address = models.CharField(max_length=256)
    end_address = models.CharField(max_length=256)
    time = models.CharField(max_length=20, null=True)
    def __str__(self):
        return self.name