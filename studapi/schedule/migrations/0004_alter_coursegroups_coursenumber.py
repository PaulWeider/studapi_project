# Generated by Django 4.1.7 on 2023-02-23 22:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('schedule', '0003_remove_coursegroups_courseid_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='coursegroups',
            name='courseNumber',
            field=models.IntegerField(default=0),
        ),
    ]