from django.db import models
from django.contrib.auth.models import User


class Lead(models.Model):
    # owner is a foreignkey for usertable, if user is deleted, delete all of the user's leads
    owner = models.ForeignKey(
        User, related_name="leads", on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)  # unique emails req
    message = models.CharField(max_length=100, blank=True)  # intially blank
    createdAt = models.DateTimeField(
        auto_now_add=True)  # adds date automatically
