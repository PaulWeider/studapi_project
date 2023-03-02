from .models import *

from django.forms import ModelForm, TextInput, NumberInput, EmailInput

class StudentsForm(ModelForm):
    class Meta:
        model = Students
        fields = ['name', 'secondName', 'surname', 'login', 'groupId', 'password', 'eMail']

        widgets = {
            "name": TextInput(),
            "secondName": TextInput(),
            "surname": TextInput(),
            "login": TextInput(),
            "groupId": NumberInput(),
            "password": TextInput(),
            "eMail": EmailInput(),
        }