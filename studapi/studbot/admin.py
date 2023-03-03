from django.contrib import admin

from .models import *
from tasks.models import Tasks

admin.site.register(Students)
admin.site.register(Schedule)
admin.site.register(CourseGroups)
admin.site.register(Discipline)
admin.site.register(Tasks)
admin.site.register(Grades)
