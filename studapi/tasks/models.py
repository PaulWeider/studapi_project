from django.db import models
from studbot.models import Discipline
from studbot.models import Students


class Tasks(models.Model):
    disciplineId = models.ForeignKey(Discipline, on_delete=models.CASCADE)
    studentId = models.ForeignKey(Students, on_delete=models.CASCADE, null=True)
    description = models.TextField(max_length=200)
    deadline = models.DateField()

    class Meta:
        verbose_name = 'Task'
        verbose_name_plural = 'Tasks'
