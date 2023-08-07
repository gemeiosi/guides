from django.db import models

# Create your models here.


class Guide(models.Model):
    guideId = models.AutoField(primary_key=True)
    FirstName = models.CharField(max_length=100)
    LastName = models.CharField(max_length=100)
    RegistrationNo = models.CharField(max_length=100)
    Email = models.CharField(max_length=100)