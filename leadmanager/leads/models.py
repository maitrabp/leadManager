from django.db import models

class Lead(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique = True) #unique emails req
    message = models.CharField(max_length=100, blank =  True) #intially blank
    createdAt = models.DateTimeField(auto_now_add=True) #adds date automatically
    