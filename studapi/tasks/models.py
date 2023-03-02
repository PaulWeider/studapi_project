from django.db import models
from schedule.models import Discipline


class Tasks(models.Model):
    disciplineId = models.ForeignKey(Discipline, on_delete=models.CASCADE)
    description = models.TextField(max_length=200)
    deadline = models.DateField()
