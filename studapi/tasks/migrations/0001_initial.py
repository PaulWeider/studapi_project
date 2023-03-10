# Generated by Django 4.1.7 on 2023-02-25 23:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('schedule', '0005_remove_discipline_profid_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tasks',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField(max_length=200)),
                ('deadline', models.DateField()),
                ('disciplineId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='schedule.discipline')),
            ],
        ),
    ]
