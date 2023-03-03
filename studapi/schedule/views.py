from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

from studbot.models import CourseGroups
from studbot.models import Students
from tasks.models import Tasks


@csrf_exempt
def index(request):
    return render(request, 'index.html')

#Json-data
def load_students(request):
    students_json = []
    students_bd = Students.objects.all()
    for student in students_bd:
        stud_dict = {
            "name": student.name,
            "secondName": student.secondName,
            "surname": student.surname,
            "login": student.login,
            "group": student.groupId.identifier,
            "password": student.password,
            "eMail": student.password,
        }
        students_json.append(stud_dict)

    response = JsonResponse({'students':students_json })
    response['Access-Control-Allow-Origin'] = '*'
    return response


#Pam-pam-pam


@csrf_exempt
def login(request):
    if request.GET.__contains__('requestGroups'):
        print(list(CourseGroups.objects.values_list('identifier')))
        response = JsonResponse(list(CourseGroups.objects.values_list('identifier', flat=True)), safe=False)
        response['Access-Control-Allow-Origin'] = '*'
        return response

    # elif request.POST.__contains__('groupIdentifier'):
    #     Students.objects.create(name=request.POST['name'],
    #                             surname=request.POST['surname'],
    #                             secondName=request.POST['second_name'],
    #                             login=request.POST['login'],
    #                             groupId=CourseGroups.objects.filter(identifier=request.POST['groupIdentifier']).get(),
    #                             eMail=request.POST['eMail'])


    else:
        return render(request, 'index.html')


def schedule(request):
    if request.GET.__contains__('requestSchedule'):
        print(request.GET)
        response = JsonResponse(list(CourseGroups.objects.values('courseNumber', 'identifier')), safe=False)
        response['Access-Control-Allow-Origin'] = '*'
        return response
    else:
        return render(request, 'index.html')


def deadlines(request):
    if request.GET.__contains__('requestTasks'):
        response = JsonResponse(list(Tasks.objects.values('disciplineId__disc_name', 'description', 'deadline')),
                                safe=False)
        response['Access-Control-Allow-Origin'] = '*'
        return response
    else:
        return render(request, 'index.html')
