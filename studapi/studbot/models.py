from django.db import models

class CourseGroups(models.Model):
    courseNumber = models.IntegerField(default=1)
    identifier = models.CharField(unique=True, max_length=6)

    def __str__(self):
        return 'Course group: %s is a part of a course %s' % (self.identifier, self.courseNumber)

    class Meta:
        verbose_name = 'CourseGroup'
        verbose_name_plural = 'CourseGroups'

class Discipline(models.Model):
    disc_name = models.CharField(max_length=50)

    def __str__(self):
        return 'Object name: %s' % self.disc_name

    class Meta:
        verbose_name = 'Discipline'
        verbose_name_plural = 'Disciplines'

class Students(models.Model):
    name = models.CharField(max_length=25)
    secondName = models.CharField(max_length=25)
    surname = models.CharField(max_length=25)
    login = models.CharField(max_length=25, unique=True)
    groupId = models.ForeignKey(CourseGroups, on_delete=models.CASCADE, null=False)
    password = models.CharField(max_length=25, null=True)
    eMail = models.EmailField(unique=True)

    def __str__(self):
        return 'Student %s %s %s in group %s' % (self.surname, self.name, self.secondName, self.groupId.identifier)

    class Meta:
        verbose_name = 'Student'
        verbose_name_plural = 'Students'

class Schedule(models.Model):
    disciplineId = models.ForeignKey(Discipline, on_delete=models.CASCADE, null=False)
    groupId = models.ForeignKey(CourseGroups, on_delete=models.CASCADE, null=False)
    dayOfTheWeek = models.CharField(max_length=15)
    startTime = models.TimeField()
    endTime = models.TimeField()
    oddEven = models.BooleanField()
    cabinet = models.IntegerField(null=True)

    class Meta:
        verbose_name = 'Schedule'
        verbose_name_plural = 'Schedules'
