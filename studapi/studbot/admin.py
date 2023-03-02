from django.contrib import admin

from .models import *

admin.site.register(Students)
admin.site.register(Schedule)
admin.site.register(CourseGroups)
admin.site.register(Discipline)