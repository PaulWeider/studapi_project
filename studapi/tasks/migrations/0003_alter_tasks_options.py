# Generated by Django 4.1.7 on 2023-03-03 00:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0002_tasks_studentid_alter_tasks_disciplineid'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='tasks',
            options={'verbose_name': 'Task', 'verbose_name_plural': 'Tasks'},
        ),
    ]
